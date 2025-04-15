
// Importa la clase Sequelize desde el paquete 'sequelize'
import { Sequelize } from 'sequelize';

// Crea una nueva instancia de Sequelize para conectarse a la base de datos
const sequelize = new Sequelize(
    process.env.DB_NAME || 'petshop',
    process.env.DB_USER || 'user', // Cambiado a 'user' según docker-compose
    process.env.DB_PASSWORD || 'ivo',
    {
        host: process.env.DB_HOST || 'mysql_engine', // Eliminado el ":" al final
        dialect: process.env.DB_DIALECT || 'mysql',
    }
)

// Exporta la instancia 'sequelize' para que pueda ser utilizada en otros archivos
export default sequelize; // Exporta la instancia 'sequelize' para que pueda ser utilizada en otros archivos

