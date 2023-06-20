var rows = 100,
  columns = 190,
  number = columns * rows,
  thick = Math.pow(400, 2),
  margin = 15,
  padding = 0,
  color = 200,
  magnet = 0.4,
  ease = 0.15,
  container,
  particle,
  canvas,
  stats,
  list,
  ctx,
  dx,
  dy,
  mx,
  my;

particle = {
  vx: 0,
  vy: 0,
  x: 0,
  y: 0,
};

function init() {
  container = document.getElementById("darkcontainer");
  canvas = document.createElement("canvas");

  ctx = canvas.getContext("2d");

  list = [];

  w = canvas.width = columns * margin + padding * 2;
  h = canvas.height = rows * margin + padding * 2;

  container.style.marginLeft = Math.round(w * -0.5) + "px";
  container.style.marginTop = Math.round(h * -0.5) + "px";

  for (i = 0; i < number; i++) {
    p = Object.create(particle);
    p.x = p.ox = padding + margin * (i % columns);
    p.y = p.oy = padding + margin * Math.floor(i / columns);

    list[i] = p;
  }

  container.addEventListener("mousemove", function (e) {
    bounds = container.getBoundingClientRect();
    mx = e.clientX - bounds.left;
    my = e.clientY - bounds.top;
  });

  container.appendChild(canvas);
}

function step() {
  for (i = 0; i < number; i++) {
    p = list[i];

    dx = mx - p.x
    dy = my - p.y

    d = dx * dx + dy * dy;
    f = -thick / d;

    if (d < thick) {
      t = Math.atan2(dy, dx);
      p.vx += f * Math.cos(t);
      p.vy += f * Math.sin(t);
    }

    p.x += (p.vx *= magnet) + (p.ox - p.x) * ease;
    p.y += (p.vy *= magnet) + (p.oy - p.y) * ease;
  }

  a = ctx.createImageData(w, h)
  b = a.data;

  for (i = 0; i < number; i++) {
    p = list[i];

    n = (~~p.x + ~~p.y * w) * 4;
    
    (b[n] = b[n +1 ] = b[n +2] = color),
      (b[n + 3] = 255);
  }

  ctx.putImageData(a, 0, 0);

  requestAnimationFrame(step);
}

init();
step();
