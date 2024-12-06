import { Component, inject, ViewChild } from "@angular/core";
import { User } from "./user";
import { IDeactivateComponent } from "../Services/navigate-guard.service";
import { NgForm } from "@angular/forms";
import { SnackBarService } from "../Services/snackBar.service";


@Component({
    templateUrl: './user-form.component.html',
    selector: 'user-form'
})
export class UserFormComponent implements IDeactivateComponent{
    
    countries=['India', 'United States', 'Africa'];
    model = new User('', '', '','');
    firstname: string ="";
    lastName: string="";
    email: string="";
    username: string="";
    submitted = false;
    @ViewChild('userForm') userForm: NgForm;
    snackBar: SnackBarService = inject(SnackBarService);
    onSubmit(){
        this.submitted=true;
        console.log(this.userForm.value.userName);
        this.snackBar.openSnackBar('Registered Sucessfully','');
        this.userForm.reset();
        
    }
    canExit() {
        console.log(`${this.model.firstName} ${this.model.lastName} ${this.model.email} ${this.model.country}`);
        
        // Check if any field has a value and the form is not submitted
        if ((this.model.firstName || this.model.lastName || this.model.email || this.model.country) && !this.submitted) {
          // This should show a confirmation dialog to the user before navigation
          return confirm('You have unsaved changes. Do you want to navigate away?');
        }
        return true; // If no unsaved changes, navigation is allowed
      }

      GenerateAutoUserName(){
            // Define a list of cool words
            const coolWords = ['Quantum', 'Nebula', 'Vortex', 'Pixel', 'Echo', 'Fusion', 'Blaze', 'Spectra','Nova', 'Lunar', 'Zenith', 'Cosmic', 'Rogue', 'Stellar', 'Blizzard', 'Phantom','Shadow', 'Astral', 'Inferno', 'Magnet', 'Zen', 'Nova', 'Titan', 'Cryptic','Viper', 'Galactic', 'Storm', 'Xeno', 'Cobalt', 'Aurora', 'Eclipse', 'Nebula'];
            // Define a list of adjectives or other words to make it more interesting
            const adjectives = ['Silent', 'Fierce', 'Electric', 'Eternal', 'Radiant', 'Mystic', 'Mighty', 'Stealthy', 'Savage', 'Silent', 'Velvet', 'Silent', 'Luminous', 'Majestic', 'Bold', 'Stealth'];
              // Generate a random number to select a word from the lists
              const randomCoolWord = coolWords[Math.floor(Math.random() * coolWords.length)];
              const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];

              // Optionally, you can append a random number to make it even more unique
              const randomNumber = Math.floor(Math.random() * 1000); // Random number between 0 and 999

              // Combine the adjective and cool word with a random number (optional)
            this.userForm.value.userName= `${this.model.firstName.substring(0,1)}${this.model.lastName.substring(0,1)}${randomAdjective}${randomCoolWord}${randomNumber}`;
            this.userForm.form.patchValue({
              userName: `${this.model.firstName.substring(0,1)}${this.model.lastName.substring(0,1)}${randomAdjective}${randomCoolWord}${randomNumber}`
            }); 
              console.log(this.userForm);
        }
      
}
