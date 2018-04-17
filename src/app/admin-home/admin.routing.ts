import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminHomeComponent } from "./admin-home.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { ReportdListComponent } from "./reportd/reportd-list/reportd-list.component";

const routes: Routes = [{
    path: 'admin', component: AdminHomeComponent,
    children: [
        {
            path: 'userlist',
            component: UserListComponent
        }, {
            path: 'reportdailylist',
            component: ReportdListComponent
        }
    ]
}];

export const AdminRouting: ModuleWithProviders = RouterModule.forChild(routes);
