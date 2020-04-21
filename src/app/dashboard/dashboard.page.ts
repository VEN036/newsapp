import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../services/authentication.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor( public authService: AuthenticationService, private route: ActivatedRoute ) { }

  ngOnInit() {
  }

}
