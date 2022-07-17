import { Component, EventEmitter, Output } from "@angular/core";
import { NgForm } from "@angular/forms";
import { IPost } from "../IPost";
import { PostService } from "../posts.service";

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent{
    title = '';
    content = '';

    constructor(private postsService: PostService){}
    
    onSubmit(form: NgForm)
    {
        if(form.invalid)
            return;
        const post: IPost = {
            id: '',
            title : form.value.title,
            content : form.value.content
        };
        this.postsService.addPost(post.title, post.content);
        form.resetForm();
    }
}