import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  HttpClientModule,
  HttpClientJsonpModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// material
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatExpansionPanel } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import RequestsComponent from './components/requests/requests.component';
import { CalenderComponent } from './components/calender/calender.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { RequestFormComponent } from './components/request-form/request-form.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { DashboardCardComponent } from './widgets/dashboard-card/dashboard-card.component';
import { ActiveWorkersComponent } from './widgets/active-workers/active-workers.component';
import { OffTrackerComponent } from './widgets/off-tracker/off-tracker.component';
import { YearTrackerComponent } from './widgets/year-tracker/year-tracker.component';

const Material = [
  MatTabsModule,
  MatBadgeModule,
  MatExpansionModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent,
    EmployeeDashboardComponent,
    RequestsComponent,
    CalenderComponent,
    LoginComponent,
    RequestFormComponent,
    LayoutComponent,
    ProfileComponent,
    NotificationsComponent,
    DashboardCardComponent,
    ActiveWorkersComponent,
    OffTrackerComponent,
    YearTrackerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Material,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    NgbModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
