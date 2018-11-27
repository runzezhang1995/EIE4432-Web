drop database if exists project;

create database project ;

use project;

CREATE TABLE `User`( 
   `Uid` INT NOT NULL AUTO_INCREMENT , 
   `Username` VARCHAR(20) , 
   `Password` VARCHAR(20) ,  
    PRIMARY KEY (`Uid`));

INSERT INTO `User` VALUES(1, 'WU Shijun', '123456');
INSERT INTO `User` VALUES(2, 'ZHANG Runze', '123456');
INSERT INTO `User` VALUES(3, 'YUE ZiTong', '123456');
INSERT INTO `User` VALUES(4, 'LI Jiayu', '123456');
INSERT INTO `User` VALUES(5, 'XUE Xiao', '123456');


CREATE TABLE `Restaurant` ( 
   `Rid` INT NOT NULL AUTO_INCREMENT , 
   `Rusername` VARCHAR(100),
   `Rpassword` VARCHAR(20),
   `Rname` VARCHAR(20),
   `Rimage` VARCHAR(100),       
   `RAddress` VARCHAR(100), 
   `Rstart` Time, 
   `Rclose` Time, 
   `Rsize` INT,
   `Rcuisines` VARCHAR(100),
   `Average-cost` VARCHAR(20),
   `Phone` INT,
   `Website` VARCHAR(100),
    PRIMARY KEY (`Rid`));

INSERT INTO `Restaurant` VALUES(1, 'McDonalds_HungHom','123456','McDonald','','Ka Wai Chuen Block 3 Ka Lim Lau, 46-48 Ma Tau Wai Rd, Hung Hom','00:00','24:00',27,'N/A','0~50HKD',29945909,'https://www.mcdonalds.com.hk/ch.html');
INSERT INTO `Restaurant` VALUES(2, 'tjsamgor_HungHom','123456','TamJai SamGor','','Shop 13-13A, G/F, Lily Mansions (Site 9), Wonderful Worlds of Whampoa, Hung Hom','11:30','21:45',20,'N/A','50~100HKD',23330168,'http://www.tjsamgor.com/shop.php');
INSERT INTO `Restaurant` VALUES(3, 'SpicyGirl','123456','Spicy Girl','','Shop 29, G/F, Pebbles World (Site 3), Wonderful Worlds of Whampoa, Hung Hom','10:00','22:00',40,'N/A','100~200HKD',31523335,'');


CREATE TABLE `Order` ( 
   `Oid` INT NOT NULL AUTO_INCREMENT, 
   `Uid` INT,
   `Rid` INT,
   `Odate` DATE , 
   `Operiod` TIME, 
   `Oname` VARCHAR(20) , 
   `Ophone` INT, 
   `Ostatus` CHAR(10),
   `Oreason` VARCHAR(100),
   `Otime` DATETIME,
   `OnumberofPeople` INT, 
    PRIMARY KEY (`Oid`));

INSERT INTO `Order` VALUES(1,1,3,'2018-11-26','20:00','Ms.Li',56419971,'accepted','','2018-11-26 11:50:00',4);


