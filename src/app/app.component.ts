import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  isLoading = true;
  data: any[];

  ngOnInit() {
    this.getData().subscribe((res) => {
      this.isLoading = false;
      this.data = res;
    });
  }

  getData(): Observable<any> {
    return this.http.get("https://testapi-qsha.onrender.com/");
  }
}
