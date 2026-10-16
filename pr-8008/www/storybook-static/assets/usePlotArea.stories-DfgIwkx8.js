import{R as t}from"./iframe-R8qakbXa.js";import{e as a}from"./RechartsWrapper-ClWcdPE7.js";import{R as p}from"./zIndexSlice-CpW5IUCm.js";import{C as n}from"./ComposedChart-DSL-YeQI.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-C0UZrz4D.js";import{X as l}from"./XAxis-C4Jew8Rv.js";import{Y as h}from"./YAxis-ByXOMKUb.js";import{L as c}from"./Legend-DEeC35Lj.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CKR1Qcev.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DMTHYW2V.js";import"./throttle-B9oD6XZ1.js";import"./index-BFIsGGpk.js";import"./index-igt8webG.js";import"./isWellBehavedNumber-B09TyYXX.js";import"./d3-scale-aDQi0991.js";import"./index-BFytD52I.js";import"./index-CMthufc-.js";import"./renderedTicksSlice-BQVB4poR.js";import"./index-Di16hjPT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-PED4jNlL.js";import"./chartDataContext-BSaHGzuI.js";import"./CategoricalChart-DaUIhj12.js";import"./Layer-CmAPD_t-.js";import"./Curve-C-kAiHcE.js";import"./types-D_TtzLi3.js";import"./step-BfWCr2W6.js";import"./path-DyVhHtw_.js";import"./activeStyles-B3GTJvDM.js";import"./Label-KdqZDMP0.js";import"./Text-DWNopLVO.js";import"./pageBackground-C5CyBpzw.js";import"./useId-bPLq3L_8.js";import"./useBackwardsCompatibleTheme-qV0asEjz.js";import"./ZIndexLayer-BembMDFS.js";import"./useAnimationId-CjllIhER.js";import"./dataEntryStyles-DI0HDDLL.js";import"./ActivePoints-Bp8whF8k.js";import"./Dot-BkoFNCjF.js";import"./ErrorBarContext-0rDV8hpt.js";import"./GraphicalItemClipPath-BVAEKKRa.js";import"./SetGraphicalItem-Bvw8mbwf.js";import"./getRadiusAndStrokeWidthFromDot-CMshxAsh.js";import"./ActiveShapeUtils-D6A65k3S.js";import"./useEffectiveDataKey-DI06uwcg.js";import"./CartesianAxis-D_UchkJi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BZYEBdz_.js";import"./symbol-Dv-EOB02.js";import"./useElementOffset-C5Bgs-mL.js";import"./uniqBy-DYQ_KcVA.js";import"./iteratee-CNuCkrqA.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
