import{R as t}from"./iframe-DX3DoU0V.js";import{R as m}from"./zIndexSlice-JZscBD-4.js";import{L as s}from"./LineChart-D_vcWVpB.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Dxp5xYSo.js";import{X as l}from"./XAxis-CymymjPS.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Df9paSU5.js";import"./index-C9zXapq5.js";import"./index-BLWyFYv6.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Dht9eep2.js";import"./isWellBehavedNumber-DXPAUxYw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cor7Wz0Q.js";import"./index-fiTNjDfz.js";import"./index-dfS5pTPx.js";import"./renderedTicksSlice-C2lqyVGO.js";import"./axisSelectors-CPexRmiS.js";import"./d3-scale-cmuGZbi0.js";import"./CartesianChart-DAdEh2n_.js";import"./chartDataContext-KL4_rbFV.js";import"./CategoricalChart-COC9nxGS.js";import"./Layer-CfDkJPJv.js";import"./Curve-lZ1smd7v.js";import"./types-CkeZP30w.js";import"./step-m02rWKGn.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-azUMJ4jR.js";import"./Label-CcOENmHR.js";import"./Text-CGNeItsO.js";import"./DOMUtils-jkxXqBeu.js";import"./ZIndexLayer-Dcm0gV7H.js";import"./useAnimationId-2LcPTVkH.js";import"./ActivePoints-D6qpACIy.js";import"./Dot-DycfcH3j.js";import"./RegisterGraphicalItemId-Dlzi8iuz.js";import"./ErrorBarContext-UMJzk-jC.js";import"./GraphicalItemClipPath-BLXFrLs-.js";import"./SetGraphicalItem-C1_wN2SK.js";import"./getRadiusAndStrokeWidthFromDot-BSSlkcIg.js";import"./ActiveShapeUtils-C5RQzc-i.js";import"./CartesianAxis-Bl7vCDUz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
