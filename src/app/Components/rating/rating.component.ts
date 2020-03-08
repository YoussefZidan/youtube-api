import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.css"]
})
export class RatingComponent implements OnInit {
  max = 5;
  rate = 0;
  isReadonly = false;

  overStar: number | undefined;
  percent: number;

  videoId;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.videoId = this.route.snapshot.params["id"];
    if (localStorage.getItem(this.videoId + "-rate") !== null) {
      this.rate = JSON.parse(localStorage.getItem(this.videoId));
    }
  }

  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }

  resetStar(): void {
    this.overStar = void 0;
  }
  save() {
    localStorage.setItem(this.videoId + "-rate", JSON.stringify(this.rate));
  }
  clear() {
    this.rate = 0;
    localStorage.removeItem(this.videoId + "-rate");
  }
}
