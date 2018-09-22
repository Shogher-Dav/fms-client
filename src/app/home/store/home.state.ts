import {IJobs} from '../../core/interfaces/IJobs';
import {Selector, State, StateContext, Store, Action} from '@ngxs/store';
import {GetJobs} from '../actions/home.actions';
import {JobsService} from '../../core/services/jobs.service';
import { tap } from 'rxjs/operators';


export class HomeStateModel {

  jobs: IJobs[];
}
@State<HomeStateModel>({
  name: 'home',
  defaults: {
    jobs: null
  }
})

export class HomeState {
  constructor(
    private store: Store,
    private jobsService: JobsService
  ) {

  }

  @Selector()
  static jobs(state: HomeStateModel) {
    return state.jobs;
  }

  @Action(GetJobs)
  getJobs({patchState}: StateContext<HomeStateModel>) {
    // const state = ctx.getState();
    // return this.jobsService.getJobs().pipe(
    //   tap(res => {
    //     produce(ctx.getState(), draft => {
    //       draft.jobs = _concat(draft.jobs, res.data);
    //     });
    //   })
    // );
    return this.jobsService.getJobs().pipe(
     tap(res => {
         patchState({jobs: res});
       }
     )
    )
  }
  // @Action(GetPhotoList)
  // getPhotoList({ patchState }: StateContext<GalleryStateModel>) {
  //
  //   return this.galleryService.getImages().pipe(
  //     tap(res => {
  //       patchState({ items: res.data });
  //
  //     })
  //   );
  // }
//   return this.jobsService.getJobs().pipe(
//     tap(res => {
//   patchState({ jobs: res.data });
//
// })
// );

//   @Action(GetImages)
//   getImages(ctx: StateContext<FeedModel>) {
//     this.store.dispatch(new StartLoadingImages());
//
//     const state = ctx.getState();
//     return this.galleryService
//       .getImages({
//         page: state.imagePage,
//         albumId: state.selectedAlbum
//       })
//       .pipe(
//         tap(res => {
//           ctx.setState(
//             produce(ctx.getState(), draft => {
//               draft.images = _concat(draft.images, res.data);
//             })
//           );
//           this.store.dispatch(new StopLoadingImages());
//         })
//       );
//   }
// }

}
