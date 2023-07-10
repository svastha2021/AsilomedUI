import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { CollectionwiseReportComponent } from './collectionwise-report/collectionwise-report.component';
import { OutstantingInvwiseComponent } from './outstanting-invwise/outstanting-invwise.component';
import { OutstantingPtwiseComponent } from './outstanting-ptwise/outstanting-ptwise.component';
import { SupplierMasterComponent } from './supplier/supplier-master/supplier-master.component';
import { SupplierProductComponent } from './supplier-product/supplier-product.component';
import { EodComponent } from './eod/eod.component';
import { PoComponent } from './po/po.component';
import { CollectionPaymentwiseReportComponent } from './collection-payment-report/collection-payment-report.component';

import { PoSubmissionComponent } from './po-submission/po-submission.component';
import { GoodsReceiptComponent } from './goods-receipt/goods-receipt.component';
import { SupplierPaymentComponent } from './supplier-payment/supplier-payment.component';
import { PaymentReceiptsComponent } from './payment-receipts/payment-receipts.component';
import { UpdatePayreceiptsComponent } from './update-payreceipts/update-payreceipts.component';
import { ProductMasterComponent } from './product-master/product-master.component';
import { ProductMasterListingComponent } from './product-master-listing/product-master-listing.component';
import { PoReportsComponent } from './po-reports/po-reports.component';
import { GoodsReportsComponent } from './goods-reports/goods-reports.component';
import { SupplierReportsComponent } from './supplier-reports/supplier-reports.component';
import { ReceiptPaymentReportComponent } from './receipt-payment-report/receipt-payment-report.component';
import { StockRegisterReportComponent } from './stock-register-report/stock-register-report.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AccountMasterComponent } from './account-master/account-master.component';

import { InventoryConfigComponent } from './inventory-config/inventory-config.component';
import { SuppProdMapComponent } from './supp-prod-map/supp-prod-map.component';
import { UserMasterComponent } from './user-master/user-master.component';
import { LoginUserComponent } from './login-user/login-user.component';

import { DoctorReportComponent } from './doctor-report/doctor-report.component';
import { ExportReportComponent } from './export-report/export-report.component';
import { InvoicePaymentReportComponent } from './invoice-payment-report/invoice-payment-report.component';
import { InvoiceProductReportComponent } from './invoice-product-report/invoice-product-report.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'landing',
    component: LandingComponent,
  },

  {
    path: 'collectionwise-report',
    component: CollectionwiseReportComponent,
  },
  {
    path: 'outstanding-invwise-report',
    component: OutstantingInvwiseComponent,
  },
  {
    path: 'outstanding-ptwise-report',
    component: OutstantingPtwiseComponent,
  },
  {
    path: 'collection-payment-wise',
    component: CollectionPaymentwiseReportComponent,
  },
  {
    path: 'supplier-master',
    component: SupplierMasterComponent,
  },
  {
    path: 'supplier-product',
    component: SupplierProductComponent,
  },
  {
    path: 'eod',
    component: EodComponent,
  },
  {
    path: 'po',
    component: PoComponent,
  },
  {
    path: 'collection-paymentwise-report',
    component: CollectionPaymentwiseReportComponent,
  },

  {
    path: 'po-submission',
    component: PoSubmissionComponent,
  },
  {
    path: 'goods-receipt',
    component: GoodsReceiptComponent,
  },
  {
    path: 'supplier-payment',
    component: SupplierPaymentComponent,
  },
  {
    path: 'payment-receipts',
    component: PaymentReceiptsComponent,
  },
  {
    path: 'update-payreceipts',
    component: UpdatePayreceiptsComponent,
  },
  {
    path: 'product-master',
    component: ProductMasterComponent,
  },
  {
    path: 'product-master-listing',
    component: ProductMasterListingComponent,
  },
  {
    path: 'po-reports',
    component: PoReportsComponent,
  },
  {
    path: 'goods-reports',
    component: GoodsReportsComponent,
  },
  {
    path: 'supplier-reports',
    component: SupplierReportsComponent,
  },
  {
    path: 'payment-reports',
    component: ReceiptPaymentReportComponent,
  },
  {
    path: 'stock-reports',
    component: StockRegisterReportComponent,
  },
  {
    path: 'upload',
    component: FileUploadComponent,
  },
  {
    path: 'account-master',
    component: AccountMasterComponent,
  },

  {
    path: 'inventory',
    component: InventoryConfigComponent,
  },
  {
    path: 'main-supp',
    component: SuppProdMapComponent,
  },
  {
    path: 'user-master',
    component: UserMasterComponent,
  },
  {
    path: 'pwd',
    component: LoginUserComponent,
  },

  {
    path: 'doc-report',
    component: DoctorReportComponent,
  },
  {
    path: 'invoice-payment-report',
    component: InvoicePaymentReportComponent,
  },
  {
    path: 'invoice-product-report',
    component: InvoiceProductReportComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
