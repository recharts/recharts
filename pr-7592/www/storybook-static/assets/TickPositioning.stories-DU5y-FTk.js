import{R as t}from"./iframe-KfsXDyYe.js";import{R as m}from"./zIndexSlice-DRQ5ZoPP.js";import{L as s}from"./LineChart-BeMSwvfb.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BKA-K_z5.js";import{X as l}from"./XAxis-BunU0kIP.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-0X77pc-d.js";import"./index-B8nw1mbK.js";import"./index-USmxlz8z.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CJQcFjaM.js";import"./isWellBehavedNumber-B9hqvBfv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B1g5OPk8.js";import"./index-BcSxHpM2.js";import"./index-D3u1xKBW.js";import"./renderedTicksSlice-VAstzL9_.js";import"./axisSelectors-DqRFL16u.js";import"./d3-scale-CwZ0fpJQ.js";import"./CartesianChart-CedzGa4b.js";import"./chartDataContext-CrbAMOHN.js";import"./CategoricalChart-D28QOUrV.js";import"./Layer-DvnIPp0b.js";import"./Curve-DHdhUSXl.js";import"./types-Cp7Kv4cO.js";import"./step-ww9sKUkN.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CsvMn_0v.js";import"./Label-dJq5mBhi.js";import"./Text-Cvia8ncb.js";import"./DOMUtils-r4qPFFQL.js";import"./ZIndexLayer-DyFku1ry.js";import"./useAnimationId-BRufZRyg.js";import"./ActivePoints-DD9eCF-L.js";import"./Dot-BXiPHS-i.js";import"./RegisterGraphicalItemId-BVy8O7ka.js";import"./ErrorBarContext-BxIBjeUQ.js";import"./GraphicalItemClipPath-CLORxtCR.js";import"./SetGraphicalItem-BXsnmgyo.js";import"./getRadiusAndStrokeWidthFromDot-D62YsXR3.js";import"./ActiveShapeUtils-YGV0Qwxy.js";import"./RechartsThemeContext-s5HlCTRW.js";import"./CartesianAxis-DJyQkACC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const pt=["TickPositioning"];export{r as TickPositioning,pt as __namedExportsOrder,at as default};
