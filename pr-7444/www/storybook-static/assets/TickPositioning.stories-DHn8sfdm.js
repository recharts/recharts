import{R as t}from"./iframe-DHxweIO9.js";import{R as m}from"./zIndexSlice-oAGhcyxs.js";import{L as s}from"./LineChart-IliHyqHz.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-i-hk5T1C.js";import{X as l}from"./XAxis-by-9KJMG.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-LtTlQghk.js";import"./index-BPm8HOAZ.js";import"./index-D2s_06CJ.js";import"./get-C0Lt804T.js";import"./resolveDefaultProps-BFfik0lP.js";import"./isWellBehavedNumber-zbgy0N68.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B1v1VArt.js";import"./index-Cen9NMit.js";import"./index-1DHoilgY.js";import"./renderedTicksSlice-D0SVQkh2.js";import"./axisSelectors-BtfV9moc.js";import"./d3-scale-8GVIzX8d.js";import"./string-B6fdYHAA.js";import"./CartesianChart-FIs-jkte.js";import"./chartDataContext-BdeADzKD.js";import"./CategoricalChart-DTsRp_4F.js";import"./Layer-Ck33QkwT.js";import"./Curve-BHn37Kg3.js";import"./types-D6mO4BwK.js";import"./step-CNOFf0Gl.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CcOK_yF7.js";import"./Label-Hedzo6WI.js";import"./Text-r1UAkK_M.js";import"./DOMUtils-CB5jUme8.js";import"./ZIndexLayer-tleOLVC8.js";import"./useAnimationId-CKZSDbra.js";import"./ActivePoints-BYS8rjGP.js";import"./Dot-CpI4OitO.js";import"./RegisterGraphicalItemId-D9fHh-dg.js";import"./ErrorBarContext-Dm9lKBps.js";import"./GraphicalItemClipPath-DNkFii-i.js";import"./SetGraphicalItem-BdtIdG4P.js";import"./getRadiusAndStrokeWidthFromDot-DwZJEjHx.js";import"./ActiveShapeUtils-BTTuLaTo.js";import"./CartesianAxis-CVNW_DPG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
