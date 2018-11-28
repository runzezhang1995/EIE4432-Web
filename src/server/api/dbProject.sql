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
   `Rimage` VARCHAR(200),       
   `RAddress` VARCHAR(100), 
   `Rstart` Time, 
   `Rclose` Time, 
   `Rsize` INT,
   `Rcuisines` VARCHAR(100),
   `Average-cost` VARCHAR(20),
   `Phone` INT,
   `Website` VARCHAR(100),
    PRIMARY KEY (`Rid`));

INSERT INTO `Restaurant` VALUES(1, 'McDonalds_HungHom','123456','McDonald','https://www.openrice.com/en/hongkong/p-mcdonalds-p1245126','Ka Wai Chuen Block 3 Ka Lim Lau, 46-48 Ma Tau Wai Rd, Hung Hom','00:00','24:00',27,'Fast Food','0~50HKD',29945909,'https://www.mcdonalds.com.hk/ch.html');
INSERT INTO `Restaurant` VALUES(2, 'tjsamgor_HungHom','123456','TamJai SamGor','https://www.openrice.com/en/hongkong/p-tamjai-samgor-mixian-p189407','Shop 13-13A, G/F, Lily Mansions (Site 9), Wonderful Worlds of Whampoa, Hung Hom','11:30','21:45',20,'Chinese style','50~100HKD',23330168,'http://www.tjsamgor.com/shop.php');
INSERT INTO `Restaurant` VALUES(3, 'SpicyGirl','123456','Spicy Girl','https://www.openrice.com/en/hongkong/p-spicy-girl-p5459563','Shop 29, G/F, Pebbles World (Site 3), Wonderful Worlds of Whampoa, Hung Hom','10:00','22:00',40,'Chinese style','100~200HKD',31523335,'');
INSERT INTO `Restaurant` VALUES(4, 'Mou Mou Club','123456','Mou Mou Club','https://www.openrice.com/en/hongkong/p-mou-mou-club-p6734978','Shop G1-2, 2A, Deli Place (Site 4), Wonderful Worlds of Whampoa, Hung Hom','12:00','23:00',60,'Hot Pot','100~200HKD',39041298,'');
INSERT INTO `Restaurant` VALUES(5, 'Morton\'s of Chicago','123456','Morton\'s of Chicago','https://www.openrice.com/en/hongkong/p-mortons-of-chicago-p1654724','4/F, The Sheraton Hong Kong Hotel & Towers, 20 Nathan Road, Tsim Sha Tsui','17:30','23:00',20,'American','100~200HKD',27322343,'http://www.mortons.com/');
INSERT INTO `Restaurant` VALUES(6, 'Hunghom Cafe','123456','Hunghom Cafe','https://www.openrice.com/en/hongkong/p-hunghom-cafe-p6732125','G/F, Golden Dragon Centre, 38-40 Cameron Road, Tsim Sha Tsui','7:00','23:00',40,'Tea Restaurant','50~100HKD',35655963,'');
INSERT INTO `Restaurant` VALUES(7, 'Hung Hom BBQ','123456','Hung Hom BBQ','https://www.openrice.com/en/hongkong/p-hung-hom-bbq-p5418798','G/F, 32 Whampoa Street, Hung Hom','17:30','23:00',20,'BBQ','50~100HKDD',21428000,'');
INSERT INTO `Restaurant` VALUES(8, 'Mrs Tang Cafe','123456','Mrs Tang Cafe','https://www.openrice.com/en/hongkong/p-mrs-tang-cafe-p5603169','Shop 1, King Palace Plaza, 55 King Yip Street, Kwun Tong','18:30','17:00',30,'Tea Restaurant','50~100HKDD',21428000,'');
INSERT INTO `Restaurant` VALUES(9, 'Yuen Long Bistro','123456','Yuen Long Bistro','https://www.openrice.com/en/hongkong/p-yuen-long-bistro-p4211997','G/F, 1 Un Chau Street, Sham Shui Po','07:30','17:00',10,'Tea Restaurant','50~100HKDD',27082322,'');


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

INSERT INTO `Order` VALUES(1,1,3,'2018-11-26','20:00','Ms.Li',45362755,'accepted','','2018-11-26 11:50:00',4);
INSERT INTO `Order` VALUES(2,2,4,'2018-11-27','19:00','Sean',56419971,'Waiting','','2018-11-27 11:50:00',2);
INSERT INTO `Order` VALUES(3,3,4,'2018-11-28','18:00','Alice',65436545,'denied','No reason','2018-11-28 11:50:00',5);
INSERT INTO `Order` VALUES(4,3,5,'2018-11-27','21:30','Ms.Li',24325544,'accepted','','2018-11-29 11:50:00',8);


