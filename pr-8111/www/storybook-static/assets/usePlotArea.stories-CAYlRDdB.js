import{R as t}from"./iframe-BGCZ_YYu.js";import{z as a}from"./RechartsWrapper-DzjZykj4.js";import{R as p}from"./zIndexSlice-cBJ2sUns.js";import{C as n}from"./ComposedChart-BaMrMimU.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CYsPPfA1.js";import{X as l}from"./XAxis-CnHX8rYU.js";import{Y as h}from"./YAxis-QzbIIYXn.js";import{L as c}from"./Legend-BBY33JEH.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-RfjxFv_h.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BgHWKfZW.js";import"./throttle-Dnn9iNkE.js";import"./index-CJpeiM5R.js";import"./index-DRH8hgtI.js";import"./polarAxisSelectors-9JDQkQFq.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-WNvBVnHd.js";import"./index-BoRJhsa5.js";import"./index-DsAYZFOJ.js";import"./renderedTicksSlice-0yL2Eztm.js";import"./index-CnE4B9N1.js";import"./CartesianChart-chY_bHfR.js";import"./ZIndexPortal-UfnKJ6nq.js";import"./CategoricalChart-rRn_svVP.js";import"./Layer-FBjFYiDN.js";import"./Curve-BoHAwgnl.js";import"./types-BvE9AUsn.js";import"./step-QoITrG4U.js";import"./path-DyVhHtw_.js";import"./LabelList-D60Hhpwl.js";import"./Label-CG8eDc0p.js";import"./Text-Cf8nBYte.js";import"./pageBackground--uJKRUbH.js";import"./ZIndexLayer-DBU2Ux2U.js";import"./ActivePoints-GRJI6yy-.js";import"./Dot-CzpZnZIc.js";import"./activeStyles-CJOfqay0.js";import"./useAnimationId-D-9kXAza.js";import"./dataEntryStyles--27SN7qD.js";import"./Symbols-Caix5zUY.js";import"./symbol-1qTipyom.js";import"./ErrorBarContext-B946Wqqn.js";import"./SetGraphicalItem-Cbavgyyx.js";import"./getRadiusAndStrokeWidthFromDot-CNsKyJ5a.js";import"./ActiveShapeUtils-CbZu-UwN.js";import"./useEffectiveDataKey-B32bFSWN.js";import"./CartesianAxis-D7nh9FWg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-rPBNT425.js";import"./uniqBy-DwLo8bza.js";import"./iteratee-BrjIAann.js";import"./isArguments-yB-y1yaH.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},At=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
