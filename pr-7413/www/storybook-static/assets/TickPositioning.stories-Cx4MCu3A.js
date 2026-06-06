import{R as t}from"./iframe-C2BX5KlG.js";import{R as m}from"./zIndexSlice-CxPEcPAu.js";import{L as s}from"./LineChart-M3CfzZIj.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DLZXl40V.js";import{X as l}from"./XAxis-DVvf2cjO.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CvWW5aeq.js";import"./index-BGPmBimQ.js";import"./index-COSvD7ew.js";import"./get-CAfMQs0q.js";import"./resolveDefaultProps-BYCxJvcu.js";import"./isWellBehavedNumber-DmYLFUk5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D59koTZo.js";import"./index-mM7HvUIP.js";import"./index-B4ncEIHG.js";import"./renderedTicksSlice-u_9WNmNI.js";import"./axisSelectors-CMoKJGYW.js";import"./d3-scale-CWyzRMoK.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BUqQYDbS.js";import"./chartDataContext-BBtoeQBI.js";import"./CategoricalChart-wPXQ1QrH.js";import"./Layer-Y7EAuX4r.js";import"./Curve-skm-derQ.js";import"./types-Bzm0K4Xv.js";import"./step-CaZe8v-k.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-a4bz34sF.js";import"./Label-BtHuGICT.js";import"./Text-D33SlXvN.js";import"./DOMUtils-DjP-hpRu.js";import"./ZIndexLayer-DXknjapM.js";import"./useAnimationId-By3GmLUa.js";import"./ActivePoints-BR22gwdA.js";import"./Dot-MNln9N_X.js";import"./RegisterGraphicalItemId-D-0LsKMM.js";import"./ErrorBarContext-Dxkwh2s-.js";import"./GraphicalItemClipPath-BeTilTZu.js";import"./SetGraphicalItem-BLppYw7V.js";import"./getRadiusAndStrokeWidthFromDot-BpkcLqmS.js";import"./ActiveShapeUtils-8DISroY0.js";import"./CartesianAxis-1gCJxPwk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const at=["TickPositioning"];export{r as TickPositioning,at as __namedExportsOrder,ot as default};
