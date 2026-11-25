import{R as t}from"./iframe-CVu8zrUS.js";import{z as a}from"./RechartsWrapper-BMgc3fuA.js";import{R as p}from"./zIndexSlice-Bq6bmQlp.js";import{C as n}from"./ComposedChart-DxlxWjOw.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CcBwkv4q.js";import{X as l}from"./XAxis-Cmp_u62X.js";import{Y as h}from"./YAxis-CbExEBw4.js";import{L as c}from"./Legend-Ce9eAhQx.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bb5e-Ri9.js";import"./get-CjriyByo.js";import"./axisSelectors-Sot67Aim.js";import"./throttle-DhpuiNc1.js";import"./index-CnHWc7sj.js";import"./index-DtrO1U5O.js";import"./polarAxisSelectors-MtWLdCCF.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BfJtYZLb.js";import"./index-9zr5wxfL.js";import"./index-BuvxFglF.js";import"./renderedTicksSlice-C88oJ44U.js";import"./index-CTNfzL7A.js";import"./fillDefinitions-nObHHCVo.js";import"./CartesianChart-CcPXlhV4.js";import"./chartDataContext-Dg0Jj1rs.js";import"./CategoricalChart-DIJd4lOu.js";import"./getRadiusAndStrokeWidthFromDot-C0Ej1DHm.js";import"./Layer-Cu87ioWV.js";import"./Curve-DnKmeSPX.js";import"./types-DISj1D7D.js";import"./step-B759BuMX.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BbIoPGWl.js";import"./Label-Cx8AJG-1.js";import"./Text-R7SqSI0E.js";import"./ZIndexLayer-B1JZDtFw.js";import"./ActivePoints-y_nl0SSe.js";import"./Dot-CJSjjEfy.js";import"./activeStyles-BYV0uDWS.js";import"./useAnimationId-HRjjYmjj.js";import"./Symbols-CPBzhLNS.js";import"./symbol-BnOQ6fEU.js";import"./ErrorBarContext-v1LyTi-B.js";import"./SetGraphicalItem-BzQ3GKka.js";import"./ActiveShapeUtils-BVHA2GWO.js";import"./useEffectiveDataKey-BkqeFEex.js";import"./CartesianAxis-Ctwjf5Ws.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-J7kEM2re.js";import"./uniqBy-CRfw9j4K.js";import"./iteratee-ExFm1WSh.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
