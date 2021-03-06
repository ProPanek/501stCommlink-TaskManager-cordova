-- phpMyAdmin SQL Dump
-- version 4.0.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Czas wygenerowania: 11 Maj 2018, 10:20
-- Wersja serwera: 5.5.32-cll
-- Wersja PHP: 5.3.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Baza danych: `p483477_propanek`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `501_CPT`
--

CREATE TABLE IF NOT EXISTS `501_CPT` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `read_it` tinyint(1) NOT NULL,
  `color` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `color_weight` tinyint(4) NOT NULL,
  `data_od` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `data_do` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=7 ;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `501_EXO`
--

CREATE TABLE IF NOT EXISTS `501_EXO` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `read_it` tinyint(1) NOT NULL,
  `color` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `color_weight` tinyint(4) NOT NULL,
  `data_od` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `data_do` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=39 ;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `501_LT`
--

CREATE TABLE IF NOT EXISTS `501_LT` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `read_it` tinyint(1) NOT NULL,
  `color` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `color_weight` tinyint(4) NOT NULL,
  `data_od` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `data_do` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `501_MJR`
--

CREATE TABLE IF NOT EXISTS `501_MJR` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `read_it` tinyint(1) NOT NULL,
  `color` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `color_weight` tinyint(4) NOT NULL,
  `data_od` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `data_do` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=7 ;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `501_SLT`
--

CREATE TABLE IF NOT EXISTS `501_SLT` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `read_it` tinyint(1) NOT NULL,
  `color` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `color_weight` tinyint(4) NOT NULL,
  `data_od` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `data_do` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=8 ;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `501_users`
--

CREATE TABLE IF NOT EXISTS `501_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ranga` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=8 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
         