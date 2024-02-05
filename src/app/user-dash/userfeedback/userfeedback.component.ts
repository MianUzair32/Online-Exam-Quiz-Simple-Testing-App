import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-userfeedback',
  templateUrl: './userfeedback.component.html',
  styleUrl: './userfeedback.component.css',
  
})
export class UserfeedbackComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
