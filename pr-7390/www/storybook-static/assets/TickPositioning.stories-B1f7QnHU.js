import{c as t}from"./iframe-UCAhYs-z.js";import{g as m}from"./zIndexSlice-D1yLUW4N.js";import{L as s}from"./LineChart-ShSbRf4p.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-jctQMIuW.js";import{X as l}from"./XAxis-DQ_rFapE.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-C7lWlBZP.js";import"./index-DNUUkfMj.js";import"./index-DUfS7S-b.js";import"./get-_XX617w0.js";import"./resolveDefaultProps-x5qwSX1Y.js";import"./isWellBehavedNumber-km_cSMyX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DH9U6NxN.js";import"./index-CWyZ4H7B.js";import"./index-CgqmNVZ9.js";import"./renderedTicksSlice-c5635lKm.js";import"./axisSelectors-DDRfemS2.js";import"./d3-scale-4iD7H2_D.js";import"./CartesianChart-W_64lWDO.js";import"./chartDataContext-tDfcFOTc.js";import"./CategoricalChart-D1LSz5Gs.js";import"./Curve-DOjbLHoQ.js";import"./types-tyluCCo2.js";import"./step-BCk2IvEt.js";import"./path-DyVhHtw_.js";import"./Layer-BbZFEpf4.js";import"./ReactUtils-CzulCaS-.js";import"./Label-CtGR-die.js";import"./Text-Rw6qQ1RF.js";import"./DOMUtils-BWCSYHt1.js";import"./ZIndexLayer-CEmXwARt.js";import"./ActivePoints-DwgVtAw6.js";import"./Dot-Cu_IjLEt.js";import"./RegisterGraphicalItemId-ByRoWgeN.js";import"./ErrorBarContext-Cvfv4OR0.js";import"./GraphicalItemClipPath-C-wdvxqO.js";import"./SetGraphicalItem-X5GoC_bE.js";import"./useAnimationId-BjOATGeC.js";import"./getRadiusAndStrokeWidthFromDot-BL_cRC7m.js";import"./ActiveShapeUtils-BWM9wxaW.js";import"./CartesianAxis-UsQkFlnQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
