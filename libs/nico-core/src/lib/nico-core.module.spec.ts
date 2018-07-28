import { async, TestBed } from '@angular/core/testing';
import { NicoCoreModule } from './nico-core.module';

describe('NicoCoreModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [NicoCoreModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(NicoCoreModule).toBeDefined();
  });
});
