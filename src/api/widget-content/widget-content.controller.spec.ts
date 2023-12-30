import { Test, TestingModule } from '@nestjs/testing';
import { WidgetContentController } from './widget-content.controller';
import { WidgetContentService } from './widget-content.service';

describe('WidgetContentController', () => {
  let controller: WidgetContentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WidgetContentController],
      providers: [WidgetContentService],
    }).compile();

    controller = module.get<WidgetContentController>(WidgetContentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
