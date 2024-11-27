import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { LayoutComponent } from '../layout.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';


@Component({
    selector     : 'compact-layout',
    templateUrl  : './compact.component.html',
    standalone: true,
    imports: [LayoutComponent],
    encapsulation: ViewEncapsulation.None
})
export class CompactComponent implements OnInit, OnDestroy
{
    @ViewChild(LayoutComponent) menu!: LayoutComponent;
    constructor(){}

    ngOnInit(): void
    {

    }

    ngOnDestroy(): void
    {

    }

}