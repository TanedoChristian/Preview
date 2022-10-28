
import { Request, Response } from "express";
import { userModel } from "../Models/user";


export const userControl = {
    fetchAllUser: async (req: Request, res: Response) => {
        const users = await userModel.fetchAllUser();
        return res.status(200).send(users)
    },
    fetchCustomUsers: async (req: Request, res: Response) => {
        const users = await userModel.fetchAllUser();
        const new_users = users.filter((item:any) => item.age >18)
        return res.status(200).send(new_users)
    }
}