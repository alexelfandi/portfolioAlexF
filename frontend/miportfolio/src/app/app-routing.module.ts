import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { UnityPageComponent } from './componentes/unity-page/unity-page.component';
import { PhotoshopPageComponent } from './componentes/photoshop-page/photoshop-page.component';
import { IllustratorPageComponent } from './componentes/illustrator-page/illustrator-page.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { Design3dComponent } from './componentes/design3d/design3d.component';


const routes: Routes = [
  {path: "inicio", component: InicioComponent},
  {path: "", component: InicioComponent},
  {path: "unity", component: UnityPageComponent},
  {path: "sobremi", component: SobreMiComponent},
  {path: "photoshop", component: PhotoshopPageComponent},
  {path: "illustrator", component: IllustratorPageComponent},
  {path: "design3d", component: Design3dComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
