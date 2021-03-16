import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  rutas =[
    {
      name: 'home',
      path: '/home'     
    },
    {
      name: 'contact',
      path: '/contact'     
    },
    {
      name: 'about',
      path: '/about'     
    },
    {
      name: 'posts',
      path: '/posts'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
