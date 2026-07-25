import{R as t}from"./iframe-5yXyXnaZ.js";import{u as a}from"./CategoricalChart-DQJ8zgbM.js";import{R as p}from"./zIndexSlice-BDAt33KO.js";import{C as s}from"./ComposedChart-Dwgw5DNZ.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DVLh0I7m.js";import{X as l}from"./XAxis-DBNQ58f8.js";import{Y as h}from"./YAxis-DrQXbr6a.js";import{L as c}from"./Legend-ehOQxrBj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DA6sibZ3.js";import"./index-BHMzx10I.js";import"./index-sztAkQPC.js";import"./index-Bglp-BB_.js";import"./index-B8ryNKY3.js";import"./throttle-Cv9w3d5_.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-C1OGHM2B.js";import"./axisSelectors-BXq32W01.js";import"./resolveDefaultProps-DO3cHs1F.js";import"./isWellBehavedNumber-CjXf4Ny0.js";import"./d3-scale-qreNZqM_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-9hlK9pZx.js";import"./chartDataContext-CuGicOh1.js";import"./Layer-DvsJVPiG.js";import"./Curve-BJjaxUht.js";import"./types-D9gPTTpR.js";import"./step-7JpJFPkO.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B7Ugi4uF.js";import"./Label-BYYKCmSa.js";import"./Text-CgBcsLfs.js";import"./DOMUtils-BV08T-c-.js";import"./ZIndexLayer-DtzoUjMA.js";import"./useAnimationId-C0yd1tvr.js";import"./ActivePoints-CqHCG0xk.js";import"./Dot-Dqwh_5PD.js";import"./RegisterGraphicalItemId-BWyrz_yh.js";import"./ErrorBarContext-3caAFu0Q.js";import"./GraphicalItemClipPath-C3T_bjgu.js";import"./SetGraphicalItem-ChFugbQc.js";import"./getRadiusAndStrokeWidthFromDot-CDO922ey.js";import"./ActiveShapeUtils-C8Wl3VBj.js";import"./CartesianAxis-B2yef_ws.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-CHIguC1u.js";import"./symbol-DQ9BiUzn.js";import"./useElementOffset-CD3Qxymn.js";import"./uniqBy-BUqkqiyG.js";import"./iteratee-_t3hDaip.js";const ht={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
