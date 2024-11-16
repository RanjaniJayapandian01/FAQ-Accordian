import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';  // <-- Import CommonModule

@Component({
    selector:'app-toast',
    template:
    `
    <!-- toast.component.html -->
<div *ngIf="showToast" class="toast align-items-center text-bg-success position-fixed bottom-0 end-0 p-3" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">
      {{ message }}
    </div>
    <button type="button" class="btn-close btn-close-white ms-2" (click)="closeToast()"></button>
  </div>
</div>

    `,
    styles:
    `

   /* toast.component.css */
.toast {
  z-index: 9999; /* Ensure toast appears above other elements */
}
 
    `
})
export class ToastComponent{
    showToast = true;
    message: string = '';
  
    constructor() { }
  
    ngOnInit(): void {}
  
    show(message: string): void {
      this.message = message;
      this.showToast = true;
  
      // Hide the toast after 3 seconds
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    }
  
    closeToast(): void {
      this.showToast = false;
    }
  
}