import{R as t}from"./iframe-COIGCNXI.js";import{z as a}from"./RechartsWrapper-CSAoBtxd.js";import{R as p}from"./zIndexSlice-SGGyD0oS.js";import{C as n}from"./ComposedChart-BUtbgPw8.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-ma9HaId0.js";import{X as l}from"./XAxis-CKJPf7Wd.js";import{Y as h}from"./YAxis-MNgk7gZM.js";import{L as c}from"./Legend-B_Tu88mw.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CZS8aiFv.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BNkJw-2U.js";import"./throttle-BlyN22Fr.js";import"./index-NGI2UEpG.js";import"./index-CUG4PNHE.js";import"./polarAxisSelectors-BmRQgzqt.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-VptsFP1A.js";import"./index-C5of7-FY.js";import"./index-C_FuKoEm.js";import"./renderedTicksSlice-BSSoKuOA.js";import"./index-BPTy_Aa_.js";import"./CartesianChart-CrElt8Ki.js";import"./chartDataContext-oGIvKB_Y.js";import"./CategoricalChart-CDhmqNu9.js";import"./Layer-CTEYWFZQ.js";import"./Curve-C5TSA5DD.js";import"./types-CFJTQnsm.js";import"./step-C9LyDlWE.js";import"./path-DyVhHtw_.js";import"./activeStyles-DPX8m1qG.js";import"./Label-BzUBYLaO.js";import"./Text-BbaXzr-_.js";import"./pageBackground-B1zZiLSr.js";import"./useId-uRdV4O5l.js";import"./ZIndexLayer-CkLN3vho.js";import"./dataEntryStyles-lF4b12oa.js";import"./useAnimationId-C1qK0jXb.js";import"./ActivePoints-C-R45DhW.js";import"./Dot-vDehyzRD.js";import"./RegisterGraphicalItemId-DZ8oXJnI.js";import"./ErrorBarContext-B7OlR22L.js";import"./SetGraphicalItem-D643u_Ng.js";import"./getRadiusAndStrokeWidthFromDot-BWolhaji.js";import"./ActiveShapeUtils-DcPjXX29.js";import"./useEffectiveDataKey-DqlQcCPn.js";import"./CartesianAxis-DcbYB9kS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-dCxkCRB_.js";import"./symbol-D4ULe7qk.js";import"./useElementOffset-DjofQ5-m.js";import"./uniqBy-BGB3FWFX.js";import"./iteratee-BGdRtgf7.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
