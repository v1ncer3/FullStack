// Importando o módulo mysql
import db from 'mysql2/promise';

// Configurações de conexão
const config = {
  host: '127.0.0.1',
  user: 'root',
  password: '0913905An.',
  database: 'quadra'
};



// Exportar a conexão para ser utilizada em outros módulos, se necessário
export { config, db };


/*

CREATE TABLE `compras` (
  `CDCOMPRA` varchar(5) NOT NULL,
  `CDPRODUTO` varchar(5) NOT NULL,
  `VRCOMPRA` float NOT NULL,
  `QTDCOMPRA` int NOT NULL,
  `DTLANCAMENTO` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`CDCOMPRA`,`CDPRODUTO`),
  UNIQUE KEY `CDCOMPRA_UNIQUE` (`CDCOMPRA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci


CREATE TABLE `estoque` (
  `CDLANCEST` varchar(6) NOT NULL,
  `CDPRODUTO` varchar(5) NOT NULL,
  `QTPRODEST` float NOT NULL DEFAULT '0',
  `VRCOMPRA` float NOT NULL DEFAULT '0',
  `VRVENDA` float NOT NULL DEFAULT '0',
  `DTLANCAMENTO` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`CDLANCEST`,`CDPRODUTO`),
  UNIQUE KEY `CDLANCEST_UNIQUE` (`CDLANCEST`),
  KEY `CDPRODUTO_idx` (`CDPRODUTO`),
  CONSTRAINT `CDPRODUTO` FOREIGN KEY (`CDPRODUTO`) REFERENCES `produto` (`CDPRODUTO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci


CREATE TABLE `produto` (
  `CDPRODUTO` varchar(5) NOT NULL,
  `NMPRODUTO` varchar(45) NOT NULL,
  `IDATIVO` varchar(2) NOT NULL DEFAULT 'S',
  PRIMARY KEY (`CDPRODUTO`),
  UNIQUE KEY `NMPRODUTO_UNIQUE` (`NMPRODUTO`),
  UNIQUE KEY `CDPRODUTO_UNIQUE` (`CDPRODUTO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci


*/