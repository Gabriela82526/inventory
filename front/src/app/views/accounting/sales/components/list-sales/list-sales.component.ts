import { Component, Input, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FilesService } from 'src/app/shared/services/file.service';
import { SalesModel } from '../../../../../shared/interfaces/sales';
import { CrudServices } from '../../../../../shared/services/crud.service';

@Component({
  selector: 'app-list-sales',
  templateUrl: './list-sales.component.html',
  styleUrls: ['./list-sales.component.scss']
})
export class ListSalesComponent implements OnInit {
  @Input() salesList:SalesModel[]; 
  @Input() orderColumn:any;
  @Input() loading:boolean;  
  @Input() hasAdminModule:boolean;

  constructor(
    private nzMessageService: NzMessageService,
    private _crudSvc:CrudServices,
    private fileService: FilesService
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.nzMessageService.info('Operacion cancelada');
  }

  confirm(id:number): void {

    this._crudSvc.deleteRequest(`/accounting/sales/destroy/${id}`)
    .subscribe(res => {
      this._crudSvc.requestEvent.emit('deleted')
    })
  }

  downloadInvoice(id:number): void {
    this.fileService.printInvoice(id);
    // this.fileService.exportFile(`/accounting/sales/downloadInvoice/${id}`, 'Factura de venta');
  }

  beforeConfirm(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  }
}