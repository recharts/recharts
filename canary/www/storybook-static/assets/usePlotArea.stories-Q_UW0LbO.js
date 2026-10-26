import{R as t}from"./iframe-BfpZEj1J.js";import{z as a}from"./RechartsWrapper-DgjurVnr.js";import{R as p}from"./zIndexSlice-DN9OEqSU.js";import{C as n}from"./ComposedChart-sYHyq_r0.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-XMFg_Gfd.js";import{X as l}from"./XAxis-CaBw27aw.js";import{Y as h}from"./YAxis-BjTIc8Tf.js";import{L as c}from"./Legend-BUEXHc_c.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-RgMSUlUO.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DdEmqG6y.js";import"./throttle-of37Yc3d.js";import"./index-lWFIbTSl.js";import"./index-BjD6SDXa.js";import"./polarAxisSelectors-D5cajvkJ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DAHzu_9m.js";import"./index-BZ99J-Wl.js";import"./index-Wmom0di-.js";import"./renderedTicksSlice-DAkeOnVU.js";import"./index-CWp6QAhS.js";import"./CartesianChart-BMikS9ic.js";import"./chartDataContext-CDRBSiAQ.js";import"./CategoricalChart-AcKzUHIb.js";import"./Layer-CLoP9xkX.js";import"./Curve-DcgjXnaH.js";import"./types-Dmnhw6yf.js";import"./step-BIMKm40t.js";import"./path-DyVhHtw_.js";import"./activeStyles--hoQ05pe.js";import"./Label-Cr-kSyez.js";import"./Text-C5CT5OBg.js";import"./pageBackground-DtTiB4cX.js";import"./useId-CWVkYNpQ.js";import"./ZIndexLayer-BnqS0DyP.js";import"./dataEntryStyles-B31S2PZ0.js";import"./useAnimationId-CO5y2Yl_.js";import"./ActivePoints-C1WdAM52.js";import"./Dot-BgvZVx9M.js";import"./Symbols-DlN3yTjK.js";import"./symbol-WMObR4nv.js";import"./RegisterGraphicalItemId-B270wFxD.js";import"./ErrorBarContext-CGuCRP-n.js";import"./SetGraphicalItem-BEEPPsSN.js";import"./getRadiusAndStrokeWidthFromDot-Cr9Vi9Z2.js";import"./ActiveShapeUtils-CX9J7Siy.js";import"./useEffectiveDataKey-CijXZAWm.js";import"./CartesianAxis-ChtcS9gQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-ESpol_qM.js";import"./uniqBy-C05yYfI4.js";import"./iteratee-UOUNNVON.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
