import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { UserService } from '../user.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private service:UserService) { }

  ngOnInit(): void {

  }
    close() {
    this.dialogRef.close("closed");
  }
delete(){
console.log(this.data[0].id);
this.service.deleteUser(this.data[0].id).subscribe((data: any[])=>{
        console.log(data);
        this.dialogRef.close("closed");
    })  
}

}
