import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import { SurveysRepository } from "../repositories/SurveysRepository"
class SurveysController {

    async create(req : Request,res:Response){
        const {title, description} = req.body

        const surveysRepository = getCustomRepository(SurveysRepository)
        
        const surveysAlredyExist = await surveysRepository.findOne({
            title
        })
        if(!surveysAlredyExist){

        
        const surveys = surveysRepository.create({
            title,
            description
        })
        await surveysRepository.save(surveys)
        
        return res.status(201).json(surveys)
        }
        return res.status(400).json({error:"Essa pesquisa já existe!"})
    }
    async show(req : Request,res:Response){
        
        const surveysRepository = getCustomRepository(SurveysRepository)
        
        const all = await surveysRepository.find()

        return res.json(all)
    }

}
export { SurveysController }
