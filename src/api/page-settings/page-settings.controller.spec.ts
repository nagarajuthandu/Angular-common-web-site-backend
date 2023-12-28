import { Test, TestingModule } from '@nestjs/testing';
import { PageSettingsController } from './page-settings.controller';
import { PageSettingsService } from './page-settings.service';

describe('PageSettingsController', () => {
  let controller: PageSettingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PageSettingsController],
      providers: [PageSettingsService],
    }).compile();

    controller = module.get<PageSettingsController>(PageSettingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
