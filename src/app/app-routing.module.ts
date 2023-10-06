import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

// import { HomeComponent } from './pages/home/home.component';
// import { DiscountComponent } from './pages/discount/discount.component';
import { DiscountInfoComponent } from './pages/discount/discount-info/discount-info.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductInfoComponent } from './pages/product/product-info/product-info.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
// import { AboutComponent } from './pages/about/about.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
  // import { AdminComponent } from './admin/admin.component';
  // import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
  // import { AdminProductComponent } from './admin/admin-product/admin-product.component';
  // import { AdminDiscountComponent } from './admin/admin-discount/admin-discount.component';
  // import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ProductInfoResolver } from './shared/services/products/product-info.resolver';
import { DiscountInfoResolver } from './shared/services/discounts/discount-info.resolver';
import { AuthGuard } from './shared/guards/auth/auth.guard';
// import { AuthorzationComponent } from './pages/authorzation/authorzation.component';
// import { CabinetComponent } from './pages/cabinet/cabinet.component';
import { OfertaComponent } from './pages/oferta/oferta.component';

const routes: Routes = [
  {
    // path: "home", component: HomeComponent
    path: "home",
    loadChildren: () => import("./pages/home/home.module").then(m => m.HomeModule)
  },

  {
    path: "", pathMatch: "full", redirectTo: 'home'
  },
  {
    // path: "discount", component: DiscountComponent
    path: "discount",
    loadChildren: () => import("./pages/discount/discount.module").then(m => m.DiscountModule)
  },
  {
    // path: "product/:category", component: ProductComponent
    path: "product/:category",
    loadChildren: () => import("./pages/product/product.module").then(m => m.ProductModule)
  },

  {
    // path: "delivery", component: DeliveryComponent

    path: "delivery",
    loadChildren: () => import("./pages/delivery/delivery.module").then(m => m.DeliveryModule)
  },

  {
    // path: "about", component: AboutComponent
    path: "about",
    loadChildren: () => import("./pages/about/about.module").then(m => m.AboutModule)
  },

  {
    // path: "check", component: CheckoutComponent
    path: "check",
    loadChildren: () => import("./pages/checkout/checkout.module").then(m => m.CheckoutModule)
  },

  {
    path: "oferta", component: OfertaComponent
  },
  {
    // path: "auth", component: AuthorzationComponent
    path: "auth",
    loadChildren: () => import("./pages/authorzation/authorzation.module").then(m => m.AuthorzationModule)
  },
  {
    // path: "cabinet", component: CabinetComponent, canActivate: [AuthGuard]
    path: "cabinet",
    loadChildren: () => import("./pages/cabinet/cabinet.module").then(m => m.CabinetModule)

  },

  {
    path: "admin",
    canActivate: [AuthGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)

    // path: "admin", component: AdminComponent, canActivate: [AuthGuard], children: [
    //   { path: "category", component: AdminCategoryComponent },
    //   { path: "product", component: AdminProductComponent },
    //   { path: "discount", component: AdminDiscountComponent },
    //   { path: "orders", component: AdminOrdersComponent },
    //   { path: "", pathMatch: 'full', redirectTo: 'category' },
    // ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
