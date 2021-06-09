import {
  animate,
  query,
  style,
  transition,
  trigger
} from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          overflow: 'hidden',
          opacity: 0
        })
      ],
      { optional: true }
    ),
    query(':leave', [animate('300ms ease-out', style({ opacity: 0 }))], {
      optional: true
    }),
    query(':enter', [animate('300ms ease-out', style({ opacity: 1 }))], {
      optional: true
    })
  ])
]);
