import { GalleryViewComponent } from './image-gallery/gallery-view/gallery-view.component';
import { UploadViewComponent } from './image-gallery/upload-view/upload-view.component';
import { ZoomViewComponent } from './image-gallery/zoom-view/zoom-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    
    { path: 'GalleryView', component: GalleryViewComponent },
    { path: 'ZoomView/:id', component: ZoomViewComponent },
    { path: 'UploadView', component: UploadViewComponent },
    {
        path: '**',
        component: GalleryViewComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }