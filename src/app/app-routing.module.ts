import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {ArticlePageComponent} from './components/article-page/article-page.component';
import {ContactPageComponent} from './components/contact-page/contact-page.component';
import {PrivacyPolicyPageComponent} from './components/privacy-policy-page/privacy-policy-page.component';
import {ArticleListPageComponent} from './components/article-list-page/article-list-page.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomePageComponent},
    {path: 'article/:articleId', component: ArticlePageComponent},
    {path: 'contact', component: ContactPageComponent},
    {path: 'privacy', component: PrivacyPolicyPageComponent},
    {path: 'articles', component: ArticleListPageComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {
}
