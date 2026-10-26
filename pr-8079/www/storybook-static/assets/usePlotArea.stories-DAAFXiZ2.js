import{R as t}from"./iframe-CatpbanJ.js";import{z as a}from"./RechartsWrapper-DLFC9k-P.js";import{R as p}from"./zIndexSlice-BMWzHmEu.js";import{C as n}from"./ComposedChart-KfrZJSX3.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Dd-G5LHq.js";import{X as l}from"./XAxis-D8aO7K4u.js";import{Y as h}from"./YAxis-BZ1k9Ood.js";import{L as c}from"./Legend-C4LGK5gX.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BADc_Fld.js";import"./get-cF5BDHN6.js";import"./axisSelectors-ByEpyZG7.js";import"./throttle-CW9K2jjI.js";import"./index-EESjRsqH.js";import"./index-CWnngu7Y.js";import"./polarAxisSelectors-BGfelowG.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DWpKPZRY.js";import"./index-BeMb0fJc.js";import"./index-BmXPv5ws.js";import"./renderedTicksSlice-BgMwh8Is.js";import"./index-B_5mHYiA.js";import"./CartesianChart-DPS34irs.js";import"./chartDataContext-CYe6eIs4.js";import"./CategoricalChart-C1P-_dY1.js";import"./Layer-ElswMSOx.js";import"./Curve-CPjpKaHf.js";import"./types-BWsJ_4qp.js";import"./step-uDZ4fNKk.js";import"./path-DyVhHtw_.js";import"./activeStyles-RllIEBru.js";import"./Label-CA5ryIJW.js";import"./Text-CG59Fli3.js";import"./pageBackground-CULGASio.js";import"./useId-pkbKCVvH.js";import"./ZIndexLayer-ga9SMmxW.js";import"./dataEntryStyles-DxsZOfoL.js";import"./useAnimationId-BwwRxKkz.js";import"./ActivePoints-Neb4G9yW.js";import"./Dot-CO3qiad8.js";import"./RegisterGraphicalItemId-DvaseCYm.js";import"./ErrorBarContext-CxZNMZBW.js";import"./SetGraphicalItem-Csb9S6BZ.js";import"./getRadiusAndStrokeWidthFromDot-CAu9psjm.js";import"./ActiveShapeUtils-MJJt-1xu.js";import"./useEffectiveDataKey-YwyUQgbT.js";import"./CartesianAxis-D1ZUqzID.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DFruy8Se.js";import"./symbol-DvaRjft0.js";import"./useElementOffset-N652NpPr.js";import"./uniqBy-CMP_GnVX.js";import"./iteratee-d_6xpuw1.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
