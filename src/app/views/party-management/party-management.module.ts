import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PartyManagementComponent } from './party-management.component';
import { PartyManagementService } from 'src/app/core/service/party-management-service/party-management.service';
import { CreateNewPartyDetailsComponent } from './create-new-party-details/create-new-party-details.component';

const routes: Routes = [
  {
    path: '',
    component: PartyManagementComponent
  },
  {
    path: 'create-new-party-management', component: CreateNewPartyDetailsComponent,
    data: { title: 'Create New Party Management', icon: 'fa-cog' }
},
{
  path: 'create-new-party-management/:id', component: CreateNewPartyDetailsComponent,
  data: { title: 'Create New Party Management', icon: 'fa-cog' }
},
];

@NgModule({
  declarations: [PartyManagementComponent, 
                 CreateNewPartyDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],

 

  providers: [PartyManagementService],
  
})
export class PartyManagementModule {}
