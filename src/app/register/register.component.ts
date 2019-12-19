import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeesDatalistService } from '../employees-datalist.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
registerForm: FormGroup;
    submitted = false;
  constructor(private formBuilder: FormBuilder , public datalist: EmployeesDatalistService,
   private router: Router) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            gender: [ '', Validators.required],
            dob: ['', Validators.required],
            department:['', Validators.required]
        });
  }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        this.datalist.employeeList.push(this.registerForm.value);
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.router.navigate(['/tableList'])
    }

}