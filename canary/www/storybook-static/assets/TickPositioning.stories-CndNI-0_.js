import{R as t}from"./iframe-Ca9zq6-c.js";import{R as m}from"./zIndexSlice-CR-xpxM6.js";import{L as s}from"./LineChart-kjNqkyy3.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-C7QEoVzF.js";import{X as l}from"./XAxis-BXUxDWml.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BRLk8fdE.js";import"./index-BtFF0BK3.js";import"./index-D-6jHIBZ.js";import"./get-CVL7Gg7t.js";import"./resolveDefaultProps-aQu_YsJN.js";import"./isWellBehavedNumber-CqGPlgER.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CaG48vMC.js";import"./index-oZCeDex2.js";import"./index-FbuB2ssV.js";import"./renderedTicksSlice-g-m8sL3N.js";import"./axisSelectors-CKheeyoe.js";import"./d3-scale-BmqB7fOq.js";import"./CartesianChart-CCrg56CU.js";import"./chartDataContext-Bliq4f83.js";import"./CategoricalChart-DP-UXbjk.js";import"./Curve-G2tp0Yan.js";import"./types-DL0DYnfp.js";import"./step-D387uCSJ.js";import"./path-DyVhHtw_.js";import"./Layer-D2dY01rr.js";import"./ReactUtils-CQ3qeCfU.js";import"./Label-Dc6nn1YN.js";import"./Text-BceZOupb.js";import"./DOMUtils-CWZfW9Q5.js";import"./ZIndexLayer-N_1TQ7Pc.js";import"./ActivePoints-BmtaSDFt.js";import"./Dot-DVfqq-WH.js";import"./RegisterGraphicalItemId-BlhUjcl6.js";import"./ErrorBarContext-BNMjRvsS.js";import"./GraphicalItemClipPath-CL4eJ5Gf.js";import"./SetGraphicalItem-DuOLtcMc.js";import"./useAnimationId-DX_MO7p4.js";import"./getRadiusAndStrokeWidthFromDot-D0JPsbB9.js";import"./ActiveShapeUtils-zHL_kIK3.js";import"./CartesianAxis-Cdin4D0O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ot=["TickPositioning"];export{r as TickPositioning,ot as __namedExportsOrder,it as default};
