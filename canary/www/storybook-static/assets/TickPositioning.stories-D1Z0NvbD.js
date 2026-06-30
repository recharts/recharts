import{R as t}from"./iframe-BAw0s5ot.js";import{R as m}from"./zIndexSlice-BeH27P2U.js";import{L as s}from"./LineChart-wTqlh64R.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DjWgsN1g.js";import{X as l}from"./XAxis-DLc6krzc.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CMKSqw9i.js";import"./index-CjVdCyN5.js";import"./index-BK18-1Z2.js";import"./get-CSAr6kNF.js";import"./resolveDefaultProps-BuFdbqch.js";import"./isWellBehavedNumber-9WEl6uBx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bttwz4rr.js";import"./index-B1DwQ2Om.js";import"./index-46sIyfq_.js";import"./renderedTicksSlice-lnlzRSDk.js";import"./axisSelectors-CrQ5YVkn.js";import"./d3-scale-8J52VcxR.js";import"./CartesianChart-qH9nTYaZ.js";import"./chartDataContext-Bg-IfXwk.js";import"./CategoricalChart-BcYU7xxq.js";import"./Layer-CnD0sOVo.js";import"./Curve-DDP5uwdK.js";import"./types-3486df9G.js";import"./step-BMQa1wmq.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DKynRxAN.js";import"./Label-RqhE4qn6.js";import"./Text-CHY17Wwg.js";import"./DOMUtils-DRw43MBp.js";import"./ZIndexLayer-B6NdRg2s.js";import"./useAnimationId-D83gTctj.js";import"./ActivePoints-x13vM-lM.js";import"./Dot-DM8ASB1e.js";import"./RegisterGraphicalItemId-BYWDLggr.js";import"./ErrorBarContext-B9tnwNW4.js";import"./GraphicalItemClipPath-CFCGDJ4D.js";import"./SetGraphicalItem-BtUL3que.js";import"./getRadiusAndStrokeWidthFromDot-Dj6bNAvM.js";import"./ActiveShapeUtils-DPtxPHYL.js";import"./CartesianAxis-BP8vTRJY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
