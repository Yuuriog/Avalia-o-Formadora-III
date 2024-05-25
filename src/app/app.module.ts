import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InformacoesModule } from './informacoes/informacoes.module';
import { CepComponent } from './cep/cep.component';
import { ApiCepService } from './cep/api-cep.service';

@NgModule({
  declarations: [
    AppComponent,
    CepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InformacoesModule
  ],
  providers: [ApiCepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
