import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { AboutUserComponent } from './about-user/about-user.component';
import { AboutuserlistComponent } from './aboutuserlist/aboutuserlist.component';
import { ApiintegrationComponent } from './api-integration/apiintegration.component';
import { PostApiComponent } from './post-api/post-api.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
    // Creating default routes for admin login.
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
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
                component: PostApiComponent,
                canActivate: [authGuard]
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
            },
            // Now add here admin module routes so that in url it looks like admin/login or admin/user
            {
                path: 'admin',
                loadChildren: ()=>import('./admin/admin.module').then(mod=>mod.AdminModule)
            }
        ]
    }, 
];
