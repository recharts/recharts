import{e as t}from"./iframe-CPCZOK1n.js";import{R as n}from"./arrayEqualityCheck-8pkbG_5i.js";import{L as s}from"./LineChart-DcWMl4XS.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CGyBz7yI.js";import{X as l}from"./XAxis-DvE2ctn8.js";import{R as v}from"./RechartsHookInspector-BtGo_ncg.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-oWFt7rla.js";import"./immer-BU-gze6F.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-kO2YHyse.js";import"./index-DASNqNcn.js";import"./hooks-BA_spPLW.js";import"./axisSelectors-BKubAPhx.js";import"./d3-scale-Bak8-ygn.js";import"./zIndexSlice-CzIf2J47.js";import"./renderedTicksSlice-CpVIhZJh.js";import"./CartesianChart-COi-Fufa.js";import"./chartDataContext-DQ34TJEj.js";import"./CategoricalChart-DA_LUwfH.js";import"./Layer-DgSzLvrX.js";import"./ReactUtils-CSglJ9G5.js";import"./Label-CTXaFaVv.js";import"./Text-Cl6E4AYb.js";import"./DOMUtils-C8mAxLIU.js";import"./ZIndexLayer-PN2_dLzy.js";import"./ActivePoints-MCeE4Hpe.js";import"./Dot-Drgga1HN.js";import"./types-tTbnguye.js";import"./RegisterGraphicalItemId-C7ZsFXSM.js";import"./ErrorBarContext-Cm1Er5q-.js";import"./GraphicalItemClipPath-D7ojsTyF.js";import"./SetGraphicalItem-Cdrd-n17.js";import"./useAnimationId-BOEFbdDG.js";import"./getRadiusAndStrokeWidthFromDot-DT85GWcH.js";import"./ActiveShapeUtils-BsAVSgeR.js";import"./isPlainObject-hFLIJzKO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BBBYhjQV.js";import"./Trapezoid-t3_zdwFX.js";import"./Sector-BjRPzYK4.js";import"./Symbols-BRdBssbX.js";import"./symbol-hTM2V_3p.js";import"./step-B2es0Z9s.js";import"./Curve-Bm35dzge.js";import"./CartesianAxis-hOqGK2-F.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CZMWO916.js";import"./ChartSizeDimensions-DT2M52ae.js";import"./OffsetShower-DYRUehRC.js";import"./PlotAreaShower-CM2fQjBs.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
