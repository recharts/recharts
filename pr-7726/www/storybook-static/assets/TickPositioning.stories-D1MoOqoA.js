import{R as t}from"./iframe-BuZZ6Yg-.js";import{R as n}from"./zIndexSlice-D06YYCUt.js";import{L as s}from"./LineChart-DvBFaMZF.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-kFnHHkWn.js";import{X as l}from"./XAxis-CHYajWYc.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dl11hTdc.js";import"./index-WVpfO-Tt.js";import"./index-rOOSR0qU.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D5JsTaYp.js";import"./isWellBehavedNumber-D8DFMuKm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BK57Ddxz.js";import"./axisSelectors-BIwvgxsa.js";import"./d3-scale-BuRuIzVX.js";import"./index-pWAlhut8.js";import"./index-DEZgEKu_.js";import"./renderedTicksSlice-DeL7aSpi.js";import"./index-BFZDqkK3.js";import"./CartesianChart-D_6fxtY3.js";import"./chartDataContext-CcDIygPN.js";import"./CategoricalChart-4bcFYgeY.js";import"./Layer-DuZwtXeM.js";import"./Curve-Cr1UwGdj.js";import"./types-BpoBtvKZ.js";import"./step-CMi7Hoq0.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BSKa54qQ.js";import"./Label-Piq6p-kT.js";import"./Text-277W_4gY.js";import"./DOMUtils-C4sKZxSz.js";import"./useId-DaJNh8-T.js";import"./useBackwardsCompatibleTheme-bmPqm5mS.js";import"./ZIndexLayer-CVpPXR5C.js";import"./useAnimationId-BYxS0Ar5.js";import"./ActivePoints-emviVFUJ.js";import"./Dot-B1btJC39.js";import"./RegisterGraphicalItemId-BULnM1Vf.js";import"./ErrorBarContext-BnL_B67S.js";import"./GraphicalItemClipPath-iF12rDlU.js";import"./SetGraphicalItem-B24-ge-L.js";import"./getRadiusAndStrokeWidthFromDot-D4y7gXXI.js";import"./ActiveShapeUtils-DdHa4GQ_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-tEidUAUv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const nt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const st=["TickPositioning"];export{r as TickPositioning,st as __namedExportsOrder,nt as default};
