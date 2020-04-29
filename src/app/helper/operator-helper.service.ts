import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operator } from '../models/operator';

@Injectable({
  providedIn: 'root'
})
export class OperatorHelperService {

  constructor() { }

  getOperator(data : Operator) : Operator { 
    return data;
  }
}
