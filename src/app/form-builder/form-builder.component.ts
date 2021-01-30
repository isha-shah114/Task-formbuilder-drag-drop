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
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn']; // array to for radio button group
  favoriteSeason: string; // to store value of selected radio button
  checked = false; // default value of radio buttons

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
  radioChangeHandler (event: any){
    this.favoriteSeason = event.value;
    this.checked = true;
  }

  // function to update the selected radio button name
  updateName(updatedName) {
    // compariing if selected radio button name and updated name are not same
    if(this.favoriteSeason !== updatedName) {
      for(let i = 0; i < this.seasons.length; i++)
      {
        // compariing if selected radio button name and value in array are same or not
        if(this.seasons[i] == this.favoriteSeason)
        {
          // assigning updated name to existing array value
          this.seasons[i] = updatedName;
          alert(this.favoriteSeason+ " is changed to "+updatedName);
        }
      }
    }
    // else condition if the updated name already exist in array
    else {
      alert("Name already exist");
    }
  }
}