import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{

  constructor(private element:ElementRef) { 

 
  }
  ngOnInit(){
  }
  @HostListener('mouseenter') mouseover(eventData:Event){
    this.element.nativeElement.style.backgroundColor="green"
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.element.nativeElement.style.backgroundColor="pink"
  }
}