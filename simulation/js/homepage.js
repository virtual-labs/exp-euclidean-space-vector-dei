
// Your existing canvas setup and drawing logic remains untouched
// We'll extend it with a proper "addition" functionality for page2

window.onload = function () {
  const spacing = 12;
const canvasSize = 250;
const origin = {
  // Shift left: Instead of centering at 10 * spacing = 120, move it to 7 * spacing = 84
  x: 5 * spacing, // less space on left (Quadrants II & III), more on right (I & IV)
  y: Math.floor(canvasSize / 2 / spacing) * spacing
};

  const canvasIds = [
    'planeCanvas',
    'gridCanvas',
    'vectorCanvas',
    'graphcanvas',
    'my-canvas',
    'grphcanvas',
    'grphcnvs'
  ];

  const canvases = {};
  canvasIds.forEach(id => {
    const canvas = document.getElementById(id);
    if (canvas) {
      canvas.width = canvas.height = canvasSize;
      canvases[id] = {
        canvas,
        ctx: canvas.getContext('2d')
      };
    }
  });

  const coordText = document.getElementById('printpoint1cords');

 const drawGrid = (ctx, drawLabels = false) => {
  ctx.clearRect(0, 0, canvasSize, canvasSize);
  ctx.beginPath();

  // Draw grid lines
  for (let i = 0; i <= canvasSize; i += spacing) {
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvasSize);
    ctx.moveTo(0, i);
    ctx.lineTo(canvasSize, i);
  }
  ctx.strokeStyle = '#ccc';
  ctx.stroke();

  if (drawLabels) {
    ctx.fillStyle = 'black';
    ctx.font = '10px Arial';

    // Draw X-axis labels
    for (let i = 0; i <= canvasSize; i += spacing) {
      const xVal = ((i - origin.x) / spacing);
      if (Math.abs(xVal) < 0.01) continue; // skip origin label

      ctx.beginPath();
      ctx.moveTo(i, origin.y - 3);
      ctx.lineTo(i, origin.y + 3);
      ctx.strokeStyle = '#000';
      ctx.font = '9px';
      ctx.stroke();

      ctx.fillText(xVal.toFixed(0), i - 6, origin.y + 14);
    }

    // Draw Y-axis labels
    for (let i = 0; i <= canvasSize; i += spacing) {
      const yVal = ((origin.y - i) / spacing);
      if (Math.abs(yVal) < 0.01) continue; // skip origin label

      ctx.beginPath();
      ctx.moveTo(origin.x - 3, i);
      ctx.lineTo(origin.x + 3, i);
      ctx.strokeStyle = '#000';
       ctx.font = '9px';
      ctx.stroke();

      ctx.fillText(yVal.toFixed(0), origin.x + 5, i + 3);
    }
  }
};



  const drawAxes = (ctx) => {
    ctx.beginPath();
    ctx.moveTo(origin.x, 0);
    ctx.lineTo(origin.x, canvasSize);
    ctx.moveTo(0, origin.y);
    ctx.lineTo(canvasSize, origin.y);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1;
    ctx.stroke();
  };

  const drawPoint = (ctx, x, y, color = 'green') => {
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  };

  const drawVector = (ctx, x, y, color = 'black') => {
    ctx.beginPath();
    ctx.moveTo(origin.x, origin.y);
    ctx.lineTo(x, y);
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.3;
    ctx.stroke();

    const angle = Math.atan2(y - origin.y, x - origin.x);
    const headLength = 10;
    const arrowX1 = x - headLength * Math.cos(angle - Math.PI / 6);
    const arrowY1 = y - headLength * Math.sin(angle - Math.PI / 6);
    const arrowX2 = x - headLength * Math.cos(angle + Math.PI / 6);
    const arrowY2 = y - headLength * Math.sin(angle + Math.PI / 6);

    ctx.beginPath();
    ctx.moveTo(arrowX1, arrowY1);
    ctx.lineTo(x, y);
    ctx.lineTo(arrowX2, arrowY2);
    ctx.stroke();

    drawPoint(ctx, x, y, 'green');
  };

  const labelOrigin = (ctx) => {
    ctx.fillStyle = 'black';
    ctx.font = 'bold 9px Arial';
    ctx.fillText("(0, 0)", origin.x - 25, origin.y - 5);
  };

  const drawAllGrids = () => {
    for (const id in canvases) {
      const ctx = canvases[id].ctx;
      const isLabelCanvas = ['gridCanvas', 'vectorCanvas','graphcanvas', 'my-canvas', 'grphcanvas', 'grphcnvs'].includes(id);
      drawGrid(ctx, isLabelCanvas);
      if (id !== 'planeCanvas') drawAxes(ctx);
    }
  };

  // Interactive click for Step 1, 2, 3
  if (canvases['planeCanvas']) {
    canvases['planeCanvas'].canvas.addEventListener('click', (e) => {
      const rect = canvases['planeCanvas'].canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      drawAllGrids();
      drawPoint(canvases['planeCanvas'].ctx, x, y);
      if (canvases['gridCanvas']) {
  drawPoint(canvases['gridCanvas'].ctx, x, y);
  drawPoint(canvases['gridCanvas'].ctx, origin.x, origin.y, 'blue'); // dot at origin
  labelOrigin(canvases['gridCanvas'].ctx);
}

if (canvases['vectorCanvas']) {
  drawVector(canvases['vectorCanvas'].ctx, x, y);
  drawPoint(canvases['vectorCanvas'].ctx, origin.x, origin.y, 'blue'); // dot at origin
  labelOrigin(canvases['vectorCanvas'].ctx);
}


      const xCoord = ((x - origin.x) / spacing).toFixed(2);
      const yCoord = ((origin.y - y) / spacing).toFixed(2);
      if (coordText) {
        coordText.innerText = `(x, y) = (${xCoord}, ${yCoord})`;
         document.getElementById('note3').innerHTML=`<u style="color:#009;"><strong style="color:#009;">NOTE:</strong></u> The line segment joining the origin(0, 0) and the point chosen in Step1, directed towards the point, is a vector at origin associated with the point.`;
  document.getElementById('note2').innerHTML=`<u style="color:#009;"><strong style="color:#009;">NOTE:</strong></u><ol><li>The values of x and y are approximate values.</li> <li>The values displayed for x & y are for the last choosen point.</li></ol>`; 
      }
    });
  }

  drawAllGrids();

  
  // ✅ ADDITION FUNCTIONALITY FOR PAGE 2
  window.addition = function () {
const aInput = document.getElementById("a_cord").value.trim();
  const bInput = document.getElementById("b_cord").value.trim();
  const cInput = document.getElementById("c_cord").value.trim();
  const dInput = document.getElementById("d_cord").value.trim();

  const displayab = document.getElementById("displayab");
  const displaycd = document.getElementById("displaycd");
  const displayabcd = document.getElementById("displayabcd");
  const p2note1 = document.getElementById("note1");
  const p2note2 = document.getElementById("note2");

  if (aInput === "" || bInput === "" || cInput === "" || dInput === "") {
    alert("Please enter all values (a, b, c, d).");
    return;
  }

  const a = Number(aInput);
  const b = Number(bInput);
  const c = Number(cInput);
  const d = Number(dInput);

  if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
    alert("Invalid input. Please enter valid numbers.");
    return;
  }

  const sumX = a + c;
  const sumY = b + d;

  if (sumX > 14 || sumX < -4 || sumY > 9 || sumY < -9) {
    alert("Invalid input! Ensure that:\n-4 ≤ a+c ≤ 14 \n-9 ≤ b+d ≤ 9");
    return;
  }

  displayab.innerHTML = `(a,b) = (${a},${b})`;
  displaycd.innerHTML = `(c,d) = (${c},${d})`;
  displayabcd.innerHTML = `S ≡ (a+c , b+d) = (${sumX}, ${sumY})`;
  
  p2note1.innerHTML = "Note: Addition performed w.r.t. the given pair of axes.";
  p2note2.innerHTML = "Note: Addition performed w.r.t. the given pair of axes.";

  const canvasA = canvases['graphcanvas']?.ctx;
  const canvasB = canvases['my-canvas']?.ctx;
  if (!canvasA || !canvasB) return;

  drawAllGrids();

  const toCanvas = (x, y) => ({
    x: origin.x + x * spacing,
    y: origin.y - y * spacing
  });

  const originPt = toCanvas(0, 0);
  const ptA = toCanvas(a, b);
  const ptB = toCanvas(c, d);
  const ptSum = toCanvas(sumX, sumY);

  // 1. Draw vector A from origin
  drawArrow(canvasB, originPt.x, originPt.y, ptA.x, ptA.y, 'Black');

  // 2. Draw vector B from origin
  drawArrow(canvasB, originPt.x, originPt.y, ptB.x, ptB.y, 'Black');

  // 3. Draw vector B again but from tip of vector A (for head-to-tail method)
  drawArrow(canvasB, ptA.x, ptA.y, ptSum.x, ptSum.y, 'Black');

  // 4. Draw resultant vector (a+c, b+d) from origin
  drawArrow(canvasB, originPt.x, originPt.y, ptSum.x, ptSum.y, 'Black');

  drawArrow(canvasB, ptB.x, ptB.y, ptSum.x, ptSum.y, 'Black');  // Optional, visual aid


  // Draw points
  drawPoint(canvasA, ptA.x, ptA.y);
  drawPoint(canvasA, ptB.x, ptB.y);
  drawPoint(canvasA, ptSum.x, ptSum.y, 'deeppink');
  drawPoint(canvasB, ptA.x, ptA.y);
  drawPoint(canvasB, ptB.x, ptB.y);
  drawPoint(canvasB, ptSum.x, ptSum.y, 'deeppink');

  labelOrigin(canvasA);
  labelOrigin(canvasB);
};


// ✅ SCALAR MULTIPLICATION FUNCTIONALITY FOR PAGE 2
 window.multiplication = function () {

  const displayal = document.getElementById("displayal");
  const displaymn = document.getElementById("displaymn");
  const displayalmn = document.getElementById("displayalmn");
  const p2note3 = document.getElementById("note3");
  const p2note4 = document.getElementById("note4");

  const alphaInput = document.getElementById("al_cord").value.trim();
  const mInput = document.getElementById("m_cord").value.trim();
  const nInput = document.getElementById("n_cord").value.trim();

  if (alphaInput === "" || mInput === "" || nInput === "") {
    alert("Please enter all values (α, m, n).");
    return;
  }
 const alpha = Number(alphaInput);
  const m = Number(mInput);
  const n = Number(nInput);

  if (isNaN(alpha) || isNaN(m) || isNaN(n)) {
    alert("Invalid input. Please enter valid numbers.");
    return;
  }
  const alphaM = alpha * m;
  const alphaN = alpha * n;

  if (alphaM > 14 || alphaM < -4 || alphaN > 9 || alphaN < -9) {
    alert("Invalid values! Ensure that -4 ≤ α*m ≤ 14 and -9 ≤ α*n ≤ 9.");
    return;
  }

  displayal.innerHTML = `α = ${alpha}`;
  displaymn.innerHTML = `P(m,n) = (${m},${n})`;
  displayalmn.innerHTML = `S ≡ α.P = (${alphaM}, ${alphaN})`;
  
  p2note3.innerHTML = "Note: Scalar Multiplication performed w.r.t. the given pair of axis.";
  p2note4.innerHTML = "Note: Scalar Multiplication performed w.r.t. the given pair of axis.";

  const ctxA = canvases['grphcanvas']?.ctx;
  const ctxB = canvases['grphcnvs']?.ctx;
  if (!ctxA || !ctxB) return;

  drawAllGrids();

  const toCanvas = (x, y) => ({
    x: origin.x + x * spacing,
    y: origin.y - y * spacing
  });

  const originPt = toCanvas(0, 0);
  const ptInput = toCanvas(m, n);
  const ptResult = toCanvas(alphaM, alphaN);

  // --- Graph 1: Location of Points ---
  drawPoint(ctxA, ptInput.x, ptInput.y, 'green');
  drawPoint(ctxA, ptResult.x, ptResult.y, 'deeppink');
  labelOrigin(ctxA);

  // --- Graph 2: Vector Representation ---
  drawArrow(ctxB, originPt.x, originPt.y, ptInput.x, ptInput.y, 'black');
  drawArrow(ctxB, originPt.x, originPt.y, ptResult.x, ptResult.y, 'deeppink');
  drawPoint(ctxB, ptInput.x, ptInput.y, 'green');
  drawPoint(ctxB, ptResult.x, ptResult.y, 'deeppink');
  labelOrigin(ctxB);
};


function drawArrow(ctx, fromX, fromY, toX, toY, color = 'black') {
  const headlen = 10;
  const angle = Math.atan2(toY - fromY, toX - fromX);

  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  ctx.stroke();

  // Draw arrowhead
  ctx.beginPath();
  ctx.moveTo(toX, toY);
  ctx.lineTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6));
  ctx.lineTo(toX - headlen * Math.cos(angle + Math.PI / 6), toY - headlen * Math.sin(angle + Math.PI / 6));
  ctx.lineTo(toX, toY);
  ctx.fillStyle = color;
  ctx.fill();
}

};

