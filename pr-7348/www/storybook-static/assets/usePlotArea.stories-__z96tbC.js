import{e as t}from"./iframe-Cpa_K2wH.js";import{P as a}from"./PlotAreaShower-LKM4gBGb.js";import{Y as p}from"./hooks-B0YV-Gb0.js";import{g as s}from"./arrayEqualityCheck-B3CGbERi.js";import{C as n}from"./ComposedChart-Gg-TcJTy.js";import{p as l}from"./Page-DPte-9pC.js";import{L as d}from"./Line-Dn6n2q0g.js";import{X as h}from"./XAxis-BzN0sbb6.js";import{Y as c}from"./YAxis-D01H3xLK.js";import{L as g}from"./Legend-BfSU8Aqx.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-_3CJ7Z39.js";import"./immer-DMfm46iJ.js";import"./axisSelectors-Cmllf_me.js";import"./d3-scale-Bfg_RKT9.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CjUJiL9-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D0afUUed.js";import"./index-d0_kz5ki.js";import"./zIndexSlice-BHc5vdfp.js";import"./renderedTicksSlice-kARXbS5M.js";import"./CartesianChart-Oxo-XTmW.js";import"./chartDataContext-DWc0FZ1G.js";import"./CategoricalChart-U85gevCj.js";import"./Layer-C28Vj2nU.js";import"./ReactUtils-BowWIwT6.js";import"./Label-9gVLBIOF.js";import"./Text-DwR88wHZ.js";import"./DOMUtils-BkGoz7XV.js";import"./ZIndexLayer-CVL2PXNl.js";import"./ActivePoints-gBLXy0JF.js";import"./Dot-BhWE0LKt.js";import"./types-BYysGBoP.js";import"./RegisterGraphicalItemId-s90PoDx_.js";import"./ErrorBarContext-BJDGu-MY.js";import"./GraphicalItemClipPath-CP_rA2Hw.js";import"./SetGraphicalItem-BFrPL6Zw.js";import"./useAnimationId-BXAU-yXd.js";import"./getRadiusAndStrokeWidthFromDot-DEe3jrRF.js";import"./ActiveShapeUtils-DZgn0W6W.js";import"./isPlainObject-Cv9egWS8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-_TjkgDNn.js";import"./Trapezoid-MfEacaGn.js";import"./Sector-CErlt9yR.js";import"./Symbols-Bzs7g2p8.js";import"./symbol-DqufiAtJ.js";import"./step-csQH98gw.js";import"./Curve-rXHg5I_o.js";import"./CartesianAxis-BYutAp1h.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CxLjeYJj.js";import"./uniqBy-BwhAZYz-.js";import"./iteratee-DoCUAkfC.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
