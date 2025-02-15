

// Api contoller function to manage clerk user with mongo-database
// api will be http://localhost:1000/api/user/webhooks

import {Webhook} from "svix";
import userModel from "../models/userModel.js";

const clerkWebhooks = async (request, response) => {
    try {
        // using svix to verify clerk event
        // create a svix instance with clerk webhook secret
        const whook = new Webhook(process.env.CLERK_WEBHOOKS_SECRET)

        await whook.verify(JSON.stringify(request.body), {
            // defining svix id timestamp and signature

            "svix-id":request.headers['svix-id'],
            "svix-timestamp":request.headers['svix-timestamp'],
            "svix-signature":request.headers['svix-signature']
            })

        const {data, type} = request.body // getting required values after registration
        // by using this type we can delete, update or create user in database
        switch (type) {
            case 'user.created': {
                // getting data to create a new user
                const userData = {
                    clerkId: data.id,
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                }
                await userModel.create(userData)
                response.json({})
                break;
            }
            case 'user.updated': {
                const userData = {
                    clerkId: data.id,
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                }
                // granting clerkid and data to update
                await userModel.findOneAndUpdate({clerkId:data.id}, userData)
                response.json({})
                break;
            }
            case 'user.deleted': {
                    // finds via id and deletes the user
                await userModel.findOneAndDelete({clerkId:data.id})
                response.json({})
                break;
            }


        }
    } catch (error) {
        console.log(error.message)
    }

}

// backend function to get user`s available credits

const userCredits = async (request, response) => {
        try {
            const {clerkId} = request.body

            const userData = await userModel.findOne({ clerkId })
            console.log(userData)
            // getting data of user via id
            response.json({success:true,  })
        } catch (error) {
            console.log(error.message)
            response.json({success: false, message:error.message})
        }

}
export {clerkWebhooks, userCredits}