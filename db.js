import {Sequelize} from 'sequelize'

export default new Sequelize(process.env.DATABASE_URL + '?sslmode=require');