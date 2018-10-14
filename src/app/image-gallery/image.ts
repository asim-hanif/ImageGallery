import { SafeUrl } from '@angular/platform-browser';
export class Image {
    id: number;
    name: string;
    createDate: Date;
    base64EncodedValue: string;
}

export class ImagesDb {
    images: Image[] = [];
    maxId: number = 0;
}