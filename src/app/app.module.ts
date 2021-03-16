import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './component/menu/menu.component';
import { PageModule } from './Pages/page/page.module';
import { PostComponent } from './Pages/posts/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    // AboutComponent,
    // ContacComponent,
    // HomeComponent,
    MenuComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
