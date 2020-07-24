import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    selected_user:any;
  user_array:any[]=[];
  constructor(private service:UserService,private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.service.getAllUsers().subscribe((data: any[])=>{
      this.user_array=data;
        console.log(this.user_array);
    })  
  }

    openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.selected_user;
    let dialogRef=this.matDialog.open(DialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {
      console.log(`Dialog sent: ${value}`); 
    });
  }
    
}
