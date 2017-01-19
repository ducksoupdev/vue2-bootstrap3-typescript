export interface IDropdownHandler {
    init(dropdownElement: HTMLElement): void;
}

export class DropdownHandler implements IDropdownHandler {

    private isOpen: boolean;
    private dropdownMenu: HTMLElement;
    private dropdownElement: HTMLElement;
    private toggleButton?: HTMLElement;
    private dropdownEventListener = (event: Event) => this.hideDropdown(event);

    constructor() {
        this.isOpen = false;
    }

    init(dropdownElement: HTMLElement) {
        this.dropdownElement = dropdownElement;
        let toggleButton = <HTMLElement>this.dropdownElement.querySelector('.dropdown-toggle');
        let dropdownMenu = <HTMLElement>this.dropdownElement.querySelector('.dropdown-menu');
        if (toggleButton && dropdownMenu) {
            this.toggleButton = toggleButton;
            this.dropdownMenu = dropdownMenu;
            this.setupToggle();
        }
    }

    private setupToggle() {
        this.toggleButton.addEventListener('click', (event: Event) => {
            event.preventDefault();
            event.stopPropagation();
            this.isOpen ? this.hideDropdown() : this.showDropdown();
        });
    }

    private showDropdown() {
        this.dropdownElement.classList.add('open');
        this.isOpen = true;
        this.addBackdrop();
        // document.addEventListener('click', this.dropdownEventListener);
    };

    private hideDropdown() {
        this.dropdownElement.classList.remove('open');
        this.isOpen = false;
        // document.removeEventListener('click', this.dropdownEventListener);
    };

    private addBackdrop() {
        let backdrop: HTMLElement = document.createElement('DIV');
        backdrop.classList.add('dropdown-backdrop');
        backdrop.addEventListener('click', (event: Event) => {
            event.preventDefault();
            event.stopPropagation();
            this.removeBackdrop();
        });
        this.dropdownElement.insertBefore(backdrop, this.dropdownMenu);
    }

    private removeBackdrop() {
        let backdrop = <HTMLElement>this.dropdownElement.querySelector('.dropdown-backdrop');
        if (backdrop) {
            this.hideDropdown();
            this.dropdownElement.removeChild(backdrop);
        }
    }

}