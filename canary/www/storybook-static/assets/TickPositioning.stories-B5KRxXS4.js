import{R as t}from"./iframe-DyrNzYfG.js";import{R as m}from"./zIndexSlice-BxcBivH8.js";import{L as s}from"./LineChart-DElWMyzm.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-zTFVT4TP.js";import{X as l}from"./XAxis-BfZ0zCU8.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cm4al6R2.js";import"./index-CHWPJWR6.js";import"./index-NUd0OKr5.js";import"./get-cagOI5AH.js";import"./resolveDefaultProps-xqaJSNtt.js";import"./isWellBehavedNumber-Bd2sibwy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BdG0zq9-.js";import"./index-CdQUwFqU.js";import"./index-BpeVWu4H.js";import"./renderedTicksSlice-C6uhyxBm.js";import"./axisSelectors-CD9PShsx.js";import"./d3-scale-BldhV8lg.js";import"./CartesianChart-UfO6rtst.js";import"./chartDataContext-CubF16Dj.js";import"./CategoricalChart-CWXn607r.js";import"./Layer-BL2D6iSn.js";import"./Curve-CV1SC5oG.js";import"./types-DDNG0zv9.js";import"./step-BTLusNHS.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Cq3mCAt5.js";import"./Label-mQIBMRk4.js";import"./Text-CnNg3gGa.js";import"./DOMUtils-odAOb060.js";import"./ZIndexLayer-BkddZKJi.js";import"./useAnimationId-AVj-rcCC.js";import"./ActivePoints-DnBcqYjd.js";import"./Dot-DyBJR96w.js";import"./RegisterGraphicalItemId-CvfrlEi9.js";import"./ErrorBarContext-XAPu5vDV.js";import"./GraphicalItemClipPath-ClGJav6d.js";import"./SetGraphicalItem-xVo5bUKT.js";import"./getRadiusAndStrokeWidthFromDot-DwRxyJur.js";import"./ActiveShapeUtils-9juqJKGt.js";import"./CartesianAxis-DqWwR38e.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
