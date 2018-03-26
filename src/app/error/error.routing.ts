import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErrorComponent } from "./error.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [{
    path: 'error',
    component: ErrorComponent,
    children: [
        {
            path: 'notfound',
            component: NotFoundComponent
        }
    ]
}]

export const ErrorRouting: ModuleWithProviders = RouterModule.forChild(routes);