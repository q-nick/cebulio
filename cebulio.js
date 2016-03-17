//libraries
import page from "page";

let cebulio = {
    addModule: function(prefix, module) {
        for (let route in module.Routes) {
            page(prefix + '/' + route, function() {
                let controller = new module.Routes[route]();
                controller.draw();
            });
        }
    },

    app: function(modules) {
        for (let module in modules) {
            cebulio.addModule(module, modules[module]);
        }
        page.start({popstate: false, hashbang: true});
        //page('/user/add');
        //page('/user/edit');
    }
};

export default cebulio;