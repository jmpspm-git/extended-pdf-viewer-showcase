```html
<ngx-extended-pdf-viewer
    [src]="'assets/pdfs/stluciadance.com.pdf'"
    [customThumbnail]="checkboxThumbnail"
    [height]="'90vh'"
    [useBrowserLocale]="true"
    [textLayer]="true"
    [showHandToolButton]="true"
    [minifiedJSLibraries]="false"
    (pageChange)="onPageChange($event)">
</ngx-extended-pdf-viewer>
```