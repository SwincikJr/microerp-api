import { Controller, Get } from "swincikjr-nesterr";

@Controller('products')
export class ProductsController {
    @Get()
    getProducts() {
        return 'hello from products controller!'
    }
}