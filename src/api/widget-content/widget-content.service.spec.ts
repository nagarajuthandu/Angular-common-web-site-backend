import { Test, TestingModule } from '@nestjs/testing';
import { WidgetContentService } from './widget-content.service';

describe('WidgetContentService', () => {
  let service: WidgetContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WidgetContentService],
    }).compile();

    service = module.get<WidgetContentService>(WidgetContentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
