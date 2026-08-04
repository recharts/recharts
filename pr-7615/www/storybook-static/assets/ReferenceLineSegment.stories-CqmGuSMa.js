import{R as e}from"./iframe-BpT5bjyP.js";import{R as i}from"./zIndexSlice-6ZjUmd8N.js";import{C as a}from"./ComposedChart-VG8L4Dm0.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-B1jIu4dz.js";import{X as s}from"./XAxis-D1H3iiMu.js";import{Y as c}from"./YAxis-Bw_20RiP.js";import{L as d}from"./Line-DAOOXY1c.js";import{R as g}from"./ReferenceLine-ChoZovp-.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DrtrRvnQ.js";import"./index-D8dxtA6W.js";import"./index-BdWqmQ-h.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DDabcDAr.js";import"./isWellBehavedNumber-C47drcC6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CU2X_CAJ.js";import"./index-DEeMmmG_.js";import"./index-rBmp_rAe.js";import"./renderedTicksSlice-DruWQWhq.js";import"./axisSelectors-DSgRntKH.js";import"./d3-scale-CxG8NgTa.js";import"./CartesianChart-BHxGC6l9.js";import"./chartDataContext-vyuuOWQ4.js";import"./CategoricalChart-B5HQoLMh.js";import"./CartesianAxis-3XWkAM0R.js";import"./Layer-JsFzk0bC.js";import"./Text-HFJbCo1I.js";import"./DOMUtils-DLC4sCDo.js";import"./Label-BW7muwsN.js";import"./ZIndexLayer-BeMfDg3A.js";import"./types-TjqF4iRF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BtlbTq9b.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BfRxDj3b.js";import"./step-BYJgq2pg.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CJc5QMM0.js";import"./useAnimationId-C2b5i1-K.js";import"./ActivePoints-C2xP28N-.js";import"./Dot-C23HV8Lj.js";import"./RegisterGraphicalItemId-rnVsHys1.js";import"./ErrorBarContext-DwESbJwv.js";import"./GraphicalItemClipPath-B_g_u1qL.js";import"./SetGraphicalItem-Bi4oedQq.js";import"./graphicalItemIdentity-N_badT-U.js";import"./ActiveShapeUtils-BtBl96a6.js";import"./CartesianScaleHelper-C9Oze4oB.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
