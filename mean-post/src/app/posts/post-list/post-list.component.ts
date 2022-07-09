import { Component, Input } from "@angular/core";
import { IPost } from "../IPost";

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})

export class PostListComponent{
// posts = [
//     {title: 'First post', content: 'My first post in angular'},
//     {title: 'Second post', content: 'My second post in angular'},
//     {title: 'Third post', content: 'My third post in angular'}
// ];
@Input() posts: IPost[] = [];
}