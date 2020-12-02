-- CREATE DATABASE -- 
create database bakery;
/*
///this code for checking local databases
show databases;
*/

-- USE DATABASE --
use bakery;


-- CREATE TABLES
create table CLIENT_TYPE (
	clientTypeID int not null auto_increment primary key,
	clientType nvarchar(100) unique not null,
	specialTreatment float
);

create table COOKING_TYPE (
	cookingTypeID int not null auto_increment primary key,
	cookingType nvarchar(100) unique not null
);

create table PRODUCT_TYPE (
	productTypeID int not null auto_increment primary key,
	mainType nvarchar(100) not null,
	subType nvarchar(100) not null,
	constraint disProductType unique (mainType , subType)
);

create table PRODUCT (
	productID int not null auto_increment primary key,
	productName nvarchar(100) unique not null,
	cookingTypeID int,
	productTypeID int,
	origin nvarchar(100),
	unitPrice decimal(15 , 2 ) not null,
	unit nvarchar(100) not null,
	constraint frg_cooking_type foreign key (cookingTypeID)
		references COOKING_TYPE (cookingTypeID),
	constraint frg_product_type foreign key (productTypeID)
		references PRODUCT_TYPE (productTypeID)
);

create table REASON (
	reasonID int not null auto_increment primary key,
	reason nvarchar(255)
);

create table CLIENT (
	clientID int not null auto_increment primary key,
	clientTypeID int,
	username varchar(255) not null unique,
	password varchar(255) not null,
	firstName nvarchar(100) not null,
	lastName nvarchar(100) not null,
	phoneNumber char(10) not null unique,
	email varchar(100),
	address nvarchar(255),
	cartID int,
  
	constraint frg_client_type foreign key (clientTypeID)
		references CLIENT_TYPE (clientTypeID)
);

create table CART (
	cartID int not null auto_increment primary key,
	clientID int,
	constraint frg_cart_client foreign key (clientID)
		references CLIENT (clientID)
);

alter table CLIENT
add constraint frg_client_cart foreign key (cartID) references CART (cartID);

create table CART_DETAIL(
	cartID int,
  productID int,
  quantity int not null,
  note nvarchar(100),
  
  constraint frg_cart_detail_cart foreign key (cartID)
		references CART (cartID),
	constraint frg_cart_detail_product foreign key (productID)
		references PRODUCT (productID),
	constraint prk_cart_detail primary key (cartID, productID)
);

create table BILL(
	billID int not null auto_increment primary key,
  clientID int,
  phoneNumber char(10) not null,
  address nvarchar(255) not null,
  recievedDate date not null,
  state bit not null, /* 0 is failed, !0 is success */
  reasonID int,
  
  constraint frg_bill_client foreign key (clientID)
		references CLIENT (clientID),
	constraint frg_bill_reason foreign key (reasonID) 
		references REASON (reasonID)
);

create table BILL_DETAIL(
	billID int,
  productID int,
  quantity int not null,
  note varchar(100),
  
  constraint frg_bill_detail_cart foreign key (billID)
		references BILL (billID),
	constraint frg_bill_detail_product foreign key (productID)
		references PRODUCT (productID),
	constraint prk_bill_detail primary key (billID, productID)
);

/*create table SALE (					--developing path--
	saleDate date not null,
  productID int,
  quantity int not null,
  note varchar(255),
  
  constraint frg_sale_product foreign key (productID)
		references PRODUCT(productID),
	constraint prk_sale primary key (saleDate, productID)
)*/

/*
///this code for checking it's tables
show tables;
*/

-- ADD CONSTRAINTS --
/*calculate paid money*/

/*
///DROP DATABASE
use sys;
drop database bakery;
*/



