import{R as t}from"./iframe-ClcrwGuW.js";import{R as m}from"./zIndexSlice-BIGnlmU8.js";import{L as s}from"./LineChart-BymBWjuL.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-A183MaDD.js";import{X as l}from"./XAxis-DBark8Vy.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CCS8xgZt.js";import"./index-2ZX0-Izg.js";import"./index-CDmIxHtk.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-9pIX-KZX.js";import"./isWellBehavedNumber-DdPJLAK-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BesFJ4ht.js";import"./index-B0NRpt-4.js";import"./index-DNzarm0L.js";import"./renderedTicksSlice-rMv3D_T6.js";import"./axisSelectors-BOLsAE8g.js";import"./d3-scale-CMtXPpnj.js";import"./CartesianChart-DuIwxUsc.js";import"./chartDataContext-STSGah94.js";import"./CategoricalChart-C5ZgEjVK.js";import"./Layer-3ZpdhJcS.js";import"./Curve-CrblFnpJ.js";import"./types-BTRTN-qV.js";import"./step-Kzlz86Dk.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-LJ4rT4-Q.js";import"./Label-Dq1bNHIu.js";import"./Text-BoORctzg.js";import"./DOMUtils-Bjh7wfeW.js";import"./ZIndexLayer-ktmCEwYK.js";import"./useAnimationId-Dr2V8ESg.js";import"./ActivePoints-DpbrBFbr.js";import"./Dot-BJH-Cd7h.js";import"./RegisterGraphicalItemId-D8phwbUX.js";import"./ErrorBarContext-BQj1MtW_.js";import"./GraphicalItemClipPath-UUgKir8H.js";import"./SetGraphicalItem-CKgMzTJ0.js";import"./getRadiusAndStrokeWidthFromDot-DBwea6ik.js";import"./ActiveShapeUtils-kn3TCk0Z.js";import"./CartesianAxis-ByEdCDio.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
