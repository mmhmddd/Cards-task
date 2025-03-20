import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.scss']
})
export class CreateproductComponent implements OnInit {
  profileData!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initform();
  }

  initform() {
    this.profileData = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      salary: new FormControl('', [Validators.required, Validators.min(100)]),
      address: this.fb.group({
        city: new FormControl(''),
        street: new FormControl('')
      })
    });
  }

  updateinput() {
    console.log(this.profileData);

    this.profileData.setValue({
      name: 'Test User',  // Provide actual values, not validation rules
      salary: '150',      // Must be a valid number as per min(100)
      address: {
        city: 'Cairo',
        street: 'Main Street'
      }
    });
  }

  get f() {
    return this.profileData.controls;
  }

  submitform() {
    console.log(this.profileData.value);
  }
}
