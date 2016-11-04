import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'f'
})

export class FPipe implements PipeTransform {
  
  transform(value: string): string {
    switch(value) {
      case 'form-control':
        return 'w(100%) b(2) br(2px) b-focus(brand) px(1.5rem) py(0.5rem) lh(1.5) ff(inherit) c(black) c-placeholder(gray4) c-focus-placeholder(gray5) ou(0) t(all) t-placeholder(all)'
      case 'button':
        return 'b(0) br(2px) px(1.5rem) py(0.5rem) bg(brand) bg-hover(brand5) lh(1.5) ff(inherit) fw(600) c(white) ou(0) t(all)'
      case 'label':
        return 'd(block) pb(0.5rem) fw(600) fs(1.3rem) c(gray5)'
      default:
        return ''
    }
  }
  
}


