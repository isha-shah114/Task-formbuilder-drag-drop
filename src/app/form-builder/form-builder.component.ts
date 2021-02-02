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
  radioGroup: string[] = ['Radio 1', 'Radio 2', 'Radio 3', 'Radio 4']; // array for radio button group
  selectedRadioButton: string; // to store value of selected radio button
  checked = false; // default value of radio buttons

  checkGroup: any; //array of checkboxes
  checkedList: any; //to check how many checkboxes are selected
  selectAll = false; //to select all checkboxes 

  constructor() {
    this.checkGroup = [
      {id: 1, name : "Checkbox 1", isSelected : false},
      {id: 2, name : "Checkbox 2", isSelected : true},
      {id: 3, name : "Checkbox 3", isSelected : false}
    ];
    this.getCheckedItemList();
  }

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
    this.selectedRadioButton = event.value;
    this.checked = true;
  }

  // function to update the selected radio button name
  updateName(updatedName) {
    // compariing if selected radio button name and updated name are not same
    if(this.selectedRadioButton !== updatedName) {
      for(let i = 0; i < this.radioGroup.length; i++)
      {
        // comparing if selected radio button name and value in array are same or not
        if(this.radioGroup[i] == this.selectedRadioButton)
        {
          // assigning updated name to existing array value
          this.radioGroup[i] = updatedName;
          alert(this.selectedRadioButton+ " is changed to "+updatedName);
        }
      }
    }
    // else condition if the updated name already exist in array
    else {
      alert("Name already exist");
    }
  }

  // function to select all checkboxes
  checkUncheckAll() {
    for (var i = 0; i < this.checkGroup.length; i++) {
      this.checkGroup[i].isSelected = this.selectAll;
    }
    this.getCheckedItemList();
  }
   
  isAllSelected() {
    this.selectAll = this.checkGroup.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedItemList();
  }
  
  getCheckedItemList(){
    this.checkedList = [];
    for (var i = 0; i < this.checkGroup.length; i++) {
      if(this.checkGroup[i].isSelected)
      this.checkedList.push(this.checkGroup[i]);
    }
    this.checkedList = JSON.stringify(this.checkedList);
  }
}