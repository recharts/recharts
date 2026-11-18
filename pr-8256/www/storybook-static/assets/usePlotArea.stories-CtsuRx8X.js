import{R as t}from"./iframe-CRBCr4I7.js";import{z as a}from"./RechartsWrapper-Csv9gEG8.js";import{R as p}from"./zIndexSlice-C5HnNY9r.js";import{C as n}from"./ComposedChart-AEeY6CWp.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Bk3eQLZy.js";import{X as l}from"./XAxis-4jTaFcnE.js";import{Y as h}from"./YAxis-C5vFCns8.js";import{L as c}from"./Legend-Dak6j9fY.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C-CjWl4M.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Cn24srzI.js";import"./throttle-Bi7M9SHL.js";import"./index-DNywOopk.js";import"./index-CgJEBRA7.js";import"./polarAxisSelectors-BXwH5847.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BBFMZtoY.js";import"./index-CYvH0a5R.js";import"./index-D8BMywLD.js";import"./renderedTicksSlice-Bcj92DQ0.js";import"./index-DOjsHhAo.js";import"./fillDefinitions-MhsyTwKb.js";import"./CartesianChart-DtrL87f_.js";import"./chartDataContext-Ds5ARDJg.js";import"./CategoricalChart-CIMwuqDL.js";import"./getRadiusAndStrokeWidthFromDot-DSL_ZrdX.js";import"./Layer-DK4q3BXK.js";import"./Curve-L8TXrD0N.js";import"./types-BcVdsd1S.js";import"./step-CDOWbVN9.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BCu_-7t9.js";import"./Label-CLJtKhiN.js";import"./Text-CzrZS4hs.js";import"./ZIndexLayer-ChuLKuaE.js";import"./ActivePoints-BaVCT3KN.js";import"./Dot-BSp4p8j6.js";import"./activeStyles-BGmObwWl.js";import"./useAnimationId-BEWOQrK8.js";import"./Symbols-qyep14Vl.js";import"./symbol-dNn9HYSI.js";import"./ErrorBarContext-C9vHq9NB.js";import"./SetGraphicalItem-CVR_yFh9.js";import"./ActiveShapeUtils-DkbYb7aY.js";import"./useEffectiveDataKey-Bv2ZRQEX.js";import"./CartesianAxis-Cnz0mea7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Dm_VZj6e.js";import"./uniqBy-B5_XcYmH.js";import"./iteratee-BFRZNziE.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
