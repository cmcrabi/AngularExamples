import { Component } from '@angular/core';
import { IPost } from './posts/IPost';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPosts:IPost[] = [];
  
  onPostAdded(post:IPost)
  {
    this.storedPosts.push(post);
  }
}
