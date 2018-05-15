const controller = {};

nodemailer = require('nodemailer');

controller.index = (req, res) => {

     
     res.render('form/forms');
     console.log('Carga completa');

};

controller.enviar = (req, res) => {
 output =`
    <p> Sugerencia o queja </p>
    <h3> Detalles de el mensaje </h3>
    <ul>
      <li> Documento: ${req.body.tipdoc} ${req.body.doc}</li>
      <li> Nombre: ${req.body.nombre} ${req.body.apellido}</li>
      
      <li> Email: ${req.body.email}</li>
      <li> Dirección: ${req.body.direccion}</li>
      <li> Motivo: ${req.body.tipform}</li>
      <li> Detalle: ${req.body.texto}</li>

      
    </ul> 
    `;

    let transporter = nodemailer.createTransport({
      host: 'mail.panam.com.pe',
      port: 25,//587,
      secure: false, // true for 465, false for other ports
      auth: {
          user: 'info@panam.com.pe', // generated ethereal user
          pass: 'P@n@m2016_'  // generated ethereal password
      },
      tls:{
        rejectUnauthorized:false
      }
    });

    let mailOptions = {
        from: '"Panam Mailer Contacto" <info@panam.com.pe>', // sender address
        to: 'alonso.hl25@gmail.com', // list of receivers
        subject: 'recepcion de sugerencias', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    console.log(output);
  };



  
module.exports = controller;