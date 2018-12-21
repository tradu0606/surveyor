import {Observable} from "rxjs";
import {ViewContainerRef} from "@angular/core";

export interface ModalOptions {
  params?: any;
  type?: "center" | "side" | "inline";
  title?: string;
  submitLabel?: string;
  cancelLabel?: string;
  deleteLabel?: string;
  hideActions?: boolean;
  hideSubmit?: boolean;
  hideCancel?: boolean;
  hideDelete?: boolean;
  width?: number;
  noPadding?: boolean;
  elementRef?: ViewContainerRef;
}

export interface ModalResult {

  submit: Observable<any>;
  cancel: Observable<any>;
  delete: Observable<any>;
  dismiss();
}
