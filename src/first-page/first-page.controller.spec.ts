import { Test, TestingModule } from '@nestjs/testing';
import { FirstPageController } from './first-page.controller';

describe('FirstPageController', () => {
  let controller: FirstPageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FirstPageController],
    }).compile();

    controller = module.get<FirstPageController>(FirstPageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
