import{R as t}from"./iframe-Ctz7IHW3.js";import{z as a}from"./RechartsWrapper-B5-BQ43L.js";import{R as p}from"./zIndexSlice-BOhKAINV.js";import{C as n}from"./ComposedChart-B4J-boeJ.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DAx-7uu_.js";import{X as l}from"./XAxis-C7TfuOxC.js";import{Y as h}from"./YAxis-B3lARwfm.js";import{L as c}from"./Legend-BzVily9F.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps--WcksQI-.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CmsQwY11.js";import"./throttle-BK8aOUUW.js";import"./index-Tzm4T3gC.js";import"./index-CP4Z1Y6_.js";import"./polarAxisSelectors-2S85hvBv.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B7S8RTAk.js";import"./index-D9m5BeGD.js";import"./index-DTCcovWx.js";import"./renderedTicksSlice-zg3AzzRh.js";import"./index-D8taZNOk.js";import"./fillDefinitions-BjpebX6W.js";import"./CartesianChart-Dig5bGoH.js";import"./chartDataContext-CSFdu_tp.js";import"./CategoricalChart-pUCO11xA.js";import"./getRadiusAndStrokeWidthFromDot-CcQspbXE.js";import"./Layer-DwO5QDCB.js";import"./Curve-BmO4aPRH.js";import"./types-o_vm3YHF.js";import"./step-CWzaq-TC.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DhE1x9oW.js";import"./Label-Cx25Byjk.js";import"./Text-d5sUAgwt.js";import"./ZIndexLayer-GawJhFHW.js";import"./ActivePoints-BEz7jJwJ.js";import"./Dot-Djhcp3TT.js";import"./activeStyles-DYt1MbCF.js";import"./useAnimationId-CDmHN2F8.js";import"./Symbols-D3D7M8Jk.js";import"./symbol-B5JmXw1t.js";import"./ErrorBarContext-CWAd3_q9.js";import"./SetGraphicalItem-ZbovNH06.js";import"./ActiveShapeUtils-CHF2XahU.js";import"./useEffectiveDataKey-v8KMaUS0.js";import"./CartesianAxis-D2YA5lRA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-ByunqyrY.js";import"./uniqBy-bNtr2rug.js";import"./iteratee-DTnJTgMl.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
