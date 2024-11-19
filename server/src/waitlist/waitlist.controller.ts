import { Body, Controller, Post } from '@nestjs/common';
import { WaitlistService } from './waitlist.service';
import { waitlistDto } from './waitlist.dto';

@Controller('waitlist')
export class WaitlistController {
    constructor(private waitlistService: WaitlistService){}
    @Post()
    pingserver(@Body() userData : waitlistDto ){
        return this.waitlistService.addContactList(userData)
    }

}
