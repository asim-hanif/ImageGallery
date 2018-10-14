import { ImageGalleryModule } from './image-gallery.module';

describe('ImageGalleryModule', () => {
  let imageGalleryModule: ImageGalleryModule;

  beforeEach(() => {
    imageGalleryModule = new ImageGalleryModule();
  });

  it('should create an instance', () => {
    expect(imageGalleryModule).toBeTruthy();
  });
});
