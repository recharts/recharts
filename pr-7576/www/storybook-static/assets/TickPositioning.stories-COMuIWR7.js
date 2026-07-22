import{R as t}from"./iframe-Cy6UHwH8.js";import{R as m}from"./zIndexSlice-Dv2HqMCj.js";import{L as s}from"./LineChart-BySD3soj.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BzhYL1rQ.js";import{X as l}from"./XAxis-BEHj4vqI.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CrXcydw9.js";import"./index-h8aQZ4h5.js";import"./index-CWnN2QDM.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BMx9w-RH.js";import"./isWellBehavedNumber-CZJUfVeG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ms45-clr.js";import"./index-2yzrZcxU.js";import"./index-CqwtYJ2E.js";import"./renderedTicksSlice-BtW-OIzZ.js";import"./axisSelectors-DXOe3ZcM.js";import"./d3-scale-Bvw0bMMA.js";import"./CartesianChart-C_8s1Ao-.js";import"./chartDataContext-BQ-bLF-q.js";import"./CategoricalChart-Bl-8OvLS.js";import"./Layer-Ju7yA9Ak.js";import"./Curve-l3wqrsuS.js";import"./types-Wlq7LyUb.js";import"./step-CuI5m1Cq.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-P3TyXGJ4.js";import"./Label-D4x62xM0.js";import"./Text-DY_HLC6P.js";import"./DOMUtils-CnEhoUR_.js";import"./ZIndexLayer-BhFWLYxf.js";import"./useAnimationId-q_i8pRM6.js";import"./ActivePoints-DwOS4gGn.js";import"./Dot-Coa1b26v.js";import"./RegisterGraphicalItemId-Du3LTwfY.js";import"./ErrorBarContext-DbNi8xqP.js";import"./GraphicalItemClipPath-CqSFRIsZ.js";import"./SetGraphicalItem-Dh-ykNbg.js";import"./getRadiusAndStrokeWidthFromDot-BnXETLA5.js";import"./ActiveShapeUtils-BsBe7D_I.js";import"./CartesianAxis-D4Lg0Pka.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
