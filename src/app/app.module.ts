import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeListComponent,
    RecentPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
