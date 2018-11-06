import { Injectable } from '@angular/core';
import { Post } from './post';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private itemDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;
  trigger : boolean;
  constructor(
    private afs: AngularFirestore,
  ) { }

  getPost(id) {
    return this.afs.doc<Post>('items/' + id).valueChanges();
    this.post = this.itemDoc.valueChanges();
    this.trigger = false;
  
    return this.post;
  }
}
