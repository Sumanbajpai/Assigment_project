import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { PartyManagementDataModel } from '../../model/user-data-model';
import { AuthService } from '../auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PartyManagementService {
  token: any;
  constructor(private http: HttpClient,
              private authService: AuthService
  ) {}

  getAllParty() {
    const token = this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`
      })
    };
    return this.http.get<PartyManagementDataModel>(`https://ap.greatfuturetechno.com/party/`, httpOptions)
      .pipe(map((data) => data));
  }

  createNewParty(partyManagementData:PartyManagementDataModel) {
    const formData = new FormData();
    formData.append("name", partyManagementData.name);
    formData.append("company_name", partyManagementData.company_name);
    formData.append("mobile_no", partyManagementData.mobile_no);
    formData.append("telephone_no", partyManagementData.telephone_no);
    formData.append("whatsapp_no", partyManagementData.whatsapp_no);
    formData.append("email", partyManagementData.email);
    formData.append("remark", partyManagementData.remark);
    formData.append("date_of_birth", partyManagementData.date_of_birth);
    formData.append("anniversary_date", partyManagementData.anniversary_date);
    formData.append("gstin", partyManagementData.gstin);
    formData.append("pan_no", partyManagementData.pan_no);
    formData.append('is_active', partyManagementData.is_active ? 'true' : 'false');
    formData.append('login_access', partyManagementData.login_access ? 'true' : 'false');
    formData.append('login_access', partyManagementData.apply_tds ? 'true' : 'false');
    formData.append("credit_limit", partyManagementData.credit_limit.toString());
    formData.append("address", JSON.stringify(partyManagementData.address))
    formData.append("bank_id",JSON.stringify(partyManagementData.bank_id))
    formData.append("image", partyManagementData.image);
    const token = this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Token ${token}`
      })
    };
    return this.http.post<PartyManagementDataModel>(`https://ap.greatfuturetechno.com/party/`, formData, httpOptions)
      .pipe(map((data) => data));
  }

  getPartyListById(partyId:number) {
     const token = this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`
      })
    };
    return this.http.get<any>(`https://ap.greatfuturetechno.com/party/?id=${partyId}`, httpOptions)
      .pipe(map((data) => data));
  }

 updatePartyList(partyManagementData:PartyManagementDataModel) {
    const formData = new FormData();
    formData.append("name", partyManagementData.name);
    formData.append("company_name", partyManagementData.company_name);
    formData.append("mobile_no", partyManagementData.mobile_no);
    formData.append("telephone_no", partyManagementData.telephone_no);
    formData.append("whatsapp_no", partyManagementData.whatsapp_no);
    formData.append("email", partyManagementData.email);
    formData.append("remark", partyManagementData.remark);
    formData.append("date_of_birth", partyManagementData.date_of_birth);
    formData.append("anniversary_date", partyManagementData.anniversary_date);
    formData.append("gstin", partyManagementData.gstin);
    formData.append("pan_no", partyManagementData.pan_no);
    formData.append('is_active', partyManagementData.is_active ? 'true' : 'false');
    formData.append('login_access', partyManagementData.login_access ? 'true' : 'false');
    formData.append('login_access', partyManagementData.apply_tds ? 'true' : 'false');
    formData.append("credit_limit", partyManagementData.credit_limit.toString());
    formData.append("address", JSON.stringify(partyManagementData.address))
    formData.append("bank_id",JSON.stringify(partyManagementData.bank_id))
    formData.append("image", partyManagementData.image);
    const token = this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Token ${token}`
      })
    };
    return this.http.put<PartyManagementDataModel>(`https://ap.greatfuturetechno.com/party/?id=${partyManagementData.id}`, formData, httpOptions)
      .pipe(map((data) => data));
  }

 deletePartyData(list: PartyManagementDataModel) {
     const token = this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`
      })
    };
    return this.http.delete<any>(`https://ap.greatfuturetechno.com/party/?id=${list.id}`, httpOptions)
      .pipe(map((data) => data));
  }

}
