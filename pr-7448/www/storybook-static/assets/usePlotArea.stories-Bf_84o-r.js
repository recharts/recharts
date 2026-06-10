import{R as t}from"./iframe-CRd1fYKG.js";import{u as a}from"./CategoricalChart-7SQT56eo.js";import{R as p}from"./zIndexSlice-BEDqBT5s.js";import{C as s}from"./ComposedChart-CMYYvZ46.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-C_2j51dl.js";import{X as l}from"./XAxis-CFDNTKtN.js";import{Y as h}from"./YAxis-CcTJnWbU.js";import{L as c}from"./Legend-C0BtyMBO.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CTRhzR3z.js";import"./index-Co5B8-DW.js";import"./index-Dyy4uRrG.js";import"./index-Cu0dCOlk.js";import"./index-COR3Qgsn.js";import"./immer-DuXdSz_W.js";import"./get-CAg3-hN5.js";import"./renderedTicksSlice-BwoXfhkK.js";import"./axisSelectors-CW_HZ1K1.js";import"./d3-scale-Bw_PCS9h.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-C_1LRrwf.js";import"./isWellBehavedNumber-IulUlDH2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-_Ts9MuUK.js";import"./chartDataContext-24IFZ5R3.js";import"./Layer-uzXkuSL7.js";import"./Curve-CFiA9ic7.js";import"./types-fr95e_gP.js";import"./step-COdk81Z_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CGUpOpVe.js";import"./Label-GPMVhHkr.js";import"./Text-BzOWhyUQ.js";import"./DOMUtils-meWqI4ST.js";import"./ZIndexLayer-CMZSY73E.js";import"./useAnimationId-B3UhTZxg.js";import"./ActivePoints-BZ8_19th.js";import"./Dot-BUHGfLi1.js";import"./RegisterGraphicalItemId-CFlZHpEu.js";import"./ErrorBarContext-DHhZn8TN.js";import"./GraphicalItemClipPath-BHaSLCrX.js";import"./SetGraphicalItem-DVL07t4G.js";import"./getRadiusAndStrokeWidthFromDot-BjbsTAVF.js";import"./ActiveShapeUtils-DdflEQCA.js";import"./CartesianAxis-BngYAupc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BPYBvDTw.js";import"./symbol-F3eW-PP4.js";import"./useElementOffset-zRETVJYr.js";import"./uniqBy-VdDR52By.js";import"./iteratee-D7Xt4tdY.js";const ht={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ct=["UsePlotArea"];export{e as UsePlotArea,ct as __namedExportsOrder,ht as default};
