settings = document.getElementById("settings")
used = document.getElementById("used")
json_out = document.getElementById('json_out');
settings.oninput = function() {
    strength = parseInt(document.getElementById("strength").value)
    agility = parseInt(document.getElementById("agility").value)
    intelligence = parseInt(document.getElementById("intelligence").value)
    charisma = parseInt(document.getElementById("charisma").value)
    speed = parseInt(document.getElementById("speed").value)
    bodyshape = parseInt(document.getElementById("bodyshape").value)

    items = document.getElementById("items").value

    var stats = new Object();
    stats.strength = strength
    stats.agility = agility
    stats.intelligence = intelligence
    stats.charisma = charisma
    stats.speed = speed
    stats.constitution = bodyshape
    stats.items = items.split(",")
    var jsonString= JSON.stringify(stats);
    json_out.value = jsonString

    document.getElementById("st_pts").innerHTML = strength
    document.getElementById("ag_pts").innerHTML = agility
    document.getElementById("in_pts").innerHTML = intelligence
    document.getElementById("ch_pts").innerHTML = charisma
    document.getElementById("sp_pts").innerHTML = speed
    document.getElementById("bo_pts").innerHTML = bodyshape

    sum = strength+agility+intelligence+charisma+speed+bodyshape
    used.innerHTML = sum+12
    if (used.innerHTML > 17) {
        settings.style.backgroundColor = "#FF8888";
        json_out.value = "Invalid stats"
    }
    else {
        settings.style.backgroundColor = "#FFF";
    }


}