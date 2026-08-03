import{R as e}from"./iframe-BvoaHdmy.js";import{R as i}from"./zIndexSlice-Bsr7cBhR.js";import{C as a}from"./ComposedChart-91fEDFol.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-D6bYhLhX.js";import{X as s}from"./XAxis-CDpMlutO.js";import{Y as c}from"./YAxis-m3S-JfIe.js";import{L as d}from"./Line-DRoM9ckZ.js";import{R as g}from"./ReferenceLine-B7fPQiFk.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DQ4zUznN.js";import"./index-B_-FbWrF.js";import"./index-BIiBQ2RS.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DcaR1-NP.js";import"./isWellBehavedNumber-BXi0lz-u.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DtuASqVJ.js";import"./index-b13xllOW.js";import"./index-DeegS3pB.js";import"./renderedTicksSlice-BOmSwCSv.js";import"./axisSelectors-Choe--Hk.js";import"./d3-scale-DHqQWI-P.js";import"./CartesianChart-DoxhMpsB.js";import"./chartDataContext-ChSxK7K-.js";import"./CategoricalChart-B1Q3to5_.js";import"./CartesianAxis-BTq7uWzR.js";import"./Layer-NFFKs1EA.js";import"./Text-D4sNDUmz.js";import"./DOMUtils-DEiR2hJy.js";import"./Label-DD7tXZFM.js";import"./ZIndexLayer-BJa50qFF.js";import"./types-Df8Ct0Qg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-w6Fo4fMR.js";import"./isBuffer-BG75eWKN.js";import"./Curve-B63hJeFK.js";import"./step-8axYNU49.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-xGZjbukT.js";import"./useAnimationId-CWnbJHBU.js";import"./ActivePoints-BjVwwW5t.js";import"./Dot-BZ0HUF_R.js";import"./RegisterGraphicalItemId-pYDAMd0U.js";import"./ErrorBarContext-Dvj--byz.js";import"./GraphicalItemClipPath-CYhIxWIa.js";import"./SetGraphicalItem-CAucCLNl.js";import"./getRadiusAndStrokeWidthFromDot-C9Rzznad.js";import"./ActiveShapeUtils-DD4sF3hm.js";import"./CartesianScaleHelper-C9Oze4oB.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ce=["Segment"];export{t as Segment,ce as __namedExportsOrder,se as default};
