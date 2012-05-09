var PhotoRouter = Backbone.Router.extend({
    routes:{"photos/:id":"route"},

    route:function (id) {
        var item = photoCollection.get(id);
        var view = new PhotoView({model:item});

        something.html(view.render().el);
    }
})