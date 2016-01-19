var Person = Backbone.Model.extend({
	defaults:{
		nombre: 'Usuario Guest',
		edad: '1',
		ocupacion: 'Trabajador'
	}
});

var PeopleCollection = Backbone.Collection.extend({
    model: Person
});

var PersonView = Backbone.View.extend({
	tagName: 'li',

	miPlantilla: _.template($('#personaPlantilla').html()) ,
	//miPlantilla: _.template($('#formUser').html()) ,

	initialize: function(){
		this.render();
	},

	render: function(){
		this.$el.html(this.miPlantilla(this.model.toJSON()));
		//this.$el.html(this.miPlantilla());
	}
});
