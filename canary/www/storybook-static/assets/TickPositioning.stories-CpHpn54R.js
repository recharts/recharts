import{R as t}from"./iframe-Bs1YcocL.js";import{R as m}from"./zIndexSlice-t-gzu3GV.js";import{L as s}from"./LineChart-DT7XlKgw.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DDgei-_j.js";import{X as l}from"./XAxis-CkMNNwML.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle--2-Gh3Mm.js";import"./index-UwTvLFMH.js";import"./index-BRumuJ4r.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BnOzFFcK.js";import"./isWellBehavedNumber-BSPOqlf0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DZyIyn43.js";import"./index-D9ADN89d.js";import"./index-CKxampel.js";import"./renderedTicksSlice-BTmhgiNO.js";import"./axisSelectors-DMllfokS.js";import"./d3-scale-37tvwNAS.js";import"./CartesianChart-CcQU6wxH.js";import"./chartDataContext-CPXqqfzF.js";import"./CategoricalChart-WxCIVI_m.js";import"./Layer-C-8BEA-e.js";import"./Curve-Bk-KwfJi.js";import"./types-DYZE7YT1.js";import"./step-Bu2gjmXw.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BJx7sqXo.js";import"./Label-XTRgfpgH.js";import"./Text-BklYvR7D.js";import"./DOMUtils-cVtaUTCs.js";import"./ZIndexLayer-CN0cINvr.js";import"./useAnimationId-BX2lcr_s.js";import"./ActivePoints-DYwvnYoP.js";import"./Dot-D62SIbzc.js";import"./RegisterGraphicalItemId-CjkTx9Ub.js";import"./ErrorBarContext-CMWCgNCI.js";import"./GraphicalItemClipPath-DVFJRr4Y.js";import"./SetGraphicalItem-Bacz05Gx.js";import"./getRadiusAndStrokeWidthFromDot-3DBOSJ59.js";import"./ActiveShapeUtils-CQH8McUN.js";import"./CartesianAxis-D8VsSsOs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
