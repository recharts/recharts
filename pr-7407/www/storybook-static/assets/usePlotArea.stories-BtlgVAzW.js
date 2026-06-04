import{R as t}from"./iframe-cxp8IH44.js";import{u as a}from"./CategoricalChart-xGtZpTrE.js";import{R as p}from"./zIndexSlice-DVvPLO9J.js";import{C as s}from"./ComposedChart-1IEnSR6b.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Dugp2-IC.js";import{X as l}from"./XAxis-BkiXq_ih.js";import{Y as h}from"./YAxis-cx-UkRCp.js";import{L as c}from"./Legend-oZ1KxmzA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-9oJQLgI7.js";import"./index-CMrkNKT4.js";import"./index-BUvfJbFI.js";import"./index-CJSUwDUV.js";import"./index-B9dWKkkc.js";import"./immer-BpTgB28d.js";import"./get-nRRBkHtC.js";import"./renderedTicksSlice-BJt7M2Lj.js";import"./axisSelectors-zbfaG1VW.js";import"./d3-scale-DFFI4GOw.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-BXDigy9W.js";import"./isWellBehavedNumber-B-r9_3tz.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CmvmLWgk.js";import"./chartDataContext-BRXzicv6.js";import"./Layer-B0Ha3WJZ.js";import"./Curve-BrvgjqsR.js";import"./types-CPiShJxU.js";import"./step-D24hPJDM.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C411RvpV.js";import"./Label-C4cvj6qY.js";import"./Text-Bq45-f5m.js";import"./DOMUtils-BnT4arHk.js";import"./ZIndexLayer-jeREbB3U.js";import"./useAnimationId-B_RJXvak.js";import"./ActivePoints-B4uvin-c.js";import"./Dot-DdYUl2fA.js";import"./RegisterGraphicalItemId-BwO4qHQJ.js";import"./ErrorBarContext-DMac8CzA.js";import"./GraphicalItemClipPath-B7_MorTP.js";import"./SetGraphicalItem-DEAw5QhZ.js";import"./getRadiusAndStrokeWidthFromDot-DjjQR4pM.js";import"./ActiveShapeUtils-DV6TMhk4.js";import"./CartesianAxis-HJMOOyg_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DL674ctd.js";import"./symbol-CHf6y9zR.js";import"./useElementOffset-BnhYpe-p.js";import"./uniqBy-CsWIvFuw.js";import"./iteratee-rf_HbDXJ.js";const ht={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
