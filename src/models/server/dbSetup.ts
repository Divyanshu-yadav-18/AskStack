import { db } from "../name";
import createAnswerCollection from "./answer.collection";
import createCommentCollection from "./comment.collection";
import createQuestionCollection from "./question.collection";
import createVoteCollection from "./vote.collection";

import { databases } from "./config";


export default async function getOrCreateDb(){
    try{
        await databases.get(db)
        console.log("Databases connected")
    }catch(error){
        try{
            await databases.create(db, db)
            console.log("Database created")

            await Promise.all([
                createQuestionCollection(),
                createAnswerCollection(),
                createCommentCollection(),
                createVoteCollection(),
            ])
            console.log("collection created")
        }catch(error){
            console.log("error created", error)
        }
    }
    return databases
}