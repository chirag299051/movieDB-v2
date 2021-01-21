import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { Dialog, HomeComponent } from './components/home/home.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteModule, MatBadgeModule, MatButtonModule, MatCardModule, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MatFormFieldModule, MatInputModule, MatLineModule, MatListModule, MatSnackBarModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TmdbService } from './services/tmdb.service';
import { ListComponent } from './list/list.component';
import { ImgDetailComponent } from './img-detail/img-detail.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AngReadmoreModule } from 'ang-readmore';
import { GenresComponent } from './genres/genres.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatMenuModule} from '@angular/material/menu';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';

var config = {
  apiKey: "AIzaSyALhSI179BUJ7O6M140H2E2Rbo2--B4m98",
  authDomain: "moviedb-v2-chirag.firebaseapp.com",
  projectId: "moviedb-v2-chirag",
  storageBucket: "moviedb-v2-chirag.appspot.com",
  databaseURL: "https://moviedb-v2-chirag-default-rtdb.firebaseio.com/",
  messagingSenderId: "220585377340",
  appId: "1:220585377340:web:155cb040c2e3ef00738d39",
  measurementId: "G-SMSNZY52XN"
};


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
    ReviewsComponent,
    Dialog,
    GenresComponent
  ],
  imports: [
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
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
    MatDialogModule,
    MatSnackBarModule,
    MatMenuModule
  ],
  entryComponents: [HomeComponent,Dialog],
  providers: [TmdbService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule { }
