import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MESSAGES_CONTAINER_ID } from '@angular/cdk/a11y';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']

})
export class ContactComponent {
  _db:AngularFirestore;
  private messages: Observable<any[]>;

  constructor(db:AngularFirestore, private _snackBar: MatSnackBar ) {
    this.messages = db.collection('messages').valueChanges();
    this._db = db;
  }
  

  submit (contactForm) {
    // console.log(contactForm.value)
    
    let messageCollection = this._db.collection('messages');

    //TODO : put data in SET before adding to DB
    messageCollection.add(contactForm.value);

    contactForm.reset();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });

  }

}
