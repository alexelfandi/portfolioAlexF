import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Firebase */

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage'
import { AngularFireModule } from '@angular/fire'
import { environment } from 'src/environments/environment';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { UnityPageComponent } from './componentes/unity-page/unity-page.component';
import { PhotoshopPageComponent } from './componentes/photoshop-page/photoshop-page.component';
import { IllustratorPageComponent } from './componentes/illustrator-page/illustrator-page.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { Design3dComponent } from './componentes/design3d/design3d.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    UnityPageComponent,
    PhotoshopPageComponent,
    IllustratorPageComponent,
    SobreMiComponent,
    Design3dComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     // AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  providers: [
    { provide: StorageBucket, useValue:'gs://portfolio-alexf.appspot.com' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
