import{e as t}from"./iframe-Dv2EI0Ju.js";import{R as n}from"./arrayEqualityCheck-D1mGNef5.js";import{L as s}from"./LineChart-gmmE4fgf.js";import{L as c}from"./Line-DPY8_MLp.js";import{X as d}from"./XAxis-BxPBpU10.js";import{R as l}from"./RechartsHookInspector-CyibsFS2.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BAehELTf.js";import"./immer-C8dYrQHT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-bNtyFajX.js";import"./index-Bc1bjXU3.js";import"./hooks-CFaXLGcT.js";import"./axisSelectors-DnSj8kaj.js";import"./d3-scale-Bcv8ayB1.js";import"./zIndexSlice-bRjNTWyo.js";import"./renderedTicksSlice-C1FuEPzK.js";import"./CartesianChart-BH7dqpan.js";import"./chartDataContext-BhR7gaS3.js";import"./CategoricalChart-rOoRnQL6.js";import"./Layer-DEwUBVRy.js";import"./ReactUtils-CPqsARhu.js";import"./Label-CoVOGhvs.js";import"./Text-C-pvoFVV.js";import"./DOMUtils-CeCikA4p.js";import"./ZIndexLayer-yLy7ki0K.js";import"./ActivePoints-BQmOz7QA.js";import"./Dot-BMVkC3H5.js";import"./types-BOTa8dCr.js";import"./RegisterGraphicalItemId-Dt1T6Nvh.js";import"./ErrorBarContext-TBQU4_4Y.js";import"./GraphicalItemClipPath-QbozzGmj.js";import"./SetGraphicalItem-CO0LpAHO.js";import"./useAnimationId-CFJ1HB8y.js";import"./getRadiusAndStrokeWidthFromDot-fpMjLcGn.js";import"./ActiveShapeUtils-BasgF1mW.js";import"./isPlainObject-INKspUfV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DYsgtCMq.js";import"./Trapezoid-D6Z4JPgp.js";import"./Sector-D8FF4WXP.js";import"./Symbols-Ol_rIUwX.js";import"./symbol-CAp9PJmI.js";import"./step-CXEpNkoj.js";import"./Curve-BYfhifTo.js";import"./CartesianAxis-Ci9kjPzN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BQUBjWw-.js";import"./ChartSizeDimensions-BOSou-B6.js";import"./OffsetShower-Df0dFfne.js";import"./PlotAreaShower-CPcJGB3D.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
