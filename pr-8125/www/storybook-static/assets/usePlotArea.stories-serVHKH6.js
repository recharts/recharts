import{R as t}from"./iframe-CGtTT9aO.js";import{z as a}from"./RechartsWrapper-Bg-qxCCU.js";import{R as p}from"./zIndexSlice-DkqERUsC.js";import{C as n}from"./ComposedChart-CtOwOAMH.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-B39YTIfI.js";import{X as l}from"./XAxis-Cs9YVmSO.js";import{Y as h}from"./YAxis-CPZ41WbR.js";import{L as c}from"./Legend-BpQuqqTF.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BOjz-2GT.js";import"./get-cF5BDHN6.js";import"./axisSelectors-B4GsvVbU.js";import"./throttle-Cpyd11_g.js";import"./index-D5qFyhva.js";import"./index-BaBVYkzg.js";import"./polarAxisSelectors-C5R6EJHs.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-HCxTFMcs.js";import"./index-DFHlfpO_.js";import"./index-oOofm89c.js";import"./renderedTicksSlice-CvmQK_hy.js";import"./index-fDgmIFeX.js";import"./CartesianChart-BOnMx4gA.js";import"./ZIndexPortal-CtHFHKQR.js";import"./CategoricalChart-BhkaiiYp.js";import"./Layer-BOfjEgNF.js";import"./Curve-BOBD875w.js";import"./types-Do3ps9Vj.js";import"./step-BRhFbrj_.js";import"./path-DyVhHtw_.js";import"./LabelList-bhGj16_R.js";import"./Label-CdpdsstW.js";import"./Text-CPcXRBKa.js";import"./DOMUtils-Lkl9NNxk.js";import"./ZIndexLayer-BNZ9nAXZ.js";import"./ActivePoints-DxEPNf6W.js";import"./Dot-C5v9BtZ0.js";import"./activeStyles-Dtv8ZhnZ.js";import"./useAnimationId-C_28wM0V.js";import"./dataEntryStyles-CQ5H-98B.js";import"./themeFill-BkM1x4hA.js";import"./Symbols-OSdQxEEJ.js";import"./symbol-BfL8oXc2.js";import"./ErrorBarContext-9FDAfVa2.js";import"./SetGraphicalItem-8Ajtlbfj.js";import"./getRadiusAndStrokeWidthFromDot-BkHpd6-h.js";import"./ActiveShapeUtils-BNWigvv2.js";import"./useEffectiveDataKey-DHKFzj0x.js";import"./CartesianAxis-DK3VbMKT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-BatF9isV.js";import"./uniqBy-CZnu9ysp.js";import"./iteratee-BkG8OlH1.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
