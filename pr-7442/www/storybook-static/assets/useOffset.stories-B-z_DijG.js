import{R as t}from"./iframe-_0vvsXwQ.js";import{e as p}from"./CategoricalChart-yQk_e9Td.js";import{R as a}from"./zIndexSlice-UDOegWIl.js";import{C as s}from"./ComposedChart-C9VfnRnH.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-Cj7LWAqT.js";import{X as d}from"./XAxis-BVL11hxO.js";import{Y as h}from"./YAxis-DH6-Go25.js";import{L as g}from"./Legend-BAko8yD_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D_godwDH.js";import"./index-DjufVxMp.js";import"./index-CQeeIj4f.js";import"./index-B2rwiSR7.js";import"./index-B-MK1gV-.js";import"./immer-Crw1A_KU.js";import"./get-dROHwlCD.js";import"./renderedTicksSlice-Dyv93tW0.js";import"./axisSelectors-DOgNvw74.js";import"./d3-scale-9nut4HIz.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-Dur14Ufb.js";import"./isWellBehavedNumber-Cb6oai8T.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DuAlGfbC.js";import"./chartDataContext-ooxC0Mwi.js";import"./Layer-CbOAMwV5.js";import"./Curve-Be-qJ1Us.js";import"./types-DDFFAOTe.js";import"./step-CiU6-CNX.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-NUeY2MHF.js";import"./Label-CiJ4G9HU.js";import"./Text-DjMF9a9a.js";import"./DOMUtils-BVwvsn59.js";import"./ZIndexLayer-F6Q8sfzp.js";import"./useAnimationId-Bs-cdpiV.js";import"./ActivePoints-Bq9SVATs.js";import"./Dot-COzuztjB.js";import"./RegisterGraphicalItemId-Do80jqI9.js";import"./ErrorBarContext-CJqzxiYr.js";import"./GraphicalItemClipPath-DQak-ToR.js";import"./SetGraphicalItem-c1mokMqb.js";import"./getRadiusAndStrokeWidthFromDot-CWPNX420.js";import"./ActiveShapeUtils-CSlhsDPX.js";import"./CartesianAxis-ZzlyT-7-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-X-eMSadG.js";import"./symbol-CBGxeWEx.js";import"./useElementOffset-CShe55V9.js";import"./uniqBy-XCrF3wJ7.js";import"./iteratee-CU05RyCR.js";const ht={title:"API/hooks/useOffset",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},r={name:"useOffset",render:e=>t.createElement(a,{width:e.width,height:e.height},t.createElement(s,{data:n,margin:e.margin},t.createElement(f,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(g,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'useOffset',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
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
    }
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["UseOffset"];export{r as UseOffset,gt as __namedExportsOrder,ht as default};
