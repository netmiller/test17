import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbAlert, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-huu1',
    standalone: true,
    imports: [ CommonModule, RouterModule, NgbAlert ],
    templateUrl: './huu1.component.html',
    styleUrl: './huu1.component.css'
})

export class Huu1Component {

    closeResult = '';

    constructor(private modalService: NgbModal) {}

    test(e: any): void {
        console.log('test',e);
    }

    avaaAlertti(e: string): void {
        alert('Huu => ' + e);
    }

    open(content:any) {
		this.modalService.open(content, {size:'lg'}).result.then(
			() => {
				this.closeResult = 'Closed';
			},
		);
	}

    // private getDismissReason(reason: any): string {
	// 	if (reason === ModalDismissReasons.ESC) {
	// 		return 'by pressing ESC';
	// 	} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
	// 		return 'by clicking on a backdrop';
	// 	} else {
	// 		return `with: ${reason}`;
	// 	}
	// }

}
