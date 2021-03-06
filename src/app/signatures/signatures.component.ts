import { Component } from '@angular/core';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import { timestamp } from 'rxjs/operators';

@Component({
  selector: 'app-signatures',
  templateUrl: './signatures.component.html',
  styleUrls: ['./signatures.component.css'],
})
export class SignaturesComponent {
  // tslint:disable-next-line: variable-name
  private _showSignature = true;

  public showPdf = true;

  public get showSignature(): boolean {
    return this._showSignature;
  }

  public set showSignature(show: boolean) {
    this._showSignature = show;
    this.showPdf = false;
    setTimeout(() => this.showPdf = true, 100);
  }

  constructor() {
    pdfDefaultOptions.renderInteractiveForms = false;
  }
}
