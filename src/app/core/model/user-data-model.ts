export class UserData {
    username: string| null;
    password: string | null;
    constructor() {
      this.username = '';
      this.password = '';
    }
  }

  export class PartyManagementDataModel {
    address: Array<AddressDetails>;
    anniversary_date: string ;
    apply_tds: boolean
    bank_id: Array<BankDetails>;
    company_name: string;
    credit_limit: number
    date_of_birth: string;
    email: string;
    gstin: string;
    id: number;
    image: any;
    is_active: boolean; 
    login_access: boolean;
    mobile_no: string;
    name: string;
    pan_no: string;
    remark: string;
    telephone_no: string;
    userid: {}
    whatsapp_no: string
    constructor() {
      this.address = new Array<AddressDetails>();
      this.anniversary_date = '';
      this.apply_tds = false
      this.bank_id = new Array<BankDetails>();
      this.company_name = '';
      this.credit_limit = 0;
      this.date_of_birth = '';
      this.email = '';
      this.gstin='';
      this.id= 0;
      this.image= null;
      this.is_active= false;
      this.login_access = false;
      this.mobile_no= '';
      this.name= '';
      this.pan_no= '';
      this.remark= '';
      this.telephone_no= '';
      this.userid ={}
      this.whatsapp_no= ''
    }
  }
    export class AddressDetails {
      id: number;
      address_line_1: string;
      address_line_2: string;
      country: string;
      state: string;
      city:string;
      pincode:string;
      
      constructor() {
        this.id = 0;
        this.address_line_1 = '';
        this.address_line_2 = '';
        this.country = '';
        this.state = '';
        this.city = '';
        this.pincode = '';

      }
    }

    export class BankDetails {
      bank_ifsc_code: number;
      bank_name: string;
      branch_name: string;
      account_no: string;
      account_holder_name: string;
      
      constructor() {
        this.bank_ifsc_code = 0;
        this.bank_name = '';
        this.branch_name = '';
        this.account_no = '';
        this.account_holder_name = '';

      }
    }
  

