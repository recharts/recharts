import{R as t}from"./iframe-BSWUJvVD.js";import{R as m}from"./zIndexSlice-Dodw6VBB.js";import{L as s}from"./LineChart-CZnFQ5dV.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CjFCDQ2U.js";import{X as l}from"./XAxis-CjaWOmHo.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DttCRvoG.js";import"./index-Dvw34fMT.js";import"./index-B3tdJtlF.js";import"./get-Vl9hB9kE.js";import"./resolveDefaultProps-BmihZEmA.js";import"./isWellBehavedNumber-BmaIQTH1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DTzsDh4q.js";import"./index-CvaVBha6.js";import"./index-C2hfqVYs.js";import"./renderedTicksSlice-DqZNOnEy.js";import"./axisSelectors-DyTmTh7D.js";import"./d3-scale-C12KvtOu.js";import"./CartesianChart-DPI5HXtq.js";import"./chartDataContext-DSlpgtsU.js";import"./CategoricalChart-DIaxl7pb.js";import"./Layer-Cf5OzKEI.js";import"./Curve-DsJVJiVT.js";import"./types-Dnz1a-tR.js";import"./step-n-r0mMGx.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Z4j2jX_N.js";import"./Label-DXe68yB0.js";import"./Text-AXOyatW-.js";import"./DOMUtils-BQwhIlov.js";import"./ZIndexLayer-Cq8G8FQO.js";import"./useAnimationId-DQFk0Too.js";import"./ActivePoints-DxQISI2r.js";import"./Dot-B2jNwAb4.js";import"./RegisterGraphicalItemId-C0E0VwJr.js";import"./ErrorBarContext-CvQvhsxB.js";import"./GraphicalItemClipPath-BiLMWHLg.js";import"./SetGraphicalItem-DXqqCptu.js";import"./getRadiusAndStrokeWidthFromDot-Bc40o6k6.js";import"./ActiveShapeUtils-CLmLa7pa.js";import"./CartesianAxis-CVEh4tt_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
