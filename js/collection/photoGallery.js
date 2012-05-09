var PhotoGallery = Backbone.Collection.extend({
    //Reference to this collection's model .
    model: Photo,

    viewed: function(){
        return this.filter(function(photo){
            return photo.get('viewed');
        });
    },

    unviewed: function(){
        return this.filter(function(){
            return this.without.apply(this, this.viewed())
        })
    }
})