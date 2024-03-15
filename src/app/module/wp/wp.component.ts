import { Component } from '@angular/core';
import { WpService } from 'src/app/service/wp.service';

@Component({
  selector: 'app-wp',
  templateUrl: './wp.component.html',
  styleUrls: ['./wp.component.scss'],
})
export class WpComponent {
  posts: any = [];
  id: number = 13;
  post: any;

  constructor(private wpService: WpService) {}

  ngOnInit() {
    this.wpService.getWpPosts().subscribe((result: any) => {
      this.posts = result;
    });

    //this.wpService.getWpPostById().subscribe((result: any) => {
    //  this.post = result;
    //});
  }
}
