import{R as e}from"./iframe-CvYyRmMb.js";import{R as i}from"./zIndexSlice-Cp8J06te.js";import{C as a}from"./ComposedChart-B1VIvVBS.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CglKu9Xk.js";import{X as s}from"./XAxis-3reDaDaV.js";import{Y as c}from"./YAxis-CjttnAc1.js";import{L as d}from"./Line-Ox0BYUUe.js";import{R as g}from"./ReferenceLine-CqOQgQtm.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DxglGVhE.js";import"./index-ximmRSZs.js";import"./index-GLYrDd_3.js";import"./get-CIMqXaai.js";import"./resolveDefaultProps-VEZFy5tu.js";import"./isWellBehavedNumber-Lw6v0aAh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BcqH_-Dr.js";import"./index-D24-ZTWt.js";import"./index-BDFNdDeq.js";import"./renderedTicksSlice-BWK4MGTQ.js";import"./axisSelectors-C-wRbz-D.js";import"./d3-scale-ZyzwHhuQ.js";import"./CartesianChart-BwCKHjXt.js";import"./chartDataContext-WmbcVDkE.js";import"./CategoricalChart-BVRGiY0N.js";import"./CartesianAxis-Be4--iUh.js";import"./Layer-C5boFLOM.js";import"./Text-B2fcvIhU.js";import"./DOMUtils-Bkzksssp.js";import"./Label-CYZiU-dh.js";import"./ZIndexLayer-BRD83X3W.js";import"./types-Zq1Yq0zW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-B0ipnk9C.js";import"./step-CfQihZ4L.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C6-g87vu.js";import"./useAnimationId-BRj_sN3I.js";import"./ActivePoints-T9IVC-_m.js";import"./Dot-B1euizWe.js";import"./RegisterGraphicalItemId-wnXP5bti.js";import"./ErrorBarContext-CaDNtEdt.js";import"./GraphicalItemClipPath-b7ayD98P.js";import"./SetGraphicalItem-Bggld1CO.js";import"./getRadiusAndStrokeWidthFromDot-Dx9iWsDu.js";import"./ActiveShapeUtils-DSfdlNCJ.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ne=["Segment"];export{t as Segment,ne as __namedExportsOrder,pe as default};
