import {Entity, EntityRepository, Repository} from "typeorm"
import {Survery} from '../models/Survery'

@EntityRepository(Survery)
class SurveysRepository extends Repository<Survery> {}

export {SurveysRepository}


