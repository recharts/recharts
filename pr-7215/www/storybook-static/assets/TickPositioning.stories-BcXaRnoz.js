import{e as t}from"./iframe-Cag7wSRv.js";import{g as m}from"./arrayEqualityCheck-DIS5wzHQ.js";import{L as s}from"./LineChart-xYtqufeh.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DfIGhKaB.js";import{X as l}from"./XAxis-DXJVCfkD.js";import{R as v}from"./RechartsHookInspector-BY5Jlwrh.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Xc1HLF5N.js";import"./immer-284wn8VQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BwHua0WY.js";import"./index-g0QlUGKs.js";import"./hooks-BrXnztNy.js";import"./axisSelectors-m8f3aizN.js";import"./d3-scale-e6S4jaCB.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-D-tflLzN.js";import"./renderedTicksSlice-CDJVjsUp.js";import"./CartesianChart-z1NmO9ak.js";import"./chartDataContext-WcgYQIEB.js";import"./CategoricalChart-CRN8hCqy.js";import"./Layer-BKYLP7Ft.js";import"./Curve-DBPrYDrF.js";import"./types-VwRdPpC4.js";import"./step-CkDKckf6.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CluPQFSi.js";import"./Label-C9zkgYEJ.js";import"./Text-5aD9nx6b.js";import"./DOMUtils-BK1rzgLA.js";import"./ZIndexLayer-DmSAjehE.js";import"./useAnimationId-DTrmZnPm.js";import"./ActivePoints-CnGlv9Fu.js";import"./Dot-DnmND_ux.js";import"./RegisterGraphicalItemId-CXcdRHxm.js";import"./ErrorBarContext-CXe2vi8A.js";import"./GraphicalItemClipPath-BLjl5NXz.js";import"./SetGraphicalItem-UxGNHPNY.js";import"./getRadiusAndStrokeWidthFromDot-BiYvEIsX.js";import"./ActiveShapeUtils-36BEpEpw.js";import"./CartesianAxis-BO6A-dYS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BKRpgk4a.js";import"./ChartSizeDimensions-DvhfRAM1.js";import"./OffsetShower-_fcX7Can.js";import"./PlotAreaShower-DCoj4aUc.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,n)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:n,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
