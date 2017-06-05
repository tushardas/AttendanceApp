-- MySQL dump 10.13  Distrib 5.7.18, for Linux (x86_64)
--
-- Host: localhost    Database: AttendanceProject
-- ------------------------------------------------------
-- Server version	5.7.18-0ubuntu0.17.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Attendance`
--

DROP TABLE IF EXISTS `Attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Attendance` (
  `AttendanceId` int(11) NOT NULL AUTO_INCREMENT,
  `RegNo` varchar(45) NOT NULL,
  `TeacherId` int(11) DEFAULT NULL,
  `CourseId` int(11) NOT NULL,
  `Course_DepartmentNumber` int(11) NOT NULL,
  `TotalAttended` int(11) DEFAULT NULL,
  `TotalClass` int(11) DEFAULT NULL,
  PRIMARY KEY (`AttendanceId`,`RegNo`,`CourseId`,`Course_DepartmentNumber`),
  KEY `fk_Student_has_Course_Course1_idx` (`CourseId`,`Course_DepartmentNumber`),
  KEY `fk_Student_has_Course_Student1_idx` (`RegNo`),
  KEY `TeacherId` (`TeacherId`),
  KEY `Course_DepartmentNumber` (`Course_DepartmentNumber`),
  CONSTRAINT `Attendance_ibfk_1` FOREIGN KEY (`RegNo`) REFERENCES `Student` (`RegNo`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Attendance_ibfk_2` FOREIGN KEY (`TeacherId`) REFERENCES `Teacher` (`TeacherId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Attendance_ibfk_3` FOREIGN KEY (`CourseId`) REFERENCES `Course` (`CourseId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Attendance_ibfk_4` FOREIGN KEY (`Course_DepartmentNumber`) REFERENCES `Course` (`DepartmentNumber`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Student_has_Course_Course1` FOREIGN KEY (`CourseId`, `Course_DepartmentNumber`) REFERENCES `Course` (`CourseId`, `DepartmentNumber`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Student_has_Course_Student1` FOREIGN KEY (`RegNo`) REFERENCES `Student` (`RegNo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Attendance`
--

LOCK TABLES `Attendance` WRITE;
/*!40000 ALTER TABLE `Attendance` DISABLE KEYS */;
INSERT INTO `Attendance` VALUES (1,'14GAEC9062',1,1,1,14,22),(6,'14GAEC9062',2,2,1,5,9),(7,'14GAEC9062',3,6,1,8,11),(8,'14GAEC9062',4,4,1,8,10),(9,'14GAEC9062',5,5,1,18,20),(10,'14GAEC9062',6,3,1,9,20);
/*!40000 ALTER TABLE `Attendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Course`
--

DROP TABLE IF EXISTS `Course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Course` (
  `CourseId` int(11) NOT NULL AUTO_INCREMENT,
  `CourseName` varchar(45) NOT NULL,
  `Sem` int(11) NOT NULL,
  `DepartmentNumber` int(11) NOT NULL,
  PRIMARY KEY (`CourseId`,`DepartmentNumber`),
  KEY `fk_Course_Department1_idx` (`DepartmentNumber`),
  CONSTRAINT `Course_ibfk_1` FOREIGN KEY (`DepartmentNumber`) REFERENCES `Department` (`DepartmentNumber`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Course_ibfk_2` FOREIGN KEY (`DepartmentNumber`) REFERENCES `Department` (`DepartmentNumber`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Course_Department1` FOREIGN KEY (`DepartmentNumber`) REFERENCES `Department` (`DepartmentNumber`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Course_Department1_idx` FOREIGN KEY (`DepartmentNumber`) REFERENCES `Department` (`DepartmentNumber`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Course`
--

LOCK TABLES `Course` WRITE;
/*!40000 ALTER TABLE `Course` DISABLE KEYS */;
INSERT INTO `Course` VALUES (1,'System Software',6,1),(2,'Computer Networks II',6,1),(3,'Probability and Stoichastic Process',6,1),(4,'Data Mining',6,1),(5,'Artificial Intelligence',6,1),(6,'Unix System Programming',6,1);
/*!40000 ALTER TABLE `Course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Department`
--

DROP TABLE IF EXISTS `Department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Department` (
  `DepartmentNumber` int(11) NOT NULL AUTO_INCREMENT,
  `DepartmentName` varchar(45) NOT NULL,
  PRIMARY KEY (`DepartmentNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Department`
--

LOCK TABLES `Department` WRITE;
/*!40000 ALTER TABLE `Department` DISABLE KEYS */;
INSERT INTO `Department` VALUES (1,'ComputerScience');
/*!40000 ALTER TABLE `Department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Student`
--

DROP TABLE IF EXISTS `Student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Student` (
  `RegNo` varchar(45) NOT NULL,
  `Name` varchar(45) NOT NULL,
  `Sem` int(11) NOT NULL,
  `PhoneNumber` varchar(45) NOT NULL,
  `Email Id` varchar(45) NOT NULL,
  `DepartmentNumber` int(11) NOT NULL,
  PRIMARY KEY (`RegNo`),
  KEY `fk_Student_Department1_idx` (`DepartmentNumber`),
  CONSTRAINT `fk_Student_Department` FOREIGN KEY (`DepartmentNumber`) REFERENCES `Department` (`DepartmentNumber`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Student_Department1` FOREIGN KEY (`DepartmentNumber`) REFERENCES `Department` (`DepartmentNumber`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Student`
--

LOCK TABLES `Student` WRITE;
/*!40000 ALTER TABLE `Student` DISABLE KEYS */;
INSERT INTO `Student` VALUES ('14GAEC9062','Tushar Das',6,'2432','wdefe',1);
/*!40000 ALTER TABLE `Student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Teacher`
--

DROP TABLE IF EXISTS `Teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Teacher` (
  `TeacherId` int(11) NOT NULL,
  `Name` varchar(45) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `DepartmentNumber` int(11) NOT NULL,
  PRIMARY KEY (`TeacherId`),
  KEY `fk_Teacher_Department_idx` (`DepartmentNumber`),
  CONSTRAINT `Teacher_ibfk_1` FOREIGN KEY (`DepartmentNumber`) REFERENCES `Department` (`DepartmentNumber`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Teacher_Department` FOREIGN KEY (`DepartmentNumber`) REFERENCES `Department` (`DepartmentNumber`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Teacher`
--

LOCK TABLES `Teacher` WRITE;
/*!40000 ALTER TABLE `Teacher` DISABLE KEYS */;
INSERT INTO `Teacher` VALUES (1,'Kiran K','ds',1),(2,'Tanuja R','ds',1),(3,'Dharmendra Chauhan','ds',1),(4,'HN Champa','ds',1),(5,'Samyama Gunjan','ds',1),(6,'Santhosh','ds',1);
/*!40000 ALTER TABLE `Teacher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Teaches`
--

DROP TABLE IF EXISTS `Teaches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Teaches` (
  `CourseId` int(11) NOT NULL,
  `DepartmentNumber` int(11) NOT NULL,
  `TeacherId` int(11) NOT NULL,
  PRIMARY KEY (`CourseId`,`DepartmentNumber`,`TeacherId`),
  KEY `fk_Course_has_Teacher_Teacher1_idx` (`TeacherId`),
  KEY `fk_Course_has_Teacher_Course1_idx` (`CourseId`,`DepartmentNumber`),
  KEY `DepartmentNumber` (`DepartmentNumber`),
  CONSTRAINT `Teaches_ibfk_1` FOREIGN KEY (`DepartmentNumber`) REFERENCES `Department` (`DepartmentNumber`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Teaches_ibfk_2` FOREIGN KEY (`CourseId`) REFERENCES `Course` (`CourseId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Teaches_ibfk_3` FOREIGN KEY (`TeacherId`) REFERENCES `Teacher` (`TeacherId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Course_has_Teacher_Course1` FOREIGN KEY (`CourseId`, `DepartmentNumber`) REFERENCES `Course` (`CourseId`, `DepartmentNumber`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Course_has_Teacher_Teacher1` FOREIGN KEY (`TeacherId`) REFERENCES `Teacher` (`TeacherId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Teaches`
--

LOCK TABLES `Teaches` WRITE;
/*!40000 ALTER TABLE `Teaches` DISABLE KEYS */;
INSERT INTO `Teaches` VALUES (1,1,1),(2,1,2),(6,1,3),(4,1,4),(5,1,5),(3,1,6);
/*!40000 ALTER TABLE `Teaches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teachercred`
--

DROP TABLE IF EXISTS `teachercred`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `teachercred` (
  `username` varchar(255) NOT NULL,
  `password` text,
  `teacherid` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teachercred`
--

LOCK TABLES `teachercred` WRITE;
/*!40000 ALTER TABLE `teachercred` DISABLE KEYS */;
/*!40000 ALTER TABLE `teachercred` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `username` varchar(255) NOT NULL,
  `password` text,
  `RegNo` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('asd','90ec922e613070022761300109035585','ads'),('dastushar','abcd','14GAEC9062'),('sahu','8cf674180ea201eb14b12486eaef9f28','14GAEC9051'),('sahus','8cf674180ea201eb14b12486eaef9f28','14GAEC9051');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-06-05 22:16:33
