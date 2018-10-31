import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeHtml, SafeStyle, SafeValue } from '@angular/platform-browser';
import { Url } from 'url';
import { TrustedResourceUrlString } from '@angular/core/src/sanitization/bypass';


@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  @Input() header_title: string;
  @Input() header_subtitle: string;
  @Input() header_img: string;

  constructor(private sanitizer: DomSanitizer) { 
 
  }

  ngOnInit() {
  }

}
