import{R as t}from"./iframe-D0yOAL3n.js";import{z as a}from"./RechartsWrapper-DwTnzypz.js";import{R as p}from"./zIndexSlice-Dn2Ys6gV.js";import{C as n}from"./ComposedChart-DzH7Aje-.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CO6xWWXS.js";import{X as l}from"./XAxis-ntZPF60e.js";import{Y as h}from"./YAxis-ClNwS6nX.js";import{L as c}from"./Legend-DPhxLnRv.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cif0RW7j.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DATXyQCy.js";import"./throttle-BrS_cZCp.js";import"./index-D1v08_vM.js";import"./index-ELyMDiEN.js";import"./polarAxisSelectors-aGfpHLq1.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-n2sBsRY0.js";import"./index-CwmpmH_i.js";import"./index-CqRNnRSm.js";import"./renderedTicksSlice-Cx7A9Rjk.js";import"./index-BQd9CGB1.js";import"./CartesianChart-DLG1qiqu.js";import"./ZIndexPortal-DWwaC6CZ.js";import"./CategoricalChart-BqkqH0t5.js";import"./Layer-CY7a4PGZ.js";import"./Curve-DzBXGra2.js";import"./types-IRHz2iGt.js";import"./step-C1lWuIkW.js";import"./path-DyVhHtw_.js";import"./LabelList-CZmttjyK.js";import"./Label-BzBQuB2T.js";import"./Text-z-sERxAx.js";import"./pageBackground-Cu52DhUW.js";import"./ZIndexLayer-DLelF1L8.js";import"./dataEntryStyles-BNyFarFk.js";import"./ActivePoints-BljR9_g2.js";import"./Dot-lux40cEN.js";import"./activeStyles-BHH3u2ze.js";import"./useAnimationId-CKYg8A0e.js";import"./Symbols-BGu4wd_L.js";import"./symbol-C_vPW6X7.js";import"./RegisterGraphicalItemId-DVCLPf9f.js";import"./ErrorBarContext-Dnk3UGdS.js";import"./SetGraphicalItem-Co3HUPOs.js";import"./getRadiusAndStrokeWidthFromDot-DLGQUjjw.js";import"./ActiveShapeUtils-CLWTEHLV.js";import"./useEffectiveDataKey-DqoTIDte.js";import"./CartesianAxis-dbcozJzz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-CIhlqtry.js";import"./uniqBy-UFr_nm2i.js";import"./iteratee-DStnvH7g.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
