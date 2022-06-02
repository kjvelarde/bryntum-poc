import { AppComponent } from './app.component';
import { AppErrorHandler } from './error.handler';
import { BrowserModule } from '@angular/platform-browser';
import { BryntumSchedulerProModule } from '@bryntum/schedulerpro-angular';
import { ErrorHandler, NgModule } from '@angular/core';
import { ValidationComponent } from './app-validation/app-validation.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { AppRouterModule } from './app-router.module';

@NgModule({
    declarations : [AppComponent, SchedulerComponent, ValidationComponent],
    imports      : [
        BrowserModule,
        BryntumSchedulerProModule,
        AppRouterModule,
    ],
    providers : [{ provide : ErrorHandler, useClass : AppErrorHandler }],
    bootstrap : [AppComponent]
})
export class AppModule {}
