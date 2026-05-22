import{e as t}from"./iframe-CagDbm-R.js";import{g as m}from"./arrayEqualityCheck-Bn08yLiN.js";import{L as s}from"./LineChart-Bk45umwU.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DjE5KLPa.js";import{X as l}from"./XAxis-CyILEj33.js";import{R as v}from"./RechartsHookInspector-pMEJlnqX.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BrU5Uy_m.js";import"./immer-DWuco0BF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DdluFIAh.js";import"./index-DXI37oHl.js";import"./hooks-DvlDA_Iq.js";import"./axisSelectors-Cqpe6Z2t.js";import"./d3-scale-BKLsEBZa.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-Tvm87iuX.js";import"./renderedTicksSlice-71Fk0cz1.js";import"./CartesianChart-BXvauOXS.js";import"./chartDataContext-DU5Nphzy.js";import"./CategoricalChart-DAMUlb45.js";import"./Layer-D2JglvMB.js";import"./Curve-DbLnFn1T.js";import"./types-D2ON-SRi.js";import"./step-CjVrG-vW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-HQORsnaH.js";import"./Label-COowhm97.js";import"./Text-BNs6VPhb.js";import"./DOMUtils-Bw-DvePw.js";import"./ZIndexLayer-BqsAA_KH.js";import"./useAnimationId-BEBp-SWr.js";import"./ActivePoints-DbdvGaCl.js";import"./Dot-BHIp2EY6.js";import"./RegisterGraphicalItemId-WhTYY9X4.js";import"./ErrorBarContext-txnn70dD.js";import"./GraphicalItemClipPath-DMoOkNN1.js";import"./SetGraphicalItem-aSNUvlix.js";import"./getRadiusAndStrokeWidthFromDot-B6ftvxTH.js";import"./ActiveShapeUtils-4DOuAOib.js";import"./CartesianAxis-6zuZSvBM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BDeX6XER.js";import"./ChartSizeDimensions-DNx0LPdc.js";import"./OffsetShower-BNTdFgyM.js";import"./PlotAreaShower-B8l1iW5J.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,n)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:n,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const st=["TickPositioning"];export{r as TickPositioning,st as __namedExportsOrder,mt as default};
