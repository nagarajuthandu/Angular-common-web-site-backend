import { Test, TestingModule } from '@nestjs/testing';
import { PageSettingsService } from './page-settings.service';

describe('PageSettingsService', () => {
  let service: PageSettingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PageSettingsService],
    }).compile();

    service = module.get<PageSettingsService>(PageSettingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
