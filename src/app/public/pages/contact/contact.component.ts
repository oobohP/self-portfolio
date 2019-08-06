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
  messages: Observable<any[]>;

  constructor( db:AngularFirestore ) {
    this.messages = db.collection('messages').valueChanges();
    this._db = db;
  }
  
  log (x) {
    console.log(x);
  }

  submit (contactForm) {
    console.log(contactForm.value)
    
    let messageCollection = this._db.collection('messages');

    messageCollection.add(contactForm.value);
  }

}
