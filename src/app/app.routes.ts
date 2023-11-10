
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Huu1Component } from './huu1/huu1.component';
import { Huu2Component } from './huu2/huu2.component';
import { Huu3Component } from './huu3/huu3.component';

 export const routes: Routes = [
    { path: '', component: Huu1Component },
    { path: 'login', component: Huu2Component },
    { path: 'dashboard', component: Huu3Component },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
