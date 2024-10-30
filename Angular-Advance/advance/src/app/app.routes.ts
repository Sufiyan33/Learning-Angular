import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { AboutUserComponent } from './about-user/about-user.component';
import { AboutuserlistComponent } from './aboutuserlist/aboutuserlist.component';

export const routes: Routes = [
    {
        path: 'user/:id',
        component: UserComponent
    },
    {
        path: 'user-list',
        component: UserListComponent,
        children:[
            {path: 'about-user', component: AboutUserComponent},
            {path: 'aboutUser-list', component: AboutuserlistComponent}
        ]
    },
    {
        path: '**',
        component: NoPageFoundComponent
    }
];
