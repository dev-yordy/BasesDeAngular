import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  clientes:any
  constructor(public Datacenter: DataService) { }

  ngOnInit(): void {
    this.clientes= this.Datacenter.getPosts();
    // this.Datacenter.getPosts().subscribe((info)=>{
    //   this.clientes = info
    // })
  }

}
