import{c as t}from"./iframe-BLrz4bzL.js";import{g as m}from"./zIndexSlice-c7WW4zRb.js";import{L as s}from"./LineChart-DVaYxeYN.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DP0xx6zw.js";import{X as l}from"./XAxis-B81A99CY.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Cj0-obxe.js";import"./index-DA1Z20ZR.js";import"./index-B0WUClSq.js";import"./get-CEp8r7kA.js";import"./resolveDefaultProps-NE4wXzst.js";import"./isWellBehavedNumber-Di3xCgEJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B9Liyr6r.js";import"./index-DkCredV6.js";import"./index-CZQ5QhT1.js";import"./renderedTicksSlice-ReLUkucO.js";import"./axisSelectors-DEfJzTHu.js";import"./d3-scale-DXSYU9tD.js";import"./CartesianChart-m5bXXKFS.js";import"./chartDataContext-Bv2SQjN_.js";import"./CategoricalChart-xCWpyDx3.js";import"./Curve-DsJ0vDb9.js";import"./types-C_iF2heC.js";import"./step-BiB5duu3.js";import"./path-DyVhHtw_.js";import"./Layer-CRR_7s_x.js";import"./ReactUtils-_7naDrvk.js";import"./Label-cQgelXjE.js";import"./Text-dr0MBeU-.js";import"./DOMUtils-CfWUtkPu.js";import"./ZIndexLayer-DQpprPKw.js";import"./ActivePoints-QQtgh7iH.js";import"./Dot-C1lQjxdh.js";import"./RegisterGraphicalItemId-BL7Ao-U_.js";import"./ErrorBarContext-C7bZMesM.js";import"./GraphicalItemClipPath-pnbh5A5H.js";import"./SetGraphicalItem-BUgSHz80.js";import"./useAnimationId-3KXs9R46.js";import"./getRadiusAndStrokeWidthFromDot-DElyUSRS.js";import"./ActiveShapeUtils-CXhzrWSQ.js";import"./CartesianAxis-BoM_TQOb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
