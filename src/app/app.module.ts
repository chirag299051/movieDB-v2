import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteModule, MatBadgeModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatLineModule, MatListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TmdbService } from './services/tmdb.service';
import { ListComponent } from './list/list.component';
import { ImgDetailComponent } from './img-detail/img-detail.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AngReadmoreModule } from 'ang-readmore';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    NotFoundComponent,
    HomeComponent,
    WatchlistComponent,
    FooterComponent,
    ListComponent,
    ImgDetailComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatBadgeModule,
    MatListModule,
    MatLineModule,
    AngReadmoreModule,
  ],
  providers: [TmdbService],
  bootstrap: [AppComponent],
})
export class AppModule { }
