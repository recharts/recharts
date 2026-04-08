import{e as t}from"./iframe-GFfTjQoK.js";import{R as n}from"./arrayEqualityCheck-rTBxpMje.js";import{L as s}from"./LineChart-DHSSc52P.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BM3xvdML.js";import{X as l}from"./XAxis-DKH_cPy1.js";import{R as v}from"./RechartsHookInspector-B-bvN_Hp.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BjWq3AFN.js";import"./immer-DuJeroaq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C0HFJBeI.js";import"./index-DXddhZW0.js";import"./hooks-CqeOQ7eW.js";import"./axisSelectors-L84MoTjP.js";import"./d3-scale-BPfRQFr_.js";import"./zIndexSlice-BfN4rN3H.js";import"./renderedTicksSlice-DKYVxNAz.js";import"./CartesianChart-D-2ecpa2.js";import"./chartDataContext-FYXA0LCO.js";import"./CategoricalChart-B30LS6x5.js";import"./Layer-CKdwahrM.js";import"./ReactUtils-D17-4l-2.js";import"./Label-B7hBq0Ji.js";import"./Text-CMg3-e7E.js";import"./DOMUtils-D3LQizf9.js";import"./ZIndexLayer-BaMuJtoq.js";import"./ActivePoints-DRajpHvZ.js";import"./Dot-zVj_nUxC.js";import"./types-CLB7ynuJ.js";import"./RegisterGraphicalItemId-BcS1kKIp.js";import"./ErrorBarContext-CFOED4N_.js";import"./GraphicalItemClipPath-Bgdp1vAv.js";import"./SetGraphicalItem-mKeT8kkZ.js";import"./useAnimationId-Yz3h7jnZ.js";import"./getRadiusAndStrokeWidthFromDot-DW9LVMsc.js";import"./ActiveShapeUtils-rLEzUBWB.js";import"./isPlainObject-DZFhrpuV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CYvKy2lW.js";import"./Trapezoid-BzxYlSmA.js";import"./Sector-BM4VUaxN.js";import"./Symbols-I86a4FCe.js";import"./symbol-B1lNwkQx.js";import"./step-BFgO3zi8.js";import"./Curve-mNHJmuek.js";import"./CartesianAxis-Cx84Q0BH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-DEk02y8i.js";import"./ChartSizeDimensions-C4mVk4KC.js";import"./OffsetShower-UIogbUR8.js";import"./PlotAreaShower-DSjypVDX.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const intervalOptions = ['preserveStart', 'preserveEnd', 'preserveStartEnd', 'equidistantPreserveStart', 0] as const;
    return <ResponsiveContainer>
        <LineChart data={ticks}
      // Margins are necessary to show ticks that extend beyond the chart (i.e. last and first tick).
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 20
      }}>
          <Line dataKey="coordinate" />
          {intervalOptions.map((intervalOption, index) => <XAxis dataKey="value" key={intervalOption} interval={intervalOption} xAxisId={index} label={intervalOption} height={70} />)}
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ht=["TickPositioning"];export{r as TickPositioning,ht as __namedExportsOrder,vt as default};
