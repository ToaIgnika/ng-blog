import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent implements OnInit {
  @Input() blog_id: string;
  @Input() blog_title: string;
  @Input() blog_subtitle: string;
  @Input() blog_author: string;
  @Input() blog_date: string;

  constructor() { }

  ngOnInit() {
  }

}
