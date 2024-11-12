-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: ropa__route
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `favoritos`
--

DROP TABLE IF EXISTS `favoritos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favoritos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idTienda` int DEFAULT NULL,
  `idUser` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idTienda` (`idTienda`),
  KEY `idUser` (`idUser`),
  CONSTRAINT `favoritos_ibfk_1` FOREIGN KEY (`idTienda`) REFERENCES `tienda` (`idTienda`),
  CONSTRAINT `favoritos_ibfk_2` FOREIGN KEY (`idUser`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favoritos`
--

LOCK TABLES `favoritos` WRITE;
/*!40000 ALTER TABLE `favoritos` DISABLE KEYS */;
/*!40000 ALTER TABLE `favoritos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ropa`
--

DROP TABLE IF EXISTS `ropa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ropa` (
  `idRopa` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `sexo` varchar(100) DEFAULT NULL,
  `tallas` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`idRopa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ropa`
--

LOCK TABLES `ropa` WRITE;
/*!40000 ALTER TABLE `ropa` DISABLE KEYS */;
/*!40000 ALTER TABLE `ropa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ropa_tienda`
--

DROP TABLE IF EXISTS `ropa_tienda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ropa_tienda` (
  `idVenta` int NOT NULL AUTO_INCREMENT,
  `idRopa` int DEFAULT NULL,
  `idTienda` int DEFAULT NULL,
  PRIMARY KEY (`idVenta`),
  KEY `idRopa` (`idRopa`),
  KEY `idTienda` (`idTienda`),
  CONSTRAINT `ropa_tienda_ibfk_1` FOREIGN KEY (`idRopa`) REFERENCES `ropa` (`idRopa`),
  CONSTRAINT `ropa_tienda_ibfk_2` FOREIGN KEY (`idTienda`) REFERENCES `tienda` (`idTienda`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ropa_tienda`
--

LOCK TABLES `ropa_tienda` WRITE;
/*!40000 ALTER TABLE `ropa_tienda` DISABLE KEYS */;
/*!40000 ALTER TABLE `ropa_tienda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tienda`
--

DROP TABLE IF EXISTS `tienda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tienda` (
  `idTienda` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `ubicacion` varchar(100) DEFAULT NULL,
  `telefono` int DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `idVendedor` int DEFAULT NULL,
  PRIMARY KEY (`idTienda`),
  KEY `idVendedor` (`idVendedor`),
  CONSTRAINT `tienda_ibfk_1` FOREIGN KEY (`idVendedor`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tienda`
--

LOCK TABLES `tienda` WRITE;
/*!40000 ALTER TABLE `tienda` DISABLE KEYS */;
INSERT INTO `tienda` VALUES (1,'tacos el yisus 33','qqqqq',NULL,'qeqe',12),(2,'tacos','qqqqq',NULL,'qeqe',2),(3,'qqqq','qqq',NULL,NULL,1),(4,'qqqq','qqq',NULL,'qqq',1),(6,'Los tacos el wero','aqui',NULL,'Los mejores tacos de moroleon',13),(7,'saaaa','saaaa',223323,'saaaa',12),(9,'Tienda ABCD','Leovino Zavala #15',123456789,'La ropa mas barata',18);
/*!40000 ALTER TABLE `tienda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `rol` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,NULL,NULL,'12345','calle 1','Comprador'),(2,'uli','e@gmail.com','123','direccion','Vendedor'),(3,'uli','e@gmail.com','#11','direccion','Vendedor'),(4,NULL,'ejemplo@gmail.com','12345','calle 2','Vendedor'),(5,NULL,'jano@gmail.com','999','calle 3','Comprador'),(6,'rulas','rulas@gmail.com','777','calle 777','Comprador'),(7,'user12','user12@gmail.com','user12','dir werwerwhhhfjf','Comprador'),(8,'bicho','bicho@gmail.com','111111111','siuuuu','Comprador'),(9,'holamundo','hol@gmail.com','hola123:)','oeooeooeoeooe','Comprador'),(10,'holamundo1','hol@gmail.com','hola123:)111','eeeeee','Comprador'),(11,'ulixandor','u@gmail.com','12','sqdaas','Comprador'),(12,'ulixandor2','adasddasda','13','adadsaaad','Vendedor'),(13,'vendedor1','vendedor@gmail.com','123','hghgjfgjhg','Vendedor'),(14,'lalo1540','s21129171@gmail.com','1234567890','municipio libre 122 la joyita','Comprador'),(15,'','','','','Vendedor'),(16,'','','','','Vendedor'),(17,'Leo','leo@gmail.com','123','aaaaa','Vendedor'),(18,'Ulises','ulises@gmail.com','123456','Calle centro','Comprador'),(19,'ulises','ulises@gmail.com','123456','dddd','Vendedor');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'ropa__route'
--

--
-- Dumping routines for database 'ropa__route'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-29 18:39:16
