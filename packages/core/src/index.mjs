import { Attributes } from './attributes.mjs'
import { Design } from './design.mjs'
import { Pattern } from './pattern.mjs'
import { Point } from './point.mjs'
import { Path } from './path.mjs'
import { Snippet } from './snippet.mjs'
import {
  isCoord,
  capitalize,
  beamsIntersect,
  linesIntersect,
  pointOnBeam,
  pointOnLine,
  pointOnCurve,
  splitCurve,
  beamIntersectsX,
  beamIntersectsY,
  units,
  lineIntersectsCurve,
  curveIntersectsX,
  curveIntersectsY,
  curvesIntersect,
  circlesIntersect,
  beamIntersectsCircle,
  lineIntersectsCircle,
  curveEdge,
  stretchToScale,
  round,
  sampleStyle,
  deg2rad,
  rad2deg,
  pctBasedOn,
  Bezier,
  generatePartTransform,
  macroName,
} from "./utils.mjs"
import { version } from '../package.json' assert { type: 'json' }

// Named exports
export {
  Attributes,
  Design,
  Pattern,
  Point,
  Path,
  Snippet,

  Bezier,
  version,
  capitalize,
  beamsIntersect,
  linesIntersect,
  pointOnBeam,
  pointOnLine,
  pointOnCurve,
  splitCurve,
  beamIntersectsX,
  beamIntersectsY,
  units,
  lineIntersectsCurve,
  curveIntersectsX,
  curveIntersectsY,
  curvesIntersect,
  circlesIntersect,
  beamIntersectsCircle,
  lineIntersectsCircle,
  curveEdge,
  stretchToScale,
  round,
  sampleStyle,
  deg2rad,
  rad2deg,
  pctBasedOn,
  generatePartTransform,
  macroName,
  isCoord
}

