import{R as t}from"./iframe-CmDfCYy4.js";import{j as a}from"./RechartsWrapper-PRNOsza0.js";import{R as p}from"./zIndexSlice-Djwis5u_.js";import{C as s}from"./ComposedChart-CuqccTr3.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-B9SROX57.js";import{X as l}from"./XAxis-CeJE8CyL.js";import{Y as h}from"./YAxis-Clc76Y2_.js";import{L as c}from"./Legend-IBn7ejnb.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D0zMnbP3.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BLlvkyot.js";import"./throttle-BvVliBGf.js";import"./index-vlpbybCm.js";import"./index-DuLzr3ug.js";import"./isWellBehavedNumber-ytXpT6fS.js";import"./d3-scale-h8Nvvkc2.js";import"./index-BiD8Ib67.js";import"./index-BDVGxzhR.js";import"./renderedTicksSlice-BvQmfKO8.js";import"./index-C3AEkUmj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DQcpQ0vQ.js";import"./chartDataContext-Csr98tLV.js";import"./CategoricalChart-BVrKXV60.js";import"./Layer-2NB1aHcN.js";import"./Curve-DLCwqskO.js";import"./types-BdmWqFz5.js";import"./step-DtcV51zC.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D70_FMkE.js";import"./Label-C_EyvZ8C.js";import"./Text-FnYPD4kR.js";import"./DOMUtils-CeEb1Ieo.js";import"./useId-DdN0jYjl.js";import"./useBackwardsCompatibleTheme-D23nCtop.js";import"./ZIndexLayer-DE-382dp.js";import"./useAnimationId-CFWhy9Ri.js";import"./ActivePoints-CpKsZRdO.js";import"./Dot-Br2gUZT5.js";import"./RegisterGraphicalItemId-B3K6VYV9.js";import"./ErrorBarContext-CmqdPlQJ.js";import"./GraphicalItemClipPath-BSPzDNhY.js";import"./SetGraphicalItem-BYV2m0jb.js";import"./getRadiusAndStrokeWidthFromDot-BWI8_9l7.js";import"./ActiveShapeUtils-BDpJLacA.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-DVS9Bx8F.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BaYmyV_5.js";import"./symbol-BZq3nHsO.js";import"./useElementOffset-Deb0EMZn.js";import"./uniqBy-CuJXDrId.js";import"./iteratee-CJHJ6T1V.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["UsePlotArea"];export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
