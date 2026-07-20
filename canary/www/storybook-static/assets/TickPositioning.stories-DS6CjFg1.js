import{R as t}from"./iframe-vOLnYXOZ.js";import{R as m}from"./zIndexSlice-Mv0cm5Fz.js";import{L as s}from"./LineChart-CwBOKDvH.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Ii7UCjUa.js";import{X as l}from"./XAxis-DZdEV9rv.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-H6UrPiO3.js";import"./index-Ccx6Fn8x.js";import"./index-Bno8px0F.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DMvU9hKF.js";import"./isWellBehavedNumber-TyK-Q9bs.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-cdIriNtS.js";import"./index-C_GLmlAa.js";import"./index-loUlOQAQ.js";import"./renderedTicksSlice-zOvani6W.js";import"./axisSelectors-9pB8uUjg.js";import"./d3-scale-CXVWvw2_.js";import"./CartesianChart-6FCR2qTV.js";import"./chartDataContext-CdBeAXiw.js";import"./CategoricalChart-BHtJtaWL.js";import"./Layer-BzdlA6Ig.js";import"./Curve-DpB1TURa.js";import"./types-DL_lANQl.js";import"./step-DBkijEka.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-M5yh8SZt.js";import"./Label-D2t7QHPj.js";import"./Text-FiyA8tGX.js";import"./DOMUtils-Di4Ni1ZE.js";import"./ZIndexLayer-DaGlu0J6.js";import"./useAnimationId-J9bbR3c6.js";import"./ActivePoints-DMSGIjaa.js";import"./Dot-BOZyGCoc.js";import"./RegisterGraphicalItemId-YQ-tZiZG.js";import"./ErrorBarContext-CYCJv9Vs.js";import"./GraphicalItemClipPath-CSPsls6A.js";import"./SetGraphicalItem-Dz9FndIn.js";import"./getRadiusAndStrokeWidthFromDot-DaL3Xp1Q.js";import"./ActiveShapeUtils-CX_xtPwj.js";import"./CartesianAxis-B04tnKne.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
