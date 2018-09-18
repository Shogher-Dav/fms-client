import { NgModule } from '@angular/core';
import {AuthRoutingModule} from './auth-routing.module';
import {HomeComponent} from '../../home/home.component';


@NgModule({
  imports: [AuthRoutingModule],
  declarations: [HomeComponent]
})


export class AuthModule {}
