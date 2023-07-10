import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './services/auth.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { InfoDialogComponent } from './utilities/info-dialog/info-dialog.component';
import { PatientListDialogComponent } from './utilities/patient-list-dialog/patient-list-dialog.component';
import { SupplierListDialogComponent } from './utilities/supplier-list-dialog/supplier-list-dialog.component';
import { PreviousPriceListDialogComponent } from './utilities/previousprice-list-dialog/previousprice-list-dialog.component';

import { PromptDialogComponent } from './utilities/prompt-dialog/prompt-dialog.component';
import { PatientHeaderComponent } from './patient-header/patient-header.component';

import { BaseDetailComponent } from './base-detail/base-detail.component';

import { CollectionwiseReportComponent } from './collectionwise-report/collectionwise-report.component';
import { OutstantingInvwiseComponent } from './outstanting-invwise/outstanting-invwise.component';
import { OutstantingPtwiseComponent } from './outstanting-ptwise/outstanting-ptwise.component';
import { SupplierMasterComponent } from './supplier/supplier-master/supplier-master.component';
import { SupplierProductComponent } from './supplier-product/supplier-product.component';
import { FilterPipe } from './supplier/supplier-master/filter';
import { EodComponent } from './eod/eod.component';
import { CancelInvoiceDialogComponent } from './utilities/cancel-invoice-dialog/cancel-invoice-dialog.component';
import { ViewProductDialogComponent } from './utilities/view-product-dialog/view-product-dialog.component';
import { CollectionPaymentwiseReportComponent } from './collection-payment-report/collection-payment-report.component';
import { PoComponent } from './po/po.component';

import { PoSubmissionComponent } from './po-submission/po-submission.component';
import { GoodsReceiptComponent } from './goods-receipt/goods-receipt.component';
import { SupplierPaymentComponent } from './supplier-payment/supplier-payment.component';
import { PaymentReceiptsComponent } from './payment-receipts/payment-receipts.component';
import { UpdatePayreceiptsComponent } from './update-payreceipts/update-payreceipts.component';
import { PrTableComponent } from './update-payreceipts/pr-table/pr-table.component';
import { ProductMasterComponent } from './product-master/product-master.component';
import { ProductMasterListingComponent } from './product-master-listing/product-master-listing.component';
import { PMTableComponent } from './product-master-listing/pr-table/pr-table.component';
import { NormalPricingComponent } from './product-master-listing/normal-pricing/normal-pricing.component';
import { InsurancePricingComponent } from './product-master-listing/insurance-pricing/insurance-pricing.component';
import { PoReportsComponent } from './po-reports/po-reports.component';
import { DatePipe } from '@angular/common';
import { GoodsReportsComponent } from './goods-reports/goods-reports.component';
import { SupplierReportsComponent } from './supplier-reports/supplier-reports.component';
import { SrTableComponent } from './supplier-reports/sr-table/sr-table.component';
import { GrTableComponent } from './goods-reports/gr-table/gr-table.component';
import { ReceiptPaymentReportComponent } from './receipt-payment-report/receipt-payment-report.component';
import { RpTableComponent } from './receipt-payment-report/rp-table/rp-table.component';
import { StockRegisterReportComponent } from './stock-register-report/stock-register-report.component';
import { SRegTableComponent } from './stock-register-report/s-reg-table/s-reg-table.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AccountMasterComponent } from './account-master/account-master.component';

import { InventoryConfigComponent } from './inventory-config/inventory-config.component';
import { SuppProdMapComponent } from './supp-prod-map/supp-prod-map.component';
import { UserMasterComponent } from './user-master/user-master.component';
import { userFilterPipe } from './user-master/user-filter';
import { LoginUserComponent } from './login-user/login-user.component';
import { InfoObjDialogComponent } from './utilities/info-obj-dialog/info-obj-dialog.component';

import { DoctorReportComponent } from './doctor-report/doctor-report.component';

import { ExportReportComponent } from './export-report/export-report.component';
import { InvoicePaymentReportComponent } from './invoice-payment-report/invoice-payment-report.component';
import { InvoiceProductReportComponent } from './invoice-product-report/invoice-product-report.component';
import { InvoiceProductTable } from './invoice-product-report/invoice-product-table/invoice-product-table.component';

import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,

    InfoDialogComponent,
    PatientListDialogComponent,
    DoctorReportComponent,

    PromptDialogComponent,
    PatientHeaderComponent,

    BaseDetailComponent,

    CollectionwiseReportComponent,
    OutstantingInvwiseComponent,
    OutstantingPtwiseComponent,
    SupplierMasterComponent,
    SupplierProductComponent,
    FilterPipe,
    EodComponent,
    CancelInvoiceDialogComponent,
    ViewProductDialogComponent,
    PoComponent,
    CollectionPaymentwiseReportComponent,

    PoSubmissionComponent,
    GoodsReceiptComponent,
    SupplierPaymentComponent,
    PaymentReceiptsComponent,
    UpdatePayreceiptsComponent,
    PrTableComponent,
    ProductMasterComponent,
    ProductMasterListingComponent,
    PMTableComponent,
    NormalPricingComponent,
    InsurancePricingComponent,
    SupplierListDialogComponent,
    PreviousPriceListDialogComponent,

    PoReportsComponent,
    GoodsReportsComponent,
    SupplierReportsComponent,
    SrTableComponent,
    GrTableComponent,
    ReceiptPaymentReportComponent,
    RpTableComponent,
    StockRegisterReportComponent,
    SRegTableComponent,
    FileUploadComponent,
    AccountMasterComponent,

    InventoryConfigComponent,
    SuppProdMapComponent,
    UserMasterComponent,
    userFilterPipe,
    LoginUserComponent,

    ExportReportComponent,
    InvoicePaymentReportComponent,
    InvoiceProductReportComponent,
    InvoiceProductTable,    
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [AuthService, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
