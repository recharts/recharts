import{e as t}from"./iframe-B82KKzsZ.js";import{R as n}from"./arrayEqualityCheck-Cg0idRhp.js";import{L as s}from"./LineChart-CnOCWngC.js";import{L as c}from"./Line-FhoCkSnF.js";import{X as d}from"./XAxis-EvgP7bI2.js";import{R as l}from"./RechartsHookInspector-Dn_N91Ha.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cz2WpobP.js";import"./immer-Cjr4YINx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dy52E8zA.js";import"./index-BPhr2cwx.js";import"./hooks-C_Bk0iWL.js";import"./axisSelectors-BlY0RvlZ.js";import"./d3-scale-gdEhlQZC.js";import"./zIndexSlice-DoZOUHwV.js";import"./renderedTicksSlice-D6QyWwDV.js";import"./CartesianChart-DjM6_Ohn.js";import"./chartDataContext-BVeH-QEp.js";import"./CategoricalChart-BF433tP-.js";import"./Layer-ug_gWv5Y.js";import"./ReactUtils-CyWe8bPC.js";import"./Label-CoPQcGVn.js";import"./Text-C1AVdMVq.js";import"./DOMUtils-DQZy4jxA.js";import"./ZIndexLayer-CCx46f1u.js";import"./ActivePoints-Bp-xuhXe.js";import"./Dot-BzE5qBfr.js";import"./types-DaFthwO7.js";import"./RegisterGraphicalItemId-tJqvGPQR.js";import"./ErrorBarContext-DSt7HMag.js";import"./GraphicalItemClipPath-Chx7G7zK.js";import"./SetGraphicalItem-BNPEWY7y.js";import"./useAnimationId-BjMwuZHe.js";import"./getRadiusAndStrokeWidthFromDot-VGAN5l6V.js";import"./ActiveShapeUtils-CrpulZpz.js";import"./isPlainObject-6AK1zo7x.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C-qAHqHP.js";import"./Trapezoid-CL1eg36a.js";import"./Sector-SPbT55o6.js";import"./Symbols-dztR1yZz.js";import"./symbol-Djdr0qU4.js";import"./step-D_vNME6r.js";import"./Curve-BsV_hxX6.js";import"./CartesianAxis-DURtsiuN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BDwCI-pI.js";import"./ChartSizeDimensions-DGlceztD.js";import"./OffsetShower-BguOTWfQ.js";import"./PlotAreaShower-CC5s-Y7u.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
