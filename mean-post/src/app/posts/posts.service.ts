import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IPost } from './IPost';

@Injectable({
    providedIn : 'root'
})

export class PostService {
    private posts:IPost[] = [];
    private postsUpdated = new Subject<IPost[]>();
    constructor(private http:HttpClient){}

    getPosts()
    {
        this.http.get<{message: String, posts: IPost[]}>('http://localhost:3000/api/posts')
        .subscribe((postData) => {
            this.posts = postData.posts;
            this.postsUpdated.next([...this.posts]);
        });
    }

    getPostsUpdatedListener()
    {
        return this.postsUpdated.asObservable();
    }
}