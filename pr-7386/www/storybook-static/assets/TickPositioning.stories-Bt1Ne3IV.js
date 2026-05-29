import{c as t}from"./iframe-DmBQ8HMz.js";import{g as m}from"./zIndexSlice-DIRHIjeL.js";import{L as s}from"./LineChart-BptYKJ7e.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DN2wolye.js";import{X as l}from"./XAxis-BaDVYnrk.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CvETSy6i.js";import"./index-kdRFnVq9.js";import"./index-RSqbnpUZ.js";import"./get-Ckx5uNL8.js";import"./resolveDefaultProps-DuJ2-4bL.js";import"./isWellBehavedNumber-BHVm_SNT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DWg7_V2c.js";import"./index-o0mRVwTr.js";import"./index-Drn3R5Q6.js";import"./renderedTicksSlice-DVSCP4nP.js";import"./axisSelectors-COTb3exH.js";import"./d3-scale-CE7Es6uL.js";import"./CartesianChart-uAfb6KQX.js";import"./chartDataContext-CpJyWUlD.js";import"./CategoricalChart-DUJKtdcW.js";import"./Curve-Ddn0Q7My.js";import"./types-DUdiMbO-.js";import"./step-CN9Am_zJ.js";import"./path-DyVhHtw_.js";import"./Layer-BhYZ1XdM.js";import"./ReactUtils-DKCxnkHT.js";import"./Label-C1M61kae.js";import"./Text-DDANB2NF.js";import"./DOMUtils-o09_GivZ.js";import"./ZIndexLayer-eAbRrt0r.js";import"./ActivePoints-BCqOvBdY.js";import"./Dot-nij0AL23.js";import"./RegisterGraphicalItemId-Dup5UL4N.js";import"./ErrorBarContext-DC5ZfMR_.js";import"./GraphicalItemClipPath-pcxJ2TmH.js";import"./SetGraphicalItem-CsbBVlmH.js";import"./useAnimationId-BZ5U8z_o.js";import"./getRadiusAndStrokeWidthFromDot-CZpBgath.js";import"./ActiveShapeUtils-DVhmDt4u.js";import"./CartesianAxis-B9da2UAY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
