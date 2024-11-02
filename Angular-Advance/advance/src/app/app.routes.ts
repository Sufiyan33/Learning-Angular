import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { AboutUserComponent } from './about-user/about-user.component';
import { AboutuserlistComponent } from './aboutuserlist/aboutuserlist.component';
import { ApiintegrationComponent } from './api-integration/apiintegration.component';
import { PostApiComponent } from './post-api/post-api.component';

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
        path: 'get-api',
        component: ApiintegrationComponent
    },
    {
        path: 'add-data',
        component: PostApiComponent
    },
    {
        path: 'put-api',
        component: PostApiComponent
    },
    {
        path: 'delete-api',
        component: PostApiComponent
    },
    {
        path: '**',
        component: NoPageFoundComponent
    }
];
