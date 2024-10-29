import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'user-list',
        component: UserListComponent
    }
];
