import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data-service";
import { Character } from "../../models/character";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-characters",
  templateUrl: "./characters.component.html",
  styleUrls: ["./characters.component.css"]
})
export class CharactersComponent implements OnInit {
  constructor(private dataService: DataService) {}
  characters$: Observable<Character[]>;
  characterSelected: Character;
  ngOnInit() {
    this.dataService.getResource().subscribe(data => (this.characters$ = data));
  }
  getCharacterDetails(character: Character) {
    this.characterSelected = character;
  }
}
