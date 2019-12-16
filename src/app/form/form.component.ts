import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    @Input() formType: string;
    openForm: boolean = false;
    formName: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.formName = new FormGroup({
            name: new FormControl()
         });
    }

    toggle() {
        if (this.openForm)
            this.openForm = false;
        else
            this.openForm = true;
    }

    cadastrar() {
        const newCadastro = this.formName.getRawValue();

        console.log(newCadastro);
    }

}
