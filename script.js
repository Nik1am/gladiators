settings = document.getElementById("settings")
used = document.getElementById("used")
json_out = document.getElementById('json_out');
discord_out = document.getElementById('discord_out');
settings.oninput = function() {
    strength = parseInt(document.getElementById("strength").value)
    agility = parseInt(document.getElementById("agility").value)
    intelligence = parseInt(document.getElementById("intelligence").value)
    charisma = parseInt(document.getElementById("charisma").value)
    speed = parseInt(document.getElementById("speed").value)
    bodyshape = parseInt(document.getElementById("bodyshape").value)

    name = document.getElementById("name").value
    items = document.getElementById("items").value
    weapons = document.getElementById("weapons").value
    armor = document.getElementById("armor").value
    armor_names = ["Без брони","Сверхлегкая","Легкая","Средняя","Тяжелая"]
    description = document.getElementById("description_text").value

    var stats = new Object();
    stats.name = name
    stats.strength = strength
    stats.agility = agility
    stats.intelligence = intelligence
    stats.charisma = charisma
    stats.speed = speed
    stats.constitution = bodyshape
    stats.items = items.split(",")
    stats.weapons = weapons.split(",").slice(0,6)
    stats.armor = armor
    stats.description = description
    var jsonString= JSON.stringify(stats);
    json_out.value = jsonString
    discord_out.value = `Имя: ${stats.name} \nСила: ${stats.strength}\nЛовкость: ${stats.agility}\nИнтеллект: ${stats.intelligence}\nХаризма: ${stats.charisma}\nСкорость: ${stats.speed}\nТелосложение: ${stats.constitution}\nПредметы: ${items}\nОружие: ${weapons}\nБроня: ${armor_names[armor]}\nОписание: ${description}`
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