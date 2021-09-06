// function faireQuelqueChose() {
//     console.log("je fais un truc");
//     console.log("trop cool");
// }
// faireQuelqueChose();

// const faireUneTache = (tache) => {
//     console.log("je fais: " + tache);
// };
// faireUneTache("les courses");
// faireUneTache("le menage");
let total = 0;

function addition(x) {
    total += x;
    return total;
}

function soustraction(x) {
    total -= x;
    return total;
}

function multiplication(x) {
    if (total === 0) {
        return (total = x);
    } else {
        total *= x;
        return total;
    }
}

function division(x) {
    if (total === 0) {
        return (total = x);
    } else {
        total /= x;
        return total;
    }
    total;
}