import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ApplicationRef,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlobService } from './blob.service';
import { NgxExtendedPdfViewerService } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-blob',
  templateUrl: './blob.component.html',
  styleUrls: ['./blob.component.css'],
})
export class BlobComponent implements OnInit {
  public src: Blob;

  public downloaded: string | undefined;

  constructor(
    private http: HttpClient,
    private blobService: BlobService,
    private ngxService: NgxExtendedPdfViewerService
  ) {
    this.usePreloadedFile();
  }

  public ngOnInit(): void {}

  public usePreloadedFile(): void {
    this.src = this.blobService.src;
  }

  public loadLargeFile(): void {
    this.http
      .get(
        '/assets/pdfs/The Public Domain - Enclosing the Commons of the Mind.pdf',
        { responseType: 'blob' }
      )
      .subscribe((res) => {
        this.src = res;
      });
  }

  public async downloadAsBlob(): Promise<void> {
    const blob = await this.ngxService.getCurrentDocumentAsBlob();
    if (blob) {
      this.downloaded = 'The BLOB contains ' + blob.size + ' byte.';
    } else {
      this.downloaded = 'download failed';
    }
  }
}
