import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
import { PartyManagementDataModel } from 'src/app/core/model/user-data-model';
import { PartyManagementService } from 'src/app/core/service/party-management-service/party-management.service';

@Component({
  selector: 'app-create-new-party-details',
  templateUrl: './create-new-party-details.component.html',
  styleUrls: ['./create-new-party-details.component.css']
})
export class CreateNewPartyDetailsComponent implements OnInit{
  partyManagementModel: PartyManagementDataModel
  partyId:number=0;
  isShowSaveBtn:boolean=true;
  isShowUpdateBtn:boolean=false;

  constructor(private partyManagementService: PartyManagementService,
              private route: ActivatedRoute,
  ) {
             this.partyManagementModel =  new PartyManagementDataModel()
             this.partyManagementModel.address = [{
                                                    id: 0,
                                                    address_line_1: '',
                                                    address_line_2: '',
                                                    country: '',
                                                    state: '',
                                                    city: '',
                                                    pincode: ''}]
              
              this.partyManagementModel.bank_id = [{
                bank_ifsc_code: 0,
                bank_name: '',
                branch_name: '',
                account_no: '',
                account_holder_name: ''
              }]
  }

ngOnInit(){
  this.route.params.subscribe((params) => {
    this.partyId = +params['id']
    if(this.partyId){
      this.getPartyById();
      this.isShowSaveBtn = false;
      this.isShowUpdateBtn = true;
    }else{
      this.isShowSaveBtn = true;
      this.isShowUpdateBtn = false;
    }
  });
}

handleFileInput(event:any) {
   this.partyManagementModel.image = event.target.files?.item(0);
  }

createNewParty() {
  this.partyManagementService.createNewParty(this.partyManagementModel)
    .subscribe((response:any) => {
     if(response.success){
      Swal.fire(
        'Success!',
        response.msg,
        'success'
      )
     } else{
      Swal.fire(
        'Error',
        'Something went wrong'
      )
     }
    });
}

getPartyById() {
  this.partyManagementService.getPartyListById(this.partyId)
    .subscribe((data:PartyManagementDataModel) => {
     this.partyManagementModel = data;
    });
}

updatePartyList(){
  this.partyManagementService.updatePartyList(this.partyManagementModel)
    .subscribe((response:any) => {
     if(response.success){
      Swal.fire(
        'Success!',
        response.msg,
        'success'
      )
     } else{
      Swal.fire(
        'Error',
        'Something went wrong'
      )
     }
    });
}
}

