-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2022. Okt 14. 11:07
-- Kiszolgáló verziója: 10.4.6-MariaDB
-- PHP verzió: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `rpg`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `stats`
--

CREATE TABLE `stats` (
  `name` varchar(15) NOT NULL,
  `hp` int(11) NOT NULL DEFAULT 1000,
  `strength` int(11) NOT NULL DEFAULT 1,
  `defence` int(11) NOT NULL DEFAULT 1,
  `atk` int(11) NOT NULL DEFAULT 130,
  `crit_damage` decimal(10,0) NOT NULL DEFAULT 2,
  `crit_rate` decimal(10,0) NOT NULL DEFAULT 0,
  `speed` int(11) NOT NULL DEFAULT 2,
  `dodge` decimal(10,0) NOT NULL DEFAULT 0,
  `ultimate_cost` int(11) NOT NULL DEFAULT 100,
  `helmet` varchar(20) NOT NULL,
  `chestplate` varchar(20) NOT NULL,
  `leggings` varchar(20) NOT NULL,
  `boots` varchar(20) NOT NULL,
  `weapon1` varchar(20) NOT NULL,
  `weapon2` varchar(20) NOT NULL,
  `xp` int(11) NOT NULL DEFAULT 0,
  `charm` varchar(20) NOT NULL,
  `energy` int(11) NOT NULL DEFAULT 0,
  `level` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `stats`
--
ALTER TABLE `stats`
  ADD PRIMARY KEY (`name`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
