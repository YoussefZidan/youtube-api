import { Component, OnInit } from "@angular/core";
import { DataShareService } from "src/app/services/dataShare.service";

@Component({
  selector: "app-mainHeader",
  templateUrl: "./mainHeader.component.html",
  styleUrls: ["./mainHeader.component.css"]
})
export class MainHeaderComponent implements OnInit {
  favCount;
  constructor(private dataShare: DataShareService) {}

  ngOnInit() {
    this.dataShare.favValue.subscribe(res => (this.favCount = res));
  }
}
