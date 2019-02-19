import { Directive, OnInit, Inject, ElementRef } from '@angular/core';
import { JQUERY_TOKEN } from './jquery.service';

@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit { 
    private el: HTMLElement;
    constructor(@Inject(JQUERY_TOKEN) private $: any,
                ref: ElementRef
                ) {
                    this.el = ref.nativeElement;
                }

    ngOnInit() {
        this.el.addEventListener('click', e => {
            this.$('#simple-modal').modal({});
        });
    }
}