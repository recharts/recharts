import{e as t}from"./iframe-DgFUiQiK.js";import{g as m}from"./arrayEqualityCheck-LPKQSaXm.js";import{L as s}from"./LineChart-xHlEUiUf.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CMbw1Ih0.js";import{X as l}from"./XAxis-CWlzFfKK.js";import{R as v}from"./RechartsHookInspector-BQ9yzd9s.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C_bUtyXy.js";import"./immer-Ca0Cy3ce.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Deqq_iXZ.js";import"./index-BBnacJAP.js";import"./hooks-CisH2h_f.js";import"./axisSelectors-Q9bQQnzw.js";import"./d3-scale-HhLt2ZCp.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-DXOhyCux.js";import"./renderedTicksSlice-CX5tvx9V.js";import"./CartesianChart-Br6s862c.js";import"./chartDataContext-BrtjpLFC.js";import"./CategoricalChart-vPZ8jvpO.js";import"./Layer-CKwu47GO.js";import"./Curve-Ba62GFgD.js";import"./types-D_oNXqce.js";import"./step-CFkmYg6i.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BOr9vF6Q.js";import"./Label-BFkeduE8.js";import"./Text-BqcFD908.js";import"./DOMUtils-DG_6devH.js";import"./ZIndexLayer-DZ2vjGZc.js";import"./useAnimationId-CCpHVl00.js";import"./ActivePoints-BorMl77e.js";import"./Dot-Dyh69QuB.js";import"./RegisterGraphicalItemId-fp2G-2V_.js";import"./ErrorBarContext-Ompx7WAJ.js";import"./GraphicalItemClipPath-Be4OXw7H.js";import"./SetGraphicalItem-CngLT_zh.js";import"./getRadiusAndStrokeWidthFromDot-D3y5duhQ.js";import"./ActiveShapeUtils-BELkaCyh.js";import"./CartesianAxis-n56eB7xd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-DgA4mNoJ.js";import"./ChartSizeDimensions-B1UuSRJB.js";import"./OffsetShower-BmC__2iI.js";import"./PlotAreaShower-CI2PfPEp.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,n)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:n,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
