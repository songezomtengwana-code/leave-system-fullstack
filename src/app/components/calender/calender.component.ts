import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CALENDER } from 'src/app/models/calender.model';
import { CalenderService } from '../../services/calender.service';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],
})
export class CalenderComponent implements OnInit {
  public _calenders: any;
  /**
   * @desc long ass list hard coded - could not think of a method to generate a array
   * @more tried for loopa, wh
   */
  @Input() progress: any = null;

  agendaContainer: any;

  ngOnInit(): void {
    this.handleRequestProgress();
    console.log(this.calenders);
  }

  constructor(
    protected http: HttpClient,
    private calendarService: CalenderService
  ) {}

  get calenders(): any[] {
    return this.calendarService.calender;
  }

  handleRequestProgress() {
    const icon = document.getElementById('date') as HTMLElement;

    if (this.progress === true) {
      icon.style.color = 'limegreen';
    } else if (this.progress === false) {
      icon.style.color = 'red';
    } else {
      icon.style.color = 'gray';
    }
  }

  handleAgendaDisplay(agenda: any) {
    this.agendaContainer = agenda;
    console.log(agenda);
  }
}
