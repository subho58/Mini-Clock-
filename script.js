function clock() {
  const now = new Date();
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  //   Setup Canvas
  ctx.save(); // Save the default state

  ctx.clearRect(0, 0, 500, 500);
  ctx.translate(250, 250); // Puts the 0,0 in the middle
  ctx.rotate(-Math.PI / 2); // Rotates clock by -90deg

  //   Set Default style
  ctx.strokeStyle = '#000';
  ctx.fillStyle = '#f4f4f4';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';

  //   Draw Clock face
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = '#800000';
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();

  ctx.restore();

  //   Draw Hour marks
  ctx.save();
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
    ctx.rotate(Math.PI / 6);
  }
  ctx.restore();

  //   Draw Min Marks
  ctx.save();
  ctx.lineWidth = 4;
  for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  //   Get Current Time
  const hr = now.getHours() % 12;
  const min = now.getMinutes();
  const sec = now.getSeconds();

  // console.log(`${hr}:${min}:${sec}`);

  //   Make Hour Hand
  ctx.save();
  ctx.rotate(
    (Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec
  );
  ctx.lineWidth = 14;
  ctx.strokeStyle = '#800000';
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(70, 0);
  ctx.stroke();
  ctx.restore();

  //Make Min hand
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.strokeStyle = '#800000';
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(-25, 0);
  ctx.lineTo(110, 0);
  ctx.stroke();
  ctx.restore();

  //   Make Second Hand
  ctx.save();
  ctx.rotate((Math.PI / 30) * sec);
  ctx.strokeStyle = '#ff7f50';
  ctx.lineWidth = 5;
  ctx.fillStyle = '#ff7f50';
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  ctx.restore(); // Restore the default state

  requestAnimationFrame(clock);
}

requestAnimationFrame(clock);
