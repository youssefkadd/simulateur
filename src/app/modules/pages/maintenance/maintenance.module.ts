import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaintenanceComponent } from 'app/modules/pages/maintenance/maintenance.component';
import { maintenanceRoutes } from 'app/modules/pages/maintenance/maintenance.routing';

@NgModule({
    declarations: [
        MaintenanceComponent
    ],
    imports     : [
        RouterModule.forChild(maintenanceRoutes)
    ]
})
export class MaintenanceModule
{
}
