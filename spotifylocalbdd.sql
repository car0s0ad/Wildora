-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 30-07-2021 a las 17:05:06
-- Versión del servidor: 5.7.31
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `spotifylocalbdd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `canciones`
--

DROP TABLE IF EXISTS `canciones`;
CREATE TABLE IF NOT EXISTS `canciones` (
  `Id` int(100) NOT NULL AUTO_INCREMENT,
  `Autor` varchar(30) NOT NULL,
  `Titulo` varchar(100) NOT NULL,
  `Genero` varchar(100) NOT NULL,
  `Lanzamiento` int(4) NOT NULL,
  `UrlLetra` varchar(200) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `canciones`
--

INSERT INTO `canciones` (`Id`, `Autor`, `Titulo`, `Genero`, `Lanzamiento`, `UrlLetra`) VALUES
(1, 'Beyonce', 'Halo', 'Pop', 2014, 'https://www.letraseningles.es/letrascanciones/traduccionesAC/Beyonce-HaloTraducida.html'),
(2, 'Adele', 'Hello', 'Pop', 2015, 'https://www.letras.com/adele/hello/'),
(3, 'Queen', 'Killer Queen', 'Rock', 1974, 'https://www.azlyrics.com/lyrics/queen/killerqueen.html'),
(4, 'Los Autenticos Decadentes', 'Loco (Tu forma de ser)', 'Pop', 1989, 'https://www.letras.com/los-autenticos-decadentes/190684/'),
(5, 'Justin Bieber', 'Stay', 'Pop', 2021, 'https://genius.com/The-kid-laroi-and-justin-bieber-stay-lyrics'),
(6, 'Sia', 'Cheap Thrills', 'Pop', 2016, 'https://www.letras.com/sia/cheap-thrills/'),
(7, 'Sia', 'Alive', 'Pop', 2015, 'https://www.letraseningles.es/letrascanciones/traduccionesST/Sia-Alive-Traducida.html'),
(8, 'Nickelback', 'Someday', 'Rock', 2009, 'https://www.letraseningles.es/letrascanciones/traduccionesLO/Nickelback-Someday.html'),
(9, 'Las Ketchup', 'Asereje', 'Pop', 2002, 'https://www.letras.com/las-ketchup/63353/'),
(10, 'Raffaela Carra', 'Fiesta', 'Pop', 1977, 'https://www.letras.com/raffaella-carra/570256/');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
