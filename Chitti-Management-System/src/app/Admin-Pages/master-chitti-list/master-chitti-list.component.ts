import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MasterChittiCreateComponent } from './master-chitti-create/master-chitti-create.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { NgxSpinnerService } from 'ngx-spinner';
import { CmsService } from 'src/app/Services/cms.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-master-chitti-list',
  templateUrl: './master-chitti-list.component.html',
  styleUrls: ['./master-chitti-list.component.scss']
})
export class MasterChittiListComponent {
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  button = 'AddNew';
  isLoading = false;
  displayedColumns: string[] = ['id', 'chittitype', 'chittiname', 'noofmembers', 'startfrom','endfrom', 'Monthlyamount', 'actions'];

  constructor(private router: Router,private dialog:Dialog,private spinner: NgxSpinnerService) { }

  isLoading: boolean = false;
  displayedColumns: string[] = ['id', 'chittitype', 'chittiname', 'noofmembers', 'startfrom','endto', 'Monthlyamount', 'actions'];

  constructor(private router: Router,
    private dialog:MatDialog,
    private cmsService:CmsService) { }

  ngOnInit(): void {
    this.getChittiDetails();
  }
  getChittiDetails(){
     this.cmsService.getChittiMasterCreateDetails().subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
      }
    });
  }
  addNew() {
    this.isLoading = true;

    this.button = ' Wait';
    this.spinner.show();


    setTimeout(() => {
      this.spinner.show();
      this.isLoading = false;
      this.button = ' AddNew';
      this.dialog.open(MasterChittiCreateComponent,{
        disableClose: true,
      width: '80%',
      height:'auto',
      }).afterClosed().subscribe(val=>{
        if(val == 'Save'){
          this.getChittiDetails();
        }
      })
      this.spinner.hide()
    }, 1000 )
  }
  editChittiDetails(details:any){
    this.dialog.open(MasterChittiCreateComponent,{
      width:'80%',
      data:details
    }).afterClosed().subscribe(value=>{
      if(value === 'Update'){
        this.getChittiDetails();
      }
    })
  }

  deleteChittiDetails(id:number){
    // npm install sweetalert2
    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: "You won't be able to revert this!",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes, delete it!'
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire(
    //       'Deleted!',
    //       'Your file has been deleted.',
    //       'success'
    //     )
    //   }
    // })

    // this.cmsService.deleteChittiMasterCreateDetails(id).subscribe({
    //   next:()=>{
    //     this.getChittiDetails();
    //   }
    // });
  }
}
