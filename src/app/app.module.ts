import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from "@angular/router";
import { BusinessComponent } from "./components/settings/business/business.component";
import { CreateInvoiceComponent } from "./components/create-invoice/create-invoice.component";

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "./environments/environment";
import { SignInComponent } from "./components/settings/signin/signin.component";
import { SignUpComponent } from "./components/settings/signup/signup.component";
import { AuthService } from "./services/auth.service";
import { ForgotPasswordComponent } from "./components/settings/forgot-password/forgot-password.component";
import { SendVerifyEmailComponent } from "./components/settings/send-verify-email/send-verify-email.component";
import { AuthGuard } from "./gaurds/auth.guard";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "",
        component: CreateInvoiceComponent,
        canActivate: [AuthGuard],
      },
      { path: "", redirectTo: "/sign-in", pathMatch: "full" },
      { path: "sign-in", component: SignInComponent },
      { path: "register-user", component: SignUpComponent },
      { path: "forgot-password", component: ForgotPasswordComponent },
      { path: "verify-email-address", component: SendVerifyEmailComponent },
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  declarations: [
    AppComponent,
    CreateInvoiceComponent,
    HeaderComponent,
    BusinessComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    SendVerifyEmailComponent,
  ],
  bootstrap: [AppComponent],
  providers: [AuthService],
})
export class AppModule {}
