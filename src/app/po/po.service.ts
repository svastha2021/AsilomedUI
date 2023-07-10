import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ReferenceService } from '../utilities/services/reference.service';

@Injectable({
  providedIn: 'root',
})
export class PoService {
  constructor(private http: HttpClient) {}

  getProducts(supId: any, eod: any): Observable<any> {
    return this.http.get(
      environment.apiUrl +
        'supplierproducts/' +
        localStorage.getItem('branch_id') +
        '/' +
        supId +
        '?eod_date=' +
        eod
    );
  }

  createPO(param: any): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(environment.apiUrl + 'po', param, {
      headers: headers,
    });
  }

  getBranchList(): Observable<any> {
    let headers = new HttpHeaders();
    let org_id = localStorage.getItem('org_id');
    headers.append('Content-Type', 'application/json');
    return this.http.get(environment.apiUrl + 'branches/' + org_id, {
      headers: headers,
    });
  }

  getSupplierList(branchId: any): Observable<any> {
    const orgId = localStorage.getItem('org_id');
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(
      environment.apiUrl + 'suppliers/' + orgId + '/' + branchId,
      { headers: headers }
    );
  }

  getSupplierListByPo(branchId: any, supplierId: any): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(
      environment.apiUrl + 'pos/' + branchId + '/' + supplierId,
      { headers: headers }
    );
  }

  getPoList(poNumber: any): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(environment.apiUrl + 'po/' + poNumber, {
      headers: headers,
    });
  }

  getPoDraftData(
    branchId: any,
    supplierId: any,
    poStatus: any
  ): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(
      environment.apiUrl +
        'pos/' +
        branchId +
        '/' +
        supplierId +
        '/' +
        '?po_status=' +
        poStatus,
      { headers: headers }
    );
  }

  //get product list data
  public getProdList(branchId: any): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(environment.apiUrl + 'products/' + branchId, {
      headers: headers,
    });
  }
}
