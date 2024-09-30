import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { PartyManagementDataModel } from 'src/app/core/model/user-data-model';
import { PartyManagementService } from 'src/app/core/service/party-management-service/party-management.service';

@Component({
  selector: 'app-party-management',
  templateUrl: './party-management.component.html',
  styleUrls: ['./party-management.component.css']
})

  export class PartyManagementComponent implements OnInit {
    partyManagementData: any| PartyManagementDataModel
    expandedRow: any;
    
    constructor(private partyManagementService: PartyManagementService,
                private router: Router) {
                this.partyManagementData =  new PartyManagementDataModel()
                }

ngOnInit(){
  this.getAllParties()
}

getAllParties() {
  this.partyManagementService.getAllParty()
    .subscribe((allPartyManagementData:PartyManagementDataModel) => {
     this.partyManagementData = allPartyManagementData
    });
}

toggleExpand(rowId: number): void {
  this.expandedRow = this.expandedRow === rowId ? null : rowId;
}

deleteList(list: PartyManagementDataModel) {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You want delete this data?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.isConfirmed) {
      this.partyManagementService.deletePartyData(list)
      .subscribe((data:any) => {
       window.location.reload();
       if(data.success){
        Swal.fire(
          'Deleted!',
          'Your data has been deleted.',
          'success'
        )
       } else{
        Swal.fire(
          'Error',
          'Something went wrong',
        )
       }
      });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Your data is safe :)',
        'error'
      )
    }
  })
}
  }

