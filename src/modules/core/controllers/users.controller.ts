import { Controller, Get } from "swincikjr-nesterr";

@Controller('users')
export class UsersController {
    @Get()
    getUsers() {
        return 'hello from users controller!'
    }
}