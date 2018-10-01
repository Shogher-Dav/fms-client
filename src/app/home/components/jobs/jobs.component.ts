import { Component } from '@angular/core';
import {IJobs} from '../../../core/interfaces/IJobs';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import { Select, Store } from '@ngxs/store';
import {HomeState} from '../../store/home.state';
import {GetJobs} from '../../actions/home.actions';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})


export class JobsComponent  {
  public isAir = false;
  public isSea = false;
  public isOther = false;
  public isRoad = false;
  public isRailway = false;
  public  dataSource = new JobsDataSource(this.store);
  displayedColumns = ['number', 'date', 'mawb', 'origin', 'destination', 'other'];

  constructor(private store: Store) { }

  chooseAir() {
    this.isAir = !this.isAir;
  }

  chooseSea() {
    this.isSea = !this.isSea;
  }

  chooseOther() {
    this.isOther = !this.isOther;
  }

  chooseRoad() {
    this.isRoad = !this.isRoad;
  }

  chooseRailway() {
    this.isRailway = !this.isRailway;
  }
}

export class JobsDataSource extends DataSource <any> {
  public jobs: IJobs[];
  @Select(HomeState.jobs) public jobs$: Observable<IJobs[]>;

  constructor(private store: Store) {
    super();
  }

  public connect(): Observable<IJobs[]> {
    this.store.dispatch( new GetJobs());
    return this.jobs$;
  }
  public disconnect(){}
}
