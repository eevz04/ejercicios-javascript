function createObject(name, subs) { 
    return {
        name: name, 
        subscribers: subs, 
        hash: name.length * subs, 
        getStatus: function() {
            return `El canal de ${this.name} tiene ${this.subscribers} suscriptores.`
        }
    }
}

// prueba de la función
const test = createObject("Dani", 100)
console.log(test.getStatus()) // El canal de Dani tiene 100 suscriptores.