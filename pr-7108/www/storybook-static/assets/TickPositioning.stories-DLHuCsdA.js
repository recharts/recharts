import{e as t}from"./iframe-BB4UUGL6.js";import{R as n}from"./arrayEqualityCheck-BYmPeJrr.js";import{L as s}from"./LineChart-BmiaV5S7.js";import{L as c}from"./Line-BuVVGvA7.js";import{X as d}from"./XAxis-Sg_yoptQ.js";import{R as l}from"./RechartsHookInspector-Bh0xNYsg.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dwn4tBVe.js";import"./immer-CGr0ptDX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D-mKRVYc.js";import"./index-DU7ieidm.js";import"./hooks-DFTFZ2_R.js";import"./axisSelectors-xhLV-t5X.js";import"./d3-scale-T-qah3ml.js";import"./zIndexSlice-CuyQJUW0.js";import"./renderedTicksSlice-lC7cSHHa.js";import"./CartesianChart-BRe-Cj4k.js";import"./chartDataContext-zlvG9ShK.js";import"./CategoricalChart-Ct_zc7o_.js";import"./Layer-CzRXBUT9.js";import"./ReactUtils-C_PCtVqv.js";import"./Label-BuQHIgdG.js";import"./Text-xAwQNVqR.js";import"./DOMUtils-DBhHNbvA.js";import"./ZIndexLayer-C40yFkyN.js";import"./ActivePoints-qho3Mxiu.js";import"./Dot-BGQcGA8a.js";import"./types-DX1g5Szp.js";import"./RegisterGraphicalItemId-DlFEoDs3.js";import"./ErrorBarContext-CSlHUW5r.js";import"./GraphicalItemClipPath-Y2-czyRy.js";import"./SetGraphicalItem-Da_W53nM.js";import"./useAnimationId-CR73Z47T.js";import"./getRadiusAndStrokeWidthFromDot-DX4q2mcQ.js";import"./ActiveShapeUtils-DQggNROu.js";import"./isPlainObject-BHtqOomI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BoM2sg2T.js";import"./Trapezoid-02WGJX_U.js";import"./Sector-DNRZINVD.js";import"./Symbols-CZ1AA7rn.js";import"./symbol-DNGflvzo.js";import"./step-BIZ2Vv4e.js";import"./Curve--7RAEkWQ.js";import"./CartesianAxis-D42FnObu.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-UCZ6NmO8.js";import"./ChartSizeDimensions-Dx8qGUZW.js";import"./OffsetShower-6Dk3TPlH.js";import"./PlotAreaShower-CdNqGPUL.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
