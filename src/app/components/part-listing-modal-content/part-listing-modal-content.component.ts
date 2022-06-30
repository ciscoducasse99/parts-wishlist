import { Component, Input, ViewChild, OnInit, NgModule } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { PartListing } from 'src/app/interfaces/part-listing';

import {ModalModule} from '../../modules/modal.module';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-part-listing-modal-content',
  templateUrl: './part-listing-modal-content.component.html',
  styleUrls: ['./part-listing-modal-content.component.scss']
})
export class PartListingModalContentComponent implements OnInit {
  @ViewChild('partListingModalContent') modal:
  | ModalComponent<PartListingModalContentComponent>
  | undefined;

  @Input() part: PartListing
  @Input() onDeleteListing: any
  @Input() onUpdateListing: any

  updated: boolean = false;
  updateForm: FormGroup;
 
  constructor(
    public fb: FormBuilder
  ) {
  }
  
  ngOnInit(){
   this.updateForm = this.fb.group({
    reason:[this.part.reason],
    obtained:[this.part.obtained]
    })

    this.onChanges()
  }

  onChanges(): void {
    const initialValue = this.updateForm.value
    this.updateForm.valueChanges.subscribe(() => {
      this.updated = Object.keys(initialValue).some(key => this.updateForm.value[key] != 
                        initialValue[key])
    })
  }

  async updateListing(): Promise<void>{
    const updatedForm ={...this.part, ...this.updateForm.value}

    this.onUpdateListing.emit(updatedForm)
    await this.modal?.close()
  }

  async deleteListing(part: PartListing): Promise<void>{ 
    
    this.onDeleteListing.emit(part)
    await this.modal?.close()
  }

  async close(): Promise<void> {
    await this.modal?.close();
  }

}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule
  ],
  declarations: [PartListingModalContentComponent],
})
export class PartListingModalContentModule {}
