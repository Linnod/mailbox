import { PipeTransform } from "@angular/core/src/change_detection/pipe_transform";
import { Gender } from "./gender";
import { Pipe } from "@angular/core";

@Pipe({name: 'genderPipe'})
export class GenderPipe implements PipeTransform {
  transform(value: Gender) {
    return value === Gender.Male ? 'Male' : 'Female';
  }
}
