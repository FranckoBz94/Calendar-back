-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-06-2024 a las 20:50:57
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sistema_turnos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `barberos`
--

CREATE TABLE `barberos` (
  `id` int(11) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `imagen` varchar(500) NOT NULL,
  `is_active` int(11) NOT NULL,
  `is_admin` int(11) NOT NULL,
  `fecha_creacion` date NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `barberos`
--

INSERT INTO `barberos` (`id`, `firstName`, `lastName`, `email`, `telefono`, `imagen`, `is_active`, `is_admin`, `fecha_creacion`, `id_user`) VALUES
(46, 'franco', 'beratzz', 'francoberatz.fb1@gmail.com', '02923421134', 'uploads/imageBarbers/profile.png', 1, 0, '2024-05-16', 31),
(47, 'franco', 'nuevo', 'francoberatz.fb@gmail.com', '02923421134', 'uploads/imageBarbers/profile.png', 1, 0, '2024-05-16', 0),
(52, 'franco', 'beratz', 'francoberatz.fb@gmail.com', '02923421134', 'uploads/imageBarbers/profile.png', 1, 0, '2024-06-12', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(50) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `dni` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `firstName`, `lastName`, `telefono`, `dni`, `email`) VALUES
(1, 'franco', 'beratzx', '2322323', '02923421134', 'francoberatz.fb@gmail.com'),
(4, 'cliente', 'dos', '456456456', '123456789', 'email@gmail.comm'),
(5, 'franco', 'beratz', '02923421134', '211212', 'francoberatz.fb@gmail.com'),
(6, 'Daniel', 'Entraigas', '2920411922', '', 'danielentraigas@hotmail.com'),
(7, 'Fede', 'Osovnikar ', '2920214553 ', '', 'fedeosov@gmail.com'),
(8, 'Thomas', 'Pulido Cassagne', '2914373098', '', 'thomascassagne18@gmail.com'),
(24, 'Alejandro ', 'Morales ', '00000000000', '', ''),
(31, 'Francisco ', 'Martinez ', '2915710789', '', 'franmartinezu1@gmail.com'),
(40, 'Nino', 'Pedacchia', '2914065578', '', 'ninompedacchia@gmail.com'),
(51, 'Jose Luis ', 'Acosta ', '2914486203', '', 'acostajluism@gmail.com'),
(62, 'Emmanuel ', 'Riobo', '2914739531', '', 'emmanuelriobo@yahoo.com'),
(63, 'Rafael ', 'Garcia ', '2916420230', '', 'rafaels.garcia@telefonica.com'),
(66, 'Julian', 'Callegari', '2916496276', '', 'jcallegari4@gmail.com'),
(70, 'Tomas ', 'Rectivo', '2914255274', '', 'tomasrectivo2003@gmail.com'),
(73, 'Emmanuel ', 'Franco ', '2914752740', '', 'emanuel_adrian_franco@hotmail.com'),
(77, 'Luciano ', 'Carcamo ', '2914313513', '', 'lucianocarcamo3@gmail.com'),
(79, 'Martin', 'Lopez ', '2916412412', '', 'cliente@gmail.com'),
(81, 'Eric', 'Paez', '2915083097', '', 'ericgabrielpaez@gmail.com'),
(88, 'Mirko', 'Stickar ', '2915249571', '', ''),
(90, 'Maximiliano', 'Morales ', '2914626250', '', 'el_massi_10@hotmail.com'),
(100, 'Matias ', 'Battes', '2916468626', '', 'clientecc@gmail.com'),
(113, 'Lautaro', 'Garcia', '2914743996', '', 'lautagarcia@gmail.com'),
(154, 'Lucas', 'Gomez', '2914604860', '', 'lucas.87.14@gmail.com'),
(160, 'Braian ', 'Schill', '2914729134', '', 'braianschill20@gmail.com'),
(162, 'Miguel', 'Villaverde', '2915752820', '', 'migue.villaverde@gmail.com'),
(172, 'Emiliano', 'Sandoval', '2915702096', '', 'emiliano.sandovalj7@gmail.com'),
(190, 'Cristian', 'Farfal', '2914054418', '', 'farfalcristian@gmail.com'),
(199, 'Esteban', 'Ferullo', '2916417546', '', 'efer@gmail.com'),
(206, 'Nacho', 'Iturrioz', '2920303838', '', 'NULL'),
(224, 'Ignacio', 'Palma', '2915163583', '', 'NULL'),
(225, 'Maximiliano', 'Huenul', '2920404332', '', 'maxihuenulmartinez@hotmail.com'),
(228, 'Ivan', 'Semerano', '2915321194', '', 'ivansemeraro34@gmail.com'),
(232, 'Agustin', 'Ackerman', '2964405759', '', 'agus_ack@hotmail.com'),
(233, 'Mariano', 'Pividori', '2916480046', '', 'NULL'),
(237, 'Juan Manuel', 'Ponce', '2914144718', '', 'juan.mponce@hotmail.com'),
(238, 'Nicolas ', 'Kischynosvky', '2984333080', '', 'nkischinovsky@gmail.com'),
(241, 'Julian', 'Quiroga', '2984671527', '', 'julianquiroga@hotmail.com'),
(242, 'Lucas ', 'Oteruelo', '2916465637', '', 'lucas94-@hotmail.com'),
(244, 'Matias ', 'Banegas', '2915344846', '', 'NULL'),
(245, 'Jose', 'Bayon', '2914711056', '', 'bayonjm@hotmail.com'),
(248, 'Lalo', 'Bayon', '2915078688', '', 'lalo_bayon95@hotmail.com'),
(249, 'Juanma', 'Perez Serron', '2914481278', '', 'jmperezserron@gmail.com'),
(250, 'Mariano', 'Perez Serron', '2914408712', '', 'Marianopr30@gmail.com'),
(251, 'Fernando', 'Carzon', '2915053604', '', 'NULL'),
(257, 'Agustin ', 'Montero', '2915342940', '', 'agusmontero22@icloud.com'),
(269, 'Ezequiel', 'Echegoyen', '2915778341', '', 'NULL'),
(270, 'Enzo', 'Crosiati', '2920615430', '', 'enzocrociati@gmail.com'),
(271, 'Franco', 'Toro', '2914687442', '', 'francotoro.22@gmail.com'),
(277, 'Javier', 'Mas', '2914983255', '', 'mas_javier@hotmail.com.ar'),
(283, 'Wenceslao', 'Fernandez', '2914438783', '', 'NULL'),
(284, 'Francisco', 'Avila', '2915068907', '', 'zion_003@hotmail.com'),
(285, 'Carlos ', 'Rivero', '2914063633', '', 'NULL'),
(290, 'Diego', 'Scarfi', '2914448504', '', 'dcscarfi@hotmail.com'),
(294, 'Franco', 'Dalgalarrondo', '2915071858', '', 'francodalgalarrondo@gmail.com'),
(297, 'Pablo', 'Moisa', '2915099106', '', 'NULL'),
(298, 'Bernardo', 'Sanguinetti', '2914710396', '', 'bernardosanguinetti@gmail.com'),
(304, 'Bruno', 'Decoud', '2914405178', '', 'bruno.decoud@hotmail.com'),
(306, 'Gonzalo', 'Damato', '2914714815', '', 'damato@gmail.com'),
(307, 'Xago', 'Diaz', '2915038284', '', 'xagodiaz@gmail.com'),
(308, 'Gaston ', 'Blazquez', '2914433203', '', 'gaston.blazquez1@gmail.com'),
(310, 'Ariel', 'Schwam', '2915755954', '', 'teambmx666@gmail.com'),
(314, 'Agustin', 'Perez', '2914181407', '', 'agusperez99.ap@gmail.com'),
(315, 'Noelia ', 'Millañianco', '2915778489', '', 'NULL'),
(316, 'Santiago', 'Lopez', '2915060819', '', 'Santiagodavid8597@gmail.com'),
(320, 'Gian', 'Lopez', '2923512443', '', 'gian_garre13@hotmail.com'),
(323, 'Lucho', 'Pascual', '2915702443', '', 'lucho.pascual@hotmail.com'),
(324, 'Franco', 'Gargiulo', '2914449293', '', 'fra@gmail.com'),
(330, 'Cristian', 'Montanio', '2915768627', '', 'cristiandmontano@gmail.com'),
(337, 'Nicolas', 'Reyuk', '2916465465', '', 'nicoreyuk@gmail.com'),
(340, 'Gabriel ', 'Pedroncini', '2915014676', '', 'gabi_dudek@hotmail.com'),
(344, 'Joaquin ', 'Etchemendi', '2915360648', '', 'joaquin.etchemendi@gmail.com'),
(346, 'Richard', 'Bordon', '2916451798', '', 'bordon_ricardo@hotmail.com'),
(348, 'Guillermo', 'Gorza', '2914064518', '', 'guillermOGORZA@ICLOU.COM'),
(354, 'Diego', 'Hali Sapag', '2983457074', '', 'sapagd@hotmail.com'),
(364, 'Pedro', 'Molina', '2284303882', '', 'pedromolina@gmail.com'),
(372, 'Kevin', 'Samudio', '2914476436', '', 'kevinsamudio16@gmail.om'),
(379, 'Facu', 'Miramonte', '2914606119', '', 'facundomiramonte@outlook.com'),
(383, 'Claudio', 'Roth', '2914428311', '', 'rothclaudio@gmail.com'),
(385, 'Alejandro', 'Mendez', '2914441823', '', 'elale74@hotmail.com'),
(395, 'Agustin', 'Calzada', '2923581890', '', 'calzadaagustin7@gmail.com'),
(406, 'Mauro', 'Zarate ', '2916431519', '', 'maurozarate_09@hotmail.com'),
(410, 'Braian ', 'Schill', '2914729134', '', 'braianschill20@gmail.com'),
(430, 'Juan Ignacio', 'Cotta', '2914438337', '', 'juan.cottap@gmail.com'),
(449, 'Esteban', 'Ferullo', '2916417546', '', 'firu_99@hotmail.com'),
(450, 'Lucas', 'Arrieta', '2914701243', '', 'Lucasarrieta@hotmail.com'),
(452, 'Sebastian', 'Buono', '2914326188', '', 'sebastyanbuono@gmail.com'),
(472, 'Agustin', 'Vicente', '2915327645', '', 'NULL'),
(476, 'Ramiro', 'Martinez', '2914501001', '', 'NULL'),
(478, 'Ivan', 'Semerano', '2915321194', '', 'ivansemeraro34@gmail.com'),
(492, 'Lucas ', 'Oteruelo', '2916465637', '', 'lucas94-@hotmail.com'),
(497, 'Federico', 'Gomez', '2922422357', '', 'ffede_gomeez@hotmail.com'),
(503, 'Maximo ', 'Prado', '2915107580', '', 'NULL'),
(506, 'Javier', 'Vertinchio', '2915039449', '', 'NULL'),
(508, 'Mateo', 'Birlis', '2984744778', '', 'NULL'),
(512, 'Fermin', 'Guzman', '2392565950', '', 'ferrrguzman5@icloud.com'),
(522, 'Alejandro', 'Asquini', '2915727480', '', 'ale087@hotmail.com'),
(535, 'Carlos ', 'Rivero', '2914063633', '', 'NULL'),
(536, 'Juan ', 'Ruppel', '2915703681', '', 'juancis.18@gmail.com'),
(543, 'Gino', 'Condisciani', '2916494097', '', 'gincond@gmail.com'),
(547, 'Pablo', 'Moisa', '2915099106', '', 'NULL'),
(550, 'Mariano', 'Rayeb', '2914326624', '', 'mr@faragoamoblamientos.com'),
(552, 'Mateo', 'De Sanpablo', '2929410973', '', 'mateodesanpablo@gmail.com'),
(558, 'Gaston ', 'Blazquez', '2914433203', '', 'gaston.blazquez1@gmail.com'),
(561, 'Andres', 'Garmendia', '2914190275', '', 'aggarmendia@gmail.com'),
(566, 'Santiago', 'Lopez', '2915060819', '', 'santiagodavid8597@gmail.com'),
(570, 'Gian', 'Lopez', '2923512443', '', 'gian_garre13@hotmail.com'),
(575, 'Agustin', 'Arzer', '2914141046', '', 'NULL'),
(577, 'Matias', 'Giusti', '2915723411', '', 'matiasgiusti@gmail.com'),
(580, 'Cristian', 'Montanio', '2915768627', '', 'cristiandmontano@gmail.com'),
(581, 'Mariano', 'Barga', '2915774231', '', 'marianoemanuel_32@hotmail.com'),
(598, 'Guillermo', 'Gorza', '2914064518', '', 'guillermOGORZA@ICLOU.COM'),
(599, 'Victor ', 'Fuentes', '2914378930', '', 'victorfuentes@gmail.com'),
(606, 'Miguel', 'Valdez', '2916448813', '', 'NULL'),
(607, 'Luca', 'Castañeda', '2914162786', '', 'lucadcastaneda@gmail.com'),
(608, 'Santiago', 'Stocco', '2916412379', '', 'satistocco@gmail.com'),
(609, 'Rodrigo', 'Quint', '2915764348', '', 'rodrigo_quint@outlook.com'),
(611, 'Esteban', 'Pecastaing', '2916485431', '', 'estebanp@gmail.com'),
(613, 'Ezequiel', 'Basualdo', '2914779555', '', 'ezebasual27022016@gmail.com'),
(614, 'Adrian', 'Mas', '2914679588', '', 'adrianmas@hotmail.com.ar'),
(615, 'Guillermo', 'Mercado', '2915773625', '', 'guillemercado14@hotmail.com'),
(619, 'Pedro', 'Balda', '2915072753', '', 'NULL'),
(620, 'Franco', 'Askini', '2915095704', '', 'francoaskini7@gmail.com'),
(621, 'Sebastian', 'Heiland', '2915063089', '', 'sebastian_inspeccines@hotmail.com'),
(623, 'Federico', 'Benedeti', '2914237996', '', 'fede3bene@hotmail.com'),
(624, 'Julian', 'Gutt', '2914612552', '', 'NULL'),
(628, 'Mariano', 'Kessler', '2914254627', '', 'marianokessleruns@hotmail.com'),
(638, 'Gian', 'Cornacchini', '2914794125', '', 'gian@gmail.com'),
(639, 'Jonathan', 'Lara', '2914438568', '', 'Larajonathan333@gmail.com'),
(640, 'Nico', 'Giusia', '2914317757', '', 'ncgiusia@hotmail.com'),
(641, 'Walter', 'Monzon', '2920412114', '', 'Wom_22@hotmail.com'),
(642, 'Gino', 'Carrozi', '2915132762', '', 'ginocarrozi@icloud.com'),
(648, 'Joaquin', 'Pardo', '2915765828', '', 'joaco_pardo@hotmail.com'),
(649, 'Emiliano', 'Rivero', '2914651200', '', 'NULL'),
(651, 'Nicolas', 'Buckle', '2914439492', '', 'bucklenicolas@gmail.com'),
(652, 'Martin ', 'Ventimiglia', '2915067343', '', 'ventimigliamartin@gmail.com'),
(653, 'Leo', 'Carrari', '2915279732', '', 'leocarrarybboy@gmail.com'),
(660, 'Lucas', 'carofalo', '2914481747', '', 'lucasadriancarofalo@gmail.com'),
(661, 'Facundo', 'Quiroga', '2914638398', '', 'q_facundo98@hotmail.es'),
(664, 'Adrian', 'Malastestinic', '2914224656', '', 'adrianm@hotmail.com'),
(667, 'Nicolas', 'Torres', '2914079298', '', 'nicotorres2641@gmail.com'),
(668, 'Vasco', 'Aristizabal', '2915034001', '', 'vasco@aristizabal.com.ar'),
(672, 'Manuel', 'Blasco Iglesias', '2915042175', '', 'manuel.blascoiglesias@live.com'),
(675, 'Lisandro', 'Pardo', '2914052384', '', 'licho.pardo@gmail.com'),
(680, 'Luciano ', 'Mirazo', '2954220696', '', 'luchimirazo05@gmail.com'),
(681, 'Rodrigo', 'Montenegro', '2914407205', '', 'cordobess91@gmail.com'),
(682, 'Agustin ', 'Juanpataoro', '2914146171', '', 'agustinjuanpataoro@hotmail.com'),
(683, 'Maximiliano', 'Flores', '2914132210', '', 'maximiliano_flores88@hotmail.com'),
(688, 'Gabriel ', 'Muñoz', '2914645308', '', 'NULL'),
(689, 'Diego ', 'Montiquin', '2914023481', '', 'dmontiquin@gmail.com'),
(690, 'Matias', 'Volpi', '2914393040', '', 'mativolpi1989@hotmail.com'),
(691, 'Gero', 'Ferch', '2915090580', '', 'geronimo.ferch@trailcar.com.ar'),
(692, 'Nicolas ', 'Gonza', '2915753619', '', 'nicolasgonza2003@yahoo.com.ar'),
(693, 'Pablo', 'Decelis', '2916493961', '', 'pablo_decelis@hotmail.com'),
(694, 'Alejo', 'Valles', '2915712746', '', 'alejom2000@hotmail.com'),
(695, 'Pablo', 'Corelli', '2914021013', '', 'pablo_ariel_corelli@hotmail.com.ar'),
(697, 'Manuel', 'Otero', '2914662636', '', 'manuelotero1995@gmail.com'),
(698, 'Ricardo', 'Elizondo', '2915750298', '', 'ricki_sjm@hotmail.com'),
(699, 'Daniel', 'Saavedra', '2914294642', '', 'cesardsaavedra@gmail.com'),
(700, 'Matias', 'Garmendia', '2916445965', '', 'matigarmendia@gmail.com'),
(702, 'Mauro', 'Decker', '2915059155', '', 'msdeckerdiaz@gmail.com'),
(705, 'Julian', 'Fernandez', '2914469571', '', 'juuli.liniers@hotmail.com.ar'),
(707, 'Roberto', 'Jimenez', '2915324643', '', 'rb.jimenez@hotmail.com'),
(708, 'Gaston', 'Fernandez', '2914460175', '', 'gefs_08@hotmail.com'),
(710, 'Ale ', 'Ortiz', '2914635794', '', 'ale-.-ortiz@hotmail.com'),
(712, 'Gino ', 'Barbieri', '2915095954', '', 'barbierigino15@gmail.com'),
(714, 'Omar ', 'Muñiz', '2915360346', '', 'expresosurpatagonicasrl@hotmail.com'),
(717, 'Rodrigo', 'Cerezuela', '2984326382', '', 'rodri.cerezuela@gmail.com'),
(718, 'Axel', 'Reynoso', '2914464511', '', 'axelerie@gmail.com'),
(721, 'Walter', 'Croter', '2914313664', '', 'wcroter77@hotmail.com'),
(722, 'Mariano', 'Castellano', '2914606398', '', 'marianocastellano0111@gmail.com'),
(726, 'Ivan', 'Carrion', '2804588021', '', 'carrion-ivan@hotmail.com'),
(729, 'Rodrigo ', 'Garcia', '2914131525', '', 'rodrigogarciaschenfelt@hotmail.com'),
(732, 'Leo', 'Vigovich', '2914706295', '', 'leonardovigovich@hotmail.com'),
(733, 'Adrian ', 'Lopez', '2914079306', '', 'ojocuerdo@hotmail.com'),
(734, 'Julio ', 'Escudero ', '2914466258', '', 'juliocesare88@gmail.com'),
(736, 'Tomas ', 'Escudero', '2914711016', '', 'tomybj610@gmail.com'),
(737, 'Agustin ', 'Grosso', '2914449444', '', 'Agustingross@hotmail.com'),
(745, 'Matias', 'Teves', '2934464800', '', 'maatias.teves@gmail.com'),
(746, 'Andres', 'Lastiri', '2914424134', '', 'lastiri.andresc@hotmail.com'),
(747, 'Bruno', 'Bongiovanni', '2914323732', '', 'bru-lapp@hotmail.com'),
(748, 'Sebastian', 'Nievas', '2964551056', '', 'sebas21_n@hotmail.com'),
(750, 'Lucas Emanuel', 'Del Rio', '2915745646', '', 'lukardidr@gmail.com'),
(753, 'Anibal ', 'Andrés ', '2915015022', '', 'celulargroup@hotmail.com'),
(761, 'Pablo', 'Petrirena', '2914138562', '', 'lagunakvet@yahoo.com.ar'),
(762, 'Noel', 'Franco', '1132095066', '', 'ceo@noelfranco.io'),
(772, 'Anibal', 'Reidel', '2914276458', '', 'anibalr@gmail.com'),
(773, 'Emilio', 'Conte', '2914298213', '', 'emilioconte@hotmail.com'),
(774, 'Sebastian', 'Rosales', '2915111202', '', 'luis.rosales@unipar.com'),
(776, 'Leony Walter', 'Santiago', '2914425508', '', 'santile0ni@outlook.com'),
(781, 'Agustin', 'Gizzi', '2915269999', '', 'agustingizzi18@gmail.com'),
(788, 'Gustavo', 'Barbieri', '2915163392', '', '123@gmail.com'),
(791, 'Tomas ', 'Gajardo', '2915347153', '', 'tomasgajardo555@gmail.com'),
(793, 'Juan', 'Bajo', '2914278984', '', 'jmbajo@gmail.com'),
(799, 'Nicolas ', 'Feltaño', '2920606842', '', 'Nicofeltao@hotmail.com'),
(803, 'Lucas', 'Manassero', '2914070285', '', 'lucasmanassero@hotmail.com.ar'),
(804, 'Teke ', 'Lopez', '2920613053', '', 'tekelopez@hotmail.com'),
(805, 'Francisco', 'Esparza', '2920345606', '', 'fran_esparza108@hotmail.com'),
(808, 'Gabriel', 'Garcia', '2914729923', '', 'gaosgarcia@gmail.com'),
(809, 'Mariano', 'Sosa', '2915061572', '', 'marianonicolascjs@hotmail.com'),
(817, 'Sebastian', 'Aristi', '2915055539', '', 'sebaaristi_@1207hotmail.com'),
(830, 'Thiago', 'Rivero', '2914231886', '', 'Thiagorivero@hotmail.com'),
(834, 'Franco  ', 'Venegas ', '2914712254', '', 'franvenegas14@gmail.com'),
(836, 'Facundo', 'Lopez', '2915328424', '', 'faculopezz@gmail.com'),
(838, 'Emilio', 'Heit', '2923653151', '', 'emilio@gmail.com'),
(841, 'Cristian', 'Anizan', '2914753656', '', 'cristian.anizan@gmail.com'),
(848, 'Angel ', 'Rios ', '2915713081', '', 'angelgabrielrios@hotmail.com'),
(860, 'Enzo', 'Fernandez', '2916464952', '', ''),
(866, 'Lautaro ', 'Forestier ', '2914621808', '', ''),
(869, 'Claudio ', 'Visconti ', '2914607078', '', 'jere_santi@hotmail.com'),
(870, 'Daniela ', 'Quijada ', '2915270685', '', 'daniela_quijada.soto@hotmail.com'),
(873, 'Cristian', 'Acosta ', '2914624000', '', ''),
(878, 'Juan Manuel ', 'Cerella ', '2915767902', '', 'juanmavw23@gmail.com'),
(890, 'Juan ', 'Carnero ', '2914709676', 'undefine', 'juancarner000@gmail.com'),
(893, 'Juan Cruz ', 'Ruiz ', '2243405649', 'undefine', 'juancruzrb@outlock.es'),
(894, 'Gonzalo ', 'Stemphelet', '2915267065', 'undefine', 'stempheletg@gmail.com'),
(896, 'Nicolas', 'Rivero', '2996118936', 'undefine', ''),
(897, 'Giulinano', 'Battipede', '2914220408', 'undefine', ''),
(902, 'Emiliano', 'Dangelico', '291154623843', 'undefine', 'emilianodangelico@gmail.com'),
(903, 'Leandro ', 'Colos ', '2915392748', 'undefine', ''),
(911, 'Nicolas ', 'Baglioni ', '2914627471', 'undefine', ''),
(912, 'Gonzalo ', 'Dongui ', '2915070581', 'undefine', ''),
(920, 'Nicolas', 'Otero', '2914050304', 'undefine', 'gonick1696@hotmail.com'),
(925, 'Marcos ', 'Poveda ', '1164171811', 'undefine', ''),
(927, 'Braian', 'Chavez', '2915139879', 'undefine', ''),
(928, 'Ignacio', 'Insfran', '2914482668', 'undefine', 'ignacioinsfancabj@hotmail.com'),
(931, 'Franco ', 'Pellegrini', '2916498321', 'undefine', 'francopellegrini16@gmail.com'),
(934, 'Matias ', 'Galvan', '2914448460', 'undefine', 'matii11@gmail.com'),
(945, 'Joaquin', 'Dell Avo', '2914124563', 'undefine', ''),
(946, 'Daniel', 'Nancocheo', '2944154268', 'undefine', ''),
(949, 'Emmanuel', 'Intrevado', '2914311202', 'undefine', ''),
(955, 'Lautaro', 'Aramburu', '2914198659', 'undefine', ''),
(960, 'Francisco', 'Vaccani', '2983605941', 'undefine', ''),
(965, 'Lautaro', 'Quijada', '2931410879', 'undefine', ''),
(969, 'Tomas ', 'Muzi ', '000000000', 'undefine', ''),
(972, 'Branko', 'ottavianelli', '02914431952', 'undefine', 'branko-96@hotmail.com'),
(975, 'Ivan ', 'Intrevado', '2914272103', 'undefine', ''),
(978, 'Norberto Alonso', 'Pino', '2915043927', 'undefine', ''),
(981, 'Fabricio ', 'Gali', '2916495520', 'undefine', ''),
(982, 'Lucas', 'Rosat', '2920475794', 'undefine', 'lucasrosat.lr@gmail.com'),
(983, 'Rinaldo ', 'Romero', '2914465199', 'undefine', ''),
(988, 'viviana ', 'Ruiz ', '2914747233', 'undefine', ''),
(989, 'fernando', 'chiappe', '2916460924', 'undefine', 'fdchiappe91@gmail.com'),
(992, 'Tobias ', 'Saldutti', '2915005466', 'undefine', ''),
(993, 'Gino ', 'Saldutti', '2915005466', 'undefine', ''),
(996, 'Adrian ', 'Santillan ', '2916425457', 'undefine', 'adrian.santillan@hotmail.com'),
(997, 'gonzalo', 'navarro', '2914408910', 'undefine', 'gonzaloluisnavarro@gmail.com'),
(998, 'Ignacio ', 'Lopez', '2915043093', 'undefine', ''),
(999, 'Facundo', 'Udovich ', '2914169613', 'undefine', ''),
(1002, 'Tomas ', 'Vasquez  ', '2915204304', 'undefine', ''),
(1004, 'Guido', 'Reyes', '2914750797', 'undefine', ''),
(1005, 'Rafael ', 'Pozos ', '2983608219', 'undefine', ''),
(1008, 'Franco', 'Guerra', '2915718381', 'undefine', 'franco@ojedayguerra.com.ar'),
(1013, 'Luis ', 'Gil ', '2914759293', 'undefine', 'luis_gil_tc@hotmail.com.ar'),
(1014, 'Giovanni ', 'Silva ', '2914760191', 'undefine', ''),
(1019, 'julio', 'damato', '2914123301', 'undefine', ''),
(1020, 'Alan ', 'Di Rocco', '2915279488', 'undefine', ''),
(1031, 'Victor ', 'Miguel ', '2914489176', 'undefine', ''),
(1032, 'Maximiliano', 'zapata', '2914434720', 'undefine', ''),
(1034, 'Bruno', 'Decoud', '2914660041', 'undefine', ''),
(1039, 'Luciano', 'Hernandez ', '2915036257', 'undefine', 'luciano.h.mason@gmail.com'),
(1041, 'Omar', 'Mondaca', '2914461109', 'undefine', 'Omar_manuel@live.com.ar'),
(1042, 'Alfredo ', 'Falcon', '2915758281', 'undefine', ''),
(1044, 'Agustin ', 'Tombesi ', '291413974', 'undefine', 'agustin_tombesi@hotmail.com'),
(1053, 'Bahia Basquet ', '', '', 'undefine', ''),
(1061, 'Jorge ', 'Arias ', '2916481016', 'undefine', ''),
(1062, 'Matias ', 'Arias ', '2916481016', 'undefine', ''),
(1071, 'Rodrigo ', 'Buy ', '3425557981', 'undefine', 'buyrodrigoandres@gmail.com'),
(1072, 'Nicolas ', 'Dagustino ', '2914299674', 'undefine', 'nicolasdagustino@gmail.com'),
(1082, 'Roy', 'Garcia ', '', 'undefine', ''),
(1083, 'Lautaro ', 'Di Peretoro', '2914414848', 'undefine', ''),
(1089, 'Giuliano', 'Ambrogi', '2916495243', 'undefine', ''),
(1090, 'Carlos ', 'Diaz ', '3861605665', 'undefine', ''),
(1092, 'Santino ', 'Marzialetti', '2915710770', 'undefine', ''),
(1094, 'Juan', 'Marini', '2914674237', 'undefine', ''),
(1095, 'Rafa', 'Paulichi', '2914041836', 'undefine', ''),
(1098, 'Manuel ', 'Llorente ', '2915738837 ', 'undefine', 'manuel.llorente@hotmail.es'),
(1100, 'Lazaro', 'Bouquez ', '2914197765', 'undefine', ''),
(1101, 'Claudio ', 'Lugones ', '2914136284', 'undefine', 'claudioalugones@hotmail.com.ar'),
(1103, 'Luciano ', 'Vidili', '1155928554', 'undefine', 'lucianovidili@gmail.com'),
(1104, 'Sebastian ', 'Virgili', '2914664458', 'undefine', 'sebavirgili@gmail.com'),
(1109, 'Marco ', 'Conte ', '2954300468', 'undefine', 'marcoconte338@gmail.com'),
(1111, 'Lucas ', 'Mattioli', '2915091818', 'undefine', 'lmattioli33@gmail.com'),
(1114, 'Geronimo ', 'Gonzales', '2914318290', 'undefine', 'gerog1610@gmail.com'),
(1123, 'Andres ', 'Ramos ', '2914468072', 'undefine', ''),
(1137, 'Gonzalo', 'Roqueta ', '2914627071', 'undefine', 'gonzalo.roqueta@gmail.com'),
(1138, 'Matias ', 'Quiroz', '2914368265', 'undefine', ''),
(1144, 'Facundo ', 'Cabalillas ', '2954674311', 'undefine', 'cabalillasfacu@gmail.com'),
(1147, 'Jorge ', 'Hernandez ', '2916447301', 'undefine', ''),
(1149, 'Jorge ', 'Henriquez', '2914196216', 'undefine', ''),
(1151, 'Nicolas', 'Annibali', '2914077544', 'undefine', ''),
(1152, 'Pablo', 'Mochen', '2916418686', 'undefine', ''),
(1154, 'Julian ', 'Gallego ', '2915739226', 'undefine', 'juliangallegoo@hotmail.com'),
(1155, 'Juan', 'Saldutti', '', 'undefine', ''),
(1157, 'Marcelo ', 'Oga ', '2915013222', 'undefine', 'nano4all81@gmail.com'),
(1158, 'Matias', 'Biasola', '2914368357', 'undefine', 'matias.biasola.zani@gmail.com'),
(1161, 'Federico ', 'Sgreccia ', '2914131969', 'undefine', 'fedesreccialobato@hotmail.com'),
(1169, 'Lucas', 'Rivademar', '2914292673', 'undefine', 'rivademarlucas@gmail.com'),
(1170, 'Matias ', 'Cortessi', '2914146277', 'undefine', ''),
(1171, 'Paulino ', 'Jaldi', '29216460609', 'undefine', 'paulinojaldi43@gmail.com'),
(1177, 'Lucas ', 'Brandel', '2914468899', 'undefine', 'lucas_brandel03@hotmail.com'),
(1182, 'camilo', 'bustamamte', '2914165093', 'undefine', ''),
(1183, 'Daniel', 'Marinsanta', '2914614138', 'undefine', ''),
(1185, 'Ezequiel', 'Mendoza ', '2916496794', 'undefine', 'ezee_mc@hotmail.com.ar'),
(1186, 'Agustin ', 'Etcheto ', '29164611717', 'undefine', ''),
(1192, 'Matias ', 'Sommadossi', '2914059461', 'undefine', 'matisommadossi@gmail.com'),
(1199, 'matias', 'quiroz', '2914368265', 'undefine', 'matias.damian.quiroz@hotmail.com'),
(1207, 'Francisco', 'Domina', '2916429194', 'undefine', 'deniz1508@hotmail.com'),
(1218, 'Luciano ', 'Campos ', '2915065108', 'undefine', ''),
(1230, 'Naim ', 'Abusap', '2914053059', 'undefine', 'npabusap@gmail.com'),
(1234, 'Mauro', 'Tesei', '2914323999', 'undefine', 'mdtesei@gmail.com'),
(1242, 'Alejandro ', 'Alehuanlli', '2916452397', 'undefine', ''),
(1252, 'Leandro ', 'Jofre ', '2915091411', 'undefine', ''),
(1255, 'Alan ', 'Maldonado ', '2915009181', 'undefine', 'alanmaldo18@gmail.com'),
(1258, 'Bruno ', 'Samuel ', '2914191587', 'undefine', ''),
(1260, 'Sebastian ', 'Bustamante ', '2915086232', 'undefine', 'sebastianfbustamante@gmail.com'),
(1265, 'Emiliano ', 'Dias ', '2915276478', 'undefine', ''),
(1269, 'Matias', 'Sgreccia ', '2914520071', 'undefine', ''),
(1272, 'Franco ', 'Delgado ', '2915105434', 'undefine', 'francoleonardodelgado@gmail.com'),
(1276, 'Joaquin ', 'Magaz ', '2914263720', 'undefine', ''),
(1283, 'Felipe ', 'Lasota ', '2920647999', '', 'ffeelliipp10@gmail.com'),
(1290, 'Gaston ', 'Ducasu', '2915080669', 'undefine', 'gastonducasu07gmail.com'),
(1291, 'Adrian ', 'Mosmann', '2916495097', 'undefine', ''),
(1294, 'Francisco ', 'Cid ', '2914754789', 'undefine', 'francisco.cid87@gmail.com'),
(1297, 'Leon ', 'Gonzales ', '2914163901', 'undefine', ''),
(1299, 'Gaston ', 'Magaline ', '2914026578', 'undefine', 'gastonmagaline@gmail.com'),
(1300, 'Ezequiel', 'Garcia ', '2915129812', 'undefine', ''),
(1323, 'Antonio ', 'Ortelli Cruz ', '2916459048', 'undefine', ''),
(1326, 'Cristian', 'Gristman', '2915740149', 'undefine', ''),
(1327, 'Danilo', 'Mesmer y Rosset', '2914231952', 'undefine', ''),
(1338, 'Jorge', 'Aizpurua', '2914748711', 'undefine', ''),
(1340, 'Eduardo ', 'Molina ', '2914472230', 'undefine', ''),
(1344, 'Gabriel', 'Perez', '2915116153', 'undefine', ''),
(1346, 'Leonardo Jose', 'Pasini', '2954543807', 'undefine', 'leopasinic@hotmail.com'),
(1355, 'Paulo ', 'Moretti', '2915136587', 'undefine', 'moretti.paulo@gmail.com'),
(1362, 'Florencia', 'Moccia', '2916429884', 'undefine', 'flor.moccia.fm@gmail.com'),
(1367, 'Ismael ', 'Valetti', '2914313416', 'undefine', ''),
(1372, 'Matias ', 'De Monaco ', '2916486026', 'undefine', ''),
(1374, 'Tomi', 'Cassagne', '000000000', 'undefine', ''),
(1376, 'Gerardo', 'Zublin', '2920415063', 'undefine', 'gerardozublin@yahoo.com.ar'),
(1377, 'Marcelo ', 'Gimenez', '2932454367', 'undefine', ''),
(1380, 'Juan ', 'Rouaix', '2914365869', 'undefine', 'juanrouaix@gmail.com'),
(1382, 'Joaquin ', 'Obreque ', '2915204402', 'undefine', ''),
(1383, 'Alex ', 'Vergara', '2914230792', 'undefine', 'loralexvergara@gmail.com'),
(1384, 'Nahuel ', 'Aguila ', '2915103693', 'undefine', 'nahuel.aguila227@gmail.com'),
(1386, 'Kevin ', 'Koll', '2914181812', 'undefine', ''),
(1388, 'Bruno ', 'Civalero ', '2914183629', 'undefine', 'bcivalero@hotmail.com'),
(1393, 'Florencia', 'Gabinari', '2915722108', '', 'flor-18-2008@hotmail.com'),
(1394, 'Eber', 'Lazzeri', '2920305927', '', 'eberlazzeri@live.com.ar'),
(1396, 'Jonatan', 'Gelves', ' 54 9 291 440-4765', 'undefine', ''),
(1398, 'Giuliano ', 'Tirabasso', '2914753525', '', 'giulo9@hotmail.com'),
(1402, 'Brian', 'Chirino', '2914480879', 'undefine', ''),
(1413, 'Ignacio', 'Insfran', '2914399124', '', 'ml_quinteros@hotmail.com'),
(1415, 'Franco', 'Vejar', ' 54 9 291 476-9297', 'undefine', ''),
(1418, 'Alvaro ', 'Richmond', '000000000', 'undefine', ''),
(1421, 'Bruno', 'Pais', ' 54 9 291 435-8918', 'undefine', ''),
(1422, 'Leandro ', 'Gustos ', '2914364443', 'undefine', 'leagustos@hotmail.com'),
(1426, 'tomas', 'burastero', '2914445354', 'undefine', 'tomas.burastero@gmail.com'),
(1428, 'Mauro ', 'Malamaria ', '2914491846', 'undefine', ''),
(1429, 'Gonzalo', 'Rosa', '2914420057', 'undefine', ''),
(1433, 'Juan Francisco ', 'David ', '2914123551', 'undefine', 'juanfradavid@yahoo.com'),
(1435, 'Leonel', 'Torres', '2914465091', '', 'leoneltorres96@yahoo.com.ar'),
(1438, 'fabian ', 'quispe', '2914715677', 'undefine', ''),
(1441, 'Nestor', 'Rojas ', '2915346263', 'undefine', ''),
(1442, 'Benjamin ', 'Quiroga ', '000000000', 'undefine', ''),
(1446, 'Maximo', 'Martino ', '2914727112', 'undefine', 'mp.martino@outlook.es'),
(1449, 'Milton ', 'Oscares', ' 54 9 291 522-7447', 'undefine', ''),
(1450, 'Rober', 'Rivero', '2915279951', '', 'rober.rivero@icloud.com'),
(1451, 'Manuel ', 'Danza ', '000000000', 'undefine', ''),
(1454, 'Juan Manuel', 'Vasquez  ', '2914190659', 'undefine', ''),
(1456, 'Federico ', 'Stach', '2915161157', 'undefine', ''),
(1458, 'Ariel', 'Carzon', '2914291389', '', 'arielcarzon74@hotmail.com'),
(1460, 'Lucas', 'Carzon', '2914745914', '', 'lucasarielcarzon@gmail.com'),
(1462, 'Diego', 'Zabala', '2916466388', '', 'diego.zabala@outlook.com'),
(1468, 'Rodrigo', 'Felix', '2915106881', 'undefine', ''),
(1469, 'Juan', 'Cerqueira', '295415558317', '', 'juancerqueira@hotmail.com.ar'),
(1470, 'Mauro', 'Arias', '2914199987', 'undefine', ''),
(1473, 'Cesar', 'Gutierrez', '2972401549', 'undefine', ''),
(1474, 'Galo', 'Rodriguez ', '2914402132', 'undefine', ''),
(1476, 'Sergio ', 'Salvatierra', '2915369230', 'undefine', 'sergio.salvatierra@hotmail.com'),
(1482, 'Claudio ', 'Hotto', '2915715280', 'undefine', ''),
(1488, 'Gonzalo', 'Sierra', '000000000', 'undefine', ''),
(1491, 'Daniel ', 'Gonzales ', '2923435027', 'undefine', ''),
(1493, 'Valentin', 'Figarra', '2915348179', 'undefine', ''),
(1494, 'Matias ', 'Aramburu ', '2915162754', 'undefine', ''),
(1495, 'Alex', 'Saraiva', '2923429610', 'undefine', ''),
(1498, 'Andres ', 'Rodriguez', '000000000', 'undefine', ''),
(1500, 'Simon ', 'Alvarez ', '2914054822', 'undefine', ''),
(1501, 'Felipe ', 'Alvarez ', '2914054822', 'undefine', ''),
(1522, 'Jeronimo ', 'Madueño', '2916499743', 'undefine', ''),
(1523, 'Cristian', 'Barcala ', '2915080825', '', ''),
(1524, 'Brian', 'Pou', ' 54 9 291 437-4810', 'undefine', ''),
(1528, 'Miguel', 'Sanhueza', ' 54 9 291 431-7277', 'undefine', ''),
(1533, 'Fernando ', 'Recabarren', '2914700555', 'undefine', 'fer.reca2019@hotmail.com'),
(1538, 'Nicolas ', 'Fontanella', '2915762759', 'undefine', ''),
(1539, 'Gonzalo ', 'Vejar', '2914712636', 'undefine', ''),
(1540, 'Gonzalo ', 'Duhalde ', '2914775581', 'undefine', 'duhalde.g@gmail.com'),
(1541, 'Jonatan', 'Vejar', ' 54 9 291 446-4209', 'undefine', ''),
(1547, 'Roberto', 'Figarra', '2914141810', 'undefine', ''),
(1549, 'Lucas', 'Faure', '2915038383', 'undefine', 'lucasfaure-05@hotmail.com'),
(1553, 'christian', 'Otero', '2914781825', 'undefine', 'christian.otero1991@gmail.com'),
(1555, 'Tiziano ', 'Copreni', '2914719502', '', 'tacopreni@gmail.com'),
(1556, 'Matias ', 'Marquez ', '000000000', 'undefine', ''),
(1559, 'Matias ', 'Storti', '2915274962', '', 'matias1186@hotmail.com'),
(1563, 'Pablo', 'Holzmann', '2915329204', '', 'holzmann674@gmail.com'),
(1565, 'Agustin', 'Lorenzo', '2914641237', 'undefine', 'Juan.lorenzo@transba.com.ar'),
(1568, 'Braian', 'Hermosilla', '2915121163', 'undefine', ''),
(1572, 'marcos', 'Merino', '2914185120', '', 'marcosjmerino@gmail.com'),
(1576, 'Andres', 'Rodriguez ', '2914748048', '', 'areacomercial@grupobrabo.com'),
(1578, 'Miguel', 'Maurizzi', '2914311601', 'undefine', ''),
(1580, 'Gonzalo', 'Rodriguez', '2914027811', '', 'gonjavrod@gmail.com'),
(1581, 'Joel', 'Reynoso', '2914477497', '', 'joe.reynoso14@gmail.com'),
(1583, 'Nicolas ', 'torres', '2914195643', 'undefine', ''),
(1584, 'Pedro ', 'castronuños', '2914630517', 'undefine', 'pedrojoven202@gmail.com'),
(1586, 'Naza ', 'Natalini ', '2984243255', '', 'nazanatalini@gmail.com'),
(1591, 'Matias', 'Quevedo', '2915270650', 'undefine', ''),
(1595, 'Gabriel ', 'Fernandez', '2915015925', 'undefine', ''),
(1596, 'Juan', 'Garcia', '2914329391', 'undefine', ''),
(1598, 'Patricia ', 'Figarra', ' 54 9 291 470-2261', 'undefine', ''),
(1599, 'Emiliano', 'Mondelo ', ' 54 9 291 442-2377', 'undefine', ''),
(1600, 'Cesar', 'Panduro', ' 54 9 291 422-8854', 'undefine', ''),
(1603, 'Mariano ', 'Wagner', ' 542915276544', 'undefine', ''),
(1604, 'Mario ', 'Vejar', '2915764097', 'undefine', ''),
(1605, 'Nicolas', 'Gusol', '2914797613', '', 'nicolasgusol@hotmail.com'),
(1608, 'Juan ', 'Santiago', '2914050770', '', 'santiagojuanm@hotmail.com'),
(1612, 'Martín', 'Almeida', '02915027444', '', 'martinalmeida@gmail.com'),
(1615, 'Julián', 'Fernandez', '2914469571', '', 'jf6508342@gmail.com'),
(1616, 'Mauro', 'Felix', '2915279183', '', 'felixmauroandres@outlook.es'),
(1617, 'Alexander', ' fiszman', '291 522-4780', 'undefine', ''),
(1620, 'Agus', 'Herrera', '2914259029', '', 'agustin.hah68@gmail.com'),
(1624, 'Francisco ', 'Suarez ', '2915397412', 'undefine', ''),
(1627, 'Eduardo ', 'Suarez ', '2915397412', 'undefine', ''),
(1630, 'Alan ', 'Rodriguez Heine ', '2914233410', 'undefine', 'alanrodriguezheine@gmail.com'),
(1636, 'Leandro ', 'Collinao', '2916462329', '', ''),
(1639, 'Ivan', 'Bonacorsi', '2914486924', '', 'ivanbonacorsi@hotmail.com'),
(1647, 'Tomas', 'Diaz', ' 54 9 291 419-5322', 'undefine', ''),
(1651, 'juan carlos', 'Tesei', '2914323999', 'undefine', ''),
(1653, 'Bahia ', 'Refri', '000000000', 'undefine', ''),
(1654, 'Hector ', 'Pilon', '2914762678', 'undefine', ''),
(1658, 'Santiago ', 'Cortondo ', '2914142545', '', ''),
(1659, 'Israel', 'Colihuinca', '2915101792', '', 'israelcoli95@gmail.com'),
(1660, 'Gonzalo', 'Martinsen hansen', '  54 9 291 522-5647', 'undefine', ''),
(1666, 'Enzo', 'Paglialunga', '2915134942', 'undefine', ''),
(1667, 'guillermo', 'vitale', '29154174339', 'undefine', ''),
(1670, 'Agustin ', 'Verniere ', '2914724320', '', 'agustinverniere@gmail.com'),
(1671, 'Oscar ', 'Zamponi', '2916493161', 'undefine', ''),
(1675, 'Jesus ', 'Romero ', '2914620881', 'undefine', 'jesusalbertoromeroar@gmail.com'),
(1677, 'Geronimo ', 'Visconti ', '2914607078', 'undefine', ''),
(1679, 'Damian', 'Vejar', ' 54 9 291 572-2947', 'undefine', ''),
(1680, 'Franco', 'Wesner', '2915241762', '', 'fran.busano98@gmail'),
(1683, 'Agustin', 'Dambolena', '2915271395', 'undefine', ''),
(1689, 'Cristina', 'Beroiza', '2915270650', 'undefine', ''),
(1690, 'Alfredo ', 'Cortina ', '2914485399', '', ''),
(1698, 'Nelson manuel', 'Soto', ' 54 9 291 644-2246', 'undefine', ''),
(1702, 'delfin', 'garcia', '2914538392', 'undefine', ''),
(1705, 'Ezequiel', 'Lazzaro', '34610092036', 'undefine', ''),
(1710, 'fermin', 'heredia', '2915043955', '', 'fermin.heredia.14@hotmaio.com'),
(1713, 'Maximo', 'Martino', '02914727112', '', 'mp.martino@outlook.es'),
(1714, 'Enzo ', 'Sartal', '2915098899', 'undefine', ''),
(1715, 'Maximiliamo', 'Cusat', '2915031750', 'undefine', ''),
(1722, 'Martin ', 'Carnali', '2914685190', 'undefine', ''),
(1723, 'Mati', 'Cartes', '2914671406', '', 'matias.cartes.mc@gmail.com'),
(1724, 'Federico ', 'oro', '2932521154', 'undefine', ''),
(1727, 'Leandro', 'Diaz', '2914405532', '', 'leandro.o.diaz@gmail.com'),
(1731, 'Ezequiel', 'zanches', '2914413671', 'undefine', ''),
(1734, 'hernan', 'bayer', '2914323551', '', 'hernan_bayer@hotmail.com'),
(1738, 'Joaquin ', 'Garcia ', '2983382470', 'undefine', 'joako649@gmail.com'),
(1742, 'Manuel', 'Bissi', '2975139022', '', 'manuelbissi@live.com.ar'),
(1747, 'Facundo', 'Villada', '2915033944', '', 'facugoku99@gmail.com'),
(1755, 'Agustin', 'Lorenzo', '154641237', '', 'juan.lorenzo@transba.com.ar'),
(1757, 'Javier', 'Gomez', '2920495687', 'undefine', 'Gomeznjavier@gmail.com'),
(1759, 'Martín', 'Acosta', '2914323130', '', 'acostaalvaromartin@gmail.com'),
(1760, 'alex', 'Ferner', '2915263659', 'undefine', ''),
(1761, 'Hugo ', 'Macias ', '2914143785', 'undefine', 'hugomacias1996@gmail.com'),
(1762, 'Isaias ', 'Mella ', '29154189609', 'undefine', ''),
(1764, 'Franco', 'Dambolena', '2914355709', '', 'francodambolena@gmail.com'),
(1765, 'Matin ', 'Hernandez', '000000000', 'undefine', ''),
(1769, 'Ivo', 'tapia', '2914647015', '', 'ivolotapia@gmail.cim'),
(1770, 'Guillermo', 'Pereyra', '2916447731', '', 'lulylaberiso@gmail.com'),
(1771, 'Federico ', 'Delmont ', '000000000', 'undefine', ''),
(1772, 'Ringo', 'Sanchez', '2914366223', '', 'ringosanchez8717@gmail.com'),
(1778, 'Hugo ', 'Macias ', '2914604455', 'undefine', ''),
(1781, 'Rodolfo ', 'Conte', '2914298211', 'undefine', 'rodol.conte@hotmail.com.ar'),
(1783, 'Federico', 'Benedetti', '2914237996', '', 'Fede3bene@hotmail.com'),
(1793, 'Martin', 'Garcia', '2914120188', '', 'martin_zgame@hotmail.com'),
(1794, 'Gino ', 'Bonacci', '000000000', 'undefine', ''),
(1804, 'Enzo ', 'Burgardt', '2915220404', '', 'burgardtenzo90@gmail.com'),
(1809, 'gustavo', 'arberti', '2916494502', 'undefine', ''),
(1810, 'Juan ignacio', 'Gimenez dietz', '2923447423', '', 'juanignaciogimenezdietz@gmail.com'),
(1817, 'Silvio', 'Bonora', '2915756024', 'undefine', ''),
(1821, 'Matias', 'Reginato', '2914233018', '', 'matiasreginato.ariasvw@gmail.com'),
(1823, 'Pablo', 'Silva', '2915057540', '', 'aurinegro28@hotmail.com'),
(1824, 'Jonatan ', 'block', '2915270111', 'undefine', 'blokjonatan@gmail.com'),
(1825, 'Roberto', 'Jimenez', '2915325654', '', 'rb.jimenez@hotmail.com'),
(1830, 'Enzo', 'Vejar', ' 34 610 09 20 23', 'undefine', ''),
(1832, 'tomas', 'redel', '2915043535', '', 'redeltomi0@gmail.com'),
(1833, 'Norberto', 'Hernandez', ' 1 (415) 278-3916', 'undefine', ''),
(1834, 'Alejo', 'Uslenghi', '2983507799', '', 'alejouslenghi@gmail.com'),
(1836, 'Marcos ', 'Faur ', '000000000', 'undefine', ''),
(1837, 'Martin ', 'Fernandez ', '2915037717', 'undefine', ''),
(1840, 'Juampi', 'Herrero', '2914714576', '', 'hey.juampi@hotmail.com'),
(1843, 'Lautaro ', 'Madueño ', '2914064437', '', 'maduenolautaro27@gmail.com'),
(1844, 'Lucas', 'Diez', '2915220431', 'undefine', ''),
(1846, 'Leonel', 'Gallino', '2915276769', '', 'leonelmarcosg@gmail.com'),
(1847, 'damian ', 'garro', '4550544', 'undefine', ''),
(1854, 'Mariano', 'Saucedo', '2915096725', 'undefine', ''),
(1855, 'Mariano', 'Saucedo', '2915096725', 'undefine', ''),
(1856, 'Emiliano', 'Ghidini', '2914716733', '', 'emilianoghidini@hotmail.com'),
(1857, 'Alejandro', 'Morales', '2804646289', '', 'ale_08_md@hotmail.com'),
(1858, 'Ariel ', 'comotto', ' 2915161686', 'undefine', ''),
(1859, 'Federico ', 'martirena', '2914485494', 'undefine', ''),
(1868, 'Fernando ', 'Christensen', '2914021242', 'undefine', 'Fer.christensen@hotmail.com'),
(1870, 'Luciano', 'Hamze', '2914701561', '', 'lucianohamze@gmail.com'),
(1871, 'Mauro', 'Montalba', '2915011061', '', 'mauroariel1987@hotmail.com'),
(1872, 'Juan ignacio', 'Vejar', '2915270650', 'undefine', ''),
(1873, 'leandro', 'gatica', '2914601544', 'undefine', ''),
(1875, 'Mateo', 'Torcoletti', '2915267838', 'undefine', 'candelatorcoletti0@gmail.com'),
(1876, 'Franco', 'Polla', '02995578567', '', 'francopolla10@gmail.com'),
(1881, 'Emanuel ', 'Pelegrino', '1170154888', 'undefine', 'pelligro@gmail.com'),
(1883, 'Valentin ', 'Busquet', '2914747787', 'undefine', ''),
(1888, 'Matias', 'Pou', ' 54 9 291 437-4505', 'undefine', ''),
(1889, 'Facundo ', 'Martin', '000000000', 'undefine', ''),
(1891, 'Martin ', 'Guzman ', '2915021297', 'undefine', 't181200@gmail.com'),
(1892, 'Gonzalo ', 'Antonelli', '2915261826', '', 'gonzaloantonelli@gmail.com'),
(1899, 'Nahuel ', 'Soule ', '2915068995', 'undefine', ''),
(1902, 'Guido', 'Feser', ' 54 9 291 507-3843', 'undefine', ''),
(1904, 'Julian', 'Arias', '2916468121', 'undefine', ''),
(1906, 'Nicolas ', 'Cardozo', '2914606528', 'undefine', ''),
(1907, 'Emiliano ', 'Lonsky', '2914040818', 'undefine', 'emmylonsky@gmail.com'),
(1910, 'Facundo', 'Espeche', '2932455566', '', 'faqexe@hotmail.com'),
(1914, 'Bruno', 'Meineri', '2914614226', '', 'brunom77@hotmail.com'),
(1916, 'Cristian', 'Asenjo', '2914225871', 'undefine', ''),
(1917, 'Santino', 'Dominguez', '2914139553', 'undefine', ''),
(1921, 'Franco', 'Lefiñir', '2915094684', '', 'franco.lefinir@hotmail.com'),
(1923, 'Facundo ', 'Miller', '0000000000', 'undefine', ''),
(1926, 'Matias ', 'Brito ', '2916451531', 'undefine', ''),
(1928, 'Ezequiel', 'Greer', '2914321522', 'undefine', ''),
(1931, 'Juan Cruz ', 'Martinez ', '2915272335', 'undefine', ''),
(1933, 'Koki', 'San Martin', '2915009037', 'undefine', ''),
(1935, 'Walter ', 'Sarmiento ', '2914401810', 'undefine', ''),
(1939, 'Tomas ', 'Cavalga', '2916415886', 'undefine', ''),
(1942, 'Agustin', 'Herrera ', '2915079492', '', 'hagustin310@gmail.com'),
(1943, 'Esteban ', 'Luis', '2915737582', 'undefine', ''),
(1945, 'Juampi', 'Herrero', '2914714576', '', 'hey.juampi@hotmail.com'),
(1949, 'Bautista', 'Lugarini', '3413669098', '', 'bautilugarini@gmail.com'),
(1952, 'Lucas', 'Pindave', '2914362393', '', 'lucaspindave@gmail.com'),
(1961, 'Daniel', 'Maldonado', '2915753465', 'undefine', ''),
(1964, 'Mateo ', 'Montero', ' 54 9 291 471-3584', 'undefine', ''),
(1965, 'Agustin', 'Peralta', '2916467897', '', 'ap6719613@gmail.com'),
(1966, 'Gonza', 'Campos', '2914079826', 'undefine', ''),
(1967, 'Fernando ', 'Ferrero', '2914049839', 'undefine', ''),
(1968, 'Julian', 'Suarez ', '000000000', 'undefine', ''),
(1969, 'Emanuel ', 'Marinsalta ', '2915222960', 'undefine', ''),
(1970, 'Thiago', 'Toro', '291 4749434', 'undefine', ''),
(1972, 'Santino', 'Baigorria ', '2914646957', 'undefine', ''),
(1973, 'Tomas', 'Sabatini', '2914140609', 'undefine', ''),
(1974, 'Joako', 'Altamiranda', ' 54 9 291 510-8837', 'undefine', ''),
(1979, 'Bruno', 'Montero', '2915328558', 'undefine', 'brunoo.montero@gmail.com'),
(1982, 'Luciano', 'Wener', '000000000', 'undefine', ''),
(1984, 'Joaquin ', 'Perez ', '2914490884', 'undefine', 'sansinenacssd@gmail.com'),
(1985, 'Facundo', 'Wattson', '2914721227', '', 'facuwattson96@gmail.com'),
(1987, 'Sebastián ', 'Coronel', '2915396462', 'undefine', ''),
(1993, 'Valentin', 'Riccardi', '2915122191', 'undefine', ''),
(1996, 'Juan Pablo', 'Gonzalez', '2914136727', '', 'jpgonguar@gmail.com'),
(1998, 'Martin', 'Astorga', '2920354543', '', 'martin_astorga123@hotmail.com'),
(1999, 'Gino', 'Lorelli', '2976234657', 'undefine', ''),
(2000, 'Carlos', 'Gutierrez', '2914728449', '', 'arobaral@gmail.com'),
(2001, 'Daniel ', 'Vicente ', '2916443351', 'undefine', 'danielvicente@surna.com.ar'),
(2002, 'Sergio', 'Barzola', '2914754805', '', 'sergio244sergio@gmail.com'),
(2003, 'Santiago', 'Serrano', '2932551121', '', 'santiiserrano13@gmail.com'),
(2004, 'Maria angeles', 'Cisneros', '2914185871', 'undefine', ''),
(2006, 'Tadeo', 'Stickar ', '2914378672', 'undefine', ''),
(2008, 'Eva ', 'Cassous', '2914025193', 'undefine', 'ecassous@gmail.com'),
(2009, 'Paz ', 'Murano ', '2914445524', 'undefine', 'joana.murano@outlook.es '),
(2010, 'Alejo', 'Ortega', ' 54 9 291 533-9366', 'undefine', ''),
(2013, 'Silvio', 'Marana ', '2916446064', 'undefine', ''),
(2014, 'Federico ', 'Marcelini', '2914248939', 'undefine', ''),
(2015, 'Roberte Adrian', 'Stach', '2914266882', 'undefine', ''),
(2016, 'Leonardo', 'Vigovich ', '2914406295', '', 'leonardovigovich@hotmail.com'),
(2017, 'Marcos ', 'Vogel', '2914120364', 'undefine', ''),
(2019, 'Alan', 'Rios', ' 54 9 291 461-3360', 'undefine', ''),
(2020, 'juan manuel', 'martin', '2914604688', 'undefine', 'manuchomartin@gmail.com'),
(2022, 'Luciano', 'Hamze', '291470561', '', 'lucianohamze@gmail.com'),
(2023, 'fabio', 'pallero', '291473 1189?', 'undefine', ''),
(2024, 'Joel', 'Reynoso', '2914477497', '', 'joe.reynoso14@gmail.com'),
(2025, 'Diego', 'Martinez ', '2966382841', 'undefine', 'superpepe_84@hotmail.com'),
(2027, 'nicolas ', 'gonza', '2915753619', 'undefine', 'nicolasgonza2003@yahoo.com.ar'),
(2028, 'matias', 'carabajal', '2914710944', 'undefine', 'matute1445@gmail.com'),
(2029, 'Maximiliano', 'Cirone', '2916482628', 'undefine', ''),
(2031, 'joaquin', 'maggini', '2914622182', 'undefine', ''),
(2032, 'victor hugo', 'paredes', '2914415388', 'undefine', ''),
(2034, 'Daniel', 'Chimento', '2915227853', 'undefine', 'danichimento@gmail.com'),
(2035, 'manuel', 'gerez', '2915716154', 'undefine', 'mannygerezz@gmail.com'),
(2036, 'maximiliano', 'gonzales', '2914184758', 'undefine', 'beto348348@gmail.com'),
(2037, 'Gonzalo', 'Espinoza ', '2914297505', 'undefine', ''),
(2038, 'juan manuel', 'meier', '2914607598', 'undefine', 'juanmmeier@gmail.com'),
(2039, 'Matias ', 'diaz', '2920340515', 'undefine', 'matidt95@gmail.com'),
(2040, 'nicolas', 'soto', '2914430656', 'undefine', 'soton8775@gmail.com'),
(2041, 'Baltasar', 'Domínguez', '2914746341', '', 'baltasar-7@hotmail.com'),
(2042, 'Nicanor', 'Heguilén Borel', '2914439672', '', 'nicaheguilenb@gmail.com'),
(2043, 'Emiliano', 'Gomez', '29154274906', 'undefine', ''),
(2044, 'matias ', 'carrizo', '2914266300', 'undefine', 'seloplin@gmail.com'),
(2047, 'Franco', 'Barbieri', '2915117017', '', 'francobarbieriadan@gmail.com'),
(2048, 'Leonardo', 'Vigovich ', '2914862785', '', 'leonardovigovich@hotmail.com'),
(2049, 'Martin', 'Pochon', '2914161931', '', 'martinpochon1@gmail.com'),
(2050, 'Carolina', 'Godoy', '2914491244', 'undefine', ''),
(2051, 'ignacio', 'dominguez', '2915776373', 'undefine', 'brasil1080@hotmail.com'),
(2052, 'Diego', 'Bozetti', ' 54 9 291 442-5789', 'undefine', ''),
(2053, 'GONZALO', 'ROS', '2915748589', '', 'ghros@hotmail.com'),
(2054, 'Martin', 'Gonzalez', '2923458779', 'undefine', 'martin.gonzalez90@hotmail.com'),
(2055, 'Martin', 'Gonzalez', '2923458779', 'undefine', 'martin.gonzalez90@hotmail.com'),
(2057, 'Sebastian', 'Mirabellia', '2914195512', 'undefine', ''),
(2058, 'Ezequueo', 'Martinez', '2915041998', '', 'ezemartines66@gmail.com'),
(2061, 'Sofia', 'Galarza', '2914421939', '', 'sofi_9177@hotmail.com'),
(2062, 'Gerardo', 'Fibiger', '2916424928', 'undefine', 'gerafibiger6@gmail.com'),
(2064, 'simon ', 'Kerlleñevich', '2916483038', 'undefine', 'simonkerlle03@gmail.com'),
(2065, 'Cristian', 'Falcon', '2914127180', 'undefine', ''),
(2066, 'mauro', 'rodriguez', '2914631464', 'undefine', 'maurorojo1979@hotmail.com'),
(2067, 'bautista', 'vidili', '2914757120', 'undefine', ''),
(2068, 'Facundo', 'Castro', '2914023456', 'undefine', ''),
(2069, 'dario', 'galassi', '2914194814', 'undefine', 'dario.hernan.galassi@gmail.com'),
(2070, 'Walter ', 'Gimenez ', '2916466819', 'undefine', ''),
(2071, 'Diego ', 'Fernandez ', '2914065718', 'undefine', ''),
(2072, 'Victor', 'Rivera', '2915128383', '', 'victormadryn2019@outlook.es'),
(2073, 'Ignacio', 'Astiz ', '2914685991', 'undefine', ''),
(2074, 'Gustavo ', 'Gomez ', '2914226075', 'undefine', ''),
(2076, 'Sebastian ', 'Rau', '223155609678', 'undefine', 'sebastianrau@yahoo.com.ar'),
(2077, 'Matias', 'Giusto', '154262124', '', 'mati_giusto@outlook.com'),
(2078, 'Mati', 'Domancich', '2915229437', '', 'isadelblanco@gmail.com'),
(2079, 'Alvaro', 'Richmond ', '2914680341', '', 'alvaro.richmond.95@gmail.com'),
(2081, 'Pablo ', 'Carrizo ', '2914480902', 'undefine', ''),
(2082, 'joaquin', 'Arceo ', '2915038538', '', 'joaco_vz@hotmail.com'),
(2085, 'juan ignacio', 'Garmendia', '2914625917', 'undefine', 'juanignagarmendia@gmail.com'),
(2086, 'Marcos ', 'De Maria ', '2914759293', 'undefine', ''),
(2087, 'Manuel', 'Fernandez', '2915037753', '', 'Manuelfernandez97@hotmail.com'),
(2088, 'Feliz ', 'Morales ', '2974278461', 'undefine', ''),
(2090, 'Lautaro ', 'Moran Alos', '2915260127', 'undefine', 'moranlauti@gmail.com'),
(2091, 'Matias', 'Pristupa', '2914702701', '', 'pristu9@gmail.com'),
(2092, 'Pablo ', 'Laz', '2915272780', 'undefine', ''),
(2093, 'Juan ', 'Beiran ', '2914775804', 'undefine', ''),
(2094, 'lucas ', 'fernandez ', '2914355313', 'undefine', 'lukafernandez097@gmail.com'),
(2095, 'Brandon', 'Soto', '2914467339', '', 'sotobrandon55@gmail.com'),
(2096, 'Nicolas ', 'De Beistegui', '2914412400', 'undefine', 'nicolasdebeistegui@gmail.com'),
(2097, 'faustino', 'garcia', '2914253671', 'undefine', ''),
(2098, 'Raul', 'Flores ', '2914662609', 'undefine', ''),
(2099, 'Marcelo', 'Mucucci', '154295773', '', 'marcelo_micucci@hotmail.com'),
(2100, 'Luciano', 'Lanza', '2923515729', '', 'fabrilanza@gmail.com'),
(2101, 'Emmanuel ', 'Larrosa ', '2914411354', 'undefine', 'emmanuelbraian@gmail.com'),
(2102, 'Daniel', 'Amitrano', '2914062147', '', 'damitrano15@bvconline.com.ar'),
(2103, 'Gonzalo ', 'Villar ', '2804681510', 'undefine', ''),
(2106, 'Santiago ', 'Castro', '2914236406', 'undefine', ''),
(2107, 'Sergio ', 'Martinez ', '2916487636', 'undefine', ''),
(2108, 'Julio', 'Duhalde', '154654087', '', 'julioduhalde@villanueva.com.ar'),
(2109, 'Juan Pablo', 'Montangie', '2915081166', '', 'juanpablomontangie@hotmail.com'),
(2110, 'Juan Jerónimo', 'Madueño', '4822655', '', 'geero.ramone@hotmail.com'),
(2111, 'Lucas', 'Taormina ', '2915736951', '', 'lucas.taormina99@gmail.com'),
(2113, 'Nicolas', 'Dagui', '2920287276', '', 'nicolas.dagui@hotmail.com'),
(2115, 'Aldo ', 'Cositino ', '2916463693', 'undefine', ''),
(2116, 'Benicio', 'Romano', '2914148192', '', '.'),
(2117, 'Matias', 'Campos', '2914418192', '', 'matycampos95@gmail.com'),
(2118, 'ivan', 'cardinali', '2914704912', 'undefine', ''),
(2120, 'Mximiliano ', 'Montivero ', '2914684587', 'undefine', ''),
(2121, 'Matias', 'Storti ', '291274962', '', 'matias1186@hotmail.com'),
(2122, 'Juan ', 'Schneider ', '2914296092', 'undefine', ''),
(2123, 'Nacho ', 'Holzman', '2914264165', 'undefine', 'nachoerafitness@gmail.com'),
(2124, 'Joaquin ', 'Larrandart ', '2914357434', 'undefine', ''),
(2125, 'lidia ', 'fabbi', '4535408', 'undefine', ''),
(2126, 'Matias', 'Paz', '2914634535', '', 'paz.matias@hotmail.com'),
(2127, 'Martin ', 'Sanchez ', '2914123444', 'undefine', ''),
(2128, 'Julian ', 'Juarez', '000000000', 'undefine', ''),
(2129, 'Luis ', 'Villablanca ', '2915247484', '', ''),
(2130, 'Tomas ', 'Molina ', '000000000', 'undefine', ''),
(2131, 'Andres ', 'Orioli', '000000000', 'undefine', ''),
(2132, 'Juan', 'Antonello', '000000000', 'undefine', ''),
(2133, 'Facundo', 'Galli', '2914443706', '', 'gallifacundomartin@gmail.com'),
(2135, 'Facundo', 'La Grotta', '2915075521', '', 'faculagrotta@hotmail.com'),
(2139, 'Valentin ', 'Sard', '000000000', 'undefine', ''),
(2140, 'fernando', 'sartal', '2914272274', 'undefine', 'sartalfernando@hotmail.com'),
(2141, 'juan jose ', 'ayala', '3794755009', 'undefine', 'juanjodeita_613@hotmail.com'),
(2142, 'Nicolas ', 'Mancini', '2914470133', 'undefine', 'nicolas_mancini93@hotmail.com'),
(2144, 'Agustin ', 'Dukart', '2915249665', 'undefine', ''),
(2145, 'Nicolas ', 'Alcantara ', '2804195688', '', ''),
(2146, 'Diego', 'Larez', '2954823950', '', 'dlarez66@gmail.com'),
(2147, 'Joaquin ', 'Sanchez ', '2932542906', 'undefine', 'joacosan1992@gmail.com'),
(2148, 'Ivan ', 'Alarcon', '2914269657', '', '40809941ivan@gmail.com'),
(2149, 'Agustin', 'Muñoz', '000000000', 'undefine', ''),
(2150, 'Marcia', 'Nieto', '2915202848', '', 'xeroximpresiones@gmail.com'),
(2151, 'Tomás ', 'Iturrioz ', '2920652242', '', 'tomas_iturrioz@hotmail.com'),
(2152, 'nicolas', 'insabraldis', '2915223450', 'undefine', 'nicolas.ni792@gmail.com'),
(2153, 'Sebastian ', 'Diaz ', '2914755496', 'undefine', 'Diazsebastian213@gmail.com'),
(2154, 'Marcelo ', 'Rodriguez ', '2915006407', '', 'marcelohrodriguez@hotmail.com'),
(2155, 'Juan pedro', 'Sanchez', '2923432051', 'undefine', ''),
(2156, 'federico', 'guadarrama', '2911557138', 'undefine', ''),
(2157, 'Juan', 'Skolak', '154737123', '', 'jmskolak@gmail.com'),
(2160, 'Juan Carlos ', 'Mayer ', '2914460734', 'undefine', ''),
(2161, 'Manuel ', 'Juarez ', '2922412000', 'undefine', ''),
(2162, 'Pablo', 'Silva', '2914238587', '', 'pablomartinos74@gmail.com'),
(2163, 'Julian', 'Zarzoso', '2914052249', '', 'julian_liniers@hotmail.com'),
(2164, 'Andres ', 'Vejar ', '2915337272', '', ''),
(2165, 'Bruno', 'Cruz ', '2914648128', 'undefine', ''),
(2167, 'Javier ', 'Garaban', '2915044425', 'undefine', ''),
(2168, 'Matías', 'Segui', '2914076638', '', 'matias.segui@hotmail.com'),
(2169, 'Conrado', 'Uslenghi', '2983464966', '', 'conrauslenghi@gmail.com'),
(2170, 'Tomás ', 'Simani', '2983603920', '', 'simanitomas@gmail.com'),
(2171, 'Joaquin ', 'Arceo ', '291538538', '', 'joaco_vz@hotmail.com'),
(2172, 'Nahuel', 'Vazquez', '2984243675', '', 'nahuelvazquez10@outlook.com'),
(2173, 'joaquin ', 'herrera ', '2915735642', 'undefine', ''),
(2175, 'Lautaro ', 'Gonzales ', '2914183705', '', ''),
(2176, 'Juan Igancio', 'Tsausognlu', '291576713', '', ''),
(2177, 'Malena', 'Salgado', '2914411897', 'undefine', 'Malena.salgado@hotmail.com'),
(2178, 'gonzalo ', 'Schwam', '2914784333', 'undefine', 'gonzischwa@gmail.com'),
(2179, 'Jorge ', 'Bambaci ', '2915779787', 'undefine', ''),
(2181, 'Gonzalo ', 'Prieto', '2915225708', 'undefine', 'gonzaloprieto3313@gmail.com'),
(2182, 'Emanuel ', 'Norambuena', '2914631569', '', 'Emanuelnorambuena12@hotmail.com'),
(2183, 'Walter ', 'Cesetti ', '2914227253', '', 'waltercesetti@gmail.com'),
(2185, 'matias', 'barbosa', '2984920025', 'undefine', 'matias21_1997@hotmail.com'),
(2187, 'sebastian ', 'verna', '2915740600', 'undefine', ''),
(2188, 'Fernando', 'Allende', '2915705659', '', 'ferchoallende@gmail.com'),
(2189, 'Pablo', 'Carrizo', '0291154480902', '', 'pablo_poc@hotmail.com'),
(2191, 'Agustin ', 'Monte de Oca ', '2914396782', 'undefine', ''),
(2192, 'Gabriel ', 'Quipildor ', '3875615123', '', ''),
(2193, 'Marcos', 'Samuel', '2914149700', 'undefine', ''),
(2195, 'Facundo ', 'Namuz ', '2915084001', 'undefine', 'facu.namuz@gmail.com'),
(2196, 'Agustin ', 'Reyes ', '2916469984', 'undefine', 'agus_reyes@hotmail.com'),
(2199, 'Lucas', 'Dalmau', '2915162667', '', 'lucasdalmau18@gmail.com'),
(2201, 'carlos', 'escamilla', '2916425129', 'undefine', ''),
(2202, 'Bruno ', 'Parodi ', '2916482814', 'undefine', ''),
(2203, 'client ', 'nn', '2121212', '12121212', 'nn@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hours_calendar`
--

CREATE TABLE `hours_calendar` (
  `id` int(11) NOT NULL,
  `min_hour_calendar` time NOT NULL,
  `max_hour_calendar` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `hours_calendar`
--

INSERT INTO `hours_calendar` (`id`, `min_hour_calendar`, `max_hour_calendar`) VALUES
(1, '08:00:00', '19:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios`
--

CREATE TABLE `servicios` (
  `id` int(10) NOT NULL,
  `name_service` varchar(50) NOT NULL,
  `price_service` varchar(50) NOT NULL,
  `minutes_service` varchar(50) NOT NULL,
  `event_color` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `servicios`
--

INSERT INTO `servicios` (`id`, `name_service`, `price_service`, `minutes_service`, `event_color`) VALUES
(1, 'Turno 1hss', '$500.00', '30', '#0c36df'),
(2, 'Media Hora', '$1,400.00', '30', '#343f0e'),
(3, 'Inactivo', '$1,250.00', '60', '#85867e'),
(5, 'dadwdwad', '$1,300.00', '90', '#927272'),
(6, 'nuevo', '$34.34', '30', '#000000');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turnos`
--

CREATE TABLE `turnos` (
  `id` int(11) NOT NULL,
  `fecha_reserva` date NOT NULL,
  `fecha_reserva_creada` date NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `cliente_id` int(11) NOT NULL,
  `barber_id` int(11) NOT NULL,
  `service_id` int(11) NOT NULL,
  `price_service` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `turnos`
--

INSERT INTO `turnos` (`id`, `fecha_reserva`, `fecha_reserva_creada`, `start_date`, `end_date`, `cliente_id`, `barber_id`, `service_id`, `price_service`) VALUES
(108, '2024-05-15', '2024-05-16', '2024-05-15 08:00:00', '2024-05-15 08:30:00', 5, 46, 2, '$1,400.00'),
(237, '2024-05-17', '2024-05-17', '2024-05-23 13:30:00', '2024-05-23 14:30:00', 1, 47, 3, '$500.00'),
(239, '2024-05-17', '2024-05-17', '2024-05-23 14:30:00', '2024-05-23 15:00:00', 1, 47, 1, '$500.00'),
(240, '2024-05-18', '2024-05-18', '2024-05-24 10:00:00', '2024-05-24 10:30:00', 1, 47, 1, '$500.00'),
(241, '2024-05-18', '2024-05-18', '2024-05-24 10:30:00', '2024-05-24 11:00:00', 1, 47, 1, '$500.00'),
(242, '2024-05-18', '2024-05-18', '2024-05-24 11:00:00', '2024-05-24 11:30:00', 1, 47, 1, '$500.00'),
(243, '2024-05-18', '2024-05-18', '2024-05-24 11:30:00', '2024-05-24 12:00:00', 1, 47, 1, '$500.00'),
(244, '2024-05-18', '2024-05-18', '2024-05-24 12:00:00', '2024-05-24 12:30:00', 1, 47, 1, '$500.00'),
(245, '2024-05-18', '2024-05-18', '2024-05-24 12:30:00', '2024-05-24 13:00:00', 1, 47, 1, '$500.00'),
(246, '2024-05-18', '2024-05-18', '2024-05-24 13:00:00', '2024-05-24 13:30:00', 1, 47, 1, '$500.00'),
(247, '2024-05-18', '2024-05-18', '2024-05-24 13:30:00', '2024-05-24 14:00:00', 1, 47, 1, '$500.00'),
(248, '2024-05-18', '2024-05-18', '2024-05-24 14:00:00', '2024-05-24 14:30:00', 1, 47, 1, '$500.00'),
(249, '2024-05-18', '2024-05-18', '2024-05-24 14:30:00', '2024-05-24 15:00:00', 1, 47, 1, '$500.00'),
(250, '2024-05-19', '2024-05-19', '2024-05-25 10:00:00', '2024-05-25 10:30:00', 1, 47, 1, '$500.00'),
(251, '2024-05-19', '2024-05-19', '2024-05-25 10:30:00', '2024-05-25 11:00:00', 1, 47, 1, '$500.00'),
(252, '2024-05-19', '2024-05-19', '2024-05-25 11:00:00', '2024-05-25 11:30:00', 1, 47, 1, '$500.00'),
(253, '2024-05-19', '2024-05-19', '2024-05-25 11:30:00', '2024-05-25 12:00:00', 1, 47, 1, '$500.00'),
(254, '2024-05-19', '2024-05-19', '2024-05-25 12:00:00', '2024-05-25 12:30:00', 1, 47, 1, '$500.00'),
(255, '2024-05-19', '2024-05-19', '2024-05-25 12:30:00', '2024-05-25 13:00:00', 1, 47, 1, '$500.00'),
(256, '2024-05-19', '2024-05-19', '2024-05-25 13:00:00', '2024-05-25 13:30:00', 1, 47, 1, '$500.00'),
(257, '2024-05-19', '2024-05-19', '2024-05-25 13:30:00', '2024-05-25 14:00:00', 1, 47, 1, '$500.00'),
(258, '2024-05-19', '2024-05-19', '2024-05-25 14:00:00', '2024-05-25 14:30:00', 1, 47, 1, '$500.00'),
(259, '2024-05-19', '2024-05-19', '2024-05-25 14:30:00', '2024-05-25 15:00:00', 1, 47, 1, '$500.00'),
(260, '2024-05-20', '2024-05-20', '2024-05-26 10:00:00', '2024-05-26 10:30:00', 1, 47, 1, '$500.00'),
(261, '2024-05-20', '2024-05-20', '2024-05-26 10:30:00', '2024-05-26 11:00:00', 1, 47, 1, '$500.00'),
(262, '2024-05-20', '2024-05-20', '2024-05-26 11:00:00', '2024-05-26 11:30:00', 1, 47, 1, '$500.00'),
(263, '2024-05-20', '2024-05-20', '2024-05-26 11:30:00', '2024-05-26 12:00:00', 1, 47, 1, '$500.00'),
(264, '2024-05-20', '2024-05-20', '2024-05-26 12:00:00', '2024-05-26 12:30:00', 1, 47, 1, '$500.00'),
(265, '2024-05-20', '2024-05-20', '2024-05-26 12:30:00', '2024-05-26 13:00:00', 1, 47, 1, '$500.00'),
(266, '2024-05-20', '2024-05-20', '2024-05-26 13:00:00', '2024-05-26 13:30:00', 1, 47, 1, '$500.00'),
(267, '2024-05-20', '2024-05-20', '2024-05-26 13:30:00', '2024-05-26 14:00:00', 1, 47, 1, '$500.00'),
(268, '2024-05-20', '2024-05-20', '2024-05-26 14:00:00', '2024-05-26 14:30:00', 1, 47, 1, '$500.00'),
(269, '2024-05-20', '2024-05-20', '2024-05-26 14:30:00', '2024-05-26 15:00:00', 1, 47, 1, '$500.00'),
(270, '2024-05-21', '2024-05-21', '2024-05-27 10:00:00', '2024-05-27 10:30:00', 1, 47, 1, '$500.00'),
(271, '2024-05-21', '2024-05-21', '2024-05-27 10:30:00', '2024-05-27 11:00:00', 1, 47, 1, '$500.00'),
(272, '2024-05-21', '2024-05-21', '2024-05-27 11:00:00', '2024-05-27 11:30:00', 1, 47, 1, '$500.00'),
(273, '2024-05-21', '2024-05-21', '2024-05-27 11:30:00', '2024-05-27 12:00:00', 1, 47, 1, '$500.00'),
(274, '2024-05-21', '2024-05-21', '2024-05-27 12:00:00', '2024-05-27 12:30:00', 1, 47, 1, '$500.00'),
(275, '2024-05-21', '2024-05-21', '2024-05-27 12:30:00', '2024-05-27 13:00:00', 1, 47, 1, '$500.00'),
(276, '2024-05-21', '2024-05-21', '2024-05-27 13:00:00', '2024-05-27 13:30:00', 1, 47, 1, '$500.00'),
(277, '2024-05-21', '2024-05-21', '2024-05-27 13:30:00', '2024-05-27 14:00:00', 1, 47, 1, '$500.00'),
(278, '2024-05-21', '2024-05-21', '2024-05-27 14:00:00', '2024-05-27 14:30:00', 1, 47, 1, '$500.00'),
(279, '2024-05-21', '2024-05-21', '2024-05-27 14:30:00', '2024-05-27 15:00:00', 1, 47, 1, '$500.00'),
(280, '2024-05-15', '2024-05-16', '2024-05-15 08:30:00', '2024-05-15 09:00:00', 1, 46, 2, '$1,400.00'),
(282, '2024-05-22', '2024-05-21', '2024-05-22 10:00:00', '2024-05-22 11:00:00', 4, 47, 3, '$1,300.00'),
(283, '2024-05-21', '2024-05-21', '2024-05-21 09:00:00', '2024-05-21 09:30:00', 5, 47, 2, '$500.00'),
(284, '2024-05-23', '2024-05-23', '2024-05-23 08:00:00', '2024-05-23 09:30:00', 5, 46, 5, '$1,300.00'),
(285, '2024-05-29', '2024-05-28', '2024-05-29 08:00:00', '2024-05-29 09:00:00', 2203, 46, 3, '$500.00'),
(286, '2024-06-05', '2024-06-03', '2024-06-05 08:00:00', '2024-06-05 08:30:00', 1, 46, 2, '$1,400.00'),
(287, '2024-06-05', '2024-06-03', '2024-06-05 08:30:00', '2024-06-05 10:00:00', 5, 46, 5, '$1,300.00'),
(288, '2024-06-05', '2024-06-03', '2024-06-05 10:00:00', '2024-06-05 10:30:00', 7, 46, 1, '$1,250.00'),
(289, '2024-06-05', '2024-06-03', '2024-06-05 11:00:00', '2024-06-05 11:30:00', 6, 46, 2, '$1,400.00'),
(290, '2024-06-05', '2024-06-03', '2024-06-05 10:30:00', '2024-06-05 11:00:00', 8, 46, 2, '$1,400.00'),
(291, '2024-06-05', '2024-06-04', '2024-06-05 11:30:00', '2024-06-05 12:30:00', 6, 46, 3, '$1,250.00'),
(292, '2024-06-05', '2024-06-04', '2024-06-05 12:30:00', '2024-06-05 13:30:00', 7, 46, 3, '$1,250.00'),
(293, '2024-06-06', '2024-06-04', '2024-06-06 08:30:00', '2024-06-06 10:00:00', 8, 46, 5, '$1,300.00'),
(294, '2024-06-06', '2024-06-04', '2024-06-06 11:30:00', '2024-06-06 12:00:00', 24, 46, 1, '$500.00'),
(295, '2024-06-06', '2024-06-04', '2024-06-06 12:00:00', '2024-06-06 12:30:00', 5, 46, 1, '$500.00'),
(296, '2024-06-06', '2024-06-04', '2024-06-06 12:30:00', '2024-06-06 13:00:00', 4, 46, 1, '$500.00'),
(297, '2024-06-06', '2024-06-04', '2024-06-06 10:00:00', '2024-06-06 11:00:00', 70, 46, 3, '$1,250.00'),
(298, '2024-06-07', '2024-06-04', '2024-06-07 08:30:00', '2024-06-07 10:00:00', 5, 46, 5, '$1,300.00'),
(299, '2024-06-07', '2024-06-04', '2024-06-07 10:00:00', '2024-06-07 11:00:00', 5, 46, 3, '$1,250.00'),
(300, '2024-06-07', '2024-06-04', '2024-06-07 11:00:00', '2024-06-07 11:30:00', 5, 46, 2, '$1,400.00'),
(301, '2024-06-07', '2024-06-04', '2024-06-07 11:30:00', '2024-06-07 12:00:00', 6, 46, 2, '$1,400.00'),
(302, '2024-06-07', '2024-06-04', '2024-06-07 12:30:00', '2024-06-07 13:00:00', 5, 46, 2, '$1,400.00'),
(303, '2024-06-06', '2024-06-04', '2024-06-06 13:30:00', '2024-06-06 14:30:00', 7, 46, 3, '$1,250.00'),
(304, '2024-06-07', '2024-06-04', '2024-06-07 14:30:00', '2024-06-07 15:00:00', 7, 46, 2, '$1,400.00'),
(307, '2024-06-09', '2024-06-04', '2024-06-09 08:30:00', '2024-06-09 09:00:00', 6, 46, 2, '$1,400.00'),
(308, '2024-06-09', '2024-06-04', '2024-06-09 09:30:00', '2024-06-09 10:00:00', 6, 46, 1, '$500.00'),
(309, '2024-06-05', '2024-06-04', '2024-06-05 14:30:00', '2024-06-05 15:00:00', 5, 46, 1, '$500.00'),
(310, '2024-06-09', '2024-06-04', '2024-06-09 09:00:00', '2024-06-09 09:30:00', 5, 46, 2, '$1,400.00'),
(311, '2024-06-09', '2024-06-04', '2024-06-09 10:00:00', '2024-06-09 11:30:00', 6, 46, 5, '$1,300.00'),
(314, '2024-06-08', '2024-06-04', '2024-06-08 09:00:00', '2024-06-08 09:30:00', 6, 46, 2, '$1,400.00'),
(315, '2024-06-08', '2024-06-05', '2024-06-08 09:30:00', '2024-06-08 10:00:00', 5, 46, 2, '$1,400.00'),
(316, '2024-06-08', '2024-06-05', '2024-06-08 08:30:00', '2024-06-08 09:00:00', 4, 46, 2, '$1,400.00'),
(317, '2024-06-08', '2024-06-05', '2024-06-08 10:00:00', '2024-06-08 10:30:00', 4, 46, 2, '$1,400.00'),
(318, '2024-06-08', '2024-06-05', '2024-06-08 10:30:00', '2024-06-08 11:30:00', 5, 46, 3, '$1,250.00'),
(319, '2024-06-08', '2024-06-05', '2024-06-08 11:30:00', '2024-06-08 12:00:00', 4, 46, 1, '$500.00'),
(320, '2024-06-08', '2024-06-05', '2024-06-08 12:00:00', '2024-06-08 12:30:00', 4, 46, 2, '$1,400.00'),
(321, '2024-06-07', '2024-06-05', '2024-06-07 12:00:00', '2024-06-07 12:30:00', 1, 46, 1, '$500.00'),
(322, '2024-06-06', '2024-06-05', '2024-06-06 11:00:00', '2024-06-06 11:30:00', 6, 46, 2, '$1,400.00'),
(323, '2024-06-06', '2024-06-05', '2024-06-06 14:30:00', '2024-06-06 15:30:00', 6, 46, 3, '$1,250.00'),
(324, '2024-06-06', '2024-06-05', '2024-06-06 13:00:00', '2024-06-06 13:30:00', 5, 46, 1, '$500.00'),
(325, '2024-06-07', '2024-06-05', '2024-06-07 13:00:00', '2024-06-07 14:30:00', 62, 46, 5, '$1,300.00'),
(326, '2024-06-04', '2024-06-05', '2024-06-04 08:00:00', '2024-06-04 08:30:00', 1, 46, 1, '$500.00'),
(327, '2024-06-04', '2024-06-05', '2024-06-04 08:30:00', '2024-06-04 09:00:00', 5, 46, 2, '$1,400.00'),
(328, '2024-06-04', '2024-06-05', '2024-06-04 09:00:00', '2024-06-04 09:30:00', 4, 46, 2, '$1,400.00'),
(329, '2024-06-04', '2024-06-05', '2024-06-04 09:30:00', '2024-06-04 10:00:00', 4, 46, 2, '$1,400.00'),
(330, '2024-06-06', '2024-06-05', '2024-06-06 08:00:00', '2024-06-06 08:30:00', 5, 46, 1, '$500.00'),
(332, '2024-06-07', '2024-06-05', '2024-06-07 08:00:00', '2024-06-07 08:30:00', 1, 46, 1, '$500.00'),
(334, '2024-06-08', '2024-06-05', '2024-06-08 08:00:00', '2024-06-08 08:30:00', 5, 46, 2, '$1,400.00'),
(335, '2024-06-09', '2024-06-05', '2024-06-09 08:00:00', '2024-06-09 08:30:00', 1, 46, 1, '$500.00'),
(336, '2024-06-09', '2024-06-05', '2024-06-09 12:00:00', '2024-06-09 12:30:00', 5, 46, 1, '$500.00'),
(337, '2024-06-09', '2024-06-05', '2024-06-09 11:30:00', '2024-06-09 12:00:00', 4, 46, 2, '$1,400.00'),
(338, '2024-06-05', '2024-06-05', '2024-06-05 14:00:00', '2024-06-05 14:30:00', 4, 46, 2, '$1,400.00'),
(339, '2024-06-04', '2024-06-05', '2024-06-04 12:30:00', '2024-06-04 13:00:00', 1, 46, 1, '$500.00'),
(340, '2024-06-03', '2024-06-05', '2024-06-03 12:00:00', '2024-06-03 12:30:00', 1, 46, 1, '$500.00'),
(341, '2024-06-12', '2024-06-10', '2024-06-12 08:00:00', '2024-06-12 08:30:00', 1, 46, 2, '$1,400.00'),
(342, '2024-06-12', '2024-06-10', '2024-06-12 09:00:00', '2024-06-12 10:00:00', 6, 46, 3, '$1,250.00'),
(343, '2024-06-13', '2024-06-10', '2024-06-13 08:00:00', '2024-06-13 09:30:00', 4, 46, 5, '$1,300.00'),
(344, '2024-06-13', '2024-06-10', '2024-06-13 10:00:00', '2024-06-13 11:30:00', 8, 46, 5, '$1,300.00'),
(345, '2024-06-13', '2024-06-10', '2024-06-13 09:30:00', '2024-06-13 10:00:00', 4, 46, 1, '$500.00'),
(346, '2024-06-12', '2024-06-10', '2024-06-12 11:00:00', '2024-06-12 11:30:00', 24, 46, 2, '$1,400.00'),
(347, '2024-06-12', '2024-06-10', '2024-06-12 10:00:00', '2024-06-12 10:30:00', 6, 46, 6, '$34.34');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_sistema`
--

CREATE TABLE `usuarios_sistema` (
  `id` int(11) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(500) NOT NULL,
  `is_barber` int(1) NOT NULL,
  `is_admin` int(1) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `url_image` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios_sistema`
--

INSERT INTO `usuarios_sistema` (`id`, `firstName`, `lastName`, `email`, `password`, `is_barber`, `is_admin`, `fecha_creacion`, `url_image`) VALUES
(31, 'franco', 'beratz', 'francoberatz.fb@gmail.com', '$2b$10$yBJbo4SanTSJFsjBmVQjvegmqQYvNqkdP2EKxolYt8YEcoyMDx.Gm', 1, 1, '2024-05-16 13:58:30', 'uploads/imageBarbers/WhatsApp Image 2024-04-07 at 13.31.35.jpg'),
(32, 'usuario', 'comun', 'usercomun@gmail.com', '$2b$10$NNMmgGeRT8xHuvRdBbOnKu0jiklb9KgUIKLYl3SaoORjz3S0GfPl6', 1, 0, '2024-05-17 11:41:31', 'uploads/profile.png'),
(34, 'Barbero', 'Professional', 'emaail@gmail.com', '$2b$10$ETJ64DlOo5hBOVCKrIxy8ukxgWIdrLusL4reZLGM4QuL/vBEYAFEu', 1, 1, '2024-06-05 16:30:54', 'uploads/profile.png'),
(39, 'usuario', 'priemro', 'francoberatz.fb1@gmail.com', '$2b$10$sknzBL/yJjIhWLjpi5h0JO/W3.jNZnHaCzM5o5kGVjE69vAGYyZn6', 0, 1, '2024-06-06 10:51:25', 'uploads/profile.png'),
(40, 'francowwww', 'beratzz', 'francoberatz.fb1@gmail.com', '$2b$10$w6J.6irIDCv47d74rx2xCuGQH.WBR5sOcpjitJuDp787wSaRniiKC', 0, 0, '2024-06-07 15:59:18', 'uploads/profile.png');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `barberos`
--
ALTER TABLE `barberos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `hours_calendar`
--
ALTER TABLE `hours_calendar`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `servicios`
--
ALTER TABLE `servicios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `turnos`
--
ALTER TABLE `turnos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cliente_id` (`cliente_id`),
  ADD KEY `barber_id` (`barber_id`),
  ADD KEY `service_id` (`service_id`);

--
-- Indices de la tabla `usuarios_sistema`
--
ALTER TABLE `usuarios_sistema`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `barberos`
--
ALTER TABLE `barberos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2204;

--
-- AUTO_INCREMENT de la tabla `hours_calendar`
--
ALTER TABLE `hours_calendar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `servicios`
--
ALTER TABLE `servicios`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `turnos`
--
ALTER TABLE `turnos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=348;

--
-- AUTO_INCREMENT de la tabla `usuarios_sistema`
--
ALTER TABLE `usuarios_sistema`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `turnos`
--
ALTER TABLE `turnos`
  ADD CONSTRAINT `turnos_ibfk_1` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `turnos_ibfk_2` FOREIGN KEY (`service_id`) REFERENCES `servicios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `turnos_ibfk_3` FOREIGN KEY (`barber_id`) REFERENCES `barberos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
