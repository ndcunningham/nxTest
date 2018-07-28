import { async, TestBed } from '@angular/core/testing';
import { SchoolLoginModule } from './school-login.module';

describe('SchoolLoginModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [SchoolLoginModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(SchoolLoginModule).toBeDefined();
  });
});
