import {
  AbstractControl,
  FormControl,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export function OnlyRussianLetters(control: AbstractControl) {
  const pattern = /^[а-яА-ЯёЁ]+$/;
  return !pattern.test(control.value) ? { onlyRussianLetters: true } : null;
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
