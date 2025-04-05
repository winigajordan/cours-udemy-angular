import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import { User } from '../model/user.model';
import { CommonModule } from '@angular/common';
import {AuthService} from '../service/auth.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  public myForm!: FormGroup;
  err: any;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    ) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  onRegister(): void {
    this.loading = true;
    if (this.myForm.valid) {
      const user: User = {
        username: this.myForm.value.username,
        email: this.myForm.value.email,
        password: this.myForm.value.password,
        enabled: undefined!,
        roles: undefined!,
      };

      this.authService.registerUser(user).subscribe(
        {
          next: () => {
            //alert("Veuillez confirmer votre adresse email");
            this.loading = false;
            this.toastr.success("Veuillez confirmer votre e-mail!", "Confirmation");
            this.authService.setRegisteredUser(user)
            this.router.navigate(['/verif-email']);
          },
          error:(err)  => {
            this.loading = false;
            if (err.status === 400) {
              this.err = err.error.message;
            }
          }
        }
      );

      console.log(user);
    } else {
      console.log("Formulaire invalide");
    }
  }
}
