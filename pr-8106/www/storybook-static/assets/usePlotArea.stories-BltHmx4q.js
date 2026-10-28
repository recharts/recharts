import{R as t}from"./iframe-B_MIDKz_.js";import{z as a}from"./RechartsWrapper-CqGFDY60.js";import{R as p}from"./zIndexSlice-BRdFs8ID.js";import{C as n}from"./ComposedChart-BLBMKU0r.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CxvYc4C3.js";import{X as l}from"./XAxis-C4lIERbq.js";import{Y as h}from"./YAxis-D3fzxS21.js";import{L as c}from"./Legend-DEqvMq_C.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-xzz5mEiC.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Dl7meOBx.js";import"./throttle-BEqz9r6e.js";import"./index-BrIcEx9Z.js";import"./index-BOmAjlKN.js";import"./polarAxisSelectors-mzwQQ_dU.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-TVFiOeXq.js";import"./index-DPAMyEeL.js";import"./index-CwOCWg00.js";import"./renderedTicksSlice-yOWeuXiw.js";import"./index-BKlyB3jB.js";import"./CartesianChart-_H9IG9R2.js";import"./ZIndexPortal-DjuZ3mTH.js";import"./CategoricalChart-D_eNWRTX.js";import"./Layer-DNwByRxz.js";import"./Curve-9U6noJF7.js";import"./types-B5hVBX50.js";import"./step-Bj2YjaOf.js";import"./path-DyVhHtw_.js";import"./LabelList-BZln5lTY.js";import"./Label-CENIwYcD.js";import"./Text-B7cqpu59.js";import"./pageBackground-5b67NUgV.js";import"./ZIndexLayer-CUoHFkKf.js";import"./ActivePoints-rPg8bsf1.js";import"./Dot-COTCbAgg.js";import"./activeStyles-CDqKbiIO.js";import"./useAnimationId-BYTiB8_B.js";import"./dataEntryStyles-BFC38uYF.js";import"./Symbols-C4T4jjYn.js";import"./symbol-D75a70A4.js";import"./ErrorBarContext-Dwk9fL5w.js";import"./SetGraphicalItem-vDiBonc7.js";import"./getRadiusAndStrokeWidthFromDot-DE4AoGFo.js";import"./ActiveShapeUtils-D5xg6B3r.js";import"./useEffectiveDataKey-CNJBjtBe.js";import"./CartesianAxis-ZYJAAdvA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-kN6XAzkC.js";import"./uniqBy-CXvSLOdk.js";import"./iteratee-CYXB4_wY.js";import"./isArguments-yB-y1yaH.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},At=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
