import * as Vue from 'vue';
import {DropdownHandler} from './handler';

export class DropdownDirective implements Vue.DirectiveOptions {
    bind(el: HTMLElement) {
        let dropdownHandler = new DropdownHandler();
        dropdownHandler.init(el);
    }
}