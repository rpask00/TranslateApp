import { Component, OnInit, ViewChild } from '@angular/core';
import { DataBaseService } from 'src/app/services/data-base.service';
import { Observable } from 'rxjs';
import { Word, WordAPI } from 'src/app/models/word.model';
@Component({
  selector: 'app-medium',
  templateUrl: './medium.page.html',
  styleUrls: ['./medium.page.scss'],
})
export class MediumPage implements OnInit {

  dictionaryMedium$: Observable<WordAPI[]>;
  
  constructor(
    private dbSrv: DataBaseService
  ) { }

  ngOnInit() {
    this.dictionaryMedium$ = this.dbSrv.getWords('medium')
  }


}