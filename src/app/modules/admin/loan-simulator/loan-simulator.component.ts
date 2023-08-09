import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-loan-simulator',
    templateUrl: './loan-simulator.component.html',

})
export class LoanSimulatorComponent {
    capital: number;
    dureeMois: number;
    tauxInitialHT: number;
    franchise: number;
    premiereDateEcheance: string;

    simulateLoan(loanForm: NgForm) {
        if (loanForm.valid) {
            // Handle form submission logic here
            console.log('Form submitted');
            console.log('Capital:', this.capital);
            console.log('Duration:', this.dureeMois);
            // Other form field values
        }
    }
}
