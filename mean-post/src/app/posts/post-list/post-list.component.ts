import { Component, Input, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IPost } from "../IPost";
import { PostService } from "../posts.service";

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit{
    private _postsService;
    private postsSub : Subscription | undefined;

    constructor(postsService : PostService){
        this._postsService = postsService;
    }

    @Input() posts: IPost[] = [];

    ngOnInit(): void
    {
        this._postsService.getPosts();
        this.postsSub = this._postsService.getPostsUpdatedListener()
        .subscribe((posts: IPost[]) => {
            this.posts = posts;
        });
    }

    onDelete(id: string):void{
        this._postsService.deletePost(id);
    }
}