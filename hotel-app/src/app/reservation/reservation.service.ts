import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl = "http://localhost:3001";
  private reservations: Reservation[] = [];
  /*
  constructor() {
    let savedReservations = localStorage.getItem("reservations");
    this.reservations = savedReservations? JSON.parse(savedReservations) : [];
  }
  */

  constructor (private http: HttpClient) {

  }

  // CRUD
  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl + "/reservations");
  }

  getReservation(id: string): Observable<Reservation>{
    return this.http.get<Reservation>(this.apiUrl + "/reservation/" + id);
  }

  addReservation(reservation : Reservation): Observable<void> {
    return this.http.post<void>(this.apiUrl + "/reservation", reservation);
    // use local storage for development otherwise backend and db
    //localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  deleteReservation(id: string): Observable<void> {
    return this.http.delete<void>(this.apiUrl + "/reservation/" + id);
    //localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  updateReservation(id: string, updatedReservation: Reservation): Observable<void> {
    return this.http.put<void>(this.apiUrl + "/reservation/" + id, updatedReservation);
    //localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }
}
