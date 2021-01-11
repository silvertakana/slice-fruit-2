var fruit, enemy, sword, state = "play",
  fruitG1, fruitG2, fruitG3, fruitG4, enemyG, score = 0;
var fruit1, fruit2, fruit3, fruit4, enemyAni, swordImg;
var death, deathImg,overMp3,knifeMp3,yeet;

function preload() {
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  deathImg = loadImage("gameover.png")
  enemyAni = loadAnimation("alien1.png", "alien2.png");
  swordImg = loadImage("sword.png");
  overMp3 = loadSound("gameover.mp3");
  knifeMp3 = loadSound("knifeSwooshSound.mp3");

}

function setup() {
  createCanvas(600, 600);
  sword = createSprite(300, 300);
  death = createSprite(300, 300);
  death.visible = 0;
  death.addImage(deathImg);
  sword.addImage(swordImg);
  fruitG1 = new Group();
  fruitG2 = new Group();
  fruitG3 = new Group();
  fruitG4 = new Group();
  enemyG = new Group();
  sword.setCollider("rectangle",0,0,40,40);

}

function draw() {
  background(80,180,250,95);
  if (state === "play") {
    sword.x = mouseX;
    sword.y = mouseY;
    sword.rotation = sword.rotation + 50;
    if (frameCount % 10 === 0) {
      fruitC();
    }

    if (enemyG.isTouching(sword)) {
      state = "end";
      overMp3.play();
    }
    
    if (fruitG1.isTouching(sword)) {
      fruitG1.destroyEach();
      score = score + 1;
      knifeMp3.play();
    }
    if (fruitG2.isTouching(sword)) {
      fruitG2.destroyEach();
      score = score + 1;
      knifeMp3.play();
    }
    if (fruitG3.isTouching(sword)) {
      fruitG3.destroyEach();
      score = score + 1;
      knifeMp3.play();
    }
    if (fruitG4.isTouching(sword)) {
      fruitG4.destroyEach();
      score = score + 1;
      knifeMp3.play();
    }

    
  } else {
    death.visible = 1;
    fruitG1.setVelocityXEach(0)
    fruitG1.setLifetimeEach(-1)
    fruitG2.setVelocityXEach(0)
    fruitG2.setLifetimeEach(-1)
    fruitG3.setVelocityXEach(0)
    fruitG3.setLifetimeEach(-1)
    fruitG4.setVelocityXEach(0)
    fruitG4.setLifetimeEach(-1)
    enemyG.setVelocityXEach(0)
    enemyG.setLifetimeEach(-1)
  }
  drawSprites();
  text("score " + score, 400, 50);
}

function fruitC() {
  switch (round(random(1, random(1, 2)))) {
    case 1:
      fruit = createSprite(600, random(100, 500));
      switch (round(random(1, 4))) {
        case 1:
          fruit.addImage(fruit1);
          fruitG1.add(fruit);
          break;
        case 2:
          fruit.addImage(fruit2);
          fruitG2.add(fruit);
          break;
        case 3:
          fruit.addImage(fruit3);
          fruitG3.add(fruit);
          break;
        case 4:
          fruit.addImage(fruit4);
          fruitG4.add(fruit);
          break;
      }
      fruit.scale = .2;
      fruit.velocityX = -20;
      fruit.lifetime = 30;
      break;
    case 2:
      enemy = createSprite(600, random(100, 500));
      enemy.addAnimation("ah", enemyAni);
      enemy.scale = 2;
      enemyG.add(enemy);
      enemy.velocityX = -30;
      enemy.lifetime = 30;
      break;
  }



}