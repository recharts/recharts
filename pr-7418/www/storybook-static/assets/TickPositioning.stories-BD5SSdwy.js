import{R as t}from"./iframe-B32UfMsX.js";import{R as m}from"./zIndexSlice-DkyNtvIV.js";import{L as s}from"./LineChart-DeauXXCJ.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Bf6u9d83.js";import{X as l}from"./XAxis-DsOSB3OX.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BidytqCU.js";import"./index-BAP72phy.js";import"./index-wjzF3nV2.js";import"./get-CT3OO5rn.js";import"./resolveDefaultProps-SHHlCQDD.js";import"./isWellBehavedNumber-B3ho9k16.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BXDb61uY.js";import"./index-DzoQc6cZ.js";import"./index-Q93duC2Q.js";import"./renderedTicksSlice-DtIdXCHL.js";import"./axisSelectors-B8hXjmBG.js";import"./d3-scale-BwqG5DLv.js";import"./string-B6fdYHAA.js";import"./CartesianChart-s4vgD_mJ.js";import"./chartDataContext-d3sJv4oK.js";import"./CategoricalChart-svLbPFL5.js";import"./Layer-M7lMUPI2.js";import"./Curve-BQ-BZdGC.js";import"./types-BFdTLIuF.js";import"./step-DXYrSD7K.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CWOjCZuo.js";import"./Label-Ba3mw93_.js";import"./Text-DenoxlLY.js";import"./DOMUtils-qhHnbbUp.js";import"./ZIndexLayer-DIk8UPq9.js";import"./useAnimationId-kKOEl60u.js";import"./ActivePoints-BOP5iqzh.js";import"./Dot-oj-oSIki.js";import"./RegisterGraphicalItemId-BPd8SjvM.js";import"./ErrorBarContext-CC6gZVl6.js";import"./GraphicalItemClipPath-DtFSmlFx.js";import"./SetGraphicalItem-CLuszb-H.js";import"./getRadiusAndStrokeWidthFromDot-BZUf4vDk.js";import"./ActiveShapeUtils-rTJK82Vs.js";import"./CartesianAxis-CrAWHyC2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
