import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-staff-queries',
  templateUrl: './staff-queries.component.html',
  styleUrls: ['./staff-queries.component.css']
})
export class StaffQueriesComponent implements OnInit {
  queries: any[] = [];
  editMode: boolean = false;
  selectedQuery: any = null;
  responseMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchQueries();
  }

  fetchQueries() {
    this.http.get('http://localhost:5000/queries')
      .subscribe(
        (data: any) => {
          this.queries = data;
        },
        (error) => {
          console.error('Error fetching queries:', error);
        }
      );
  }

  editQuery(query: any) {
    this.selectedQuery = { ...query }; // Make a copy of the selected query
    this.editMode = true;
  }

  updateQuery() {
    this.http.put(`http://localhost:5000/queries/${this.selectedQuery.id}`, this.selectedQuery)
      .subscribe(
        (response: any) => {
          this.responseMessage = 'Query updated successfully!';
          this.fetchQueries(); // Reload the list
          this.editMode = false;
          this.selectedQuery = null;
        },
        (error) => {
          this.responseMessage = 'Error updating query.';
          console.error(error);
        }
      );
  }

  deleteQuery(id: number) {
    this.http.delete(`http://localhost:5000/queries/${id}`)
      .subscribe(
        (response: any) => {
          this.responseMessage = 'Query deleted successfully!';
          this.fetchQueries(); // Reload the list
        },
        (error) => {
          this.responseMessage = 'Error deleting query.';
          console.error(error);
        }
      );
  }

  cancelEdit() {
    this.editMode = false;
    this.selectedQuery = null;
  }
}
