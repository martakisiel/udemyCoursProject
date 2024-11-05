import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaComponent } from './galeria/galeria.component';
import { AlbumComponent } from './album/album.component';

const routes: Routes = [
  {path:'#galeria', component: GaleriaComponent},
  {path:'#galeria/:album', component: AlbumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule{
 }
