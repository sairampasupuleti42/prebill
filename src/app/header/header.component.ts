import { Component, OnInit } from "@angular/core";
export interface IRoute {
  title: string;
  path?: string;
  disabled?: boolean;
  hidden?: boolean;
}
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  navLinks: IRoute[] = [];
  displayMenu: boolean = true;
  ngOnInit() {
    this.navLinks = [
      {
        title: "Products",
        path: "",
        disabled: this.displayMenu,
        hidden: true,
      },
      {
        title: "Invoices",
        path: "",
        disabled: this.displayMenu,
        hidden: true,
      },
      {
        title: "Recent",
        path: "",
        disabled: this.displayMenu,
        hidden: true,
      },
      {
        title: "Settings",
        path: "",
        disabled: this.displayMenu,
        hidden: false,
      },
    ];
  }
}
