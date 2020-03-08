import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { Router } from "@angular/router";
import { QueryService } from "src/app/services/query.service";
import { HttpErrorResponse } from "@angular/common/http";
import { MatPaginator } from "@angular/material/paginator";
import { DataShareService } from "src/app/services/dataShare.service";

@Component({
  selector: "app-table",
  templateUrl: "./video-list.component.html"
})
export class VideoListComponent implements OnInit {
  response;
  isLoading = true;
  displayedColumns: string[] = [
    "thumbnails",
    "title",
    "publishedAt",
    "actions"
  ];

  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private query: QueryService,
    private router: Router,
    private dataShare: DataShareService
  ) {}

  ngOnInit() {
    // Check cashing and fetch data
    if (localStorage.getItem("DATA")) {
      this.isLoading = false;
      let videos = JSON.parse(localStorage.getItem("DATA"));
      this.createDataSource(videos);
    }
    // fetch data
    this.getVideos();
  }

  getVideos() {
    // Fetching Data
    this.query
      .getData(
        `${this.dataShare.baseURL}/activities?part=snippet%2CcontentDetails&channelId=${this.dataShare.channelID}&maxResults=50&key=${this.dataShare.APIKEY}`
      )
      .subscribe(
        res => {
          this.isLoading = false;
          localStorage.setItem("DATA", JSON.stringify(res.items));
          this.createDataSource(res.items);
        },
        (err: HttpErrorResponse) => {
          console.log(err.error);
        }
      );
  }
  createDataSource(data) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  details(video) {
    let id;
    if (video.contentDetails.upload) {
      id = video.contentDetails.upload.videoId;
    } else {
      id = video.contentDetails.playlistItem.resourceId.videoId;
    }
    this.dataShare.getVideoId(id);
    this.router.navigate([id]);
  }
}
