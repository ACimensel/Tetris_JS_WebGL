/*******************************************************************************
 NAME			Artun Cimensel
 SFU ID		301146902

 Graphics - Assignment 1
 ******************************************************************************/

const tetrominoesObj = {
  O: {
    type: 'O', center: [1, 1],
    Xs: [0, 0, 1, 1],
    Ys: [0, 1, 0, 1],
    color: null,
  },
  I: {
    type: 'I', center: [2, 0],
    Xs: [0, 1, 3, 2],
    Ys: [0, 0, 0, 0],
    color: null,
  },
  S: {
    type: 'S', center: [1, 1],
    Xs: [0, 1, 2, 1],
    Ys: [0, 0, 1, 1],
    color: null,
  },
  Z: {
    type: 'Z', center: [1, 1],
    Xs: [0, 1, 2, 1],
    Ys: [1, 0, 0, 1],
    color: null,
  },
  L: {
    type: 'L', center: [1, 1],
    Xs: [0, 0, 2, 1],
    Ys: [0, 1, 1, 1],
    color: null,
  },
  J: {
    type: 'J', center: [1, 1],
    Xs: [0, 2, 2, 1],
    Ys: [1, 1, 0, 1],
    color: null,
  },
  T: {
    type: 'T', center: [1, 1],
    Xs: [0, 1, 2, 1],
    Ys: [1, 0, 1, 1],
    color: null,
  },
};

const colorsObj = {
  red: [1, 0, 0, 1],
  green: [0, 1, 0, 1],
  blue: [0, 0, 1, 1],
  yellow: [1, 1, 0, 1],
  cyan: [0, 1, 1, 1],
  magenta: [1, 0, 1, 1],
  orange: [1, 0.5, 0, 1],
};

const positionsGrid = [
  0.0, 0.0, 0.0, 20.0, 1.0, 0.0, 1.0, 20.0, 2.0, 0.0, 2.0, 20.0,
  3.0, 0.0, 3.0, 20.0, 4.0, 0.0, 4.0, 20.0, 5.0, 0.0, 5.0, 20.0,
  6.0, 0.0, 6.0, 20.0, 7.0, 0.0, 7.0, 20.0, 8.0, 0.0, 8.0, 20.0,
  9.0, 0.0, 9.0, 20.0, 10.0, 0.0, 10.0, 20.0,
  0.0, 0.0, 10.0, 0.0, 0.0, 1.0, 10.0, 1.0, 0.0, 2.0, 10.0, 2.0,
  0.0, 3.0, 10.0, 3.0, 0.0, 4.0, 10.0, 4.0, 0.0, 5.0, 10.0, 5.0,
  0.0, 6.0, 10.0, 6.0, 0.0, 7.0, 10.0, 7.0, 0.0, 8.0, 10.0, 8.0,
  0.0, 9.0, 10.0, 9.0, 0.0, 10.0, 10.0, 10.0, 0.0, 11.0, 10.0, 11.0,
  0.0, 12.0, 10.0, 12.0, 0.0, 13.0, 10.0, 13.0, 0.0, 14.0, 10.0, 14.0,
  0.0, 15.0, 10.0, 15.0, 0.0, 16.0, 10.0, 16.0, 0.0, 17.0, 10.0, 17.0,
  0.0, 18.0, 10.0, 18.0, 0.0, 19.0, 10.0, 19.0, 0.0, 20.0, 10.0, 20.0,
];

const colorsGrid = [
  0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0,
  0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0,
  0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0,
  0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0,
  0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0,
  0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0,
  0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0,
  0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0,
  0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0,
  0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0,
  0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0,
];

positionsBuffer = [];
colorsBuffer = [];

activeTetromino = null;
flattened1DBoard = new Array(200);


function getRandTetromino() {
  var tetromino = Object.values(tetrominoesObj)[randomIntRange(Object.keys(tetrominoesObj).length)];
  if (randomIntRange(2) == 1) { rotateCtrClk(tetromino); }

  tBounds = getTetrominoBounds(tetromino);
  var xLoc = randomIntMinMax(0 + tetromino.center[0] - tBounds.xMin, 9 + tetromino.center[0] - tBounds.xMax);
  var yLoc = 19 - (tBounds.yMax - tetromino.center[1]);
  var xDelta = xLoc - tetromino.center[0];
  var yDelta = yLoc - tetromino.center[1];

  tetromino.center[0] += xDelta;
  tetromino.center[1] += yDelta;
  for (i = 0; i < tetromino.Xs.length; i++) {
    tetromino.Xs[i] += xDelta;
    tetromino.Ys[i] += yDelta;
  }

  return tetromino;
}


function getRandColor() {
  return Object.values(colorsObj)[randomIntRange(Object.keys(colorsObj).length)];
}


function createTetromino() {
  var tetromino = getRandTetromino();
  tetromino.color = getRandColor();

  return tetromino;
}


function getTetrominoBounds(tetromino) {
  return {
    xMin: Math.min.apply(Math, tetromino.Xs),
    xMax: Math.max.apply(Math, tetromino.Xs),
    yMin: Math.min.apply(Math, tetromino.Ys),
    yMax: Math.max.apply(Math, tetromino.Ys),
  }
}


function indexToBuffer(x, y, color) {
  const scaleDown = 0.025;

  positionsBuffer = positionsBuffer.concat([
    x + scaleDown, y + scaleDown,
    x + scaleDown, y + 1 - scaleDown,
    x + 1 - scaleDown, y + scaleDown,
    x + 1 - scaleDown, y + 1 - scaleDown,
  ]);

  colorsBuffer = colorsBuffer.concat(color, color, color, color);
}


function tetrominoToBuffer(tetromino) {
  const scaleDown = 0.025;
  var positions = [];
  var colors = [];

  for (i = 0; i < tetromino.Xs.length; i++) {
    var x = tetromino.Xs[i];
    var y = tetromino.Ys[i];
    var color = tetromino.color;

    positions = positions.concat([
      x + scaleDown, y + scaleDown,
      x + scaleDown, y + 1 - scaleDown,
      x + 1 - scaleDown, y + scaleDown,
      x + 1 - scaleDown, y + 1 - scaleDown,
    ]);

    colors = colors.concat(color, color, color, color);
  }

  positionsBuffer = positionsBuffer.concat(positions);
  colorsBuffer = colorsBuffer.concat(colors);
}


function checkIfValidMove(tetromino) {
  tBounds = getTetrominoBounds(tetromino);

  if (tBounds.xMin < 0 || tBounds.xMax > 9 || tBounds.yMin < 0 || tBounds.yMax > 19) { return false; }

  for (i = 0; i < tetromino.Xs.length; i++) {
    let x = tetromino.Xs[i];
    let y = tetromino.Ys[i];
    if (flattened1DBoard[y * 10 + x] != null) { return false; }
  }

  return true;
}


function rotateCtrClk(tetromino) {

  if (tetromino.type == 'O') { return; }

  xc = tetromino.Xs[3];
  yc = tetromino.Ys[3];

  for (i = 0; i < 3; i++) {

    if (tetromino.Xs[i] - xc == -1 && tetromino.Ys[i] - yc == 0) {
      tetromino.Xs[i] += 1;
      tetromino.Ys[i] -= 1;
    }
    else if (tetromino.Xs[i] - xc == 0 && tetromino.Ys[i] - yc == -1) {
      tetromino.Xs[i] += 1;
      tetromino.Ys[i] += 1;
    }
    else if (tetromino.Xs[i] - xc == 1 && tetromino.Ys[i] - yc == 0) {
      tetromino.Xs[i] -= 1;
      tetromino.Ys[i] += 1;
    }
    else if (tetromino.Xs[i] - xc == 0 && tetromino.Ys[i] - yc == 1) {
      tetromino.Xs[i] -= 1;
      tetromino.Ys[i] -= 1;
    }
    else if (tetromino.Xs[i] - xc == -1 && tetromino.Ys[i] - yc == 1) {
      tetromino.Ys[i] -= 2;
    }
    else if (tetromino.Xs[i] - xc == -1 && tetromino.Ys[i] - yc == -1) {
      tetromino.Xs[i] += 2;
    }
    else if (tetromino.Xs[i] - xc == 1 && tetromino.Ys[i] - yc == -1) {
      tetromino.Ys[i] += 2;
    }
    else if (tetromino.Xs[i] - xc == 1 && tetromino.Ys[i] - yc == 1) {
      tetromino.Xs[i] -= 2;
    }
    else if (tetromino.Xs[i] - xc == -2 && tetromino.Ys[i] - yc == 0) {
      tetromino.Xs[i] += 2;
      tetromino.Ys[i] -= 2;
    }
    else if (tetromino.Xs[i] - xc == 0 && tetromino.Ys[i] - yc == -2) {
      tetromino.Xs[i] += 2;
      tetromino.Ys[i] += 2;
    }
    else if (tetromino.Xs[i] - xc == 2 && tetromino.Ys[i] - yc == 0) {
      tetromino.Xs[i] -= 2;
      tetromino.Ys[i] += 2;
    }
    else if (tetromino.Xs[i] - xc == 0 && tetromino.Ys[i] - yc == 2) {
      tetromino.Xs[i] -= 2;
      tetromino.Ys[i] -= 2;
    }
  }
}


function moveTetrominoDown(tetromino) {
  tetromino.center[1] -= 1;
  for (i = 0; i < tetromino.Ys.length; i++) {
    tetromino.Ys[i] -= 1;
  }
}


function clearFullRow(y) {
  if (y < 0 || y > 19) { return; }

  var pre = flattened1DBoard.slice(0, y * 10);
  var post = flattened1DBoard.slice((y + 1) * 10, 200);
  flattened1DBoard = [].concat(pre, post);
  flattened1DBoard.length = 200;
}


function checkIfBoardFull() {
  for (y = 0; y < 20; y++) {
    let rowFull = true;
    for (x = 0; x < 10; x++) {
      if (flattened1DBoard[y * 10 + x] == null) { 
        rowFull = false;
        break;
      }
    }
    if (rowFull) { clearFullRow(y--); }
  }
}


const updateTimeMs = 10;
const updatesToWait = 50;
var updateCount = 0;
var playGame = true;

function update() {
  if (playGame) {
    positionsBuffer = [].concat(positionsGrid);
    colorsBuffer = [].concat(colorsGrid);

    if (updateCount % updatesToWait == 0) {
      if (activeTetromino == null) {
        activeTetromino = createTetromino();

        if (checkIfValidMove(activeTetromino) == false) {
          playGame = false;
          alert("Game over!");
        }
      }
      else {
        var temp = JSON.parse(JSON.stringify(activeTetromino));
        moveTetrominoDown(temp);

        if (checkIfValidMove(temp) == false) {
          for (i = 0; i < activeTetromino.Xs.length; i++) {
            let x = activeTetromino.Xs[i];
            let y = activeTetromino.Ys[i];
            flattened1DBoard[y * 10 + x] = activeTetromino.color;
          }
          activeTetromino = null;
          checkIfBoardFull();
        }
        else {
          activeTetromino = temp;
        }
      }
      updateCount = (updateCount + 1) % updatesToWait;
    }
    else { updateCount++; }

    if (activeTetromino != null) { tetrominoToBuffer(activeTetromino); }

    for (i = 0; i < flattened1DBoard.length; i++) {
      if (flattened1DBoard[i] != null) {
        indexToBuffer(i % 10, ~~(i / 10), flattened1DBoard[i]);
      }
    }

    main();
  }
}


function main() {
  const canvas = document.querySelector('#glcanvas');
  const gl = canvas.getContext('webgl');

  // If we don't have a GL context, give up now
  if (!gl) {
    clearInterval(timedUpdate);
    alert('Unable to initialize WebGL. Your browser or machine may not support it.');
    return;
  }

  // Initialize a shader program; this is where all the lighting
  // for the vertices and so forth is established.
  const shaderProgram = initShaderProgram(gl);

  // Collect all the info needed to use the shader program.
  // Look up which attributes our shader program is using
  // for aVertexPosition, aVevrtexColor and also
  // look up uniform locations.
  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
    },
  };

  // Here's where we call the routine that builds all the
  // objects we'll be drawing.
  const buffers = initBuffers(gl);

  drawScene(gl, programInfo, buffers);
}

//
// initBuffers
//
// Initialize the buffers we'll need. For this demo, we just
// have one object -- a simple two-dimensional square.
//
function initBuffers(gl) {
  // Create a buffer for the square's positions.
  const positionBuffer = gl.createBuffer();
  // Select the positionBuffer as the one to apply buffer
  // operations to from here out.
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  // Now pass the list of positions into WebGL to build the
  // shape. We do this by creating a Float32Array from the
  // JavaScript array, then use it to fill the current buffer.
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positionsBuffer), gl.STATIC_DRAW);

  const colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorsBuffer), gl.STATIC_DRAW);

  return {
    position: positionBuffer,
    color: colorBuffer,
  };
}

//
// Draw the scene.
//
function drawScene(gl, programInfo, buffers) {
  gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
  gl.clearDepth(1.0);                 // Clear everything
  gl.enable(gl.DEPTH_TEST);           // Enable depth testing
  gl.depthFunc(gl.LEQUAL);            // Near things obscure far things

  // Clear the canvas before we start drawing on it.
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // Tell WebGL to use our program when drawing
  gl.useProgram(programInfo.program);

  // Create a perspective matrix, a special matrix that is
  // used to simulate the distortion of perspective in a camera.
  // Our field of view is 45 degrees, with a width/height
  // ratio that matches the display size of the canvas
  // and we only want to see objects between 0.1 units
  // and 100 units away from the camera.
  const fieldOfView = 45 * Math.PI / 180;   // in radians
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 0.1;
  const zFar = 100.0;
  const projectionMatrix = mat4.create();

  // note: glmatrix.js always has the first argument
  // as the destination to receive the result.
  mat4.perspective(projectionMatrix,
    fieldOfView,
    aspect,
    zNear,
    zFar);

  // Set the drawing position to the "identity" point, which is
  // the center of the scene.
  const modelViewMatrix = mat4.create();

  // Now move the drawing position a bit to where we want to
  // start drawing the square.
  mat4.translate(modelViewMatrix,     // destination matrix
    modelViewMatrix,     // matrix to translate
    // [-5.5, -10.5, -26.0]);  // amount to translate
    [-5.0, -10.0, -26.0]);  // amount to translate

  // Set the shader uniforms
  gl.uniformMatrix4fv(
    programInfo.uniformLocations.projectionMatrix,
    false,
    projectionMatrix);
  gl.uniformMatrix4fv(
    programInfo.uniformLocations.modelViewMatrix,
    false,
    modelViewMatrix);

  // Tell WebGL how to pull out the positions from the position
  // buffer into the vertexPosition attribute
  {
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition); // Turn attribute on
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position); // Bind the position buffer.

    // Tell the attribute how to get data out of buffers.position (ARRAY_BUFFER)
    const numComponents = 2;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;

    // gl.vertexAttribPointer binds the current ARRAY_BUFFER to the attribute. 
    // We're free to bind something else to the ARRAY_BUFFER bind point. 
    // The attribute will continue to use positionBuffer
    gl.vertexAttribPointer(
      programInfo.attribLocations.vertexPosition,
      numComponents,
      type,
      normalize,
      stride,
      offset);
  }

  // Tell WebGL how to pull out the colors from the color buffer
  // into the vertexColor attribute.
  {
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexColor);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
    const numComponents = 4;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.vertexAttribPointer(
      programInfo.attribLocations.vertexColor,
      numComponents,
      type,
      normalize,
      stride,
      offset);
  }

  for (i = 0; i < 64;) {
    gl.drawArrays(gl.LINES, i, 2);
    i += 2;
  }

  for (let offset = 64, vertexCount = 4; offset < positionsBuffer.length; offset += vertexCount) {
    gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
  }
}

//
// creates a shader of the given type, uploads the source and
// compiles it.
//
function createShader(gl, type, source) {
  const shader = gl.createShader(type);

  // Send the source to the shader object
  gl.shaderSource(shader, source);

  // Compile the shader program
  gl.compileShader(shader);

  // See if it compiled successfully
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

//
// Initialize a shader program, so WebGL knows how to draw our data; 
// this is where all the lighting
// for the vertices and so forth is established.
//
function initShaderProgram(gl) {
  // Vertex shader program GLSL code
  const vsSource = `
  attribute vec4 aGVertexPosition;
  attribute vec4 aGVertexColor;
  attribute vec4 aVertexPosition;
  attribute vec4 aVertexColor;

  uniform mat4 uModelViewMatrix;
  uniform mat4 uProjectionMatrix;

  varying lowp vec4 vColor;

  void main(void) {
  gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
  vColor = aVertexColor;
  }
  `;

  // Fragment shader program
  const fsSource = `
  varying lowp vec4 vColor;

  void main(void) {
  gl_FragColor = vColor;
  }
  `;

  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);

  // Create the shader program
  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  // If creating the shader program failed, alert
  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
    return null;
  }

  return shaderProgram;
}

// Returns a random integer from 0 to range-1.
function randomIntRange(range) {
  return Math.floor(Math.random() * range);
}

// Returns a random integer from min to max inclusive.
function randomIntMinMax(min, max) {
  range = max - min + 1;
  return Math.floor(Math.random() * range) + min;
}

function resetGame() {
  positionsBuffer = [];
  colorsBuffer = [];
  activeTetromino = null;
  flattened1DBoard = new Array(200);
  frameCount = 0;
  playGame = true;
}

keyEventListener();
update();
timedUpdate = setInterval(update, updateTimeMs);