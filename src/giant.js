"use strict";

/**
 * @module exports the Giant Monster class
 */
module.exports = exports = Giant;

/**
 * @constructor Giant
 * Creates a new giant object
 * @param {Postition} position object specifying an x and y
 */
function Giant(position) {
    this.x = position.x;
    this.y = position.y;
    this.state = "waiting";
    this.frame = 0;
    this.timer = 0;
    this.width = 16;
    this.height = 16;
    this.spritesheet = new Image();
    this.spritesheet.src = encodeURI('assets/beasts/giant/giant walk.png');

    var self = this;
    window.onmousedown = function (event) {
        if (self.state == "waiting") {
            self.x = event.clientx
            self.state = walking;
        }
    }
}

/**
 * @function updates the player object
 * {DOMHighResTimeStamp} time the elapsed time since the last frame
 */
Player.prototype.update = function (time) {
    this.timer += time;
    switch (this.state) {
        case "walking":
            if (this.timer > 1000 / 16) {
                this.frame = (this.frame + 1) % 4;
                this.timer = 0;
            }
            this.y -= 1;
            break;
    }
}

/**
 * @function renders the player into the provided context
 * {DOMHighResTimeStamp} time the elapsed time since the last frame
 * {CanvasRenderingContext2D} ctx the context to render into
 */
Player.prototype.render = function (time, ctx) {
    ctx.drawImage(
      // image
      this.spritesheet,
      // source rectangle
      this.frame * this.width, 0, this.width, this.height,
      // destination rectangle
      this.x, this.y, this.width, this.height
    );
}
