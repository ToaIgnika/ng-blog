import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service'
import { CovalentMarkdownModule } from '@covalent/markdown';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  /*

  post: Post = {
    title : "Man must explore, and this is exploration at its greatest",
    sub_title : "Problems look mighty small from 150 miles up",
    bg_image : "assets/img/post-bg.jpg",
    author : "Start Bootstrap",
    date : "August 24, 2018",
    text : "# Heading ## \nSub Heading (H2) \n### Steps (H2)"
  }
*/

  items: Observable<any[]>;
  private itemDoc: AngularFirestoreDocument<Post>;
  post_obs: Observable<Post>;
  post : Post;
  loaded : boolean;
  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private postServ : PostService
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
    //this.post = postServ.getPost(id);
       
   
    
  }

  ngOnInit() {
  }
}
