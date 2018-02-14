import {AfterViewInit, Component} from "@angular/core";
import {SurveyorFormInputComponent} from "../../../form-input-component";
import {PickerService} from "../../../../picker/picker.service";

@Component({
  selector: 'mdl-picker-input',
  templateUrl: './picker-input.component.html',
  styleUrls: ['./picker-input.component.scss']
})
export class MdlPickerInputComponent extends SurveyorFormInputComponent implements AfterViewInit {
  label = "";

  constructor(private pickerService: PickerService) {
    super();
  }

  ngAfterViewInit() {
    // Hack required to get MDL to bind event handlers after a view change
    window.dispatchEvent(new Event("load"));
  }

  setValue(val: any) {
    if (val) {
      let options = this.controlDefinition.options;
      this.label = options.labelResolver(val);
      this.formControl.setValue(options.valueResolver(val));
    }
  }

  loadPicker() {
    let options = this.controlDefinition.options;
    this.pickerService.pick(options.picker, options.pickerOptions)
      .subscribe((value: any) => {
        this.setValue(value);
      });
  }

}