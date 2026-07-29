import{R as e}from"./iframe-D2OYENKH.js";import{R as i}from"./zIndexSlice-D0ZhXs4m.js";import{C as a}from"./ComposedChart-BUAOSrLk.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-COFti2ZN.js";import{X as s}from"./XAxis-Pkmtv0hr.js";import{Y as c}from"./YAxis-BOZmPEET.js";import{L as d}from"./Line-CtVgLkBu.js";import{R as g}from"./ReferenceLine-Dj-P4iXp.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bn9pRQ9R.js";import"./index-Dur45csw.js";import"./index-DuPaBThV.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-dYsmKBqC.js";import"./isWellBehavedNumber-CA6K8V7o.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BWgpx-pN.js";import"./index-JR3rJPe5.js";import"./index-CVAOKIGV.js";import"./renderedTicksSlice-CAJ7-KA1.js";import"./axisSelectors-D5cpRxU3.js";import"./d3-scale-BX-yZ5Fv.js";import"./CartesianChart-D90Zb4X0.js";import"./chartDataContext-BdJZhmRg.js";import"./CategoricalChart-UC5rHyt5.js";import"./CartesianAxis-BVkShzhs.js";import"./Layer-D9vccuwA.js";import"./Text-Dw3wOnD-.js";import"./DOMUtils-DDs_Dfl9.js";import"./Label-BhTPc9li.js";import"./ZIndexLayer-Cf4JaxIV.js";import"./types-CP4OIotA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-B2FvzarN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-2nThZew5.js";import"./step-DWDRJwlo.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DmNuH65D.js";import"./useAnimationId-INjmlW7n.js";import"./ActivePoints-BjhdQ6pz.js";import"./Dot-DT2GXuQy.js";import"./RegisterGraphicalItemId-B9FhgBpj.js";import"./ErrorBarContext-DK9yojOq.js";import"./GraphicalItemClipPath-BwblPJrN.js";import"./SetGraphicalItem-CS5ycuRe.js";import"./getRadiusAndStrokeWidthFromDot-awhZfjnX.js";import"./ActiveShapeUtils-CzcMe4-S.js";import"./CartesianScaleHelper-C9Oze4oB.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
