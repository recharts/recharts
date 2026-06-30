import{R as t}from"./iframe-DJHXlrGw.js";import{R as m}from"./zIndexSlice-CFaJnUYw.js";import{L as s}from"./LineChart-Cs7y5ZNA.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-B15qEuth.js";import{X as l}from"./XAxis-Bazc91VB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DAd10cPx.js";import"./index-BPz6-png.js";import"./index-DwRJQzwD.js";import"./get-j_9LvNGC.js";import"./resolveDefaultProps-CeQOO-Pe.js";import"./isWellBehavedNumber-Czb4zvRP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DkeMmjUq.js";import"./index-DwS8J4hC.js";import"./index-Be4tbGBe.js";import"./renderedTicksSlice-BKsRhTz6.js";import"./axisSelectors-ClcXvPv0.js";import"./d3-scale-DpYCNPeY.js";import"./CartesianChart-BtZogvmq.js";import"./chartDataContext-CJXmJdS8.js";import"./CategoricalChart-BtoYqjdS.js";import"./Layer-DZpjcI0F.js";import"./Curve-Dw1fPQvk.js";import"./types-vAWUzS0M.js";import"./step-vGwa_xXj.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BgKM4093.js";import"./Label-R2VOv6mw.js";import"./Text-CRISoaMT.js";import"./DOMUtils-R0ltg_fS.js";import"./ZIndexLayer-KkfMfF_A.js";import"./useAnimationId-CR2wKsf0.js";import"./ActivePoints-ChuwA-C_.js";import"./Dot-C_JeniDT.js";import"./RegisterGraphicalItemId-Dmdqk05n.js";import"./ErrorBarContext-DLSy_XzC.js";import"./GraphicalItemClipPath-Cd-sqkad.js";import"./SetGraphicalItem-BYhVDRYC.js";import"./getRadiusAndStrokeWidthFromDot-WrvxTCng.js";import"./ActiveShapeUtils-CSLmPB1h.js";import"./CartesianAxis-CkFZLbcD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
