var plantilla = function(id){
    return _.template( $('#' + id).html() );
};

var Person = Backbone.Model.extend({
	defaults:{
		nombre: 'Usuario Guest',
		edad: '1',
		ocupacion: 'Trabajador'
	}
});

//Creacion de Coleccion basado en el Modelo de una persona
var PeopleCollection = Backbone.Collection.extend({
    model: Person
});

//Vista para un Modelo de personas
var PersonView = Backbone.View.extend({
	tagName: 'li',

	miPlantilla: plantilla('personaPlantilla'),  // _.template($('#personaPlantilla').html()) ,

	initialize: function(){
		this.render();
	},

	render: function(){
		this.$el.html(this.miPlantilla(this.model.toJSON()));
        return this;
	}
});

//Vista para Coleccion de Personas
var PeopleView = Backbone.View.extend({
    tagName: 'ul',

    initialize: function(){
        console.log('metodo initialize de PeopleView');
    },

    render: function(){
        this.collection.each(function(person){
            var personaVista = new PersonView({model: person});
            this.$el.append(personaVista.render().el);
        }, this);
        return this;
    }

});

//Agregar datos a una coleccion
var peopleCollection = new PeopleCollection([
        {
            nombre: 'Carlos', edad: 43, ocupacion:'Developer'
        },
        {
            nombre:'Nairesther', edad:26, ocupacion:'Educadora'
        },
        {
            nombre: 'Carla', edad:6, ocupacion: 'Estudiante'
        },
        {
            nombre: 'Carla', edad:6, ocupacion: 'Estudiante'
        }
        ]);

var peopleView = new PeopleView({ collection: peopleCollection });
$(document.body).append(peopleView.render().el);   // adding people view in DOM.. Only for demo purpose...
