import{R as t}from"./iframe-BLwLvMjc.js";import{R as m}from"./zIndexSlice-f39TItqz.js";import{L as s}from"./LineChart-D1K6WsS8.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-1bQ5HATy.js";import{X as l}from"./XAxis-ejI-Sa_I.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-D_8Dczsi.js";import"./index-CX4CypQp.js";import"./index-BMdMuoJa.js";import"./get-BkG6HND6.js";import"./resolveDefaultProps-BYhifOb3.js";import"./isWellBehavedNumber-CptpHwFR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B0n9oFWZ.js";import"./index-940TGUxY.js";import"./index-C34Ey_Rg.js";import"./renderedTicksSlice-BqNNgNfR.js";import"./axisSelectors-D58BkBim.js";import"./d3-scale-DDplI62N.js";import"./CartesianChart-C4yu5ilR.js";import"./chartDataContext-B-M33Z7B.js";import"./CategoricalChart-CRVqHKQs.js";import"./Layer-Bt0_PYLT.js";import"./Curve-Bgoi8H0P.js";import"./types-WD3PBzf9.js";import"./step-Y_PLHiNv.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BZKtZoic.js";import"./Label-pioiAs6J.js";import"./Text-D72Dyp1P.js";import"./DOMUtils-BokrT3el.js";import"./ZIndexLayer-YEu_ZQSO.js";import"./useAnimationId-CqDdhCYT.js";import"./ActivePoints-DpoXb-Tp.js";import"./Dot-DDBvFNxJ.js";import"./RegisterGraphicalItemId-BnK-7IkL.js";import"./ErrorBarContext-DWoI7kQ6.js";import"./GraphicalItemClipPath-DiOFFyuB.js";import"./SetGraphicalItem-DSxSXGHZ.js";import"./getRadiusAndStrokeWidthFromDot-BHSa5sI8.js";import"./ActiveShapeUtils-peAesLaa.js";import"./CartesianAxis-BaKeQioI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
