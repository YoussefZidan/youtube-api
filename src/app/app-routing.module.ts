import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VideoListComponent } from "./Components/videoList/video-list.component";
import { SingleVideoComponent } from "./Components/videoList/single-video/single-video.component";

const routes: Routes = [
  { path: "", component: VideoListComponent },
  { path: ":id", component: SingleVideoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
