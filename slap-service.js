function SlapService() {
    var dataStore = this

    function Target(name, madness, cups, emTea, parrTea, inSannaTea) {
        this.name = name;
        this.madness = madness;
        this.cups = cups;
        this.tea = {
            emTea: emTea,
            parrTea: parrTea,
            inSannaTea: inSannaTea
        };
        this.items = []
    }

    var alice = new Target(" 'Alice' ", 0, 10, 1, 5, 10)

    var Item = function (name, modifier, description) {
        this.name = name;
        this.modifier = modifier;
        this.description = description
    }

    var items = {
        pour: new Item("Pour a Cup", 2.0, "Pouring your own tea!? Doubles the madness."),
        shake: new Item("Shake Hands", 1.5, "Shaking hands with the Hatter! His madness adds an extra 50%."),
        move: new Item("Move Down", 0.5, "Move down the table! Madness level is cut in half.")
    }

    function addMods() {
        var modTotal = 1
        for (let i = 0; i < alice.items.length; i++) {
            var total = alice.items[i].modifier;
            modTotal = modTotal * total
        }
        return modTotal
    }

    //public

    dataStore.tea = function tea(teaType) {
        alice.madness += alice.tea[teaType] * addMods()
        alice.cups -= 1
    }

    dataStore.giveItem = function giveItem(itemType) {
        alice.items.push(items[itemType])
    }

    dataStore.reset = function reset() {
        alice.madness = 0
        alice.cups = 10
        alice.items = []
    }

    dataStore.getAlice = function getAlice(){
        return JSON.parse(JSON.stringify(alice))
    }
}