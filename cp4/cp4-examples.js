let descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
};

console.log(descriptions["touched tree"]);

descriptions["bed time"] = "21:30";

console.log(descriptions["bed time"]);

console.log(descriptions);

delete descriptions["bed time"];

console.log(descriptions);


function journalEvents(journal) {
    let events = [];

    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }

    return events;
}

