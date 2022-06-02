import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ValidationComponent } from "./app-validation/app-validation.component";
import { SchedulerComponent } from "./scheduler/scheduler.component";

const routes: Routes = [
    {path: '', redirectTo: 'scheduler',  pathMatch: 'full'},
    {path: 'scheduler', component: SchedulerComponent},
    {path: 'validation', component: ValidationComponent},
];

@NgModule({
    imports      : [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule],
})
export class AppRouterModule {}
