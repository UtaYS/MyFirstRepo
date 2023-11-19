import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'Бургеры';
  currency = '$';

  form = this.fb.group({
    order: ["", Validators.required],
      name: ["", Validators.required],
      phone: ["", Validators.required],

  })

  constructor(private fb: FormBuilder) {
  }



  scrollTo(target: HTMLElement) {
    target.scrollIntoView({ behavior: "smooth" });
  }

    confirmOrder(){
    if (this.form.valid){
        alert("Спасибо за заказ! Мы скоро свяжемся с Вами!");
        this.form.reset();
    }
    }
}

