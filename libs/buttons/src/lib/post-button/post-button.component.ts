import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'p-button',
  templateUrl: './post-button.component.html',
  styleUrls: ['./post-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostButtonComponent {
  @Input() onClick: Observable<any> | Function;
  @Input() isDisabled: Boolean = false;

  constructor(private cdr: ChangeDetectorRef) {}

  /**
   * ------------ For Observable types ----------------
   * Initiate's the post request and disables the button from being clicked while the request is in progress
   * -- If an error should happen we return that error inside our error emitter and pass it back to the consumer
   *
   * ----------- For Functions types ---------------------
   * It will just call the function and returns the result
   * -- if there is an error it will handle it and emit the error to the consumer
   */
  initiatePost(event: any): void {
    if (this.onClick instanceof Observable) {
      this.submitAsObservable(this.onClick);
    } else {
      this.onClick(event);
    }
  }

  /**
   * Consumes the observable passed in so that it can control when the button should be disabled and enabled. Before and After the call is made respectively.
   *
   * We use ChangeDetectionRef to mark this component to be checked due to {@link ChangeDetectionStrategy.OnPush}
   * @param obs Source which will control the disable property before and after subscription
   */
  submitAsObservable(obs: Observable<any>) {
    this.isDisabled = true;
    obs.pipe(first()).subscribe(() => {
      this.isDisabled = false;
      this.cdr.markForCheck();
    });
  }
}
