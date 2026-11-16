import{R as t}from"./iframe-CO23d3n1.js";import{z as a}from"./RechartsWrapper-Bh8_r7fw.js";import{R as p}from"./zIndexSlice-DMSZKiVC.js";import{C as n}from"./ComposedChart-D8Yj3pPk.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-9yhlogYr.js";import{X as l}from"./XAxis-BoBOjjsH.js";import{Y as h}from"./YAxis-DVp-8yRY.js";import{L as c}from"./Legend-Beev8OHM.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-q2NyX8vA.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DJQVEMl6.js";import"./throttle-B66_T3U8.js";import"./index-BxzZTuqI.js";import"./index-Del1ANZm.js";import"./polarAxisSelectors-D8_om16C.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C9xcvLA3.js";import"./index-D4fJrATD.js";import"./index-D0uo_LWY.js";import"./renderedTicksSlice-DOtk_XFi.js";import"./index-BjQv-IHX.js";import"./fillDefinitions-B9Iskt95.js";import"./CartesianChart-BGvEgPGc.js";import"./chartDataContext-aToDcgxK.js";import"./CategoricalChart-DPCnYwF-.js";import"./Layer-CYlWB893.js";import"./Curve-4EA_oLfz.js";import"./types-BU4Ojrin.js";import"./step-C-f981dl.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BB1e2MfD.js";import"./Label-2Fni25es.js";import"./Text-DWIEtkwC.js";import"./ZIndexLayer-DcfMfyOV.js";import"./ActivePoints-DF4l2wc6.js";import"./Dot-DD8m7FDf.js";import"./activeStyles-Bl6Emzo4.js";import"./useAnimationId-DzTpCf5I.js";import"./Symbols-BjRa6Boz.js";import"./symbol-CniqeamR.js";import"./ErrorBarContext-Cmo7ZUB7.js";import"./SetGraphicalItem-CuLT1LeE.js";import"./getRadiusAndStrokeWidthFromDot-p6N7re72.js";import"./ActiveShapeUtils-B6AIFy1l.js";import"./useEffectiveDataKey-DjFvtGIK.js";import"./CartesianAxis-Dnx0rUNa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DdC3N3ay.js";import"./uniqBy-MGV_25lQ.js";import"./iteratee-BTK9QdXN.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
