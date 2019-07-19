import { Directive, HostListener, OnChanges, Input, ElementRef, SimpleChanges } from '@angular/core';
import * as screenfull from 'screenfull';

@Directive({
    selector: '[ngxToggleFullscreen]'
})
export class ToggleFullscreenDirective implements OnChanges {

    @Input('ngxToggleFullscreen')
    isFullscreen: boolean = false;

    constructor(private el: ElementRef) { }

    ngOnChanges(changes: SimpleChanges) {
        if(!changes.isFullscreen.isFirstChange){
            if (this.isFullscreen && screenfull.enabled) {
                screenfull.request(this.el.nativeElement);
            } else if (screenfull.enabled) {
                screenfull.exit();
            }
        }
    }

}
