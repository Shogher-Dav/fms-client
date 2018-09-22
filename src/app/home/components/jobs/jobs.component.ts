import { Component, OnInit } from '@angular/core';
import {IJobs} from '../../../core/interfaces/IJobs';
import {JobsService} from '../../../core/services/jobs.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import { Select, Store } from '@ngxs/store';
import {HomeState} from '../../store/home.state';
import {GetJobs} from '../../actions/home.actions';
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})


export class JobsComponent implements OnInit {
  public isAir = false;
  public isSea = false;
  public isOther = false;
  public isRoad = false;
  public isRailway = false;
 public  dataSource = new JobsDataSource(this.jobsServise);
 @Select(HomeState.jobs) public jobs$: Observable<boolean>
  displayedColumns = ['number', 'date', 'mawb', 'origin', 'destination', 'other'];
  constructor(
    private jobsServise: JobsService,
    private store: Store) {

   }
  ngOnInit() {
  //  this.store.dispatch( new GetJobs());
  }

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

  chooseRalway() {
    this.isRailway = !this.isRailway;
  }
}

export class JobsDataSource extends DataSource <any> {
  public jobs: IJobs[];

  constructor(private jobsServise: JobsService){
    super();
  }
  public connect(): Observable<IJobs[]>{
   return this.jobsServise.getJobs();
  }
  public disconnect(){}
}
