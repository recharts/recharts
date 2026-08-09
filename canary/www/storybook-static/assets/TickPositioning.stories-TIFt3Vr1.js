import{R as t}from"./iframe-DIhQo_8Y.js";import{R as m}from"./zIndexSlice-CGgr09GZ.js";import{L as s}from"./LineChart-_jrRxk-M.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DEkyIRox.js";import{X as l}from"./XAxis-BpVdYfJg.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B5VRQcq4.js";import"./index-Dgm3vG4i.js";import"./index-BF8H9JZN.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-hi_Ykzi4.js";import"./isWellBehavedNumber-BiD1hUdH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DRimQmLV.js";import"./index-BC5_sjA-.js";import"./index-RbONCBjN.js";import"./axisSelectors-Gg8H4O2J.js";import"./d3-scale-DTMlXSKJ.js";import"./renderedTicksSlice-Co5rDdJd.js";import"./CartesianChart-DwM9PUKm.js";import"./chartDataContext-DFyWuVHZ.js";import"./CategoricalChart-CgO2X-rw.js";import"./Layer-BQPvkkvd.js";import"./Curve-BXnwyB8Q.js";import"./types-ZiiagxD1.js";import"./step-kN_jTjZP.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DEBP1yTo.js";import"./Label-CVkJGixO.js";import"./Text-5eA_PDhZ.js";import"./DOMUtils-Cs86oaAG.js";import"./ZIndexLayer-B8ZTodeV.js";import"./useAnimationId-CRkvHyGK.js";import"./ActivePoints-CJTgILF2.js";import"./Dot-BiDh7UAw.js";import"./RegisterGraphicalItemId-DMf10IHd.js";import"./ErrorBarContext-RhNJ5kjd.js";import"./GraphicalItemClipPath-BlWn4Cda.js";import"./SetGraphicalItem-CDNxzvex.js";import"./getRadiusAndStrokeWidthFromDot-DPHCRHA9.js";import"./ActiveShapeUtils-DPvlIPGu.js";import"./RechartsThemeContext-C_YQ-08p.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-4De8rCJ6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,pt as default};
