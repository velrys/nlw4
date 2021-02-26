import {Entity, EntityRepository, Repository} from "typeorm"
import {SurverysUsers} from '../models/SurverysUsers'

@EntityRepository(SurverysUsers)
class SurveysUsersRepository extends Repository<SurverysUsers> {}

export {SurveysUsersRepository}


