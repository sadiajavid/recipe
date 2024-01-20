import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesModelTsComponent } from './recipes.model.ts.component';

describe('RecipesModelTsComponent', () => {
  let component: RecipesModelTsComponent;
  let fixture: ComponentFixture<RecipesModelTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipesModelTsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipesModelTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
