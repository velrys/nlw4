import { request, Request, Response } from "express"
import { getCustomRepository, RepositoryNotTreeError } from "typeorm"
import { UserRepository } from "../repositories/UsersRepository"
import * as yup from 'yup' 
class UserController {

    async create(req : Request,res:Response){
        const {name,email} = req.body

        const schema = yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email().required()
        })

        if (!(await schema.isValid(req.body))){
            return res.status(400).json({error:"validation Falid!"})
        }

        const userRepository = getCustomRepository(UserRepository)
        
        const userAlredyExist = await userRepository.findOne({
            email
        })
        if(!userAlredyExist){

        
        const user = userRepository.create({
            name,
            email
        })
        await userRepository.save(user)
        
        return res.status(201).json(user)
        }
        return res.status(400).json({error:"Este usuario já existe!"})
    }

}
export { UserController }
