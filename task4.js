class Client{
    #login;
    #email;
    constructor(l, e) {
        this.#login = l;
        this.#email = e;
    }

    get login() {
        return this.#login;
    }
    
    set login(l) {
        this.#login = l;
    }

    get email() {
        return this.#email;
    }
    
    set email(e) {
        this.#email = e;
    }
}

let client1 = new Client("Niar", "jifje@ji1332.gmail")
console.log(client1.login);
client1.login = "Niar2";
console.log(client1.login);
