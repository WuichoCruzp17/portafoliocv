var utilElements ={

    addClass:function(element,classCss){
        element.classList.add(classCss);
    },
    
    removeClass:function(element,classCss){
        element.classList.remove(classCss);
    },

    toggle:function(element,classCss){
        element.classList.toggle(classCss);
    }
};