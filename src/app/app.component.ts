import {Component} from "@angular/core";
import {ImageCroppedEvent} from "ngx-image-cropper";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imageChangedEvent = ''
  croppedImage = ''

  private readonly localStorageKeyName = 'croppedImage'

  get base64Image(): string | null {
    return localStorage.getItem(this.localStorageKeyName)
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event
  }

  imageCropped(event: ImageCroppedEvent): void {
    this.croppedImage = event.base64 as string
  }

  loadImageFailed(): void {
    alert('Oops, something went wrong')
  }

  saveImageToLocalStorage(): void {
    localStorage.setItem(this.localStorageKeyName, this.croppedImage)
  }

  removedCroppedImage(): void {
    localStorage.removeItem(this.localStorageKeyName)
  }
}
