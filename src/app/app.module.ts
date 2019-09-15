import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CharactersComponent } from "./components/characters/characters.component";
import { DataService } from "./services/data-service";
import { HttpClientModule } from "@angular/common/http";
import { CharacterDetailsComponent } from './components/character-details/character-details.component';

@NgModule({
  declarations: [AppComponent, CharactersComponent, CharacterDetailsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [DataService],

  bootstrap: [AppComponent]
})
export class AppModule {}
