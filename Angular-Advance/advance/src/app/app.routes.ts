import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

export const routes: Routes = [
    {
        path: 'user/:id',
        component: UserComponent
    },
    {
        path: 'user-list',
        component: UserListComponent
    },
    {
        path: '**',
        component: NoPageFoundComponent
    }
];
