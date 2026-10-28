import{R as t}from"./iframe-D0WJBe8B.js";import{z as a}from"./RechartsWrapper-Y1sNfJdv.js";import{R as p}from"./zIndexSlice-BC6IeYNi.js";import{C as n}from"./ComposedChart-BlH1ARqS.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DbeSK1IG.js";import{X as l}from"./XAxis-BEoxl3pM.js";import{Y as h}from"./YAxis-Hb99A8N1.js";import{L as c}from"./Legend-DF1CoFP1.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Ct4EK5_T.js";import"./get-cF5BDHN6.js";import"./axisSelectors-D5taf4lI.js";import"./throttle-TSOlYDju.js";import"./index-Dp8m-Do0.js";import"./index-BtpfRbVN.js";import"./polarAxisSelectors-2QOn0rl8.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-50ivSU0v.js";import"./index-DWGmacRx.js";import"./index-B5HS6UVy.js";import"./renderedTicksSlice-DMh9haUn.js";import"./index-CMOK-p3U.js";import"./CartesianChart-Be7keNxh.js";import"./ZIndexPortal-BSZE-89G.js";import"./CategoricalChart-HCg9oVJT.js";import"./Layer-aO3gvgqI.js";import"./Curve-D1Sg03qQ.js";import"./types-CgDj6Pcv.js";import"./step-C85hYdLD.js";import"./path-DyVhHtw_.js";import"./LabelList-fY2HN2fJ.js";import"./Label-B4KodQcW.js";import"./Text-CgQ4MHqj.js";import"./pageBackground-Dio0HZ8z.js";import"./ZIndexLayer-DSGy4-C8.js";import"./ActivePoints-B12s-f_1.js";import"./Dot-B5ivztlh.js";import"./activeStyles-DLjK0T5T.js";import"./useAnimationId-C0s3vBtu.js";import"./dataEntryStyles-BPWJkcwq.js";import"./Symbols-CFkQIAvh.js";import"./symbol-Dfoy6GJs.js";import"./ErrorBarContext-CAdmSJ6x.js";import"./SetGraphicalItem-B8qCLUCf.js";import"./getRadiusAndStrokeWidthFromDot-D5udBmOW.js";import"./ActiveShapeUtils-Bceipj14.js";import"./useEffectiveDataKey-D37O0kkX.js";import"./CartesianAxis-C6mWkihq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-evYz5hyu.js";import"./uniqBy-CnYb87CD.js";import"./iteratee-ph4JQmwi.js";import"./isArguments-yB-y1yaH.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},At=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
