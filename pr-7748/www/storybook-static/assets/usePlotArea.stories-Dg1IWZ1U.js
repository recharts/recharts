import{R as t}from"./iframe-C2FiVbx6.js";import{z as a}from"./RechartsWrapper-CzRJf9wd.js";import{R as p}from"./zIndexSlice-CIwOLMY2.js";import{C as n}from"./ComposedChart-Bj-Vd15E.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-S0l6mAcw.js";import{X as l}from"./XAxis-BpwUAM2i.js";import{Y as h}from"./YAxis-H-bG_GIE.js";import{L as c}from"./Legend-CeXqnuvF.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CRuYPp9Y.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DzJ8Skeq.js";import"./throttle-Cf_mfeUw.js";import"./index-abbND0en.js";import"./index-qkgHpql3.js";import"./polarAxisSelectors-Bm0LaijP.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Dmh-LY51.js";import"./index-2QDsETde.js";import"./index-CRK-dYW4.js";import"./renderedTicksSlice-DfOOwYLv.js";import"./index-CmXMjoXJ.js";import"./fillDefinitions-0TcAAZ0C.js";import"./CartesianChart-DXHWhKco.js";import"./chartDataContext-CxmIzf3r.js";import"./CategoricalChart-CH_w6Aat.js";import"./getRadiusAndStrokeWidthFromDot-0SqF3Wbd.js";import"./Layer-BbCOnDJZ.js";import"./Curve-r64DCwYW.js";import"./types-CTWOnDaX.js";import"./step-CFQC-oeW.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-Cr8Jhwhl.js";import"./Label-oSfspIu2.js";import"./Text-DUuV2-iR.js";import"./ZIndexLayer-CyqrJVrU.js";import"./ActivePoints-BoBRdB0i.js";import"./Dot-CKxlSMqI.js";import"./activeStyles-Cz6uJME2.js";import"./useAnimationId-DeWO3OMz.js";import"./Symbols-D3G4ac0V.js";import"./symbol-By85hRRg.js";import"./ErrorBarContext-Bl0bf3v5.js";import"./SetGraphicalItem-CdikQP2n.js";import"./ActiveShapeUtils-xS0QhUpf.js";import"./useEffectiveDataKey-pHEaOl4p.js";import"./CartesianAxis-LjFWWnk2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-D2fgVs1p.js";import"./uniqBy-83-1iH4D.js";import"./iteratee-D1g8o1KX.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
