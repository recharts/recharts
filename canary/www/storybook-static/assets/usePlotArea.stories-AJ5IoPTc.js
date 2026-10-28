import{R as t}from"./iframe-v0-Os2yM.js";import{z as a}from"./RechartsWrapper-DpMxjJPI.js";import{R as p}from"./zIndexSlice-_iZ3OTIR.js";import{C as n}from"./ComposedChart-COVjVMYb.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CMP1V8O2.js";import{X as l}from"./XAxis-DNiYKSvx.js";import{Y as h}from"./YAxis-CgkQKIAn.js";import{L as c}from"./Legend-Cwc7Q_ts.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BcTNVKvX.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Db_FhKX_.js";import"./throttle-CSC07CA1.js";import"./index-CjGezUyu.js";import"./index-DwxXslvM.js";import"./polarAxisSelectors-Bp8G6CJB.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Dv-uHWFd.js";import"./index-DjMmN7uR.js";import"./index-COci_OUD.js";import"./renderedTicksSlice-Z7zIrOC1.js";import"./index-ClZJ5H50.js";import"./CartesianChart-CSMk8NrA.js";import"./ZIndexPortal-IUufwUyf.js";import"./CategoricalChart-DUPn6ZbT.js";import"./Layer--oy12MjQ.js";import"./Curve-NJea3yIB.js";import"./types-BJeT-aZk.js";import"./step-DpC9Q9rs.js";import"./path-DyVhHtw_.js";import"./LabelList-lSE4rpjb.js";import"./Label-DI0UjsSd.js";import"./Text-CJd7Lo81.js";import"./pageBackground-BMquVDd2.js";import"./ZIndexLayer-CZxM3zqX.js";import"./ActivePoints-B5HER2Lt.js";import"./Dot-D0cTKtS9.js";import"./activeStyles-CbGGlVk2.js";import"./useAnimationId-CXPH24GZ.js";import"./dataEntryStyles-DfwnSxIB.js";import"./Symbols-Cw6oiD0A.js";import"./symbol-DlOomsec.js";import"./ErrorBarContext-Dj2syV2g.js";import"./SetGraphicalItem-C-WANBtu.js";import"./getRadiusAndStrokeWidthFromDot-BkVmaDqw.js";import"./ActiveShapeUtils-BRXSym3E.js";import"./useEffectiveDataKey-DAI_6E1U.js";import"./CartesianAxis-BkO3xjcX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-C7YVK8J4.js";import"./uniqBy-l27jBtp-.js";import"./iteratee-C2U1tTrM.js";import"./isArguments-yB-y1yaH.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},At=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
