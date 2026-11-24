import{R as t}from"./iframe-Cg_iar9N.js";import{z as a}from"./RechartsWrapper-C7ImdcI0.js";import{R as p}from"./zIndexSlice-BjUOfyjh.js";import{C as n}from"./ComposedChart-BFCZD_8N.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-D_Ww1q7V.js";import{X as l}from"./XAxis-CGc4hdT9.js";import{Y as h}from"./YAxis-D6x7oYcH.js";import{L as c}from"./Legend-BYP7URbe.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DTSDaMdx.js";import"./get-CjriyByo.js";import"./axisSelectors-CZOBtonL.js";import"./throttle-BblIHJT1.js";import"./index-7C4ywAbx.js";import"./index-CwdEjpHW.js";import"./polarAxisSelectors-B1d4qlCW.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DPBNOBhz.js";import"./index-VP3OIQj6.js";import"./index-jWuQwiwF.js";import"./renderedTicksSlice-CLd9gyLd.js";import"./index-V_wxvl63.js";import"./fillDefinitions-DSB60PQ6.js";import"./CartesianChart-B4msnQ_2.js";import"./chartDataContext-BigsU9AL.js";import"./CategoricalChart-CPdnXejQ.js";import"./getRadiusAndStrokeWidthFromDot-DxfCADw-.js";import"./Layer-Bzrsb6mZ.js";import"./Curve-CPf1VG57.js";import"./types-ltSKN6AB.js";import"./step-DiiLfVQZ.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-CxwfrkTv.js";import"./Label-BJnLd782.js";import"./Text-B2P7H0Ri.js";import"./ZIndexLayer-CSE-z-0P.js";import"./ActivePoints-b69yWwyo.js";import"./Dot-BA3Hs1sQ.js";import"./activeStyles-BGKrSIuv.js";import"./useAnimationId-9EHB1qr6.js";import"./Symbols-HGWe4NLb.js";import"./symbol-BYuJahfe.js";import"./ErrorBarContext-CGI8-gVI.js";import"./SetGraphicalItem-B4YPaENS.js";import"./ActiveShapeUtils-CsQyYPRe.js";import"./useEffectiveDataKey-Cs5zYK5x.js";import"./CartesianAxis-DOu6asA8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-hhsDlGuK.js";import"./uniqBy-DOt34CrH.js";import"./iteratee-DBE5xjg2.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
