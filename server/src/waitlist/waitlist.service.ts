import { HttpException, Injectable } from '@nestjs/common';
import * as mailchimp from '@mailchimp/mailchimp_marketing'
import { waitlistDto } from './waitlist.dto';

@Injectable()
export class WaitlistService {
    
    async addContactList(userData:waitlistDto){
        mailchimp.setConfig({
            apiKey: process.env.MAILCHIMP_API_KEY,
            server: process.env.MAILCHIMP_SERVER,
        });

        const listId = process.env.LIST_ID

        try{
            const response = await mailchimp.lists.addListMember(listId, {
                email_address: userData.email,
                status: "subscribed",
              });

              if(response.id){
                return 'You have been added successfully'
              }
        }catch(err){
            let errorMsg = err.response.text.split(",")[2].slice(10).split(". ")[0]
            throw new HttpException(errorMsg, 401)
        }

    }
}
