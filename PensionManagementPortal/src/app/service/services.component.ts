import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://PensionManagement-1224555768.us-east-1.elb.amazonaws.com:8100/ProcessPension';

@Injectable({
  providedIn: 'root'
})
export class ProcessPensionServices {
    
 
    

  bankDetail ={
    id :'',
    bankName:'',
    accountNumber:'',
    typeOfBank:''
  }
  constructor(private http: HttpClient) { }

  create(data: { aadhaarNumber : string, name : string, dateOfBirth : string, 
  pan : string, salaryEarned : string, allowances : string, typeOfPension :string,
bankDetail : object }): Observable<any> {
    
    
 // this.pensionDetailsOfUser=this.http.post(baseUrl, data);
     
    //console.log(s);
    
   return this.http.post(baseUrl, data);

  }
    
 
  
  // get(id:any): Observable<any> {
  //   return this.http.get(`${baseUrl}/${id}`);
  // }
 // create(data: { name: string; contactNumber: string; componentType: string; componentName: string; quantity: string; }): Observable<any> {
  //  return this.http.post(baseUrl, data);
 // }


}
