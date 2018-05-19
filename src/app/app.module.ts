import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule, MatListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TodoDataService } from './todo-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
