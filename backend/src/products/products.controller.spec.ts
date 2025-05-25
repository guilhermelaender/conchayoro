import { Test } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

const product = {
  name: 'Product1',
  price: 10,
  category: 'C1',
  rating: 1,
};

const createProductDto: CreateProductDto = product;
const updateProductDto: UpdateProductDto = product;

describe('ProductsController', () => {
  let productsService: ProductsService;
  let productsController: ProductsController;
  let product: Product;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        ProductsService,
        {
          provide: getModelToken(Product),
          useValue: {},
        },
      ],
    }).compile();

    productsService = moduleRef.get<ProductsService>(ProductsService);
    productsController = moduleRef.get<ProductsController>(ProductsController);
    product = moduleRef.get<Product>(getModelToken(Product));
  });
});
