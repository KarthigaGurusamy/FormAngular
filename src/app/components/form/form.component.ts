import { Component } from '@angular/core';
import { Form } from 'src/app/models/form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  Items: Form[] = [];
  name: string = '';
  phoneNumber: string = '';
  email: string = '';
  btn:string='Submit';
  editId: number = 0;
  val:any='';

  AddItem(): void {
    if (this.name !== '' && this.phoneNumber !== '' && this.email != '') {
      if (this.editId === 0) {
        this.Items.push({
          id: this.Items.length + 1,
          name: this.name,
          phoneNumber: parseInt(this.phoneNumber),
          email: this.email,
        });
      } else {
        for (let item of this.Items) {
          if (this.editId === item.id) {
            (item.name = this.name),
              (item.phoneNumber = parseInt(this.phoneNumber)),
              (item.email = this.email);
          }
        }
      }
    }
    this.editId=0;
    this.name='';
    this.phoneNumber='';
    this.email='';
    this.btn='Submit';
  }

  EditItem(id: number): void {
    this.val=this.Items.find((item)=>item.id===id);
    this.name=this.val.name;
    this.phoneNumber=this.val.phoneNumber;
    this.email=this.val.email;
    this.btn='Edit';
    this.editId=id;
  }

  DeleteItem(id: number): void {
    this.Items = this.Items.filter((item) => item.id !== id);
  }
}
