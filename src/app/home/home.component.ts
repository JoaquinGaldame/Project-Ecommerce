import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import locale from '@angular/common/locales/es-AR';
import {Router} from '@angular/router';
import {  BehaviorSubject,catchError,Observable,of,Subject,switchMap,takeUntil,throwError} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
