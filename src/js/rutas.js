(function(window, document){
    libreria.getID('vista').enrutar()
           .ruta('/','./vistas/inicio.html', 'contacto', window.controlador.starting)
           .ruta('/crear-contacto', './vistas/crear.html', 'contacto', function(){
                   _.getID('crearContacto').noSubmit();
           })
           .ruta('/listar-contactos', 
           './vistas/listar.html',
           'contacto', function(){
                   _.getCtrl().listar();
           })
           .ruta('/actualizar-contactos', './vistas/actualizar.html', 'contacto', function(){
                   _.getID('frmActualiza').noSubmit();
                   _.getCtrl().preparaActualizacion();
           })
   
   })(window,document);
