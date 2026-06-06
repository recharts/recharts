import{R as t}from"./iframe-BiXVY0YN.js";import{R as m}from"./zIndexSlice-nY6JNSg8.js";import{L as s}from"./LineChart-CuhODK-Q.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DjzxsS4q.js";import{X as l}from"./XAxis-8aOHTtEo.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Bguoov5l.js";import"./index-nFhQ5GlG.js";import"./index-C9pEG8B_.js";import"./get-DSfNO7n4.js";import"./resolveDefaultProps-DD4XGInB.js";import"./isWellBehavedNumber-DE5idxcf.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C7VFUx7Q.js";import"./index-BDCsY1Bp.js";import"./index-PSniF_G7.js";import"./renderedTicksSlice-D3zVHdBs.js";import"./axisSelectors-aUKbGV01.js";import"./d3-scale-Bqjw06G0.js";import"./string-B6fdYHAA.js";import"./CartesianChart-D3egFHKO.js";import"./chartDataContext-CjUfDHdj.js";import"./CategoricalChart-BzNcO88n.js";import"./Layer-uuEILT3S.js";import"./Curve-D7wuzLSQ.js";import"./types-CLXMlpTC.js";import"./step-BzaqppXW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DfhrJO_Z.js";import"./Label-BJ6MA63M.js";import"./Text-DmK0i7Bz.js";import"./DOMUtils-C2cF8Szu.js";import"./ZIndexLayer-6ebEplbW.js";import"./useAnimationId-CfBicigm.js";import"./ActivePoints-B-SHt4Wz.js";import"./Dot-BnLwvEMd.js";import"./RegisterGraphicalItemId-MDxIerXT.js";import"./ErrorBarContext-DrwdD_lh.js";import"./GraphicalItemClipPath-DNkkSszT.js";import"./SetGraphicalItem-AeS5weMQ.js";import"./getRadiusAndStrokeWidthFromDot-LZlKw0gF.js";import"./ActiveShapeUtils-RN-LxFg0.js";import"./CartesianAxis-eCQKtisH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
