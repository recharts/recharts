import{e as t}from"./iframe-DkLawzFT.js";import{R as n}from"./arrayEqualityCheck-D3l_Six5.js";import{L as s}from"./LineChart-SbKxO_Xd.js";import{L as c}from"./Line-CZNl7Zx1.js";import{X as d}from"./XAxis-Bhs0VEqV.js";import{R as l}from"./RechartsHookInspector-CP5-3lHb.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BrteeSnw.js";import"./immer-BgQ6ewOL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ZZ9SYGf8.js";import"./index-BAEjUqpG.js";import"./hooks-mxsXvsXQ.js";import"./axisSelectors-WJrRsxNm.js";import"./d3-scale-CQPtLnPq.js";import"./zIndexSlice-D7gaPfmN.js";import"./renderedTicksSlice-CxLVT98p.js";import"./CartesianChart-B_kqxRby.js";import"./chartDataContext-BQhtyhGa.js";import"./CategoricalChart-ClWY8mqV.js";import"./Layer-D1t_xfer.js";import"./ReactUtils-0q8uPUdp.js";import"./Label-B8g-EXnh.js";import"./Text-Cnf9BrSi.js";import"./DOMUtils-CeS2jzYu.js";import"./ZIndexLayer-BzQ04t8l.js";import"./ActivePoints-Fx_zKUSB.js";import"./Dot-Dka2WOg7.js";import"./types-BodbCBWC.js";import"./RegisterGraphicalItemId-Sw1cCXMw.js";import"./ErrorBarContext-BlXGa7jj.js";import"./GraphicalItemClipPath-BMzTlgpv.js";import"./SetGraphicalItem-CQ9RSPfd.js";import"./useAnimationId-ndVuSCuU.js";import"./getRadiusAndStrokeWidthFromDot-CfgE0Jeh.js";import"./ActiveShapeUtils-CYrS0ywm.js";import"./isPlainObject-Dna09QVC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BmL8vsSC.js";import"./Trapezoid-DgQekCnf.js";import"./Sector-CQDhqwWL.js";import"./Symbols-BESx1iMX.js";import"./symbol-yD_N7Rt-.js";import"./step-BKMOa0zg.js";import"./Curve-BHXnsRVh.js";import"./CartesianAxis-B2aKO3V6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-ClmqdCp3.js";import"./ChartSizeDimensions-sxZZm2vK.js";import"./OffsetShower-Bbq9KY1d.js";import"./PlotAreaShower-BpZ3JX6M.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
