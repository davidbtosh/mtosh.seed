﻿import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { IndexComponent } from './index.component';
import { ContactComponent } from './contact.component';
import { TestComponent } from './test.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: IndexComponent, data: { title: 'Home' } },
    { path: 'about', component: AboutComponent, data: { title: 'About' } },
    { path: 'contact', component: ContactComponent, data: { title: 'Contact' } },
    { path: 'test', component: TestComponent, data: { title: 'Test' } }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [AboutComponent, IndexComponent, ContactComponent, TestComponent];
