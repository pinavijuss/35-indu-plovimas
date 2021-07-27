class Plates {
    constructor() {
        this.cleanPlates = 0;
        this.dirtyPlates = 0;
    }

    intro() {
        if (this.cleanPlates + this.dirtyPlates <= 0) {
            console.log(`Hi, this restoran has no plates! Please, buy some.`);
        } else {
            console.log(`Hi, this restoran has ${this.cleanPlates} plates!`);
        }


    }
    buyPlates(plateCount) {
        this.cleanPlates += plateCount;

        console.log(`Restoran purchased ${plateCount} plates`);
    }

    usePlates(usedPlateCount) {
        if (usedPlateCount <= this.cleanPlates) {
            this.cleanPlates -= usedPlateCount;
            this.dirtyPlates += usedPlateCount;
            console.log(`Restoran has made some dishes for ${usedPlateCount} plates.`);


        } else {
            console.log(`Restoran has ${this.cleanPlates} plates only, it's not enough. No action is taken.`);
        }
    }


    cleanPlatesCount() {
        if (this.cleanPlates === 0) {
            console.log(`Restoran is left with no clean plates.`);
        } else {
            console.log(`Restoran has ${this.cleanPlates} clean plates.`);

        }
    }
    cleanUp(plateCount) {

        if (this.dirtyPlates < plateCount) {
            console.log(`Restoran does not have so many dirty plates.`);
            return;
        }
        this.dirtyPlates -= plateCount;
        this.cleanPlates += plateCount;

        if (this.dirtyPlates === 0) {
            console.log(`All plates in the Restoran is clean!`);
        }

    }
}

module.exports = Plates;