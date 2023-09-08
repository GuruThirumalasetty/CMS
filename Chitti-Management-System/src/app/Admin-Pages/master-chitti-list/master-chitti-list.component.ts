import { Dialog } from '@angular/cdk/dialog';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MasterChittiCreateComponent } from './master-chitti-create/master-chitti-create.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-master-chitti-list',
  templateUrl: './master-chitti-list.component.html',
  styleUrls: ['./master-chitti-list.component.scss']
})
export class MasterChittiListComponent {
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  isLoading: boolean = false;
  Backbutton = ' Add Doctor';
  displayedColumns: string[] = ['id', 'chittitype', 'chittiname', 'noofmembers', 'startfrom','endfrom', 'Monthlyamount', 'actions'];

  constructor(private router: Router,private dialog:Dialog) { }
  ngOnInit(): void {
    const testdata: any [] =[
      {id:1 , chittitype:'test',chittiname:'test',noofmembers:10 ,startfrom:'25-08-2023' ,endfrom:'28-08-2024' ,Monthlyamount:'12 Months' },
      {id:2 , chittitype:'test',chittiname:'test',noofmembers:10 ,startfrom:'25-08-2023' ,endfrom:'28-08-2024' ,Monthlyamount:'12 Months' },
      {id:3 , chittitype:'test',chittiname:'test',noofmembers:10 ,startfrom:'25-08-2023' ,endfrom:'28-08-2024' ,Monthlyamount:'12 Months' },
      {id:4 , chittitype:'test',chittiname:'test',noofmembers:10 ,startfrom:'25-08-2023' ,endfrom:'28-08-2024' ,Monthlyamount:'12 Months'},
      {id:5 , chittitype:'test',chittiname:'test',noofmembers:10 ,startfrom:'25-08-2023' ,endfrom:'28-08-2024' ,Monthlyamount:'12 Months'}
    ];
    this.dataSource = new MatTableDataSource<Element>(testdata);
  }
  addNew() {
    this.isLoading = true;
    this.Backbutton = ' Add New';
    setTimeout(() => {
      this.isLoading = false;
      this.Backbutton = ' Add New';
      this.dialog.open(MasterChittiCreateComponent,{
        disableClose: true,
      width: '80%',
      height:'auto',
      })
    }, 500)
  }
}
