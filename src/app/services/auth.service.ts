// auth.service.ts
import { Injectable, NgZone } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import firebase from "firebase";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  user: Observable<firebase.User>;

  constructor(
    private firebaseAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    firebaseAuth.authState.subscribe((user) => {
      if (user) {
        localStorage.setItem("__SPRESBIILLD__", JSON.stringify(user));
        JSON.parse(localStorage.getItem("__SPRESBIILLD__"));
      } else {
        localStorage.setItem("__SPRESBIILLD__", null);
        JSON.parse(localStorage.getItem("__SPRESBIILLD__"));
      }
    });
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((value) => {
        console.log("Success!", value);
      })
      .catch((err) => {
        console.log("Something went wrong:", err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        console.log("Nice, it worked!");
      })
      .catch((err) => {
        console.log("Something went wrong:", err.message);
      });
  }

  logout() {
    this.firebaseAuth.signOut();
  }
  signInwithGoogle() {
    this.firebaseAuth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) =>
        this.ngZone.run(() => {
          this.router.navigate(["create-invooice"]);
        })
      );
  }
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem("__SPRESBIILLD__"));
    return user !== null && user.emailVerified !== false ? true : false;
  }
}
