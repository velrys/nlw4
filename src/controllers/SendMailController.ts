import {resolve} from "path"
import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import { SurveysRepository } from "../repositories/SurveysRepository"
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository"
import { UserRepository } from "../repositories/UsersRepository"
import SendMailServices from "../services/SendMailServices"


class SendMailController {

    async execute(req : Request,res:Response){
        const {email, survey_id} = req.body
        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository)
        const surveysRepository = getCustomRepository(SurveysRepository)
        const userRepository = getCustomRepository(UserRepository)
        
        const user = await userRepository.findOne({email}) 

        if (!user){
            return res.status(400).json({
                error:"User does not exists",
            })
        }
        const survey =  await surveysRepository.findOne({id:survey_id})
        if (!survey){
            return res.status(400).json({
                error:"Survey does not exists",
            })
        }
        const npsPath = resolve(__dirname,"..","views","emails","npsMail.hbs")

        const surveyUserAlreadyExists = await surveysUsersRepository.findOne({
            where:{user_id: user.id, value:null},
            relations:["user","survey"]
        })

        const variables = {
            name:user.name,
            title:survey.title,
            description: survey.description,
            id:'',
            link: process.env.URL_MAIL
        }
        
        if(surveyUserAlreadyExists){
            variables.id = surveyUserAlreadyExists.id
            await SendMailServices.execute(email,survey.title,variables,npsPath)
            return res.json(surveyUserAlreadyExists)
        }

        const surveyUser = await surveysUsersRepository.create({
            user_id: user.id,
            survey_id
        })

        await surveysUsersRepository.save(surveyUser)
        variables.id = surveyUser.id
        
        await SendMailServices.execute(email,survey.title,variables,npsPath)
        return res.json(surveyUser)
    }

    
}
export { SendMailController }
