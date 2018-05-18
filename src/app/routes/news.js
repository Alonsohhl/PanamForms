
//const dbConnection =require('../../config/dbConnection');

/*module.exports= app =>{
  const connection = dbConnection();

  app.get('/',(req, res) => {
    connection.query('select * from formularios',(err,result)=>{
      console.log(result)
      res.render('form/forms',{
        forms: result
      });
    });
  });
}
*/

const router = require('express').Router();

const PanamController = require('../controllers/formController');

router.get('/', PanamController.index);
router.post('/enviar', PanamController.enviar);
router.get('/exito', PanamController.exito);
router.get('/denuncia', PanamController.denuncia);
router.post('/enviar_denuncia', PanamController.enviar_denuncia);
/*router.post('/add', customerController.save);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);
router.get('/delete/:id', customerController.delete);
*/
module.exports = router;

