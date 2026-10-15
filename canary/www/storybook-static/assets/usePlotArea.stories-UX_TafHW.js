import{R as t}from"./iframe-CjAZXmgk.js";import{e as a}from"./RechartsWrapper-C1tX5Xq9.js";import{R as p}from"./zIndexSlice-DZ6wU0kL.js";import{C as n}from"./ComposedChart-C9HbEoPU.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Bqm35VQZ.js";import{X as l}from"./XAxis-XXYcX2bn.js";import{Y as h}from"./YAxis-CunYyPtb.js";import{L as c}from"./Legend-DMbKw1iM.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B3dy_A6W.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DVMe8D3h.js";import"./throttle-aHpS-uJF.js";import"./index-CXqdHhNs.js";import"./index-D72PX-EN.js";import"./isWellBehavedNumber-CbOfPh0Q.js";import"./d3-scale-Cdy5oRLL.js";import"./index-CgP4dGwF.js";import"./index-DoglCRE6.js";import"./renderedTicksSlice-DRvvM2hj.js";import"./index-jRxYEVM9.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bi3Tf3h4.js";import"./chartDataContext-Brj1C6P1.js";import"./CategoricalChart-ChU13xsV.js";import"./Layer-CMYvDThQ.js";import"./Curve-BAdd7Cc7.js";import"./types-BUTy-eCs.js";import"./step-DNHn4BEu.js";import"./path-DyVhHtw_.js";import"./activeStyles-BjWwonc4.js";import"./Label-DnpXC07H.js";import"./Text-VSZhuuVN.js";import"./pageBackground-CYQU4eM8.js";import"./useId-UofRKXbz.js";import"./useBackwardsCompatibleTheme-C26HYKO8.js";import"./ZIndexLayer-maUeBX7p.js";import"./useAnimationId-BxmhNVS4.js";import"./dataEntryStyles-BHBmvArk.js";import"./ActivePoints-C5jmgdLT.js";import"./Dot-C4dqO9Kj.js";import"./ErrorBarContext-CzSreuRh.js";import"./GraphicalItemClipPath-uyo9nSDN.js";import"./SetGraphicalItem-D6iWzq9o.js";import"./getRadiusAndStrokeWidthFromDot-B3WoL_Uu.js";import"./ActiveShapeUtils-Lt_dXYUR.js";import"./useEffectiveDataKey-NmC8up5p.js";import"./CartesianAxis-CNPqH8LV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-uvqP7PSU.js";import"./symbol-DCSxYWeK.js";import"./useElementOffset-B7ar2O_j.js";import"./uniqBy-DzMYEmyq.js";import"./iteratee-BZjhhQST.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
