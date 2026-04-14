import{e as t}from"./iframe-CLmjlzb1.js";import{R as n}from"./arrayEqualityCheck-B4wm4mzq.js";import{L as s}from"./LineChart-Buhq3iNJ.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DGTUW3Zm.js";import{X as l}from"./XAxis-BfN6o_IU.js";import{R as v}from"./RechartsHookInspector-BixZoynz.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DfSSEgX9.js";import"./immer-BRhk69FB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cuidzjs6.js";import"./index-Du-W5DOH.js";import"./hooks-d-SQKimb.js";import"./axisSelectors-BSjiqA5G.js";import"./d3-scale-Cfbd6Yba.js";import"./zIndexSlice-ENrbLBpP.js";import"./renderedTicksSlice-7exySQiY.js";import"./CartesianChart-BmEkTPS6.js";import"./chartDataContext-8FmNdAi4.js";import"./CategoricalChart-Cd_MTwuC.js";import"./Layer-B8Y-IGwU.js";import"./ReactUtils-D_M8UzUW.js";import"./Label-5j72dgYu.js";import"./Text-yZ4aTas7.js";import"./DOMUtils-BTzSUo1_.js";import"./ZIndexLayer-B_c6eilm.js";import"./ActivePoints-CJhScI-d.js";import"./Dot-CmmvI3p6.js";import"./types-CPZMLz1x.js";import"./RegisterGraphicalItemId-C1ifoo0F.js";import"./ErrorBarContext-CwN8tpsm.js";import"./GraphicalItemClipPath-DB5whV9z.js";import"./SetGraphicalItem-BreTABoz.js";import"./useAnimationId-DS-J4iW4.js";import"./getRadiusAndStrokeWidthFromDot-Dkw_fQYH.js";import"./ActiveShapeUtils-D95D5Icg.js";import"./isPlainObject-VurimMcN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CG_TffJC.js";import"./Trapezoid-Cu-zNPNg.js";import"./Sector-kWP0DhnI.js";import"./Symbols-CXcyzyAh.js";import"./symbol-CD9uivpb.js";import"./step-B08msyNS.js";import"./Curve-C2JnH5yk.js";import"./CartesianAxis-4_WgxG81.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-D8lwKlWX.js";import"./ChartSizeDimensions-DPxIvg36.js";import"./OffsetShower-J2qKkSVX.js";import"./PlotAreaShower-BflxX8Fl.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
