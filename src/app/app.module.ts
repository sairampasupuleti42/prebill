import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CreateInvoiceComponent } from "./create-invoice/create-invoice.component";
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "",
        component: CreateInvoiceComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    CreateInvoiceComponent,
    HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
