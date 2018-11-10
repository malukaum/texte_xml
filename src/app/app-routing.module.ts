import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppService} from "./app.service";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [AppService]
})
export class AppRoutingModule { }
