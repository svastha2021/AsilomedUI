import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoodsReceiptService {

  constructor(private http: HttpClient) { }

  getProducts(supId: string):Observable<any> {
    return this.http.get(environment.apiUrl + 'supplierproducts/' + localStorage.getItem('branch_id') + '/' + supId);
  }

  createGoods(param:any):Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(environment.apiUrl + 'pogoodsreceipt',param,
      { headers: headers })
  }

  getBranchList():Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(environment.apiUrl + 'branches/KRC',
    { headers: headers })
  }

  getSupplierList(branchId: any):Observable<any>{
    const orgId = localStorage.getItem('org_id');
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(environment.apiUrl + 'suppliers/'+ orgId + '/' + branchId,
    { headers: headers })
  }

  getSupplierListByPo(branchId: any, supplierId: any):Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(environment.apiUrl + 'pos/'+ branchId+ '/'+supplierId,
    { headers: headers })
  }

  getPoList(poNumber: any):Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(environment.apiUrl + 'po/'+ poNumber,
    { headers: headers })
  }

  getPoDraftData(branchId: any, supplierId: any, poStatus: any):Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(environment.apiUrl + 'pos/'+ branchId +'/'+ supplierId +'/'+ '?po_status=' + poStatus,
    { headers: headers })
  }

  //get product list data
  public getProdList(branchId: any): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(environment.apiUrl + 'products/'+ branchId,
      { headers: headers })
  }

  //View
  public viewGoods(suppId: any, poNumber: any, code: any): Observable<any> {
    const orgId = localStorage.getItem('org_id');
    const branch_id = localStorage.getItem('branch_id');
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(environment.apiUrl + 'goodreceipt/'+ orgId + '/' + branch_id + '/' + suppId + '?po_number=' + poNumber + '&item_code=' + code,
      { headers: headers })
  }
}

