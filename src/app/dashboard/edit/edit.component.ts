import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from '../../post';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { TdTextEditorComponent } from '@covalent/text-editor';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  options: any = {
    lineWrapping: true
  };
  items: Observable<any[]>;
  private itemDoc: AngularFirestoreDocument<Post>;
  post_obs: Observable<Post>;
  post: Post = {
    id: "",
    title: "",
    sub_title: "",
    bg_image: "",
    author: "",
    date: "",
    text: ""
  }
  loaded: boolean;
  @ViewChild('textEditor') private _textEditor: TdTextEditorComponent;
  private itemsCollection: AngularFirestoreCollection<Post>;

  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute
  ) {
    const id = '' + this.route.snapshot.paramMap.get('id');
    //this.loaded = true;
    this.loaded = false;

    this.itemDoc = afs.doc<Post>('items/' + id);
    this.post_obs = this.itemDoc.valueChanges();

    this.post_obs.subscribe((p) => {
      this.post = p;
      this.loaded = true;
    });
    this.itemsCollection = afs.collection<Post>('items');

  }

  ngOnInit() {
  }

  publishPost() {
    // Persist a document id
    //const id = this.afs.createId();
    let month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    this.itemsCollection.doc(this.post.id).set(this.post);
  }
}
