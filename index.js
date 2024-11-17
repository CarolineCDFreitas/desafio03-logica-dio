let squad127 = [
  {
    name: "Johnny",
    id: "#01",
    age: 29,
    type: "guerreiro",
    xp: 5478,
  },
  {
    name: "Taeyong",
    id: "#02",
    age: 29,
    type: "mago",
    xp: 123653,
  },
  {
    name: "Yuta",
    id: "#03",
    age: 29,
    type: "ninja",
    xp: 13,
  },
  {
    name: "Doyoung",
    id: "#04",
    age: 28,
    type: "monge",
    xp: 8754,
  },
  {
    name: "Jaehyun",
    id: "#05",
    age: 27,
    type: "monge",
    xp: 98345,
  },
  {
    name: "Jungwoo",
    id: "#06",
    age: 26,
    type: "mago",
    xp: 123300000,
  },
  {
    name: "Mark",
    id: "#07",
    age: 25,
    type: "ninja",
    xp: 4563,
  },
  {
    name: "Haechan",
    id: "#08",
    age: 24,
    type: "ninja",
    xp: 8723,
  },
];

class Hero {
  constructor(name, age, type, xp) {
    this.name = name;
    this.age = age;
    this.type = type;
    this.xp = xp;
  }

  attack() {
    let attack;
    switch (this.type) {
      case "mago":
        attack = "magia";
        break;
      case "guerreiro":
        attack = "espada";
        break;
      case "monge":
        attack = "artes marciais";
        break;
      case "ninja":
        attack = "shuriken";
        break;
      default:
        attack = "ataque desconhecido";
        break;
    }
    return attack;
  }

  level() {
    let level;
    if (this.xp < 1000) {
      level = "Ferro";
    } else if (this.xp >= 1001 && this.xp <= 2000) {
      level = "Bronze";
    } else if (this.xp >= 2001 && this.xp <= 5000) {
      level = "Prata";
    } else if (this.xp >= 5001 && this.xp <= 7000) {
      level = "Ouro";
    } else if (this.xp >= 7001 && this.xp <= 8000) {
      level = "Platina";
    } else if (this.xp >= 8001 && this.xp <= 9000) {
      level = "Ascendente";
    } else if (this.xp >= 9001 && this.xp <= 10000) {
      level = "Imortal";
    } else if (this.xp >= 10001) {
      level = "Radiante";
    }
    return level;
  }

  message() {
    const attack = this.attack();
    const level = this.level();
    const message = `O ${this.type} ${this.name}, ${this.age}, nível ${level}, atacou usando ${attack}.`;
    return message;
  }
}

let newHeroesMessage = [];
for (const member of squad127) {
  const members = new Hero(member.name, member.age, member.type, member.xp);
  newHeroesMessage.push(members.message());
}

console.log(newHeroesMessage);
