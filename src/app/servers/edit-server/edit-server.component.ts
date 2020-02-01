import { Component, OnInit } from "@angular/core";
import { ServersService } from "../servers.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"]
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  changesSaved = false;
  editAllowed: boolean;
  serverName = "";
  serverStatus = "";
  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.editAllowed = queryParams["allowEdit"] === "1" ? true : false;
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    });
  }
  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus
    });
    this.changesSaved = true;
  }
}
