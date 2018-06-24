import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserAComponent } from './user-A/usera.component';
import { UsersService } from './users.service';
import { UserBComponent } from './user-B/userb.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAComponent,
    UserBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
