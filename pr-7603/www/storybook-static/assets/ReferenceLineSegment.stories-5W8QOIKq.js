import{R as e}from"./iframe-VZ2aM8fP.js";import{R as i}from"./zIndexSlice-CQOPOcrz.js";import{C as a}from"./ComposedChart-BflrR0gu.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-B2ElzWSV.js";import{X as s}from"./XAxis-wYdPJJmK.js";import{Y as c}from"./YAxis-BnAL0SHr.js";import{L as d}from"./Line-B81037Cs.js";import{R as g}from"./ReferenceLine-BhlFR7dm.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CpHch1iP.js";import"./index-RAnsrEyk.js";import"./index-5JKLnMLz.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-_p4e6Off.js";import"./isWellBehavedNumber-B1YHMHRX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BgtBwIWT.js";import"./index-B8NmJaJc.js";import"./index-BdOpZNUA.js";import"./renderedTicksSlice-BWvg2Uuk.js";import"./axisSelectors-BuT92BdO.js";import"./d3-scale-2P7n4BrN.js";import"./CartesianChart-Bc8fypAa.js";import"./chartDataContext-Ci6amljO.js";import"./CategoricalChart-CxsxsIbU.js";import"./CartesianAxis-C1YtHz_V.js";import"./Layer-D5KpKuLh.js";import"./Text-BxYT9j-0.js";import"./DOMUtils-D8EYtam3.js";import"./Label-Bcx9yaip.js";import"./ZIndexLayer-BQK00jlT.js";import"./types-BixaCUGO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CWQxd3mi.js";import"./isBuffer-BG75eWKN.js";import"./Curve-B5MshFyr.js";import"./step-DBa2Myk3.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B1Uj1Gzk.js";import"./useAnimationId-BWSvDpI-.js";import"./ActivePoints-oAKWC-6n.js";import"./Dot-CNR-wtas.js";import"./RegisterGraphicalItemId-C7us6vqj.js";import"./ErrorBarContext-DZjmiaio.js";import"./GraphicalItemClipPath-BhbKOYCd.js";import"./SetGraphicalItem-BqP4f3rQ.js";import"./getRadiusAndStrokeWidthFromDot-D2NN5p-Y.js";import"./ActiveShapeUtils-C3jZ13_H.js";import"./CartesianScaleHelper-C9Oze4oB.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
