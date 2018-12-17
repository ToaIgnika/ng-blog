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
    this.items = afs.collection('items', ref => ref.orderBy('datestamp', 'desc')).valueChanges();
  }

  ngOnInit() {
  }

}
