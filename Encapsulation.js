class Encap {

    #pin = 1001
    get getpin() {
        return this.#pin
    }

    set spinno(val) {
        this.#pin = val
    }
}

let en = new Encap()
console.log(en.getpin);

en.spinno=1212
console.log(en.getpin);