import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MESSAGES_CONTAINER_ID } from '@angular/cdk/a11y';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']

})
export class ContactComponent {
  _db:AngularFirestore;
  private messages: Observable<any[]>;

  constructor(db:AngularFirestore ) {
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

}
