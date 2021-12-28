import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  img ='https://scontent-mia3-1.xx.fbcdn.net/v/t1.18169-9/26167054_1799870573379017_3352212577570578660_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGamJl-zoTyHpJbecbbO2NUxHUA94SRwJjEdQD3hJHAmHmKAYxLARM5rYWJ260g2k8&_nc_ohc=5HDoz5Yrx1sAX-LzYMv&_nc_ht=scontent-mia3-1.xx&oh=00_AT_DUN3PAAMYqxB9PbEgz8jE2_oGe-C0-VvDgh_XND053A&oe=61EFC0CE';

  constructor() { }

  ngOnInit(): void {
  }

}
