import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { auth } from 'firebase/app';
import { Post } from '../post';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  items: Observable<any[]>;
  post_obs: Observable<Post>;
  post : Post;
  loaded : boolean;

  constructor(public afAuth: AngularFireAuth,
    private afs: AngularFirestore) { 

    this.items = afs.collection('items', ref => ref.orderBy('datestamp', 'desc').limit(1)).valueChanges();
    
    this.items.subscribe((p) => {
      console.log(p[0]);
      this.post = p[0];
      this.loaded = true;

    });

    
    }

  ngOnInit() {
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
