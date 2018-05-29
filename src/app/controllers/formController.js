const controller = {};
const fs = require('fs');
//const fileUpload = require('express-fileupload');
path = require('path'),


nodemailer = require('nodemailer');

controller.index = (req, res) => {

     
     res.render('form/forms',{msg:'0'});
     console.log('Carga completa');

};

controller.denuncia = (req, res) => {

     
  res.render('form/forms_denuncia',{msg:'0'});
  console.log('Carga completa');

};

controller.exito = (req, res) => {

     
  res.render('form/exito',{msg:'0'});
  console.log('Carga completa exito');

};

controller.enviar = (req, res) => {
 output =`
    <p> Sugerencia o queja </p>
    <h3>=== Detalles ===</h3>
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
        to: 'apoyo@panam.com.pe',// list of receivers
        subject: 'recepcion de sugerencias', // Subject line
        text: 'Revise el correo en un navegador valido, compatible con HTML', // plain text body
        html: output // html body ,
        
    };

    // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        
        res.render('form/exito');
//        res.render('form/forms', {msg:'1'});
    });
    //res.render('form/exito');
    console.log(output);
  };

  controller.enviar_denuncia = (req, res) => {
    if (req.files.varadj)
    {
      // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
      let sampleFile = req.files.varadj;

      // Use the mv() method to place the file somewhere on your server
      sampleFile.mv(path.join('./', 'upload/' + req.files.varadj.name), function (err) {
        if (err)
          return res.status(500).send(err);

     //   res.send('File uploaded!');
      });
    }
  
    output =`
       <p> Denuncia </p>
       <h3> Detalle ========== </h3>
       <ul>
         <li> Tipo de Denuncia: ${req.body.tipden}</li>
         <li> Personas involucradas de la empresa </li>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombres</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Relación con la compañía</th>
            </tr>
          </thead>
         <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                ${req.body.nombre1}
              </td>
              <td>
                ${req.body.apellido1}
              </td>
              <td>
                ${req.body.rel_com1}
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
                ${req.body.nombre2}
              </td>
              <td>
                ${req.body.apellido2}
              </td>
              <td>
                ${req.body.rel_com2}
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>
                ${req.body.nombre3}
              </td>
              <td>
                ${req.body.apellido3}
              </td>
              <td>
                ${req.body.rel_com3}
              </td>
            </tr>
          </tbody>
        </table>

        <li> Ciudad: ${req.body.ciuinc}</li>
        <li> Lugar: ${req.body.luginc}</li>
        <li> Tipo de Denuncia: ${req.body.tipden}</li>
        <li> Fecha: ${req.body.fecinc}</li>
        <li> Descripcion:</li>
          ${req.body.des}
        <li> Preciciones:</li>
          <ul>
            <li>
              ¿Existen personas externas a la empresa que han participado?
            </li>
            <li>
              ${req.body.preg1}
            </li>
            <li>
              ¿Sabe si alguién de la empresa tiene conocimiento de estos hechos?            </li>
            </li>
            <li>
              ${req.body.preg2}
            </li>
            <li>
              ¿Sabe qué tipo de beneficio obtienen las personas involucradas?            </li>
            </li>
            <li>
              ${req.body.preg3}
            </li>
          </ul>
        <li> <strong>G. Donde podría obtener evidencia la empresa:</strong> </li>
        <li>${req.body.obtevi}</li>
        <li> <strong>Datos de Remitente </strong> </li>
        <li> Relación con la compañia:    ${req.body.denrel}  </li>
        <li> Nombre:    ${req.body.dennom}  </li>
        <li> Apellido:  ${req.body.denape}  </li>
        <li> Teléfono:  ${req.body.dentel}  </li>
        <li> e-mail:    ${req.body.denemail}  </li>
       
        
         
       </ul> 
       `;
   //   <li> ruta de Adjunto: ${req.file.var_adj.path}</li>
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

    let mailOptions;
    if (!req.files.varadj) {
      mailOptions = {
        from: '"Panam Mailer Contacto" <info@panam.com.pe>', // sender address
        to: 'alonso.hl25@gmail.com',//'apoyo@panam.com.pe', // list of receivers
        subject: 'recepcion de sugerencias', // Subject line
        text: 'Formato de texto no valido, revisar en navegador compatible con HTML', // plain text body
        html: output // html body
      };
    }
    else {
      mailOptions = {
        from: '"Panam Mailer Contacto" <info@panam.com.pe>', // sender address
        to: 'alonso.hl25@gmail.com',//'apoyo@panam.com.pe', // list of receivers
        subject: 'recepcion de sugerencias', // Subject line
        text: 'Formato de texto no valido, revisar en navegador compatible con HTML', // plain text body
        html: output, // html body
        attachments: [
          {   // filename and content type is derived from path
            path: path.join('./', 'upload/' + req.files.varadj.name)
          }

        ]
      };
      
      

    }

   
     /*  let mailOptions = {
           from: '"Panam Mailer Contacto" <info@panam.com.pe>', // sender address
           to: 'alonso.hl25@gmail.com',//'apoyo@panam.com.pe', // list of receivers
           subject: 'recepcion de sugerencias', // Subject line
           text: 'Formato de texto no valido, revisar en navegador compatible con HTML', // plain text body
           html: output, // html body
           attachments: [
            {   // filename and content type is derived from path
                path: path.join('./', 'upload/'+ filenamee)
                  
                  //  let sampleFile = req.files.varadj;} req.files.varadj.name)//req.body.var_adj.value
                //filename: 'adjuntito.txt',
              //   content: fs.createReadStream(path.join('./', 'upload/'+ filenamee)) //"./upload/"+req.files.varadj.name //
               // })
            }
                    
          ]
       };*/
   
       // send mail with defined transport object
         transporter.sendMail(mailOptions, (error, info) => {
           if (error) {
               return console.log(error);
           }
           console.log('Message sent: %s', info.messageId);   
           console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
           fs.unlinkSync(path.join('./', 'upload/' + req.files.varadj.name));
           res.render('form/exito');
   //        res.render('form/forms', {msg:'1'});
       });
       console.log(output);
       
//       fs.unlink(path.join('./', 'upload/' + req.files.varadj.name), (err) => {
//        if (err) throw err;
//        console.log('successfully deleted /upload/file');
//      });
     };
     


  
module.exports = controller;