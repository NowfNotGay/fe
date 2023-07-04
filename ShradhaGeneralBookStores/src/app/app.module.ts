import { PaymentMethodService } from './Service/paymentmethod.service';
import { DemoAddAuthorAdminComponent } from './democomponent/author/demoaddauthor/demoaddauthor.component';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeAdminComponent } from './components/home/homeAdmin.component';
import { ProductAdminComponent } from './components/product/productAdmin.component';
import { AddProductAdminComponent } from './components/product/addproductAdmin.component';
import { LoginAdminComponent } from './components/account/loginAdmin.component';
import { RegisterAdminComponent } from './components/account/registerAdmin.component';
import { AdminComponent } from './admin.component';
import { SendEmailComponent } from './components/account/sendEmail.component';
import { AddCategoryComponent } from './components/category/addCategory.component';
import { BaseURLService } from './Service/BaseURL.service';
import { CategoryService } from './Service/category.service';
import { RoleService } from './Service/role.service';
import { PublisherService } from './Service/publisher.service';
import { EventService } from './Service/event.service';
import { AuthorService } from './Service/author.service';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from './Service/account.service';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';

// import { ProductAdminComponent } from './components/admin/ProductAdmin.component';
import { EditorModule } from 'primeng/editor';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FileUploadModule } from 'primeng/fileupload';
import { DemoAddEventAdminComponent } from './democomponent/event/demoAddEvent/demoaddevent.component';
import { DemoAddOrderstatusAdminComponent } from './democomponent/orderstatus/demoAddOrderstatus/demo.add.orderstatus.component';
import { DemoAddPublisherAdminComponent } from './democomponent/publisher/demoAddPublisher/demo.add.publisher.component';
import { DemoAddPaymentmethodAdminComponent } from './democomponent/paymentmethod/demoAddPaymentMethod/demo.add.paymentmethod.component';
import { DemoAddRoleAdminComponent } from './democomponent/role/demoAddRole/demo.add.role.component';
import { DemoAddVoucherAdminComponent } from './democomponent/voucher/demoAddVoucher/demo.add.voucher.component';
import { OrderStatusService } from './Service/orderstatus.service';
import { HeaderComponent } from './supportcomponents/header/header.component';
import { AsideComponent } from './supportcomponents/aside/aside.component';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ListCategoryComponent } from './components/category/listCategory.component';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { FooterComponent } from './supportcomponents/footer/footer.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AddAuthorComponent } from './components/author/addAuthor.component';
import { AddOrderStatusComponent } from './components/orderstatus/addOrderStatus.component';
import { AddPaymentMethodComponent } from './components/paymentmethod/addPaymentMethod.component';
import { AddPublisherComponent } from './components/publisher/addPublisher.component';
import { AddVoucherComponent } from './components/voucher/addVoucher.component';
import { VoucherService } from './Service/voucher.service';
import { ListAuthorComponent } from './components/author/listAuthor/listAuthor.component';
import { AddRoleComponent } from './components/role/addRole.component';
import { EditCategoryComponent } from './components/category/edit/editCategory.component';
import { ListOrderStatusComponent } from './components/orderstatus/listOrdersStatus/listOrderStatus.component';
import { ListRoleComponent } from './components/role/listRole/listRole.component';
import { ListVoucherComponent } from './components/voucher/listVoucher/listVoucher.component';
import { ListPaymentMethodComponent } from './components/paymentmethod/listPaymentMethod/listPaymentMethod.component';
import { ListPublisherComponent } from './components/publisher/listPublisher/listPublisher.component';
import { EditAuthorComponent } from './components/author/editAuthor/editAuthor.component';
import { EditPublisherComponent } from './components/publisher/editPublisher/editPublisher.component';
import { EditRoleComponent } from './components/role/editRole/editRole.component';
import { EditVoucherComponent } from './components/voucher/editVoucher/editVoucher.component';
import { EditOrderStatusComponent } from './components/orderstatus/editOrderStatus/editOrderStatus.component';
import { EditPaymentMethodComponent } from './components/paymentmethod/editPaymentMethod/editPaymentMethod.component';
import { AddAccountComponent } from './components/account/addAccount/addAccount.component';
import { ListAccountComponent } from './components/account/listaccount/listAccount.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeAdminComponent,
    ProductAdminComponent,
    AddProductAdminComponent,
    LoginAdminComponent,
    RegisterAdminComponent,
    AdminComponent,
    SendEmailComponent,
    AddCategoryComponent,
    DemoAddAuthorAdminComponent,
    DemoAddEventAdminComponent,
    DemoAddOrderstatusAdminComponent,
    DemoAddPublisherAdminComponent,
    DemoAddPaymentmethodAdminComponent,
    DemoAddRoleAdminComponent,
    DemoAddVoucherAdminComponent,
    HeaderComponent,
    AsideComponent,
    ListCategoryComponent,
    FooterComponent,
    AddAuthorComponent,
    AddOrderStatusComponent,
    AddPaymentMethodComponent,
    AddPublisherComponent,
    AddVoucherComponent,
    ListAuthorComponent,
    AddRoleComponent,
    EditCategoryComponent,
    ListOrderStatusComponent,
    ListRoleComponent,
    ListVoucherComponent,
    ListPaymentMethodComponent,
    ListPublisherComponent,
    EditAuthorComponent,
    EditPublisherComponent,
    EditRoleComponent,
    EditVoucherComponent,
    EditAuthorComponent,
    EditOrderStatusComponent,
    EditPaymentMethodComponent,
    AddAccountComponent,
    ListAccountComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,


    //input
    InputTextModule,
    EditorModule,
    InputNumberModule,
    FileUploadModule,
    CalendarModule,
    DropdownModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    DataViewModule,
    ProgressSpinnerModule,
    MultiSelectModule,
    PasswordModule
  ],
  providers: [
    CategoryService,
    BaseURLService,
    RoleService,
    PublisherService,
    EventService,
    AuthorService,
    AccountService,
    OrderStatusService,
    PaymentMethodService,
    VoucherService
  ],
  bootstrap: [AdminComponent]
})
export class AppModule { }
