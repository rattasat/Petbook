import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { UserComponent } from "./user/user/user.component";
import { PetlistComponent } from "./pet/petlist/petlist.component";
import { IndexComponent } from "./index/index.component";

const routes: Routes = [{
    path: '', component: HomeComponent,
    children: [
        {
            path: 'home',
            component: IndexComponent
        },
        {
            path: 'petlist',
            component: PetlistComponent
        },
        {
            path: 'user',
            component: UserComponent
        }
    ]
}];

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
