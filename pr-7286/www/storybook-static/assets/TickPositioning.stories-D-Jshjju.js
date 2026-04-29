import{e as t}from"./iframe-Nsc2sN17.js";import{R as n}from"./arrayEqualityCheck-D9Zyw2Zw.js";import{L as s}from"./LineChart-Vx-8aySN.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BY3dOxaM.js";import{X as l}from"./XAxis-DyA8Ake-.js";import{R as v}from"./RechartsHookInspector-DiJs5DhW.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-gmbWhtkI.js";import"./immer-DLWrz67V.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ckv5DlpI.js";import"./index-BHVPN82s.js";import"./hooks-C0EC2ajp.js";import"./axisSelectors-QpAjWyBl.js";import"./d3-scale-CHgSPW8E.js";import"./zIndexSlice-CNqGo6m1.js";import"./renderedTicksSlice-CYv0XDQO.js";import"./CartesianChart-CYxY5vz3.js";import"./chartDataContext-C4GxecVY.js";import"./CategoricalChart-Br-qLSqo.js";import"./Layer-B6Mh8xHG.js";import"./ReactUtils-SHh5MmVx.js";import"./Label-DZXeJJGm.js";import"./Text-DiHUiXMK.js";import"./DOMUtils-P4LKJ49W.js";import"./ZIndexLayer-Czi-cF3Q.js";import"./ActivePoints-CcWtEpvO.js";import"./Dot-BFU4rXWL.js";import"./types-DgV3fJv5.js";import"./RegisterGraphicalItemId-QStBr5Ie.js";import"./ErrorBarContext-BXu4nXIY.js";import"./GraphicalItemClipPath-2cdy-pu2.js";import"./SetGraphicalItem-DiLWJVic.js";import"./useAnimationId-D34EikED.js";import"./getRadiusAndStrokeWidthFromDot-OoBawEuA.js";import"./ActiveShapeUtils-j_PWExYP.js";import"./isPlainObject-WYrKXhh8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CaywoHil.js";import"./Trapezoid-BwRKBAFI.js";import"./Sector-DfnrbS26.js";import"./Symbols-eFyCyhDx.js";import"./symbol-DFqSkUaY.js";import"./step-BW4WvIvQ.js";import"./Curve-DvjoiG0X.js";import"./CartesianAxis-C30xEFKB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CbA-Jv17.js";import"./ChartSizeDimensions-B1kQCCeW.js";import"./OffsetShower-Csp2K6dU.js";import"./PlotAreaShower-LkFt_opJ.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
