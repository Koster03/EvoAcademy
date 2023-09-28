import { Component, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { OnlyRussianLetters } from './Utils/CustomValidators';
import { MatTable } from '@angular/material/table';

export interface IBook {
  name: string;
  author: string;
}

const ELEMENT_DATA: IBook[] = [
  { name: 'Хребты безумия', author: 'Говард Лавкрафт' },
  { name: 'Срок времени', author: 'Карло Ровелли' },
  { name: 'Отель', author: 'Артур Хейли' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public displayedColumns: string[] = ['position', 'name', 'author'];
  public dataSource = ELEMENT_DATA;

  @ViewChild(MatTable) table!: MatTable<IBook>;

  public modelForm = new FormGroup({
    name: new FormControl('', [Validators.required, OnlyRussianLetters]),
    author: new FormControl('', [Validators.required, OnlyRussianLetters]),
  });

  public get nameControl(): AbstractControl {
    return this.modelForm.get('name')!;
  }

  public get authorControl(): AbstractControl {
    return this.modelForm.get('author')!;
  }

  public ErrorNameMatcher = {
    isErrorState: () => {
      return this.nameControl.dirty && this.nameControl.invalid;
    },
  };

  public ErrorAuthorMatcher = {
    isErrorState: () => {
      return this.authorControl.dirty && this.authorControl.invalid;
    },
  };

  public addData() {
    const book: IBook = {
      name: this.modelForm.value.name!,
      author: this.modelForm.value.author!,
    };
    this.modelForm.reset();
    this.dataSource.push(book);
    this.table.renderRows();
  }
}
