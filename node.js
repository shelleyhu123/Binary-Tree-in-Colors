function Node(val, x, y){
    this.value = val;
    this.left = null;
    this.right = null;
    this.x = x;
    this.y = y;
}

Node.prototype.search = function(val) {
    if (this.value == val) {
        return this;
    } else if (val < this.value && this.left != null){
        return this.left.search(val);
    } else if (val > this.value && this.right != null){
        return this.right.search(val);
    }
    return null;
}

Node.prototype.visit = function(parent) {
    if (this.left != null){
        this.left.visit(this);
    }
    console.log(this.value);
    noStroke();
    fill(255, 0, 0, 255-this.value);
    ellipse(this.x, this.y, this.value/2, this.value/2);
    stroke(255, 0, 0);
    line(0, height/2, width, height/2);
    line(width/2, 0, width/2, height);
    //line(parent.x, parent.y, this.x, this.y);   
    if (this.right != null) {
        this.right.visit(this);
    }
}

Node.prototype.addNode = function(n){
    if(n.value < this.value) {
        if (this.left == null) {
            this.left = n;
            this.left.x = this.x - 50;
            this.left.y = this.y + 10;
        } else {
            this.left.addNode(n);    
        }
        
    } else if (n.value > this.value) {
        if (this.right == null) {
            this.right = n;
            this.right.x = this.x + 50;
            this.right.y = this.y - 10;
        } else {
            this.right.addNode(n);
        }        
    }
}