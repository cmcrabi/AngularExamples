import { Component, EventEmitter, Output } from "@angular/core";
import { IPost } from "../IPost";

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent{
    title = '';
    content = '';

    @Output() postCreated = new EventEmitter();
    
    onCreatePostClick()
    {
        const post: IPost = {
            title : this.title,
            content : this.content
        };
        // const post = 
        //     {
        //         title: this.title, 
        //         content: this.content
        //     };
        this.postCreated.emit(post);
    }
}