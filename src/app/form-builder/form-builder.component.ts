import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, copyArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent {
// array to store form control names and types
  formControls: Array<any> = [
    { name: 'Text', inputType: 'text' },
    { name: 'Email', inputType: 'email' },
    { name: 'Number', inputType: 'number' },
    { name: 'Textarea', inputType: 'textarea' },
    { name: 'Radio button', inputType: 'radiobutton' },
    { name: 'Checkbox', inputType: 'checkbox' },
    { name: 'Button', inputType: 'button' },
  ];
  formFields: string[] = []; // empty array to store form fields

  drop(event: CdkDragDrop<string[]>) {
    //if condition for moving items in array itself
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } 
    else {
      //else for copying items from one array to another array
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}