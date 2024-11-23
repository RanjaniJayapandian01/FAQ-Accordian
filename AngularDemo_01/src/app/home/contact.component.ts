import { Component } from "@angular/core";

@Component({
    selector:'app-contact',
    template:
    `
    <div class="container m-6 contact">
    <div class="row ">
    <div class="col-12 col-lg-12  px-3 py-3 pt-6">
        <h1>Contact Form</h1>

        <form class="">
            <div class="form-group">
            <label for="">Email</label>
            <input type="email" name="" id="" class="form-control">
            </div>
            <div class="form-group">
            <label for="">User Name</label>
            <input type="text" name="" id="" class="form-control">
            </div>
            <div class="form-group">
            <label for="">Message</label>
            <textarea name="" id="" class="form-control"></textarea>
            </div>
            <div class= "py-4">
                <button class="btn btn-success ">Send  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
</svg></button>
            </div>
        </form>
    </div>
    </div>
</div>

    `,
    styles:`
    
    .contact{

    }
    
    `
})
export class ContactComponent{

}