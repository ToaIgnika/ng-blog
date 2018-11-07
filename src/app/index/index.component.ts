import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Post } from '../post';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  title = 'Blog';

  items: Observable<any[]>;
  private itemsCollection: AngularFirestoreCollection<Post>;
  post: Observable<Post>;

  constructor(
    private afs: AngularFirestore
  ) { 
    this.itemsCollection = afs.collection<Post>('items');
    this.items = this.itemsCollection.valueChanges();
  }

  ngOnInit() {
  }

}
