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
  navLinks: IRoute[] = [
    {
      title: "Products",
      path: "",
      disabled: true,
      hidden: true,
    },
    {
      title: "Invoices",
      path: "",
      disabled: true,
      hidden: true,
    },
    {
      title: "Recent",
      path: "",
      disabled: true,
      hidden: true,
    },
    {
      title: "Settings",
      path: "",
      disabled: false,
      hidden: false,
    },
  ];
  ngOnInit() {}
}
