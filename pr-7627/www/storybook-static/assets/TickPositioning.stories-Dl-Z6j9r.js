import{R as t}from"./iframe-BYCrCSPO.js";import{R as m}from"./zIndexSlice-DfD_-yb8.js";import{L as s}from"./LineChart-SPLgLygw.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-I8NQ2nSn.js";import{X as l}from"./XAxis-3U1NuGne.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CwGaa8bA.js";import"./index-CduSCjJO.js";import"./index-DeTARG9l.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C_hnhA8j.js";import"./isWellBehavedNumber-CtO4Dltx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-1VDCfeR5.js";import"./index-B9LnnU9V.js";import"./index-CO8tfkky.js";import"./axisSelectors-DCnkJbPP.js";import"./d3-scale-CNobyPqZ.js";import"./renderedTicksSlice-D3LgmkWg.js";import"./CartesianChart-D_hO4lZa.js";import"./chartDataContext-BmXIjLQW.js";import"./CategoricalChart-DdsYRdkY.js";import"./Layer-B3NuQ3iV.js";import"./Curve-BSapy3_T.js";import"./types-FnkeMo1L.js";import"./step-C66rBaoI.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B1rFvs0f.js";import"./Label-KQ9JDhJq.js";import"./Text-C7UGFNRC.js";import"./DOMUtils-_2tJTcuL.js";import"./ZIndexLayer-DS2x7pWW.js";import"./useAnimationId-BrMFsthS.js";import"./ActivePoints-BBy5laGi.js";import"./Dot-DcT0usF1.js";import"./RegisterGraphicalItemId-QO0ldivF.js";import"./ErrorBarContext-P2qv3dNI.js";import"./GraphicalItemClipPath-Co8e0UKg.js";import"./SetGraphicalItem-BOoa7F9Y.js";import"./getRadiusAndStrokeWidthFromDot-RcpXGE2w.js";import"./ActiveShapeUtils-DetheFMa.js";import"./RechartsThemeContext-BUhvh7zS.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-DLhz-nrZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,pt as default};
