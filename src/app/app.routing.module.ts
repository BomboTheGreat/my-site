import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {HomepageComponent} from "./homepage/homepage.component";
import {ProjectsComponent} from "./projects/projects.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

// הנתיבים השונים שקיימים באתר
const appRoutes: Routes = [
    { path: "home", component: HomepageComponent },
    { path: "pageNotFound", component:PageNotFoundComponent},
    { path: "projects", component:ProjectsComponent},
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path:"**", redirectTo: "/pageNotFound"}
];

// אובייקט ראוטר - יודע איך להחליף את הקומפוננטות לפי הנתיבים
const appRouter = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [appRouter]
})
export class AppRoutingModule {}