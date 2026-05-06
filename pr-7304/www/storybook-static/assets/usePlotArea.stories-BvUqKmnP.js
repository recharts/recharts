import{e as t}from"./iframe-C1XJGX3t.js";import{P as a}from"./PlotAreaShower-ByyJWnzF.js";import{c as p}from"./hooks-DkyxLj8R.js";import{R as s}from"./arrayEqualityCheck-BpeTDNly.js";import{C as n}from"./ComposedChart-lM7HGj1N.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CdDOB73K.js";import{X as h}from"./XAxis-F1KgXCzm.js";import{Y as c}from"./YAxis-BS-4hm0t.js";import{L as g}from"./Legend-BNwt_7Hh.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-B31rA8_p.js";import"./immer-DdA_cEFp.js";import"./axisSelectors-0L8Hl7-Q.js";import"./d3-scale-DfhtN67L.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DoOIdNyO.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Jcx6MylA.js";import"./index-BMIXdyLv.js";import"./zIndexSlice-YaBRx6kS.js";import"./renderedTicksSlice-ROonkpc2.js";import"./CartesianChart-DfX14VSl.js";import"./chartDataContext-COU-oqyF.js";import"./CategoricalChart-B6tCsX7-.js";import"./Layer-Dk6O6-C9.js";import"./ReactUtils-DetlFOn3.js";import"./Label-B-UiuQeI.js";import"./Text-CHym7YYQ.js";import"./DOMUtils-PN4-Wh3o.js";import"./ZIndexLayer-f3tuaVy9.js";import"./ActivePoints-CpaNcRJG.js";import"./Dot-CY448ZsK.js";import"./types-BO06-FVT.js";import"./RegisterGraphicalItemId-brpvqGPp.js";import"./ErrorBarContext-DDoiyoEo.js";import"./GraphicalItemClipPath-BPrExOyo.js";import"./SetGraphicalItem-VIgAq4Q4.js";import"./useAnimationId-Bi2kUagW.js";import"./getRadiusAndStrokeWidthFromDot-wpqoSr7D.js";import"./ActiveShapeUtils-C4hn4FRv.js";import"./isPlainObject-NaqmG00y.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DhXh8lWP.js";import"./Trapezoid-CN-9c4Ka.js";import"./Sector-CK40XgG2.js";import"./Symbols-DjZQJjpC.js";import"./symbol-BPY5wxKC.js";import"./step-BSNAUXbk.js";import"./Curve-B6o2gEbs.js";import"./CartesianAxis-CUdmmf-V.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-B9PeTQil.js";import"./uniqBy-CnQjPYor.js";import"./iteratee-FcCCYeqO.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <PlotAreaShower />
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["UsePlotArea"];export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
