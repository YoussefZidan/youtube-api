import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataShareService } from "src/app/services/dataShare.service";
import { QueryService } from "src/app/services/query.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-single-video",
  templateUrl: "./single-video.component.html"
})
export class SingleVideoComponent implements OnInit {
  videoId;
  video;
  isLoading = true;
  added;

  constructor(
    private route: ActivatedRoute,
    private dataShare: DataShareService,
    private query: QueryService
  ) {}

  ngOnInit() {
    this.videoId = this.route.snapshot.params["id"];
    // Async Params
    this.route.params.subscribe(params => {
      this.videoId = params.id;
    });

    // Fetching the video data
    this.query
      .getData(
        `${this.dataShare.baseURL}/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${this.videoId}&key=${this.dataShare.APIKEY}`
      )
      .subscribe(
        res => {
          this.isLoading = false;
          this.video = res.items[0];
        },
        (err: HttpErrorResponse) => {
          console.log(err.error);
        }
      );

    // Check if the video added to favorit
    if (localStorage.getItem(this.videoId + "-id") === "added") {
      this.added = true;
    } else {
      this.added = false;
    }
  }

  // Toggle add or remove btn
  toggle() {
    if (!this.added) {
      this.added = !this.added;
      this.dataShare.add();
      localStorage.setItem(this.videoId + "-id", "added");
    } else {
      this.added = !this.added;
      this.dataShare.remove();
      localStorage.removeItem(this.videoId + "-id");
    }
  }
}
