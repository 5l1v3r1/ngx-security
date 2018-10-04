import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { NgxSecurityService } from '../services/ngx-security.service';
import { Component } from '@angular/core';
import { NgxSecurityModule } from '../ngx-security.module';

@Component({
  selector: 'test-security',
  template: `<div>TEST</div>`
})
export class TestSecuredComponent {}



describe('NgxSecurityDirectives', () => {
  let security;
  let fixture;
  let element;


  const createTestComponent = (template: string): ComponentFixture<TestSecuredComponent> => {
    return TestBed
      .overrideComponent(TestSecuredComponent, {set: {template: template}} )
      .createComponent(TestSecuredComponent);
  };

  const instantiateTest = (directive: string) => {
    fixture = createTestComponent(`<div id="OK" ${directive}>OK</div><ng-template #elseTpl><div id="ELSE">ELSE</div></ng-template>`);
    expect(fixture).toBeDefined();

    element = fixture.nativeElement;
    expect(element).toBeDefined();

    security = TestBed.get(NgxSecurityService);
    expect(security).toBeDefined();
  };


  const expectVisible = (name: string) => {
    let div = element.querySelector(`#${name}`);
    expect(div).not.toBeNull();
    expect(div.textContent).toBe(name);
  };

  const expectHidden = (name: string) => {
    let div = element.querySelector(`#${name}`);
    expect(div).toBeNull();
  };


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxSecurityModule],
      declarations: [TestSecuredComponent]
    });
  });



  describe('secuIsAuthenticated', () => {
    beforeEach(() => {
      instantiateTest(`*secuIsAuthenticated`);
    });

    it('should not show the element if not authenticated', fakeAsync(() => {
      security.setAuthenticated(false);
      fixture.detectChanges();
      expectHidden('OK');
    }));


    it('should show the element if authenticated', fakeAsync(() => {
      security.setAuthenticated(true);
      fixture.detectChanges();
      expectVisible('OK');
    }));


    it('should show/hide the element when switching authenticated', fakeAsync(() => {
      security.setAuthenticated(true);
      fixture.detectChanges();
      expectVisible('OK');

      security.setAuthenticated(false);
      fixture.detectChanges();
      expectHidden('OK');
    }));
  });



  describe('secuIsAnonymous', () => {
    beforeEach(() => {
      instantiateTest(`*secuIsAnonymous`);
    });

    it('should not show the element if not anonymous', fakeAsync(() => {
      security.setAuthenticated(true);
      fixture.detectChanges();
      expectHidden('OK');
    }));


    it('should show the element if anonymous', fakeAsync(() => {
      security.setAuthenticated(false);
      fixture.detectChanges();
      expectVisible('OK');
    }));
  });




  describe('secuHasRoles', () => {
    beforeEach(() => {
      instantiateTest(`*secuHasRoles="['X', 'Y', 'Z']"`);
    });

    it('should not show the element if has not roles', fakeAsync(() => {
      security.setRoles(['X']);
      fixture.detectChanges();
      expectHidden('OK');
    }));


    it('should show the element if has roles', fakeAsync(() => {
      security.setRoles(['X', 'Y', 'Z']);
      fixture.detectChanges();
      expectVisible('OK');
    }));
  });


  describe('secuHasRoles with else template', () => {
    beforeEach(() => {
      instantiateTest(`*secuHasRoles="'X'; else elseTpl"`);
    });

    it('should show/hide the elseTpl', fakeAsync(() => {
      security.setRoles(['A']);
      fixture.detectChanges();
      expectHidden('OK');
      expectVisible('ELSE');

      security.setRoles(['X', 'Y', 'Z']);
      fixture.detectChanges();
      expectVisible('OK');
      expectHidden('ELSE');
    }));
  });



  describe('secuHasNotRoles', () => {
    beforeEach(() => {
      instantiateTest(`*secuHasNotRoles="['X', 'Y', 'Z']"`);
    });

    it('should not show the element if has roles', fakeAsync(() => {
      security.setRoles(['X']);
      fixture.detectChanges();
      expectHidden('OK');
    }));


    it('should show the element if has not roles', fakeAsync(() => {
      security.setRoles(['A', 'B', 'C']);
      fixture.detectChanges();
      expectVisible('OK');
    }));
  });


  describe('secuHasNotRoles with else template', () => {
    beforeEach(() => {
      instantiateTest(`*secuHasNotRoles="'X'; else elseTpl"`);
    });

    it('should show/hide the elseTpl', fakeAsync(() => {
      security.setRoles(['X']);
      fixture.detectChanges();
      expectHidden('OK');
      expectVisible('ELSE');

      security.setRoles(['A', 'B', 'C']);
      fixture.detectChanges();
      expectVisible('OK');
      expectHidden('ELSE');
    }));
  });



  describe('secuHasAnyRoles', () => {
    beforeEach(() => {
      instantiateTest(`*secuHasAnyRoles="['X', 'Y', 'Z']"`);
    });

    it('should not show the element if has not any roles', fakeAsync(() => {
      security.setRoles(['A']);
      fixture.detectChanges();
      expectHidden('OK');
    }));


    it('should show the element if has any roles', fakeAsync(() => {
      security.setRoles(['X']);
      fixture.detectChanges();
      expectVisible('OK');
    }));
  });


  describe('secuHasAnyRoles with else template', () => {
    beforeEach(() => {
      instantiateTest(`*secuHasAnyRoles="'X'; else elseTpl"`);
    });

    it('should show/hide the elseTpl', fakeAsync(() => {
      security.setRoles(['A']);
      fixture.detectChanges();
      expectHidden('OK');
      expectVisible('ELSE');

      security.setRoles(['X']);
      fixture.detectChanges();
      expectVisible('OK');
      expectHidden('ELSE');
    }));
  });








  describe('secuIsMemberOf', () => {
    beforeEach(() => {
      instantiateTest(`*secuIsMemberOf="['X', 'Y', 'Z']"`);
    });

    it('should not show the element if not member of groups', fakeAsync(() => {
      security.setGroups(['X']);
      fixture.detectChanges();
      expectHidden('OK');
    }));


    it('should show the element if member of groups', fakeAsync(() => {
      security.setGroups(['X', 'Y', 'Z']);
      fixture.detectChanges();
      expectVisible('OK');
    }));
  });


  describe('secuIsMemberOf with else template', () => {
    beforeEach(() => {
      instantiateTest(`*secuIsMemberOf="'X'; else elseTpl"`);
    });

    it('should show/hide the elseTpl', fakeAsync(() => {
      security.setGroups(['A']);
      fixture.detectChanges();
      expectHidden('OK');
      expectVisible('ELSE');

      security.setGroups(['X']);
      fixture.detectChanges();
      expectVisible('OK');
      expectHidden('ELSE');
    }));
  });



  describe('secuIsNotMemberOf', () => {
    beforeEach(() => {
      instantiateTest(`*secuIsNotMemberOf="['X', 'Y', 'Z']"`);
    });

    it('should not show the element if member of groups', fakeAsync(() => {
      security.setGroups(['X']);
      fixture.detectChanges();
      expectHidden('OK');
    }));


    it('should show the element if not member of groups', fakeAsync(() => {
      security.setGroups(['A', 'B', 'C']);
      fixture.detectChanges();
      expectVisible('OK');
    }));
  });


  describe('secuIsNotMemberOf with else template', () => {
    beforeEach(() => {
      instantiateTest(`*secuIsNotMemberOf="'X'; else elseTpl"`);
    });

    it('should show/hide the elseTpl', fakeAsync(() => {
      security.setGroups(['X']);
      fixture.detectChanges();
      expectHidden('OK');
      expectVisible('ELSE');

      security.setGroups(['A']);
      fixture.detectChanges();
      expectVisible('OK');
      expectHidden('ELSE');
    }));
  });



  describe('secuIsMemberOfAny', () => {
    beforeEach(() => {
      instantiateTest(`*secuIsMemberOfAny="['X', 'Y', 'Z']"`);
    });

    it('should not show the element if not member of any groups', fakeAsync(() => {
      security.setGroups(['A']);
      fixture.detectChanges();
      expectHidden('OK');
    }));


    it('should show the element if member of any groups', fakeAsync(() => {
      security.setGroups(['X']);
      fixture.detectChanges();
      expectVisible('OK');
    }));
  });


  describe('secuIsMemberOfAny with else template', () => {
    beforeEach(() => {
      instantiateTest(`*secuIsMemberOfAny="'X'; else elseTpl"`);
    });

    it('should show/hide the elseTpl', fakeAsync(() => {
      security.setGroups(['A']);
      fixture.detectChanges();
      expectHidden('OK');
      expectVisible('ELSE');

      security.setGroups(['X']);
      fixture.detectChanges();
      expectVisible('OK');
      expectHidden('ELSE');
    }));
  });




  describe('secuHasPermissions', () => {
    beforeEach(() => {
      instantiateTest(`*secuHasPermissions="['X', 'Y', 'Z']; else elseTpl"`);
    });

    it('should not show the element if has not permissions', fakeAsync(() => {
      security.setPermissions(['X']);
      fixture.detectChanges();
      expectHidden('OK');
    }));


    it('should show the element if has permissions', fakeAsync(() => {
      security.setPermissions(['X', 'Y', 'Z']);
      fixture.detectChanges();
      expectVisible('OK');
    }));
  });


  describe('secuHasPermissions with else template', () => {
    beforeEach(() => {
      instantiateTest(`*secuHasPermissions="'X'; else elseTpl"`);
    });

    it('should show/hide the elseTpl', fakeAsync(() => {
      security.setPermissions(['A']);
      fixture.detectChanges();
      expectHidden('OK');
      expectVisible('ELSE');

      security.setPermissions(['X']);
      fixture.detectChanges();
      expectVisible('OK');
      expectHidden('ELSE');
    }));
  });



  describe('secuHasNotPermissions', () => {
    beforeEach(() => {
      instantiateTest(`*secuHasNotPermissions="['X', 'Y', 'Z']"`);
    });

    it('should not show the element if has permissions', fakeAsync(() => {
      security.setPermissions(['X']);
      fixture.detectChanges();
      expectHidden('OK');
    }));


    it('should show the element if has not permissions', fakeAsync(() => {
      security.setPermissions(['A', 'B', 'C']);
      fixture.detectChanges();
      expectVisible('OK');
    }));
  });


  describe('secuHasNotPermissions with else template', () => {
    beforeEach(() => {
      instantiateTest(`*secuHasNotPermissions="'X'; else elseTpl"`);
    });

    it('should show/hide the elseTpl', fakeAsync(() => {
      security.setPermissions(['X']);
      fixture.detectChanges();
      expectHidden('OK');
      expectVisible('ELSE');

      security.setPermissions(['A']);
      fixture.detectChanges();
      expectVisible('OK');
      expectHidden('ELSE');
    }));
  });



  describe('secuHasAnyPermissions', () => {
    beforeEach(() => {
      instantiateTest(`*secuHasAnyPermissions="['X', 'Y', 'Z']"`);
    });

    it('should not show the element if has not any permissions', fakeAsync(() => {
      security.setPermissions(['A']);
      fixture.detectChanges();
      expectHidden('OK');
    }));


    it('should show the element if has any permissions', fakeAsync(() => {
      security.setPermissions(['X']);
      fixture.detectChanges();
      expectVisible('OK');
    }));
  });


  describe('secuHasAnyPermissions with else template', () => {
    beforeEach(() => {
      instantiateTest(`*secuHasAnyPermissions="'X'; else elseTpl"`);
    });

    it('should show/hide the elseTpl', fakeAsync(() => {
      security.setPermissions(['A']);
      fixture.detectChanges();
      expectHidden('OK');
      expectVisible('ELSE');

      security.setPermissions(['X']);
      fixture.detectChanges();
      expectVisible('OK');
      expectHidden('ELSE');
    }));
  });



  describe('when no input and every items', () => {
    beforeEach(() => {
      instantiateTest(`*secuHasRoles`);
    });

    it('should not show the element', fakeAsync(() => {
      security.setRoles(['X']);
      fixture.detectChanges();
      expectHidden('OK');
    }));
  });


  describe('when no input and first items', () => {
    beforeEach(() => {
      instantiateTest(`*secuHasAnyRoles`);
    });

    it('should not show the element', fakeAsync(() => {
      security.setRoles(['X']);
      fixture.detectChanges();
      expectHidden('OK');
    }));
  });


});
