import{R as t}from"./iframe-D7yt-ZhS.js";import{u as a}from"./CategoricalChart-CMCxIWsh.js";import{R as p}from"./zIndexSlice-B3_xMC6k.js";import{C as s}from"./ComposedChart-Bl4WegRH.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CuD-m0Re.js";import{X as l}from"./XAxis-dYNJxVBm.js";import{Y as h}from"./YAxis-C5MIsZgm.js";import{L as c}from"./Legend-BuS0gEvx.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CArYIH40.js";import"./index-CglBtasG.js";import"./index-8zJni8A2.js";import"./index-CHXGCi4x.js";import"./index-nuP2vluJ.js";import"./immer-HxqS16dW.js";import"./get-Cebs6l6-.js";import"./renderedTicksSlice-DNerh-qI.js";import"./axisSelectors-CW8UYJLW.js";import"./d3-scale-BUBb-XjW.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-BUJk688E.js";import"./isWellBehavedNumber-NaDCVAJY.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C6SOYYpl.js";import"./chartDataContext-_IqHUZU5.js";import"./Layer-B34T8oTs.js";import"./Curve-DbP7_Dvx.js";import"./types-CuLQosun.js";import"./step-OtS6f_xO.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CUAQ84gk.js";import"./Label-C0p1CWe9.js";import"./Text-DWwT0_EQ.js";import"./DOMUtils-DoEzEhWE.js";import"./ZIndexLayer-BjlE0UF2.js";import"./useAnimationId-gSm0_FsD.js";import"./ActivePoints-KBOJcLZ_.js";import"./Dot-CAfCQdRP.js";import"./RegisterGraphicalItemId-Bj0awerq.js";import"./ErrorBarContext-BCc7VHSV.js";import"./GraphicalItemClipPath-CSwP3plz.js";import"./SetGraphicalItem-BFSgsIRt.js";import"./getRadiusAndStrokeWidthFromDot-BmHXs1fo.js";import"./ActiveShapeUtils-C4okiOLS.js";import"./CartesianAxis-CuPdOLrD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-CgBZX9Up.js";import"./symbol-DAthuMSh.js";import"./useElementOffset-DEe0y9L2.js";import"./uniqBy-C2rlrQ-8.js";import"./iteratee-DZxnX6Pq.js";const ht={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
