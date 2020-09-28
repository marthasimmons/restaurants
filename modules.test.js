const {Restruant, Menu, Item, Table, Booking} = require('./modules.js')

const downTheHatch = new Restruant({name: "Down The Hatch", description: "Vegan burgers!"})
const mainMenu = new Menu({name: "Main Menu"})
const drinksMenu = new Menu({name: "Drinks Menu"})
const burger = new Item({name: "Burger", price: 10.00})
const chips = new Item({name: "Chips"})
const table1 = new Table({number: 1})
const table2 = new Table({number: 2})
const myBooking = new Booking({name: "Martha Simmons", day: 18, month: 10, year: 2020, hours: 20, minutes: 20})

describe ("Restraunt", () => {
    test("Has name", () => {
        expect(downTheHatch.name).toBe("Down The Hatch")
    })
    test("Must have name", () => {
        expect(() => new Restruant({})).toThrowError("Restruants must have a name")
    })

    test("Has description", () => {
        expect(downTheHatch.description).toBe("Vegan burgers!")
    })

    test("Has image", () => {
        expect(downTheHatch.image).toBe("None given")
    })

    test("Has menus", () => {
        downTheHatch.addMenu(mainMenu)
        downTheHatch.addMenu(drinksMenu)

        expect(downTheHatch.menus[0].name).toEqual("Main Menu")
        expect(downTheHatch.menus[1].name).toEqual("Drinks Menu")
    })

    test("Has tables", () => {
        downTheHatch.addTable(table1)
        downTheHatch.addTable(table2)

        expect(downTheHatch.tables[0].number).toEqual(1)
        expect(downTheHatch.tables[1].number).toEqual(2)
    })
    
    test("Is in restarunts array", () => {
        expect(Restruant.restraunts[0].name).toEqual("Down The Hatch")
    })
})

describe("Menu", () => {
    test("Has name", ()  => {
        expect(mainMenu.name).toBe("Main Menu")
    })

    test("Must have name", () => {
        expect(() => new Menu({})).toThrowError("Menus must have a name")
    })

    test("Has items", () => {
        mainMenu.addItem(burger)
        mainMenu.addItem(chips)

        expect(mainMenu.items[0].name).toEqual("Burger")
        expect(mainMenu.items[1].name).toEqual("Chips")
    })

})

describe("Item", () => {
    test("Has name", ()  => {
        expect(burger.name).toEqual("Burger")
    })

    test("Must have name", () => {
        expect(() => new Item({})).toThrowError("Items must have a name")
    })

    test("Has description", ()  => {
        expect(burger.description).toEqual("None given")
    })

    test("Has price", ()  => {
        expect(burger.price).toEqual(10.00)
    })
})

describe("Table", () => {
    test("Has number", ()  => {
        expect(table1.number).toEqual(1)
    })

    test("Must have number", () => {
        expect(() => new Table({})).toThrowError("Tables must have a number")
    })

    test("Has booking", () => {
        table1.book(myBooking)

        expect(table1.bookings[0].name).toEqual("Martha Simmons")
    })

})

describe("Booking", () => {
    test("Has name", ()  => {
        expect(myBooking.name).toEqual("Martha Simmons")
    })

    test("Has date", ()  => {
        expect(myBooking.date.getDate()).toBe(18)
        expect(myBooking.date.getMinutes()).toBe(20)
    })
    
    test("Must have name and date", () => {
        expect(() => new Booking({})).toThrowError("Bookings must have a name and date")
    })
})