import{R as t}from"./iframe-CThZUbdE.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-BMjAPAM4.js";import{R as g}from"./zIndexSlice-BDry6QRp.js";import{X as S}from"./XAxis-Czxsq92a.js";import{Y as h}from"./YAxis-COnF85r4.js";import{S as A}from"./Scatter-C_sFnSnx.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dh_6CvsG.js";import"./index-vpoK7Ps1.js";import"./index-B32OlRwA.js";import"./index-BrV4JukO.js";import"./index-uduL6A8n.js";import"./immer-6NPp0ZGq.js";import"./get-VHoxVJrE.js";import"./renderedTicksSlice-aJkWvwrp.js";import"./axisSelectors-nng6Kbok.js";import"./d3-scale-GyQF8VSi.js";import"./resolveDefaultProps-CLr4xBR_.js";import"./isWellBehavedNumber-DrJ1JLjW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CnPFeSiy.js";import"./chartDataContext-Bvn2U6wJ.js";import"./CategoricalChart-DpMx8cAV.js";import"./CartesianAxis-BM-bncSs.js";import"./Layer-C1XMVqEx.js";import"./Text-CWNe3a9o.js";import"./DOMUtils-Dd4kG65v.js";import"./Label-CE0t5kQZ.js";import"./ZIndexLayer-LL2CdfOc.js";import"./types-BBvrAdrd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-PV5URjHV.js";import"./useAnimationId-DzTn0J9i.js";import"./Curve-CddvI1GC.js";import"./step-B0et1XJ2.js";import"./path-DyVhHtw_.js";import"./tooltipContext-pa2zo_xo.js";import"./Symbols-DOMkQYi1.js";import"./symbol-DhevQ36Y.js";import"./ActiveShapeUtils-llZbJ7MK.js";import"./RegisterGraphicalItemId-C0Zw2Zrk.js";import"./ErrorBarContext-D77zIOkm.js";import"./GraphicalItemClipPath-ClxBFvMa.js";import"./SetGraphicalItem-CSrXN1n2.js";const nt={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    const {
      data,
      ...rest
    } = args;
    return <ResponsiveContainer width="100%" height={400}>
        <ScatterChart {...rest}>
          <XAxis dataKey="x" />
          <YAxis dataKey="y" />
          <Scatter data={data} />
        </ScatterChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ScatterChartArgs),
    data: coordinateData,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  }
}`,...(a=(e=r.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const ct=["API"];export{r as API,ct as __namedExportsOrder,nt as default};
