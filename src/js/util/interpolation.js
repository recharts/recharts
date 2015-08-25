'use strict';

import Tool from './tool';

export default {
  /**
   * 获取折线类型的曲线路径
   * @param  {Array} points 节点
   * @return {String} 曲线路径
   */
  linear (points) {
    let self = this,
        group = this.getGroup(points),
        path = '';

    group.forEach((entry) => {
      path += self.linearSingle(entry);
    });

    return path;
  },
  /**
   * 获取没有断点的一段曲线的路径
   * @param  {Array} points 节点
   * @return {String} 曲线路径
   */
  linearSingle (points) {
    let path;

    points.forEach((entry, i) => {
      if (i) {
        path += 'L' + points[i].x + ',' + points[i].y;
      } else {
        path = 'M' + points[i].x + ',' + points[i].y;
      }
    });

    return path;
  },
  /**
   * 获取节点居中的阶梯曲线的路径
   * @param  {Array} points 节点
   * @return {String} 曲线路径
   */
  stepMiddle (points) {
    let self = this,
        group = this.getGroup(points),
        path = '';

    group.forEach((entry) => {
      path += self.stepMiddleSingle(entry);
    });

    return path;
  },
  /**
   * 获取没有断点的一段曲线的路径
   * @param  {Array} points 节点
   * @return {String} 曲线路径
   */
  stepMiddleSingle (points) {
    let path;

    points.forEach((entry, i) => {
      if (i) {
        path += 'H' + ((points[i - 1].x + points[i].x) / 2) + 'V' + points[i].y + 'H' + points[i].y;
      } else {
        path = 'M' + points[i].x + ',' + points[i].y;
      }
    });

    return path;
  },
  /**
   * 获取节点靠前的阶梯曲线的路径
   * @param  {Array} points 节点
   * @return {String} 曲线路径
   */
  stepBefore (points) {
    let self = this,
        group = this.getGroup(points),
        path = '';

    group.forEach((entry) => {
      path += self.stepBeforeSingle(entry);
    });

    return path;
  },
  /**
   * 获取没有断点的一段曲线的路径
   * @param  {Array} points 节点
   * @return {String} 曲线路径
   */
  stepBeforeSingle (points) {
    let path;

    points.forEach((entry, i) => {
      if (i) {
        path += 'V' + points[i].x + 'H' + points[i].y;
      } else {
        path = 'M' + points[i].x + ',' + points[i].y;
      }
    });

    return path;
  },
  /**
   * 获取节点靠前的阶梯曲线的路径
   * @param  {Array} points 节点
   * @return {String} 曲线路径
   */
  stepAfter (points) {
    let self = this,
        group = this.getGroup(points),
        path = '';

    group.forEach((entry) => {
      path += self.stepAfterSingle(entry);
    });

    return path;
  },
  /**
   * 获取没有断点的一段曲线的路径
   * @param  {Array} points 节点
   * @return {String} 曲线路径
   */
  stepAfterSingle (points) {
    let path;

    points.forEach((entry, i) => {
      if (i) {
        path += 'H' + points[i].x + 'V' + points[i].y;
      } else {
        path = 'M' + points[i].x + ',' + points[i].y;
      }
    });

    return path;
  },
  /**
   * 获取光滑曲线的路径
   * @param  {Array} points 节点
   * @return {String} 曲线路径
   */
  smooth (points) {
    let self = this,
        group = this.getGroup(points),
        path = '';

    group.forEach((entry) => {
      path += self.smoothSingle(entry);
    });

    return path;
  },
  /**
   * 获取没有断点的一段曲线的路径
   * @param  {Array} points 节点
   * @return {String} 曲线路径
   */
  smoothSingle (points) {
    return points.length < 3
        ? this.linearSingle(points)
        : this.hermite(points, this.monotoneTangents(points));
  },
  /**
   * 获取曲线的一些分段的节点
   * @param  {[type]} points [description]
   * @return {[type]}        [description]
   */
  getGroup (points) {
    let group = [],
        j = 0;

    points.forEach((entry, i) => {
      if (!Tool.isNumber(points[i].x) || !Tool.isNumber(points[i].y)) {
        // 至少有一个点
        if (i > j) {
          group.push(points.slice(j, i));
        }

        j = i + 1;
      }
    });

    if (j < points.length) {
      group.push(points.slice(j));
    }

    return group;
  },
  /**
   * 获取hermite路径
   * @param  {Array} points   节点
   * @param  {Array} tangents 斜率
   * @return {String} 曲线路径
   */
  hermite (points, tangents) {
    if (tangents.length < 1 ||
        (points.length !== tangents.length &&
          points.length !== tangents.length + 2)) {
      return this.linearSingle(points);
    }

    //if tangents.length >= 1 && (points.length == tangents.length || points.length == tangents.length + 2)  ,then go on
    let quad = points.length !== tangents.length
      , p0 = points[0]
      , p = points[1]
      , t0 = tangents[0]
      , t = t0
      , pi = 1
      , path = '';

    path += 'M' + p0.x + ',' + p0.y;

    if (quad) {
      path += 'Q' + (p.x - t0.x * 2 / 3) + ',' +
              (p.y - t0.y * 2 / 3) + ',' + p.x + ',' + p.y;

      p0 = points[1];
      pi = 2;
    }

    if (tangents.length > 1) {
      t = tangents[1];
      p = points[pi];
      pi++;
      path += 'C' + (p0.x + t0.x) + ',' + (p0.y + t0.y)
            + ',' + (p.x - t.x) + ',' + (p.y - t.y)
            + ',' + p.x + ',' + p.y;

      for (let i = 2, len = tangents.length; i < len; i++, pi++) {
        p = points[pi];
        t = tangents[i];
        path += 'S' + (p.x - t.x) + ',' + (p.y - t.y)
              + ',' + p.x + ',' + p.y;
      }
    }

    if (quad) {
      let lp = points[pi];
      path += 'Q' + (p.x + t.x * 2 / 3) + ',' + (p.y + t.y * 2 / 3)
          + ',' + lp.x + ',' + lp.y;
    }

    return path;
  },
  /**
   * 计算两点之间的斜率
   * @param  {Array} p0 起点
   * @param  {Array} p1 终点
   * @return {Number} 斜率
   */
  slope (p0, p1) {
    return (p1.y - p0.y) / (p1.x - p0.x);
  },
  // Compute three-point differences for the given points.
  // http://en.wikipedia.org/wiki/Cubic_Hermite_spline#Finite_difference
  /**
   * 计算有限查分
   * @param  {Array} points 节点
   * @return {Number}
   */
  finiteDifferences (points) {
    let m = [];

    m[0] = this.slope(points[0], points[1]);

    for (let i = 1, len = points.length - 1; i < len; i++) {
      m[i] = m[i - 1] + this.slope(points[i], points[i + 1]);
      m[i] /= 2;
    }

    m[points.length] = m[points.length - 1];

    return m;
  },
  // Interpolates the given points using Fritsch-Carlson Monotone cubic Hermite
  // interpolation. Returns an array of tangent vectors. For details, see
  // http://en.wikipedia.org/wiki/Monotone_cubic_interpolation
  /**
   * 计算斜率
   * @param  {Array} points 节点
   * @return {Array}
   */
  monotoneTangents (points) {
    let tangents = [],
        m = this.finiteDifferences(points),
        eps = 1e-6;

    // The first two steps are done by computing finite-differences:
    // 1. Compute the slopes of the secant lines between successive points.
    // 2. Initialize the tangents at every point as the average of the secants.

    // Then, for each segment…
    let delta, alpha, beta, square;

    for (let i = 0, len = points.length; i < len - 1; i++) {
      delta = this.slope(points[i], points[i + 1]);
      // 3. If two successive yk = y{k + 1} are equal (i.e., d is zero), then set
      // mk = m{k + 1} = 0 as the spline connecting these points must be flat to
      // preserve monotonicity. Ignore step 4 and 5 for those k.
      if (Math.abs(delta) < eps) {
        m[i] = m[i + 1] = 0;
      } else {
        // 4. Let ak = mk / dk and bk = m{k + 1} / dk.
        alpha = m[i] / delta;
        beta = m[i + 1] / delta;
        // 5. Prevent overshoot and ensure monotonicity by restricting the
        // magnitude of vector <ak, bk> to a circle of radius 3.
        square = alpha * alpha + beta * beta;

        if (square > 9) {
          square = delta * 3 / Math.sqrt(square);
          m[i] = square * alpha;
          m[i + 1] = square * beta;
        }
      }
    }

    let temp;
    for (let i = 0, len = points.length; i < len; i++) {
      if (i >= 1 && i <= len - 2) {
        temp = points[i + 1].x - points[i - 1].x;
      } else if (i < 1) {
        temp = points[1].x - points[0].x;
      } else {
        temp = points[len - 1].x - points[len - 2].x;
      }

      temp /= (6 * (1 + m[i] * m[i]));

      tangents.push({
        x: temp || 0,
        y: m[i] * temp || 0
      });
    }

    return tangents;
  }
};
