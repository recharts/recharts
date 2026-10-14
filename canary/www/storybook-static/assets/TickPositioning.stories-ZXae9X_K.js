import{R as t}from"./iframe-Cy0y2ns8.js";import{R as m}from"./zIndexSlice-DIpYS2pc.js";import{L as s}from"./LineChart-CVnXD6Ls.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CTCpze3L.js";import{X as l}from"./XAxis-I6ByZryQ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-GHjNdOLX.js";import"./index-Cannfx1n.js";import"./index-MdLyaQUy.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-W2SA8EIl.js";import"./isWellBehavedNumber-BHC-xMw7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-tnntysZI.js";import"./axisSelectors-B794UmHN.js";import"./d3-scale-Bptb5_HU.js";import"./index-ed9S2gc_.js";import"./index-DMDvJQSi.js";import"./renderedTicksSlice-CcSlQNqm.js";import"./index-z8Y8cGgG.js";import"./CartesianChart-CkZRPVAF.js";import"./chartDataContext-_Lx0KL5V.js";import"./CategoricalChart-C4X2uKz7.js";import"./Layer-Dt1c85pW.js";import"./Curve-5eCLnpsK.js";import"./types-es-lSoS7.js";import"./step-aUPxj0fJ.js";import"./path-DyVhHtw_.js";import"./activeStyles-Cnxc9Yt_.js";import"./Label-VahG2YbD.js";import"./Text-CR6ssGu_.js";import"./pageBackground-C3xeFLUy.js";import"./useId-DoEOHgvO.js";import"./useBackwardsCompatibleTheme-DoDvRsUd.js";import"./ZIndexLayer-DfeIwWxW.js";import"./useAnimationId-DaE5gtmK.js";import"./dataEntryStyles-D42MsVUE.js";import"./ActivePoints-B8MUv4SH.js";import"./Dot-BhegBlK5.js";import"./ErrorBarContext-Cwi5XQfL.js";import"./GraphicalItemClipPath-ANLjpQPo.js";import"./SetGraphicalItem-jtlbfoJE.js";import"./getRadiusAndStrokeWidthFromDot-BVS64Mww.js";import"./ActiveShapeUtils-XGy6Fbre.js";import"./useEffectiveDataKey-BEJg52qX.js";import"./CartesianAxis-DZCowAwb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,st as __namedExportsOrder,mt as default};
