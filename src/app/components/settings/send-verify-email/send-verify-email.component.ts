import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-send-verify-email',
  templateUrl: './send-verify-email.component.html',
  styleUrls: ['./send-verify-email.component.css']
})
export class SendVerifyEmailComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

}