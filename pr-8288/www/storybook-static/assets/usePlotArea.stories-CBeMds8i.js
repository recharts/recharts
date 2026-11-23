import{R as t}from"./iframe-Cwhg5Alw.js";import{z as a}from"./RechartsWrapper-BxNvZ3mc.js";import{R as p}from"./zIndexSlice-Fv3NhYWW.js";import{C as n}from"./ComposedChart-BUfd6mLX.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BWipIdmr.js";import{X as l}from"./XAxis-DysdhPMn.js";import{Y as h}from"./YAxis-DmjTZE4U.js";import{L as c}from"./Legend-k73pQdKN.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CkDxtqDz.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BXhIMUYz.js";import"./throttle-Du5pgiUX.js";import"./index-B9mn7cyH.js";import"./index-BEds7S3I.js";import"./polarAxisSelectors-Dj6PmZ2B.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-buNRHlZ7.js";import"./index-Ce6E5z2B.js";import"./index-Dq-nqpA7.js";import"./renderedTicksSlice-DNRadS3G.js";import"./index-DS0QJhYL.js";import"./fillDefinitions-zsPlWl9g.js";import"./CartesianChart-dk4HvrTk.js";import"./chartDataContext-plFejdmf.js";import"./CategoricalChart-DmZKpDkp.js";import"./getRadiusAndStrokeWidthFromDot-CzKUA028.js";import"./Layer-Cvk4I16t.js";import"./Curve-D9P_AzdW.js";import"./types-B4BwHuKZ.js";import"./step-BizBXnVe.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-Dl4kQBD7.js";import"./Label-DOhfAK-3.js";import"./Text-Cv-7zpF9.js";import"./ZIndexLayer-Zh5FqFCx.js";import"./ActivePoints-SiU-4rgE.js";import"./Dot-DINU8znu.js";import"./activeStyles-C2N6Ab6e.js";import"./useAnimationId-B8-WGiI8.js";import"./Symbols-C1fO_1Gx.js";import"./symbol-D2NP4cwA.js";import"./ErrorBarContext-C5GJMenk.js";import"./SetGraphicalItem-BZTwfoQJ.js";import"./ActiveShapeUtils-NTKJrLNa.js";import"./useEffectiveDataKey-EnHAhUcJ.js";import"./CartesianAxis-lC9jf5Zn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-CNLYFCV9.js";import"./uniqBy-k5K2zjYf.js";import"./iteratee-BXUvkud4.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
