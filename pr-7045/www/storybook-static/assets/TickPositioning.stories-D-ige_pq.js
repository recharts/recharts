import{e as t}from"./iframe-8sIubbdi.js";import{R as n}from"./arrayEqualityCheck-DbCj9c-Y.js";import{L as s}from"./LineChart-CAnolgxO.js";import{L as c}from"./Line-CH8gt70I.js";import{X as d}from"./XAxis-IWyMdbO5.js";import{R as l}from"./RechartsHookInspector-AlYSKZYm.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DuCQFLVY.js";import"./immer-BT2n2B7O.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D30EcdBX.js";import"./index-CbU0dTJ6.js";import"./hooks-D_DW5Oi2.js";import"./axisSelectors-DxwSejiD.js";import"./d3-scale-DEnCLOEW.js";import"./zIndexSlice-VsYA40So.js";import"./renderedTicksSlice-CfkkEf9Z.js";import"./CartesianChart-CXlojrwJ.js";import"./chartDataContext-4cME9qvC.js";import"./CategoricalChart-C7NQof8g.js";import"./Layer-BRXiwqet.js";import"./ReactUtils-BXvpQNi2.js";import"./Label-DilR1ra4.js";import"./Text-3TK1Y5vF.js";import"./DOMUtils-DytWm70I.js";import"./ZIndexLayer-Ts04gVrK.js";import"./ActivePoints-KfMw2aSf.js";import"./Dot-TuBc5AFD.js";import"./types-Bp02LWfB.js";import"./RegisterGraphicalItemId-Cm3HEb7M.js";import"./ErrorBarContext-bky3Fevr.js";import"./GraphicalItemClipPath-C8kD9Qqm.js";import"./SetGraphicalItem-CsZep-cL.js";import"./useAnimationId-De5EZ4DF.js";import"./getRadiusAndStrokeWidthFromDot-7blQF-c9.js";import"./ActiveShapeUtils---ZXszSA.js";import"./isPlainObject-rB9NvpQh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-2TS-ysJA.js";import"./Trapezoid-DG6NQ2ho.js";import"./Sector-CO7y0BXS.js";import"./Symbols-DYzrjJ12.js";import"./symbol-CzQ70XR0.js";import"./step-CjuXRgh8.js";import"./Curve-BZpcUU-T.js";import"./CartesianAxis-DgCpBkCM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-QIusEcOA.js";import"./ChartSizeDimensions-B-IxYWC1.js";import"./OffsetShower-CFWyxT0Z.js";import"./PlotAreaShower-CXMf_89y.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
