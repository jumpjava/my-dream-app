import { TestBed } from '@angular/core/testing';
import { MyserviceService } from './myservice.service';
describe('MyserviceService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(MyserviceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=myservice.service.spec.js.map