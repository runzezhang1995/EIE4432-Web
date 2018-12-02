-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1
-- 生成日期： 2018-12-02 11:44:20
-- 服务器版本： 10.1.36-MariaDB
-- PHP 版本： 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `project`
--

-- --------------------------------------------------------

--
-- 表的结构 `order`
--

CREATE TABLE `order` (
  `Oid` int(11) NOT NULL,
  `Uid` int(11) DEFAULT NULL,
  `Rid` int(11) DEFAULT NULL,
  `Odate` date DEFAULT NULL,
  `Operiod` time DEFAULT NULL,
  `Oname` varchar(20) DEFAULT NULL,
  `Ophone` int(11) DEFAULT NULL,
  `Ostatus` char(10) DEFAULT NULL,
  `Oreason` varchar(100) DEFAULT NULL,
  `Otime` datetime DEFAULT NULL,
  `OnumberofPeople` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `order`
--

INSERT INTO `order` (`Oid`, `Uid`, `Rid`, `Odate`, `Operiod`, `Oname`, `Ophone`, `Ostatus`, `Oreason`, `Otime`, `OnumberofPeople`) VALUES
(1, 1, 3, '2018-11-26', '20:00:00', 'Ms.Li', 56419971, 'accepted', '', '2018-11-26 11:50:00', 4),
(8, 7, 1, '2018-11-29', '03:00:00', 'sssssss', 12311412, 'accepted', '', '2018-11-28 00:35:28', 1),
(9, 1, 1, '2018-11-30', '07:00:00', 'zzz', 666666666, 'accepted', '', '2018-11-28 20:40:35', 2),
(10, 1, 4, '2018-11-30', '20:00:00', 'zzz', 77665543, 'waiting', '', '2018-11-29 04:09:00', 1),
(11, 13, 14, '2018-11-30', '20:00:00', 'dsfdsfds', 34445363, 'canceled', '', '2018-11-29 09:35:03', 4),
(12, 13, 14, '2018-11-30', '16:00:00', 'yue', 55555, 'accepted', '', '2018-11-29 09:36:36', 1);

-- --------------------------------------------------------

--
-- 表的结构 `restaurant`
--

CREATE TABLE `restaurant` (
  `Rid` int(11) NOT NULL,
  `Rusername` varchar(100) DEFAULT NULL,
  `Rpassword` varchar(20) DEFAULT NULL,
  `Rname` varchar(20) DEFAULT NULL,
  `Rimage` varchar(100) DEFAULT NULL,
  `RAddress` varchar(100) DEFAULT NULL,
  `Rstart` time DEFAULT NULL,
  `Rclose` time DEFAULT NULL,
  `Rsize` int(11) DEFAULT NULL,
  `Rcuisines` varchar(100) DEFAULT NULL,
  `Average-cost` varchar(20) DEFAULT NULL,
  `Phone` int(11) DEFAULT NULL,
  `Website` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `restaurant`
--

INSERT INTO `restaurant` (`Rid`, `Rusername`, `Rpassword`, `Rname`, `Rimage`, `RAddress`, `Rstart`, `Rclose`, `Rsize`, `Rcuisines`, `Average-cost`, `Phone`, `Website`) VALUES
(1, 'rs1@example.com', '123456', 'McDonald', '../../public/images/1543435392.jpeg', 'Ka Wai Chuen Block 3 Ka Lim Lau, 46-48 Ma Tau Wai Rd, Hung Hom', '00:00:00', '24:00:00', 27, 'Western', '0~50', 29945909, 'https://www.mcdonalds.com.hk/ch.html'),
(2, 'rs2@example.com', '123456', 'TamJai SamGor', '../../public/images/1543435422.jpeg', 'Shop 13-13A, G/F, Lily Mansions (Site 9), Wonderful Worlds of Whampoa, Hung Hom', '11:30:00', '21:45:00', 20, 'Chinese', '50~100', 23330168, 'http://www.tjsamgor.com/shop.php'),
(3, 'rs3@example.com', '123456', 'Spicy Girl', '../../public/images/1543435451.jpeg', 'Shop 29, G/F, Pebbles World (Site 3), Wonderful Worlds of Whampoa, Hung Hom', '10:00:00', '22:00:00', 40, 'Chinese', '100~200', 31523335, ''),
(4, 'rs4@example.com', '123456', 'Mou Mou Club', '../../public/images/1543435479.jpeg', 'Shop G1-2, 2A, Deli Place (Site 4), Wonderful Worlds of Whampoa, Hung Hom', '12:00:00', '23:00:00', 60, 'Japanese', '100~200', 39041298, ''),
(5, 'rs5@example.com', '123456', 'Morton\'s of Chicago', '../../public/images/1543435479.jpeg', '4/F, The Sheraton Hong Kong Hotel & Towers, 20 Nathan Road, Tsim Sha Tsui', '17:30:00', '23:00:00', 20, 'Western', '100~200', 27322343, 'http://www.mortons.com/'),
(10, 'rs6@example.com', '123456', 'Pizza House', '../../public/images/1543435568.jpeg', 'some where', '12:00:00', '24:00:00', 20, 'Western', '100~200', 66553614, 'http://www.google.com'),
(11, 'rs7@example.com', '123456', 'KFC', '../../public/images/1543435479.jpeg', 'nowhere', '12:00:00', '24:00:00', 20, 'Indian', '100~200', 11451400, 'http://www.google.com'),
(12, 'rs8@example.com', '123456', 'Canteen', '../../public/images/1543435568.jpeg', 'here', '13:00:00', '21:00:00', 20, 'Korean', '100~200', 665571415, 'http://www.google.com'),
(13, 'rs9@example.com', 'password', 'Pizzahut', '../../public/images/1543436178.jpeg', 'some where', '12:00:00', '23:00:00', 50, 'Korean', '50~100', 65606631, 'www.google.com'),
(14, 'restaurant@example.com', 'a12345678', 'hotpot', '../../public/images/1543455190.jpeg', 'somewhere', '12:00:00', '23:00:00', 50, 'Chinese', '100~200', 55555555, 'www.google.com');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `Uid` int(11) NOT NULL,
  `Username` varchar(20) DEFAULT NULL,
  `Password` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`Uid`, `Username`, `Password`) VALUES
(1, 'ct1@example.com', '123456'),
(2, 'ct2@example.com', '123456'),
(3, 'ct3@example.com', '123456'),
(4, 'ct4@example.com', '123456'),
(5, 'ct5@example.com', '123456'),
(6, 'ct6@example.com', '123456'),
(7, 'ct7@example.com', '123456'),
(13, 'customer@example.com', 'a12345678');

--
-- 转储表的索引
--

--
-- 表的索引 `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`Oid`);

--
-- 表的索引 `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`Rid`);

--
-- 表的索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`Uid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `order`
--
ALTER TABLE `order`
  MODIFY `Oid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- 使用表AUTO_INCREMENT `restaurant`
--
ALTER TABLE `restaurant`
  MODIFY `Rid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `Uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
