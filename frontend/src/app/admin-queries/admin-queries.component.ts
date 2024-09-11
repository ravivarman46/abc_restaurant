import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-queries',
  templateUrl: './admin-queries.component.html',
  styleUrls: ['./admin-queries.component.css']
})
export class AdminQueriesComponent implements OnInit {
  queries: any[] = [];
  selectedQuery: any = null;
  message: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAllQueries();
  }

  // Fetch all customer queries
  getAllQueries() {
    this.http.get('http://localhost:5000/queries')
      .subscribe(
        (response: any) => {
          this.queries = response;
        },
        (error) => {
          console.error('Error fetching queries:', error);
        }
      );
  }

  // Select a query for editing
  editQuery(query: any) {
    this.selectedQuery = { ...query };
  }

  // Update an existing query
  updateQuery() {
    this.http.put(`http://localhost:5000/queries/${this.selectedQuery.id}`, this.selectedQuery)
      .subscribe(
        (response: any) => {
          this.message = 'Query updated successfully!';
          this.getAllQueries(); // Refresh the query list
          this.clearSelection();
        },
        (error) => {
          console.error('Error updating query:', error);
        }
      );
  }

  // Delete a query
  deleteQuery(queryId: number) {
    this.http.delete(`http://localhost:5000/queries/${queryId}`)
      .subscribe(
        (response: any) => {
          this.message = 'Query deleted successfully!';
          this.getAllQueries(); // Refresh the query list
        },
        (error) => {
          console.error('Error deleting query:', error);
        }
      );
  }

  // Clear the selection
  clearSelection() {
    this.selectedQuery = null;
  }
}
