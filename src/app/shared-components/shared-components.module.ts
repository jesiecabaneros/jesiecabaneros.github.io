import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { SkillExpComponent } from './skill-exp/skill-exp.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { CompaniesComponent } from './companies/companies.component';



@NgModule({
  declarations: [DashboardComponent, AboutComponent, SkillExpComponent, FooterComponent, ProjectsComponent, CompaniesComponent],
  imports: [
    CommonModule
  ],
  exports: [DashboardComponent, AboutComponent, SkillExpComponent, FooterComponent, ProjectsComponent , CompaniesComponent]
})
export class SharedComponentsModule { }
