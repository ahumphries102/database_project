CREATE TABLE Card_Table(
	ID			INT				NOT NULL,
	nameOf		VARCHAR(40)		NOT NULL,
	/* Mana Cost */
	mana_cost	VARCHAR(40) 	NULL,
	cmc			INT				NULL,
	type_line	VARCHAR(40)		NULL,
	/* Keywords, Evergreen */
	oracle_text	VARCHAR(255)	NULL,
	power		INT				NULL,
	toughness	INT				NULL,
	colors		VARCHAR(60)		NULL,
	/* Color ID */
	color_identity	VARCHAR(40)	NULL,
	/* SET */
	setIf		VARCHAR(40)		NOT NULL,
	rarity		VARCHAR(6)		NOT NULL,	
	PRIMARY KEY(ID)
)

CREATE TABLE User_Table(
	ID    INT 	NOT NULL,
 	FOREIGN KEY (ID) REFERENCES Card_Table (ID)
)