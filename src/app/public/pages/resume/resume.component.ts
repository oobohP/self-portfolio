import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {


  ngOnInit() {
  }

    passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('validatorpassgoeshere'), // plain text for now, can be used many ways hash etc
  ]);

    submit(password) {
        // add show resume component add if statement to validate VALID
        console.log(password)
    }




}
