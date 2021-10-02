import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() title: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // 8DB0F4  // 7099E8
    this.renderer.setStyle(this.el.nativeElement.ownerDocument.body, 'backgroundColor', '#8DB0F4');
  }

}
