import { Router } from 'express';
import { CRMContactsController } from '../controller';

export default function crmContactsRouter(router: Router) {
  router
    .post('/crmcontacts', CRMContactsController.create)
    .get('/crmcontacts', CRMContactsController.get)
    .get('/crmcontacts/:id', CRMContactsController.getById)
    .put('/crmcontacts/:id', CRMContactsController.update)
    .delete('/crmcontacts/:id', CRMContactsController.delete)
    .post('/crmcontacts/create-many-with-faker/:quantity', CRMContactsController.createManyWithFaker );
}


