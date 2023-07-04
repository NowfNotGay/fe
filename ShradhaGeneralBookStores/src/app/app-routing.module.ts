import { ListAuthorComponent } from './components/author/listAuthor/listAuthor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './components/home/homeAdmin.component';
import { ProductAdminComponent } from './components/product/productAdmin.component';
import { AddProductAdminComponent } from './components/product/addproductAdmin.component';
import { LoginAdminComponent } from './components/account/loginAdmin.component';
import { RegisterAdminComponent } from './components/account/registerAdmin.component';
import { SendEmailComponent } from './components/account/sendEmail.component';
import { AddCategoryComponent } from './components/category/addCategory.component';
import { AddAuthorComponent } from './components/author/addAuthor.component';
import { ListCategoryComponent } from './components/category/listCategory.component';
import { AddOrderStatusComponent } from './components/orderstatus/addOrderStatus.component';
import { AddPaymentMethodComponent } from './components/paymentmethod/addPaymentMethod.component';
import { AddPublisherComponent } from './components/publisher/addPublisher.component';
import { AddVoucherComponent } from './components/voucher/addVoucher.component';
import { AddRoleComponent } from './components/role/addRole.component';
import { EditCategoryComponent } from './components/category/edit/editCategory.component';
import { ListOrderStatusComponent } from './components/orderstatus/listOrdersStatus/listOrderStatus.component';
import { ListPaymentMethodComponent } from './components/paymentmethod/listPaymentMethod/listPaymentMethod.component';
import { ListPublisherComponent } from './components/publisher/listPublisher/listPublisher.component';
import { ListRoleComponent } from './components/role/listRole/listRole.component';
import { ListVoucherComponent } from './components/voucher/listVoucher/listVoucher.component';
import { EditAuthorComponent } from './components/author/editAuthor/editAuthor.component';
import { EditPublisherComponent } from './components/publisher/editPublisher/editPublisher.component';
import { EditRoleComponent } from './components/role/editRole/editRole.component';
import { EditVoucherComponent } from './components/voucher/editVoucher/editVoucher.component';
import { EditOrderStatusComponent } from './components/orderstatus/editOrderStatus/editOrderStatus.component';
import { EditPaymentMethodComponent } from './components/paymentmethod/editPaymentMethod/editPaymentMethod.component';
import { AddAccountComponent } from './components/account/addAccount/addAccount.component';
import { ListAccountComponent } from './components/account/listaccount/listAccount.component';


const routes: Routes =
[
  {path: '',component:HomeAdminComponent , children:[
    {path: 'productAdmin',component: ProductAdminComponent },
    {path: 'addproduct',component: AddProductAdminComponent},

    {path: 'addcategory',component: AddCategoryComponent},
    {path: 'editcategory',component: EditCategoryComponent},
    {path: 'listcategory',component: ListCategoryComponent},


    {path: 'addauthor',component: AddAuthorComponent},
    {path: 'listauthor',component: ListAuthorComponent},
    {path: 'editauthor',component: EditAuthorComponent},


    {path: 'addorderstatus',component: AddOrderStatusComponent},
    {path: 'listorderstatus',component: ListOrderStatusComponent},
    {path: 'editorderstatus',component: EditOrderStatusComponent},

    {path: 'addpaymentmethod',component: AddPaymentMethodComponent},
    {path: 'listpaymentmethod',component: ListPaymentMethodComponent},
    {path: 'editpaymentmethod',component: EditPaymentMethodComponent},

    {path: 'addpublisher',component: AddPublisherComponent},
    {path: 'listpublisher',component: ListPublisherComponent},
    {path: 'editpublisher',component: EditPublisherComponent},

    {path: 'addrole',component: AddRoleComponent},
    {path: 'listrole',component: ListRoleComponent},
    {path: 'editrole',component: EditRoleComponent},


    {path: 'addvoucher',component: AddVoucherComponent},
    {path: 'listvoucher',component: ListVoucherComponent},
    {path: 'editvoucher',component: EditVoucherComponent},

    {path: 'addaccount',component: AddAccountComponent},
    {path: 'listaccount',component: ListAccountComponent},
    {path: 'editaccount',component: EditVoucherComponent},


  ]},
  {path: 'login',component: LoginAdminComponent},
  {path: 'register',component: RegisterAdminComponent},
  {path: 'sendemail',component: SendEmailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
