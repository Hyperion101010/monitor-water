import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ComparisionComponent } from './comparision/comparision.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { UsageConfigComponent } from './usage-config/usage-config.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {path: 'comparision', component: ComparisionComponent, canActivate: [AuthGuard] },
  {path: 'monitoring', component: MonitoringComponent, canActivate: [AuthGuard] },
  {path: 'usageconfig', component: UsageConfigComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
