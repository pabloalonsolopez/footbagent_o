import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'f'
})

export class FPipe implements PipeTransform {
  
  transform(value: string): string {
    switch(value) {
      case 'form-control':
        return 'w(100%) b(1) bc(black4) bc-focus(black3) br(3px) px(15px) py(10px) lh(1) c(black1) c-placeholder(black4) c-focus-placeholder(black3) t(all) t-placeholder(all)'
      case 'button':
        return 'b(1) bc(black4) bc-hover(red) br(20px) px(30px) py(14px) bg(transparent) bg-hover(red) tt(uppercase) lh(1) fw(600) f(1.1rem) ls(0.1rem) c(black2) c-hover(black7) td-hover(none) bs-hover(1) cu(pointer) t(all)'
      case 'button--primary':
        return 'b(1) bc(red) br(20px) px(30px) py(14px) bg(red) tt(uppercase) lh(1) fw(600) f(1.1rem) ls(0.1rem) c(black7) td-hover(none) bs-hover(1) cu(pointer) t(all)'
      case 'label':
        return 'd(block) mb(7px) tt(uppercase) fw(600) f(1.1rem) c(black2) ls(0.1rem)'
      default:
        return ''
    }
  } 
}