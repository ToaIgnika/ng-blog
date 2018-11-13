import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from '../../post';
import { TdTextEditorComponent } from '@covalent/text-editor';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  options: any = {
    lineWrapping: true
  };

  post: Post = {
    id: "",
    title: "",
    sub_title: "",
    bg_image: "assets/img/stock-bg.jpg",
    author: "",
    date: "",
    text: "",
    datestamp : 0
  }



  @ViewChild('textEditor') private _textEditor: TdTextEditorComponent;
  private itemsCollection: AngularFirestoreCollection<Post>;

  constructor(private afs: AngularFirestore,
    private router: Router) {
    this.itemsCollection = afs.collection<Post>('items');
  }

  ngOnInit() {
  }

  saveDraft() {
    console.log(this.post.text);
    //this.str = this._textEditor.value;
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
    let date = new Date();
    this.post.date = '' + month[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
    this.post.author = 'ToaIgnika';
    this.post.datestamp = date.getTime();
    this.itemsCollection.doc(this.post.id).set(this.post);
    this.router.navigate(['./post/' + this.post.id]);
  }
}
