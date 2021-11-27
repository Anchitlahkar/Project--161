AFRAME.registerComponent("create-ball", {
  schema: {},

  init: function () {
    // Do something when component first attached.
    this.throwBall();
  },

  throwBall: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "v") {
        var ball = document.createElement("a-entity");

        ball.setAttribute("geometry", {
          primitive: "sphere",
          radius: 0.4,
        });

        ball.setAttribute("material", "color", "black");

        var cam = document.querySelector("#camera");

        pos = cam.getAttribute("position");

        ball.setAttribute("position", {
          x: pos.x,
          y: pos.y,
          z: pos.z,
        });
        ball.setAttribute("dynamic-body",{})

        var camera = document.querySelector("#camera").object3D;

        //get the camera direction as Three.js vector
        var direction = new THREE.Vector3()
        camera.getWorldDirection(direction)

        ball.setAttribute("velocity",direction.multiplyScalar(-8))

        var scene = document.querySelector("#scene")

        scene.appendChild(ball);

      }
    });
  },
});
