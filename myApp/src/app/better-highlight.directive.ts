import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
@Input() defaultcolor:string="red"
@Input() highlightcolor:string="yellow"
  constructor(private elRef:ElementRef,private renderer:Renderer2) {

   }
  ngOnInit(){
// this.renderer.setStyle(this.elRef.nativeElement,"backgroundColor","blue")
  
  }
  @HostBinding("style.backgroundColor") backgroundColor!:string
  @HostListener('mouseenter') mouseover(eventData:Event){
    this.backgroundColor=this.defaultcolor
    // this.renderer.setStyle(this.elRef.nativeElement,"backgroundColor","blue")
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.backgroundColor=this.highlightcolor
    // this.renderer.setStyle(this.elRef.nativeElement,"backgroundColor","transparent")
  }

}
