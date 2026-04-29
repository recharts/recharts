import{e as t}from"./iframe-BDbjAAY0.js";import{R as n}from"./arrayEqualityCheck-DJY85fxA.js";import{L as s}from"./LineChart-DotP5CnM.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-B--5SyW6.js";import{X as l}from"./XAxis-DCFLoNQ-.js";import{R as v}from"./RechartsHookInspector-l9vgHPs1.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D-Zx47ck.js";import"./immer-3ylQEXI_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Gh-MCRwt.js";import"./index-BhpTR8oZ.js";import"./hooks-C0v4GivV.js";import"./axisSelectors-DbWMAUln.js";import"./d3-scale-BNnaBGak.js";import"./zIndexSlice-CHJt3ZwD.js";import"./renderedTicksSlice-CKF1aMX1.js";import"./CartesianChart-CLKXkeKc.js";import"./chartDataContext-BKhnDKi8.js";import"./CategoricalChart-DHzD4_v9.js";import"./Layer-ChHYMtjc.js";import"./ReactUtils-BoM_s_He.js";import"./Label-CjqdpviA.js";import"./Text-BIZLV0ge.js";import"./DOMUtils-BrS2Cx0f.js";import"./ZIndexLayer-DzwMAaCJ.js";import"./ActivePoints-ChWVh6u7.js";import"./Dot-CKhpqWMa.js";import"./types-rcyNgq1E.js";import"./RegisterGraphicalItemId-C7xusUhZ.js";import"./ErrorBarContext-CdZbKyaL.js";import"./GraphicalItemClipPath-DAX0DDhK.js";import"./SetGraphicalItem-BNU0IRAh.js";import"./useAnimationId--rOGa3cY.js";import"./getRadiusAndStrokeWidthFromDot-DcUffzmW.js";import"./ActiveShapeUtils-NUFnhrmW.js";import"./isPlainObject-BaMZfXSR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D6qTYq9W.js";import"./Trapezoid-DbFTD1xK.js";import"./Sector-Bpj1QdoM.js";import"./Symbols-DjgjaJLS.js";import"./symbol-CPmvNDGT.js";import"./step-EtEDGKHl.js";import"./Curve-0uMvsclI.js";import"./CartesianAxis-Cy9ephC4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-s419WJjU.js";import"./ChartSizeDimensions-DpPbcXoW.js";import"./OffsetShower-0WW1yvr8.js";import"./PlotAreaShower-BpI_n9Qg.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
