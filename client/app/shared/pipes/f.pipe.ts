import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'f'
})

export class FPipe implements PipeTransform {
  
  transform(value: string): string {
    switch(value) {
      case 'form-control':
        return 'w(100%) b(0) bb(1) bb-focus(brand) py(0.5rem) lh(1.5) ff(proxima) c(black) c-placeholder(gray3) c-focus-placeholder(gray4) ou(0) t(all) t-placeholder(all)'
      case 'button':
        return 'b(0) br(2px) px(1.5rem) py(0.5rem) bg(brand) bg-hover(brand5) lh(1.5) ff(proxima) fw(600) c(white) ou(0) t(all)'
      default:
        return ''
    }
  }
  
}