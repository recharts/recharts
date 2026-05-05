import{e}from"./iframe-BBcCu4tW.js";import{R as i}from"./arrayEqualityCheck-CIoNRuby.js";import{C as p}from"./ComposedChart-D5dvwxje.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BDIKwzaX.js";import{X as s}from"./XAxis-BPDxC347.js";import{Y as c}from"./YAxis-DRaUq3FE.js";import{L as d}from"./Line-C5n5D2in.js";import{R as g}from"./ReferenceLine-cjfG2nUP.js";import{R as f}from"./RechartsHookInspector-BC_P3cZY.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CnZaYM7o.js";import"./immer-B-ffdvVM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B_0gdr0q.js";import"./index-B4OVM0gu.js";import"./hooks-BezqoFaW.js";import"./axisSelectors-DiO1RUhK.js";import"./d3-scale-wrbXHqm2.js";import"./zIndexSlice-CQ5dV6Tf.js";import"./renderedTicksSlice-qHXvxWkJ.js";import"./CartesianChart-CyTvOQNc.js";import"./chartDataContext-D3FIgu0K.js";import"./CategoricalChart-BMbsuZm1.js";import"./CartesianAxis-BamwTcDK.js";import"./Layer-BqjItK9e.js";import"./Text-x4pxLanI.js";import"./DOMUtils-BzbpMFLz.js";import"./Label-CVOeCU9m.js";import"./ZIndexLayer-C7yDhLaY.js";import"./types-BYSx98h-.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CK6hPv_Y.js";import"./ActivePoints-DtB9X2U8.js";import"./Dot-DIIdBfpA.js";import"./RegisterGraphicalItemId-zcKV7aTa.js";import"./ErrorBarContext-DHR2hShJ.js";import"./GraphicalItemClipPath-C4HnTmHF.js";import"./SetGraphicalItem-nt8-T9NJ.js";import"./useAnimationId-Cz7XNO3G.js";import"./getRadiusAndStrokeWidthFromDot-RM0GOVzs.js";import"./ActiveShapeUtils-CnMsGTMX.js";import"./isPlainObject-ByEPh_9t.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-6s0YHElS.js";import"./Trapezoid-CCXIiWsl.js";import"./Sector-V-b8xmGp.js";import"./Symbols-DeFezQUo.js";import"./symbol-dMCmyDlw.js";import"./step-CTgfjT4Z.js";import"./Curve-kTZvT6-S.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DwDsLBsF.js";import"./ChartSizeDimensions-B3sIk0p_.js";import"./OffsetShower-CyfsTZlA.js";import"./PlotAreaShower-NtxTDk3F.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ye=["Segment"];export{t as Segment,ye as __namedExportsOrder,Re as default};
