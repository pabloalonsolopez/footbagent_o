import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'f'
})

export class FPipe implements PipeTransform {
  
  transform(value: string): string {
    switch(value) {
      case 'form-control':
        return 'w(100%) b(1) bc(gray3) bc-focus(gray1) br(3px) px(15px) py(10px) lh(1) c(gray0) t(all)'
      case 'button':
        return 'b(1) bc(gray3) bc-hover(red) br(20px) px(30px) py(14px) bg(transparent) bg-hover(red) tt(uppercase) lh(1) fw(600) f(1.1rem) ls(0.1rem) c(gray0) c-hover(white) td-hover(none) bs-hover(1) cu(pointer) t(all)'
      case 'button--primary':
        return 'b(1) bc(red) br(20px) px(30px) py(14px) bg(red) tt(uppercase) lh(1) fw(600) f(1.1rem) ls(0.1rem) c(white) td-hover(none) bs-hover(1) cu(pointer) t(all)'
      case 'label':
        return 'd(block) mb(7px) tt(uppercase) fw(600) f(1.1rem) c(gray0) ls(0.1rem)'
      default:
        return ''
    }
  }
  
}


