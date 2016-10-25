import { Component, OnInit, Input } from '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'fb-calendar',
  templateUrl: 'calendar.component.html'
})

export class CalendarComponent implements OnInit {
  
  @Input() weekFirstDay: string
  @Input() weekDayNameFormat: string
  @Input() year: number
  @Input() month: number
  
  weekDayNames: any = []
  monthNames: any = {
  	0: 'January',
  	1: 'February',
  	2: 'March',
  	3: 'April',
  	4: 'May',
  	5: 'June',
  	6: 'July',
  	7: 'August',
  	8: 'September',
  	9: 'October',
  	10: 'November',
  	11: 'December'
  }
  calendar: any[][]

  ngOnInit():void {
  	this.build()
  }
  
  build():void {
    const today: Date = new Date()
    this.weekFirstDay = this.weekFirstDay || 'sunday'
    this.weekDayNameFormat = this.weekDayNameFormat || 'long'
    this.year = this.year == undefined ? today.getFullYear() : this.year
    this.month = this.month == undefined ? today.getMonth() : this.month

    this.weekDayNames = [
      { long: 'Monday', short: 'M' },
      { long: 'Tuesday', short: 'T' },
      { long: 'Wednesday', short: 'W' },
      { long: 'Thursday', short: 'T' },
      { long: 'Friday', short: 'F' },
      { long: 'Saturday', short: 'S' }
    ]
    this.weekFirstDay == 'sunday' ? this.weekDayNames.unshift({ long: 'Sunday', short: 'S' }) : this.weekDayNames.push({ long: 'Sunday', short: 'S' })
    
    const date: number = today.getDate()

    let monthFirstDateWeekDay: number = new Date(this.year, this.month, 1).getDay()
    if(this.weekFirstDay == 'monday' && monthFirstDateWeekDay == 0) {
      monthFirstDateWeekDay = 7
    }
    const monthLastDate: number = new Date(this.month < 11 ? this.year : this.year + 1, this.month < 11 ? this.month + 1 : 0, 0).getDate()

    this.calendar = new Array<any>()
    let day = 1
    for(let week = 0; day <= monthLastDate; week++) {
      this.calendar.push(new Array<any>())
      let weekDayStart = this.weekFirstDay == 'sunday' ? 0 : 1
      let weekDayEnd = this.weekFirstDay == 'sunday' ? 7 : 8
      for(let weekDay = weekDayStart; weekDay < weekDayEnd; weekDay++) {
        if((weekDay >= monthFirstDateWeekDay || week > 0) && day <= monthLastDate) {
          this.calendar[week].push(day.toString())
          day++
        } else {
      	  this.calendar[week].push("")
        }
      }
    }
  }
  
  previous():void {
  	this.year = this.month > 0 ? this.year : this.year - 1
  	this.month = this.month > 0 ? this.month-1 : 11
    this.build()
  }

  next():void {
    this.year = this.month < 11 ? this.year : this.year + 1
    this.month = this.month < 11 ? this.month + 1 : 0
    this.build()
  }

}