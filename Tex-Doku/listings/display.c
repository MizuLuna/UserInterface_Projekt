//**********************************************************************************
// file name   : display.c
// description : file with display functions
// copyright   : 2016-2017 Astech GmbH
//**********************************************************************************

#include "iodefine.h"
#include <machine.h>		//for nop()-delay
#include "display.h"
#include "sh7085.h"
#include "software.h"
#include "fram.h"
#include "CustomChars.h"


/*
* Status Check; checking ready status of controller
*/
unsigned char RA6963_GetStatus()
{
	unsigned char status = 0;

	// /RD low und C//D high = status read
	CD_DR = 1;

	status = DISPLAY.BYTE[0]; //READ Byte from Display

	return status;
}

/*
* Write Data to RA6963
*/
void RA6963_SetData(unsigned char data)
{
	//wait until ready
	while ( (RA6963_GetStatus() & (STA0 | STA1)) != (STA0 | STA1) )	{
		nop();
	}

 	CD_DR = 0;					//set low for data write
	DISPLAY.BYTE[0] = data;     //move data to display
}

/*
* Write Command to RA6963
*/
void RA6963_SetCmd(unsigned char cmd)
{
	while ((RA6963_GetStatus() & (STA0 | STA1)) != (STA0 | STA1)) {
		nop();
	}

 	CD_DR = 1;
	DISPLAY.BYTE[0] = cmd;        //move cmd to Display
}

/*
*	set address (for writing and reading)
*/
void RA6963_SetAddress(unsigned int address)
{
	//Send Address-LowByte, HighByte and Command
	RA6963_SetData((unsigned char) (address >> 0));	//kill first 8bit
	RA6963_SetData((unsigned char) (address >> 8));
	RA6963_SetCmd(RA6963_CMD_SETADDRESS);	//set Address Pointer
}

/*
* Initialisation of RA6963 and Display
*/
void RA6963_Init(unsigned char options, unsigned char mode)
{
	MD2_DR = 1;	//Display size signal: 1 = 32 columns, 0 = 40 columns
	FS_DR = 0;	//Font Selection: 1 = 6x8, 0 = 8x8

	//Reset
	DS_RES_DR = 0;
	delay(100);
	DS_RES_DR = 1;
	delay(100);

	//LCD Size Selection done by Hardware
	//CL is set to 80 by MD2 = MD3 = low
	//Lines are fixed to 16 by /DUAL = MDS = MD0 = MD1 = low

	//Set Graphic Home Address 0x0000
	RA6963_SetData((unsigned char) (ADDR_GRAPHIC_HOME >> 0));
	RA6963_SetData((unsigned char) (ADDR_GRAPHIC_HOME >> 8));
	RA6963_SetCmd(RA6963_CMD_SETGRAPHICHOME);

	//Set Graphics Area to RA6963_GRPH_COLS byte per line
	RA6963_SetData(GRPH_COLS);
	RA6963_SetData(0);
	RA6963_SetCmd(RA6963_CMD_SETGRAPHICAREA);

	//Set Text Home Address to 0x0800
	RA6963_SetData((unsigned char) (ADDR_TEXT_HOME >> 0));
	RA6963_SetData((unsigned char) (ADDR_TEXT_HOME >> 8));
	RA6963_SetCmd(RA6963_CMD_SETTEXTHOME);

	//Set Text Area to RA6963_TEXT_COLS columns
	RA6963_SetData(TEXT_COLS);
	RA6963_SetData(0);
	RA6963_SetCmd(RA6963_CMD_SETTEXTAREA);

	//Set Display Options
	RA6963_SetCmd(RA6963_CMD_MODESET | options);

	//Set Display Mode
	RA6963_SetCmd(RA6963_CMD_DISPMODE | mode);

	//Set offset of CGRAM
	RA6963_SetData(CG_OFFSET_REGISTER);
	RA6963_SetData(0);
	RA6963_SetCmd(RA6963_CMD_SETOFFSET);

	RA6963_Clear();
}

/*
* Clear Display, text and graphics RAM
*/
void RA6963_Clear()
{
	RA6963_ClearText();
	//RA6963_ClearCG();
	RA6963_ClearGraphic();
}

/*
* Write Data in AutoWrite-Mode to RA6963
*/
void RA6963_SetDataAW(unsigned char data)
{
	DISPLAY.BYTE[0] = data;

	while ((RA6963_GetStatus() & STA3) != STA3)	{
		nop();
	}
}

/*
* Writes display data and increment address pointer
*/
void RA6963_WriteDisplayData(unsigned char x)
{
	RA6963_SetData(x);
	RA6963_SetCmd(RA6963_WRITE_AND_INCREMENT);
}

/*
* Clears text area of display RAM memory
*/
void RA6963_ClearText(void)
{
	int i;
	RA6963_SetAddress(ADDR_TEXT_HOME);

	for(i = 0; i < TEXT_SIZE; i++)
	{
		RA6963_WriteDisplayData(0);
	}
}

/*
* Clears on line of text
*/
void RA6963_ClearTextLine(unsigned char line)
{
	int i;
	RA6963_SetAddress(ADDR_TEXT_HOME+line*30);

	for(i = 0; i < 30; i++)	//from 0..29 = 30 digits
	{
		RA6963_WriteDisplayData(0);
	}
}

/*
* Clears characters generator area of display RAM memory
*/
void RA6963_ClearCG(void)
{
	/*
	unsigned int i;
	RA6963_SetAddress(ADDR_CGRAML);

	for(i = 0; i < 256 * 8; i++)
	{
		RA6963_WriteDisplayData(0);
	}
	*/
}

/*
* Clears graphics area of display RAM memory
*/
void RA6963_ClearGraphic(void)
{
	int i;
	RA6963_SetAddress(ADDR_GRAPHIC_HOME);
	for(i = 0; i < GRAPHIC_SIZE; i++)
	{
		RA6963_WriteDisplayData(0x00);
	}
}

/*
void RA6963_WriteChunk(int* pBuffer, int nBytes)
{
	//Initiate AutoWrite, write Data from RAM and escape AutoWrite-Mode
	RA6963_SetCmd(RA6963_CMD_AUTOWRITE);

	while ((RA6963_GetStatus() & (STA0 | STA1)) != (STA0 | STA1))
		nop();

	while (nBytes--)
		RA6963_SetDataAW(*pBuffer++);

	RA6963_SetCmd(RA6963_CMD_AUTORESET);
}
*/

/*
/ Writes a single character (ASCII code) to display RAM memory
*/
void RA6963_WriteChar(unsigned char charCode)
{
	//set address to textarea
	//RA6963_SetAddress(ADDR_TEXT_HOME);

	if(charCode < 0x80){	//better to do this with bitoperation
		RA6963_WriteDisplayData(charCode - 0x20);		//-32 to get real ascii
	} else {
		RA6963_WriteDisplayData(charCode);
	}
}

/*
* Writes null-terminated string to display RAM memory
*/
void RA6963_WriteString(char * string)
{
	while(*string)
	{
		RA6963_WriteChar(*string++);
	}
}

/*
* Writes null-terminated string to display RAM memory and displays it on x-y-coordinates
*/
void RA6963_WriteStringXY(char * string, unsigned char x, unsigned char y)
{
	unsigned int address;

	address = ADDR_TEXT_HOME + x + (TEXT_AREA * y);
	RA6963_SetAddress(address);

	RA6963_WriteString(string);
}

/*
* sets coursor to x-y-coordinate on display to be able to write there
*/
void RA6963_SetCursorXY(unsigned char x, unsigned char y)
{
	unsigned int address;

	address = ADDR_TEXT_HOME + x + (TEXT_AREA * y);
	RA6963_SetAddress(address);
}

/*
*	(re)set pixel on x-y-coordinate (color: 1 = on; 0 = off)
*/
void RA6963_SetPixel(unsigned int X, unsigned int Y, unsigned int color)
{
	//not working properly
	/*
	unsigned int addr;
	unsigned char cmd;

	if(color>1 || X>240 || Y>128){
		return;
	}

	// calculate and set address on displayram
    addr = (Y*16) + (X/8) + ADDR_GRAPHIC_HOME;
	RA6963_SetAddress(addr);

    if (color == 1)
        cmd = (0xF8)|(8- 1 -(X%8));
    else
        cmd = (0xF0)|(8- 1 -(X%8));

    RA6963_SetCmd(cmd);
	*/
}

/*
*	write custom chars to external cg //not working
*/
void RA6963_WriteCustomChars()
{
	int i;

	/* set address to higher CGRAM (lower half is unused) */
	RA6963_SetAddress(ADDR_CGRAMH); //ADDR_CGRAMH is also the first character of custom fonts

	for(i=0; i<sizeof(ccg_numbers); i++){
		RA6963_WriteDisplayData(ccg_numbers[i]);
	}
}

/*
*	show button icons
*/
void show_button_icons(int up, int down, int ok, int esc, int del, int print)
{
	int line = 14;

	/* show UP */
	if(up){
		show_up_xy(3,line);
	}
	/* show DOWN */
	if(down){
		show_down_xy(10,line);
	}
	/* show OK */
	if(ok){
		show_ok_xy(17,line);
	}
	/* show ESC/BACK */
	if(esc){
		show_esc_xy(24,line);
	}
	/* show DELETE */
	if(del){
		show_del_xy(3,line);
	}
	/* show PRINT */
	if(print){
		show_print_xy(10,line);
	}
}

/*
*	initialize display with all selected options and modes
*/
void display_init()
{
	int i;

	/* initialize display */
	RA6963_Init(RA6963_MODE_XOR | RA6963_CG_INTERNALROM, RA6963_TEXT );

	/* define custom chars */
	RA6963_WriteCustomChars();
}

/*
*	show time and date on position x y
*/
void showTimeAndDate(unsigned int seconds, unsigned char x, unsigned char y)
{
	struct time_struct dateandtime;		// structure for time with utc seconds as input
	char buf[19];

	//RA6963_ClearLine(0);

	/* get time from global.ram.seconds*/
	dateandtime = localtime(seconds);

	/* write time and date to buffer */
	sprintf(buf, "%02d:%02d %02d.%02d.%04d", dateandtime.hour, dateandtime.min, dateandtime.day, dateandtime.mon, dateandtime.year);
	buf[18]='\0';

	/* print buffer to display */
	RA6963_WriteStringXY(buf, 14, 0);
}

/*
* display km at position x, y
*/
void show_unit_km(unsigned int x, unsigned int y)
{
	//k
	RA6963_WriteStringXY("\xCE\xCF", x, y);
	RA6963_WriteStringXY("\xD0\xD1", x, y+1);
	RA6963_WriteStringXY("\xD2\xD3", x, y+2);
	//m
	RA6963_WriteStringXY("\xD4\xD5", x+2, y);
	RA6963_WriteStringXY("\xD6\xD7", x+2, y+1);
	RA6963_WriteStringXY("\xD8\xD9", x+2, y+2);
}

/*
* display m at position x, y
*/
void show_unit_m(unsigned int x, unsigned int y)
{
	//m
	RA6963_WriteStringXY("\xD4\xD5", x, y);
	RA6963_WriteStringXY("\xD6\xD7", x, y+1);
	RA6963_WriteStringXY("\xD8\xD9", x, y+2);
}

void show_zero_xy(unsigned int x, unsigned int y)
{
	RA6963_WriteStringXY("\x81\x82", x, y);
	RA6963_WriteStringXY("\x83\x84", x, y+1);
	RA6963_WriteStringXY("\x85\x86", x, y+2);
}
void show_one_xy(unsigned int x, unsigned int y)
{
	RA6963_WriteStringXY("\x87\x88", x, y);
	RA6963_WriteStringXY("\x89\x8A", x, y+1);
	RA6963_WriteStringXY("\x8B\x8C", x, y+2);
}
void show_two_xy(unsigned int x, unsigned int y)
{
	RA6963_WriteStringXY("\x8D\x8E", x, y);
	RA6963_WriteStringXY("\x8F\x90", x, y+1);
	RA6963_WriteStringXY("\x91\x92", x, y+2);
}
void show_three_xy(unsigned int x, unsigned int y)
{
	RA6963_WriteStringXY("\x93\x94", x, y);
	RA6963_WriteStringXY("\x95\x96", x, y+1);
	RA6963_WriteStringXY("\x97\x98", x, y+2);
}
void show_four_xy(unsigned int x, unsigned int y)
{
	RA6963_WriteStringXY("\x99\x9A", x, y);
	RA6963_WriteStringXY("\x9B\x9C", x, y+1);
	RA6963_WriteStringXY("\x9D\x9E", x, y+2);
}
void show_five_xy(unsigned int x, unsigned int y)
{
	RA6963_WriteStringXY("\x9F\xA0", x, y);
	RA6963_WriteStringXY("\xA1\xA2", x, y+1);
	RA6963_WriteStringXY("\xA3\xA4", x, y+2);
}
void show_six_xy(unsigned int x, unsigned int y)
{
	RA6963_WriteStringXY("\xA5\xA6", x, y);
	RA6963_WriteStringXY("\xA7\xA8", x, y+1);
	RA6963_WriteStringXY("\xA9\xAA", x, y+2);
}
void show_seven_xy(unsigned int x, unsigned int y)
{
	RA6963_WriteStringXY("\xAB\xAC", x, y);
	RA6963_WriteStringXY("\xAD\xAE", x, y+1);
	RA6963_WriteStringXY("\xAF\xB0", x, y+2);
}
void show_eight_xy(unsigned int x, unsigned int y)
{
	RA6963_WriteStringXY("\xB1\xB2", x, y);
	RA6963_WriteStringXY("\xB3\xB4", x, y+1);
	RA6963_WriteStringXY("\xB5\xB6", x, y+2);
}
void show_nine_xy(unsigned int x, unsigned int y)
{
	RA6963_WriteStringXY("\xB7\xB8", x, y);
	RA6963_WriteStringXY("\xB9\xBA", x, y+1);
	RA6963_WriteStringXY("\xBB\xBC", x, y+2);
}
void show_point_xy(unsigned int x, unsigned int y)
{
	RA6963_WriteStringXY("  ", x, y);
	RA6963_WriteStringXY("  ", x, y+1);
	RA6963_WriteStringXY("\xBD ", x, y+2);
}
void show_space_xy(unsigned int x, unsigned int y)
{
	RA6963_WriteStringXY("  ", x, y);
	RA6963_WriteStringXY("  ", x, y+1);
	RA6963_WriteStringXY("  ", x, y+2);
}
void show_up_xy(unsigned int x, unsigned int y)
{
	RA6963_WriteStringXY("\xC6\xC7", x, y);
	RA6963_WriteStringXY("\xC8\xC9", x, y+1);
}
void show_down_xy(unsigned int x, unsigned int y)
{
	RA6963_WriteStringXY("\xCA\xCB", x, y);
	RA6963_WriteStringXY("\xCC\xCD", x, y+1);
}
void show_ok_xy(unsigned int x, unsigned int y)
{
	RA6963_WriteStringXY("\xC2\xC3", x, y);
	RA6963_WriteStringXY("\xC4\xC5", x, y+1);
}
void show_esc_xy(unsigned int x, unsigned int y)
{
	RA6963_WriteStringXY("\xBE\xBF", x, y);
	RA6963_WriteStringXY("\xC0\xC1", x, y+1);
}
void show_del_xy(unsigned int x, unsigned int y)
{
	RA6963_WriteStringXY("\xDD\xDE", x, y);
	RA6963_WriteStringXY("\xDF\xE0", x, y+1);
}
void show_print_xy(unsigned int x, unsigned int y)
{
	RA6963_WriteStringXY("\xE1\xE2", x, y);
	RA6963_WriteStringXY("\xE3\xE4", x, y+1);
}

/*
*	writes graphic data to display on specific address
*/
void RA6963_WriteChunkAt(unsigned int address, unsigned char* pBuffer, unsigned short nBytes)
{
	unsigned int i;

	RA6963_SetAddress(address);

	for(i=0; i<nBytes; i++){
		RA6963_WriteDisplayData(pBuffer[i]);
	}
}
