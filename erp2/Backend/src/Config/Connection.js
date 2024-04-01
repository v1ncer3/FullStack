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
*/