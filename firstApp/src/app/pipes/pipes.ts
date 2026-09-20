import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CurrencyConvertorPipe } from '../pipe/currency-convertor-pipe';

@Component({
  imports: [CommonModule,CurrencyConvertorPipe],
  selector: 'app-pipes',
  styleUrl: './pipes.css',
  templateUrl: './pipes.html',
})
export class Pipes {
  title="sonu kumar";
  date= new Date;
  amount=10;
  balance=50;
}
