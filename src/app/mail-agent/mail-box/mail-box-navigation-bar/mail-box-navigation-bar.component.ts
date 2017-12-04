import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mail-box-navigation-bar',
  templateUrl: './mail-box-navigation-bar.component.html',
  styleUrls: ['./mail-box-navigation-bar.component.css']
})
export class MailBoxNavigationBarComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
}
