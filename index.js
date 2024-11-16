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
    const message = `O ${this.type} ${this.name}, ${this.age}, está no nível ${level}, e atacou usando ${attack}.`;
    return message;
  }
}

let ninja127 = new Hero("Jungwoo", 26, "ninja", 87655);
console.log(ninja127.message());

let monge127 = new Hero("Yuta", 28, "monge", 8770);
console.log(monge127.message());

let guerreiro127 = new Hero("Johnny", 28, "guerreiro", 10772994775);
console.log(guerreiro127.message());

let mago127 = new Hero("Jaehyun", 27, "mago", 87300742);
console.log(mago127.message());

let czennie127 = new Hero("Caroline", 31, "fã", 1001);
console.log(czennie127.message());




