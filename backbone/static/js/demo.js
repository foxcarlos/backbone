var Todo = Backbone.Model.extend({
  defaults:{
    titulo:'Titulo del Modeloo',
    completado: true
  },

  initialize: function(){
    console.log('Inicializando el Modelo');

    this.on('change:completado', function(){
      console.log('cambio el atributo del modelo. Completado')
    });

    this.on('invalid', function(model, error){
      console.log(error)
    });
  },

	validate: function(attributes){
      if (attributes.otro === undefined){
        return "recuerda que debes colocar un atributo a otro";
    }
  },

  cambiarTitulo: function(nombre){
    this.set({titulo:nombre});
  }
});

var TodoVista = Backbone.View.extend({
  tagname: 'li',
  todoTpl: _.template($('#item-template').html()),

  initialize: function(options){
    //this.options = options || {};
    this.$el = $('#todo');
    this.render();
  },
  render: function(){
    console.log( this.todoTpl( this.model.attributes ) )
    this.$el.html(this.todoTpl( this.model.attributes ));
    this.input = this.$('.edit');
    return this;
  },

  //delegando eventos
  events: {
    'dblclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
    'blur .edit': 'close',
    'click .edit':'clickEdit',
    'click .destroy': 'clickBoton'
  },

  clickEdit: function( event ){
      console.log($('#edit').val());
  },

  clickBoton: function( event ){
      console.log($('#edit').val());
  },

  edit: function(){
    console.log('doble click en la etiqueta')
  },

  close: function(){
    console.log('blur en input');
  },

  upadteOnEnter: function( e ){
    //
  }
});

