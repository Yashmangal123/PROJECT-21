function hasCollided(lBullet,lWall){
    bulletRightEdge = lbullet.x + lbullet.width;
    wallleftEdge = lwall.x;
    if(bulletRightEdge >= wallLeftEdge){
      return true;
    } 
    return false;
  }
 