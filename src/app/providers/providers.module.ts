import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvidersComponent } from './providers.component';
import { ProviderSearchComponent } from './provider-search/provider-search.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderFooterComponent } from './provider-footer/provider-footer.component';



@NgModule({
  declarations: [
    ProvidersComponent,
    ProviderSearchComponent,
    ProviderListComponent,
    ProviderFooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProvidersModule { }
