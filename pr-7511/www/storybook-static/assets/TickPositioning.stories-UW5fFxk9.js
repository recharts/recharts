import{R as t}from"./iframe-C1w5v_Qk.js";import{R as m}from"./zIndexSlice-B1EdpB6R.js";import{L as s}from"./LineChart-CQVSIfdW.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DxJCS-G6.js";import{X as l}from"./XAxis-CLnm9us4.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-xmruF8UK.js";import"./index-CsIOsjrg.js";import"./index-BlJOskHH.js";import"./get-BiWVgPl2.js";import"./resolveDefaultProps-CoJ3EeKY.js";import"./isWellBehavedNumber-NxDVn2o3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CjIXVxen.js";import"./index-3W1J-0s3.js";import"./index-DRD7DMzc.js";import"./renderedTicksSlice-CHw04Oxj.js";import"./axisSelectors-CF8b5amj.js";import"./d3-scale-Vx2OsAoJ.js";import"./CartesianChart-DmhCfUcK.js";import"./chartDataContext-BJtHxGB9.js";import"./CategoricalChart-CQ9KgY5m.js";import"./Layer-DdWQTUzH.js";import"./Curve-j2uTsuDC.js";import"./types-D2g1bX1e.js";import"./step-C7bwrN9b.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DUYSPF-a.js";import"./Label-C6ZIo4e5.js";import"./Text-CLhlhxNo.js";import"./DOMUtils-B6Ajdyx4.js";import"./ZIndexLayer-C25IbVUt.js";import"./useAnimationId-CzIDWQBI.js";import"./ActivePoints-C8Lsw_QN.js";import"./Dot-DKLsSZb_.js";import"./RegisterGraphicalItemId-B4g8fd0n.js";import"./ErrorBarContext-DUYo6JYI.js";import"./GraphicalItemClipPath-Ct_Dr2Hp.js";import"./SetGraphicalItem-BUNBwVyh.js";import"./getRadiusAndStrokeWidthFromDot-BO1985Pr.js";import"./ActiveShapeUtils-SLeDfFDD.js";import"./CartesianAxis-CqJdjYKp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
