import{R as t}from"./iframe-Y7LdsWUd.js";import{R as m}from"./zIndexSlice-g6buOjPK.js";import{L as s}from"./LineChart-WJ5j_Csb.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BAxmXSR0.js";import{X as l}from"./XAxis-BEn1qEwo.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CTHxJNnh.js";import"./index-Bl2KzI3D.js";import"./index-BqhFnWN1.js";import"./get-Bl7iuY_G.js";import"./resolveDefaultProps-EYxijulG.js";import"./isWellBehavedNumber-D670Qdyl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bz-cSrDT.js";import"./index-468XY5rC.js";import"./index-D9y4Xpfg.js";import"./renderedTicksSlice-_dHdD9iU.js";import"./axisSelectors-BKqrOX2w.js";import"./d3-scale-D0YrMM7V.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DUAWwhpK.js";import"./chartDataContext-DK8YFcnh.js";import"./CategoricalChart-BHdb9DL7.js";import"./Layer-CYliWRnL.js";import"./Curve-Bl41E8Lc.js";import"./types-D3i7dddg.js";import"./step-Dw52zkwm.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BfJAUGfB.js";import"./Label-B9hAjr1E.js";import"./Text-c0cVIonZ.js";import"./DOMUtils-CMyDK0NY.js";import"./ZIndexLayer-0MAyxgOl.js";import"./useAnimationId-BlokCSh_.js";import"./ActivePoints-a2kVi7nQ.js";import"./Dot-CVhodtQ4.js";import"./RegisterGraphicalItemId-5Onr2PDk.js";import"./ErrorBarContext-D6wkc7ti.js";import"./GraphicalItemClipPath-BBsC6IJX.js";import"./SetGraphicalItem-rvXq_PhO.js";import"./getRadiusAndStrokeWidthFromDot-BgmRcAea.js";import"./ActiveShapeUtils-OWHYk5VD.js";import"./CartesianAxis-1pwFs9AH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
