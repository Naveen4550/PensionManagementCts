// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ProcessPensionServices } from '../service/services.component';
// import {HttpClient} from '@angular/common/http';

// @Component({
//   selector: 'app-process-pension',
//   templateUrl: './process-pension.component.html',
//   styleUrls: ['./process-pension.component.css']
// })
// export class ProcessPensionComponent implements OnInit {
   
//    pensiondetail = {
//     bankServiceCharge:'',
//     id:'',
//     pensionAmount:'',
//       aadhaarNumber:''
// }
//   error='';
// isShown: boolean = false ;
//   //processPensionInput = {
//     aadhaarNumber:string='';
//      name:string='';
//    dateOfBirth:string='';
//     pan:string='';
//     salaryEarned:string='';
//     allowances:string='';
//     typeOfPension:string='';
//     bankName:string='';
//     accountNumber:string='';
//     typeOfBank:string='';   
//   //};
  
//     bankDetail ={
//       id :'',
//       bankName:'',
//       accountNumber:'',
//       typeOfBank:''
//     }

//   submitted = false;
  
//   constructor(private processPensionService: ProcessPensionServices,
//     private router: Router) { }
//   ngOnInit(): void {


//   }
//     back():void{



//       this.aadhaarNumber='';
//       this.submitted=false;
//       this.isShown=false;
//       this.error='';
//     }

  
  
    
//   getAadhaarNumber(): void {
//     const data = {
//       aadhaarNumber: this.aadhaarNumber,
//       name:this.name,
//        dateOfBirth:this.dateOfBirth,
//         pan:this.pan,
//         salaryEarned:this.allowances,
//         allowances:this.allowances,
//        typeOfPension:this.typeOfPension,
//        bankDetail: {
//          bankNmae: this.bankName,
//          accountNumber: this.accountNumber,
//          typeOfBank: this.typeOfBank
//        }
//     };
   

//     this.processPensionService.create(data)
//     .subscribe(
//       response => {
        
//         console.log(response);
          
//         this.pensiondetail=response;
       
//         console.log('Successs');
//        // this.router.navigate(['pensiondetail']);
//        this.isShown = ! this.isShown;
//         this.submitted = true;
       
        
//       },
//       error => {

//         this.error="Invalid Aadhaar Number";
//         console.log('Failure');
//         console.log(error);
//         this.submitted=false;
//         this.isShown=false;
//       });
    
//      }

//     }

      


     
// //     };
  



// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ProcessPensionServices } from '../service/services.component';
// import {HttpClient} from '@angular/common/http';

// @Component({
//   selector: 'app-process-pension',
//   templateUrl: './process-pension.component.html',
//   styleUrls: ['./process-pension.component.css']
// })
// export class ProcessPensionComponent implements OnInit {
 
//   pensiondetail = {
//     bankServiceCharge:'',
//     id:'',
//     pensionAmount:'',
//     aadhaarNumber:''
//   }
//   error='';
//   isShown: boolean = false ;
//   aadhaarNumber:string='';
//   name:string='';
//   dateOfBirth:string='';
//   pan:string='';
//   typeOfPension:string='';

//   bankDetail ={
//     id :'',
//     bankName:'',
//     accountNumber:'',
//     typeOfBank:''
//   }

//   submitted = false;
  
//   constructor(private processPensionService: ProcessPensionServices,
//     private router: Router) { }
//   ngOnInit(): void {}
    
//   back():void{
//       this.aadhaarNumber='';
//       this.submitted=false;
//       this.isShown=false;
//       this.error='';
//     }

//   getAadhaarNumber(): void {
//     const data = {
//       aadhaarNumber: this.aadhaarNumber,
//       name:this.name,
//       dateOfBirth:this.dateOfBirth,
//       pan:this.pan,
//       salaryEarned:'',
//       allowances:'',
//       typeOfPension:this.typeOfPension,
//       bankDetail:this.bankDetail
//     };

//   this.processPensionService.create(data)
//     .subscribe(
//       response => {
//         console.log(response);
//         this.pensiondetail=response;
//         console.log('Successs');
//         this.isShown = ! this.isShown;
//         this.submitted = true;
//       },
//       error => {
//         this.error="Invalid Aadhaar Number";
//         console.log('Failure');
//         console.log(error);
//         this.submitted=false;
//         this.isShown=false;
//       });
    
//     }

// };
  
  
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcessPensionServices } from '../service/services.component';


@Component({
  selector: 'app-process-pension',
  templateUrl: './process-pension.component.html',
  styleUrls: ['./process-pension.component.css']
})
export class ProcessPensionComponent implements OnInit {
 
  pensiondetail = {
    bankServiceCharge:'',
    id:'',
    pensionAmount:'',
    aadhaarNumber:''
  }
  error='';
  isShown: boolean = false ;
  aadhaarNumber:string='';
  name:string='';
  dateOfBirth:string='';
  pan:string='';
  typeOfPension:string='';

  bankDetail ={
    id :'',
    bankName:'',
    accountNumber:'',
    typeOfBank:''
  }

  submitted = false;
  
  constructor(private processPensionService: ProcessPensionServices,
    private router: Router) { }
  ngOnInit(): void {}
    
  back():void{
      this.aadhaarNumber='';
      this.submitted=false;
      this.isShown=false;
      this.error='';
    }

  getAadhaarNumber(): void {
    const data = {
      aadhaarNumber: this.aadhaarNumber,
      name:'',
      dateOfBirth:'',
      pan:this.pan,
      salaryEarned:'',
      allowances:'',
      typeOfPension:'',
      bankDetail:this.bankDetail
    };

    this.processPensionService.create(data).subscribe( response => {   
          console.log(response);      
       this.pensiondetail=response;      
       console.log('Successs');       
            },      error => {      
       this.error="Invalid Aadhaar Number";    
         console.log('Failure');      
       console.log(error);     
        this.submitted=false;      
       this.isShown=false;      },   
        ()=>{        if(this.pensiondetail!=null){    
         this.isShown = ! this.isShown;       
      this.submitted = true;        } else{   
            this.error="Invalid Aadhaar Number";        }      } );
    
    }

};
  


