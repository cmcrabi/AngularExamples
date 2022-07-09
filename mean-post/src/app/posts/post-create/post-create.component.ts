import { Component, EventEmitter, Output } from "@angular/core";
import { NgForm } from "@angular/forms";
import { IPost } from "../IPost";

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent{
    title = '';
    content = '';

    @Output() postCreated = new EventEmitter<IPost>();
    
    onSubmit(form: NgForm)
    {
        if(form.invalid)
            return;
        const post: IPost = {
            title : form.value.title,
            content : form.value.content
        };
        this.postCreated.emit(post);
    }
}