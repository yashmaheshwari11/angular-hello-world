import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private ele: ElementRef) {   }
  
  changeColor(color: string){
    this.ele.nativeElement.style.backgroundColor=color

}

@HostListener('mouseenter')
onmouseenter(){
  this.changeColor('pink')
}

@HostListener('mouseleave')
onmouseleave(){
  this.changeColor(null)
}

}
