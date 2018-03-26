import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { PetlistComponent } from "./pet/petlist/petlist.component";
import { AddpetComponent } from "./pet/addpet/addpet.component";
import { MypetComponent } from "./pet/mypet/mypet.component";
import { ProfileComponent } from "./user/profile/profile.component";
import { ReportListComponent } from "./report/report-list/report-list.component";

const routes: Routes = [{
    path: '', component: HomeComponent,
    children: [
        {
            path: '',
            redirectTo: 'petlist',
            pathMatch: 'full'
        },
        {
            path: 'petlist',
            component: PetlistComponent
        },
        {
            path: 'addpet',
            component: AddpetComponent
        },
        {
            path: 'profile',
            component: ProfileComponent
        },
        {
            path: 'mypet/:petid',
            component: MypetComponent
        },
        {
            path: 'reports/:petid',
            component: ReportListComponent
        }
    ]
}];

export const HomeRouting: ModuleWithProviders = RouterModule.forChild(routes);
