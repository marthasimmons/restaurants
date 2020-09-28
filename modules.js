class Restraunt {
    
    static restraunts = []

    constructor({name, description= "None given", image= "None given"}) {
        if (!name) throw new Error("Restruants must have a name")
        this.name = name
        this.description =  description
        this.image = image
        this.menus = []
        this.tables = []
        Restraunt.restraunts.push(this)
    }

    addMenu(Menu) {
        this.menus.push(Menu)
    }

    addTable(Table) {
        this.tables.push(Table)
    }



}

class Menu {

    constructor({name}) {
        if (!name) throw new Error("Menus must have a name")
        this.name = name
        this.items = []
    }

    addItem(Item) {
        this.items.push(Item)
    }

}

class Item {

    constructor({name, description= "None given", price= 0.0}) {
        if (!name) throw new Error("Items must have a name")
        this.name = name
        this.description = description
        this.price = price
    }
}

class Table {

    constructor({number}) {
        if (!number) throw new Error("Tables must have a number")
        this.number = number
        this.bookings = []
    }

    book(booking) {
        this.bookings.push(booking)
    }
}

class Booking {

    constructor({name, day, month, year, hours, minutes}) {
        if (!name || !day || !month || !year || !hours  || !minutes ) throw new Error("Bookings must have a name and date")
        this.name = name
        this.date = new Date(year, month,day, hours, minutes)
    }
}

module.exports = {
    Restruant: Restraunt,
    Menu: Menu,
    Item: Item,
    Table: Table,
    Booking: Booking
}