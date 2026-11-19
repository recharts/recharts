import{R as t}from"./iframe-WBbNNnuy.js";import{z as a}from"./RechartsWrapper-KCZFV5Qp.js";import{R as p}from"./zIndexSlice-tUIWaJXi.js";import{C as n}from"./ComposedChart-5JnVr7Ht.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-By_II2b6.js";import{X as l}from"./XAxis-D4ryVEq0.js";import{Y as h}from"./YAxis-BvxL6veE.js";import{L as c}from"./Legend-BCZHr7ks.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BQVAzGvB.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BsjG_ZcL.js";import"./throttle-BZsWSkxT.js";import"./index-r4gbZ-og.js";import"./index-lLL3p07g.js";import"./polarAxisSelectors-BgsSPbjL.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BmTpsTXt.js";import"./index-Z7LA0nwu.js";import"./index-DfAsO6-W.js";import"./renderedTicksSlice-Dwvf-gTi.js";import"./index-UohdA6tU.js";import"./fillDefinitions-mDThsQp_.js";import"./CartesianChart-CMzbfvn4.js";import"./chartDataContext-FFlBnRja.js";import"./CategoricalChart-DYbe0UIE.js";import"./getRadiusAndStrokeWidthFromDot-BJbGVYFk.js";import"./Layer-B9NKZG1g.js";import"./Curve-DgOptS1N.js";import"./types-DJHF32C4.js";import"./step-sID4B3fn.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DB--RtiY.js";import"./Label-C7oootOX.js";import"./Text-BMtYTGtz.js";import"./ZIndexLayer-BKvRHpsJ.js";import"./ActivePoints-CufioKrW.js";import"./Dot-CWYAFnGF.js";import"./activeStyles-CA5Mddf7.js";import"./useAnimationId-Cxl9dyaW.js";import"./Symbols-BMJzxDY-.js";import"./symbol-Cy3OnQKT.js";import"./ErrorBarContext-DyCR_fdR.js";import"./SetGraphicalItem-TF5VFMkr.js";import"./ActiveShapeUtils-DuPu1Vop.js";import"./useEffectiveDataKey-CNDMCH51.js";import"./CartesianAxis-d7TJLpW4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-BXgxBoqY.js";import"./uniqBy-CZ2AwJLU.js";import"./iteratee-ZB0s3k9M.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
