import{R as t}from"./iframe-2TbE3qYT.js";import{z as a}from"./RechartsWrapper-DSdhDIUK.js";import{R as p}from"./zIndexSlice-CDl_l-89.js";import{C as n}from"./ComposedChart-Dv9sDNdE.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-C0MGKIx5.js";import{X as l}from"./XAxis-J5474B1k.js";import{Y as h}from"./YAxis-DJiyoeoo.js";import{L as c}from"./Legend-zcd4ylac.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CmNgnsrp.js";import"./get-CjriyByo.js";import"./axisSelectors-BRsQeeHB.js";import"./throttle-AC4zKKET.js";import"./index-zPMeTUky.js";import"./index-CF9MDp9v.js";import"./polarAxisSelectors-BVGWIciz.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-gVDFTlHt.js";import"./index-vCQ15aHt.js";import"./index-DZAwbT7O.js";import"./renderedTicksSlice-hzdTS8Zy.js";import"./index-Cp7R3dKQ.js";import"./fillDefinitions-DTcu8a6k.js";import"./CartesianChart-Doi0i7F0.js";import"./chartDataContext-zU1PANlW.js";import"./CategoricalChart-BlCkd7eS.js";import"./getRadiusAndStrokeWidthFromDot-DrA60Arr.js";import"./Layer-7DEP56Bj.js";import"./Curve-Z7vcnGYC.js";import"./types-Dx30sS-2.js";import"./step-DFCmv64b.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-T1g5qPBF.js";import"./Label-BqpWbzgg.js";import"./Text-BBu6qFds.js";import"./ZIndexLayer-CZh1ghPv.js";import"./ActivePoints-D8FfETBR.js";import"./Dot-_rUk0L2M.js";import"./activeStyles-Rm_R6i1P.js";import"./useAnimationId-D_GZEFYT.js";import"./Symbols-BqG7sYmQ.js";import"./symbol-CUR1FaxD.js";import"./ErrorBarContext-D7D-MJNc.js";import"./SetGraphicalItem-Dl3lwAU1.js";import"./ActiveShapeUtils-Bsp6lbzE.js";import"./useEffectiveDataKey-CWpkrBwa.js";import"./CartesianAxis-DY1zMkgy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-D9QIVvZV.js";import"./uniqBy-B9J3txXo.js";import"./iteratee-BLZOulYj.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
