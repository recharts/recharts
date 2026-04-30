import{e as t}from"./iframe-BvixMVLJ.js";import{R as n}from"./arrayEqualityCheck-9JafNuHb.js";import{L as s}from"./LineChart-xOkCIs0R.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-D2x4yot2.js";import{X as l}from"./XAxis-DccioUx7.js";import{R as v}from"./RechartsHookInspector-B7OCtou7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CPqr6DGH.js";import"./immer-CaX280hR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B9hDtRNp.js";import"./index-4u6l2t3f.js";import"./hooks-CmxNexDu.js";import"./axisSelectors-CZAHgbVu.js";import"./d3-scale-DvCQBID5.js";import"./zIndexSlice-Dt-OH-0J.js";import"./renderedTicksSlice-Bakbxnfn.js";import"./CartesianChart-C8rmaTr8.js";import"./chartDataContext-H28vHODo.js";import"./CategoricalChart-B9R3Zf2d.js";import"./Layer-E6_PJRcD.js";import"./ReactUtils-CX2Z3mNI.js";import"./Label-2bgwwMrL.js";import"./Text-eQ3pJOEs.js";import"./DOMUtils-DEgurZZA.js";import"./ZIndexLayer-BQCBZf3p.js";import"./ActivePoints-B9v85k-m.js";import"./Dot-BBC1jxnt.js";import"./types-C4LPRE4X.js";import"./RegisterGraphicalItemId-BfUUoebv.js";import"./ErrorBarContext-CY1gh6Fr.js";import"./GraphicalItemClipPath-CqZBK23Z.js";import"./SetGraphicalItem-D9gH1oTH.js";import"./useAnimationId-BG6xyOIZ.js";import"./getRadiusAndStrokeWidthFromDot-D5L1c2bL.js";import"./ActiveShapeUtils-DIK_h4fj.js";import"./isPlainObject-Bwvz8CoG.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CIrtZjOU.js";import"./Trapezoid-zjet3lxO.js";import"./Sector-CuxTQcgV.js";import"./Symbols-Bp2oN4pa.js";import"./symbol-I_8-paOM.js";import"./step-DGFNdhZX.js";import"./Curve-D-7l7mPW.js";import"./CartesianAxis-Bc1lTLgz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CWh6xOze.js";import"./ChartSizeDimensions-j35P-O-9.js";import"./OffsetShower-DT-VFUR7.js";import"./PlotAreaShower-v_ea9rYC.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
