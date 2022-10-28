import { db } from "../../db";

export const userModel = {
    fetchAllUser: async () => {
        const result = await db.table('users').run();
        return result;
    }
}