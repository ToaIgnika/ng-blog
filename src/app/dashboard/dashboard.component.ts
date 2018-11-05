import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { Post } from '../post';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items: Observable<any[]>;
  private itemDoc: AngularFirestoreDocument<Post>;
  private itemsCollection: AngularFirestoreCollection<Post>;
  post: Observable<Post>;
  
  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore) {
      this.itemsCollection = afs.collection<Post>('items');
      this.items = this.itemsCollection.valueChanges();
     // this.itemDoc = afs.doc<Post>('items/');
      //this.post = this.itemDoc.valueChanges();
      //console.log(this.itemDoc);
      //console.log(this.post);
  }


  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
  }
}
