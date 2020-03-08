import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialsModule } from "./Modules/MaterialsModule/materials.module";
import { MainHeaderComponent } from "./Components/mainHeader/mainHeader.component";
import { VideoListComponent } from "./Components/videoList/video-list.component";
import { QueryService } from "./services/query.service";
import { HttpClientModule } from "@angular/common/http";
import { SingleVideoComponent } from "./Components/videoList/single-video/single-video.component";
import { DataShareService } from "./services/dataShare.service";
import { MomentModule } from "ngx-moment";
import { RatingModule } from "ngx-bootstrap/rating";
import { FormsModule } from "@angular/forms";
import { RatingComponent } from "./Components/rating/rating.component";

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    VideoListComponent,
    SingleVideoComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    HttpClientModule,
    MomentModule,
    RatingModule.forRoot(),
    FormsModule
  ],
  providers: [QueryService, DataShareService],
  bootstrap: [AppComponent]
})
export class AppModule {}
