import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataShareService {
  baseURL = "https://www.googleapis.com/youtube/v3";
  channelID = "UC2t5bjwHdUX4vM2g8TRDq5g";
  APIKEY = "AIzaSyAANvHDt-gUGhoGSna-vmspRRoIlqgT5_Q";

  private favorit = new BehaviorSubject(0);
  favValue = this.favorit.asObservable();

  constructor() {}

  add() {
    this.favorit.next(this.favorit.value + 1);
  }
  remove() {
    this.favorit.next(this.favorit.value - 1);
  }
}
