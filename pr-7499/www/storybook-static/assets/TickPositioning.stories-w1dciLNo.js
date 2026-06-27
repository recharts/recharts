import{R as t}from"./iframe-s6xAG-TK.js";import{R as m}from"./zIndexSlice-CtX8Pm57.js";import{L as s}from"./LineChart-xgCKS7qA.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CJL0J86Q.js";import{X as l}from"./XAxis-ILbWypkw.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BuLmScwe.js";import"./index-C431joee.js";import"./index-ClUWeLMF.js";import"./get-BoCVnOHD.js";import"./resolveDefaultProps-DFiMRXbi.js";import"./isWellBehavedNumber-DWpsZI7G.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-NYzcnM5V.js";import"./index-T8sAqFhz.js";import"./index-BrFiGA_R.js";import"./renderedTicksSlice-iMX2N49n.js";import"./axisSelectors-w5mwcrs7.js";import"./d3-scale-B4pAi3sm.js";import"./CartesianChart-B3y1BcT9.js";import"./chartDataContext-CYY09pFO.js";import"./CategoricalChart-DLOwP-Jg.js";import"./Layer-D5OpM5xs.js";import"./Curve-BmhK5pW4.js";import"./types-DdoD64CJ.js";import"./step-DcuFANAi.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BLpXLA7r.js";import"./Label-Dp2fRDxb.js";import"./Text-9u_bHJZt.js";import"./DOMUtils-Dzx6jDk6.js";import"./ZIndexLayer-DbooohNT.js";import"./useAnimationId-BfD45VPw.js";import"./ActivePoints-CifW1zG8.js";import"./Dot-uO_lT4NP.js";import"./RegisterGraphicalItemId-irkeH_pD.js";import"./ErrorBarContext-Df3lolWT.js";import"./GraphicalItemClipPath-PteXji-2.js";import"./SetGraphicalItem-BaveM8kS.js";import"./getRadiusAndStrokeWidthFromDot-kUCtaSTN.js";import"./ActiveShapeUtils-BRE298QS.js";import"./CartesianAxis-Bzfqb5iI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
