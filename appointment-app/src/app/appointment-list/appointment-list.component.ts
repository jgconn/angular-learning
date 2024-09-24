import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
    newAppointmentTitle: string = "";
    newAppointmentDate: Date = new Date();

    appointments: Appointment[] = [];

    // since void, it does not return anything. Lifecycle hook
    ngOnInit(): void {
      let savedAppointments = localStorage.getItem("appointments")
      this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
    }


    addAppointment() {
      // alert(this.newAppointmentTitle + " " + this.newAppointmentDate)
      if(this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
        let newAppointment: Appointment = {
          id: Date.now(),
          title: this.newAppointmentTitle,
          date: this.newAppointmentDate
        }

        this.appointments.push(newAppointment);

        this.newAppointmentTitle = "";
        this.newAppointmentDate = new Date();

        localStorage.setItem("appointments", JSON.stringify(this.appointments));
        // alert(this.appointments.length)
      }
    }

    deleteAppointment(index: number) {
      this.appointments.splice(index, 1);
      localStorage.setItem("appointments", JSON.stringify(this.appointments));
    }
}
