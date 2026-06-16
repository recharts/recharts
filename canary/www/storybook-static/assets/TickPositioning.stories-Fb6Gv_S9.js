import{R as t}from"./iframe-YX8o2v6C.js";import{R as m}from"./zIndexSlice-DdFbRU-_.js";import{L as s}from"./LineChart-C6gMjsOi.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Dmxs4MTa.js";import{X as l}from"./XAxis-DQ2uOSag.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-D9wrmu0j.js";import"./index-DH-2xtWc.js";import"./index-Cl4YYRbA.js";import"./get-BycinDno.js";import"./resolveDefaultProps-Beo9Ue5G.js";import"./isWellBehavedNumber-BTMdVTVN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CG6S7igm.js";import"./index-CEZPHdCs.js";import"./index-C3Ly3wbD.js";import"./renderedTicksSlice-CH1AW_i0.js";import"./axisSelectors-D8SjoVzs.js";import"./d3-scale-BBOwGfMu.js";import"./string-B6fdYHAA.js";import"./CartesianChart-W4Jk2biF.js";import"./chartDataContext-BjewCl-Q.js";import"./CategoricalChart-D0PZB27U.js";import"./Layer-BIbmWem6.js";import"./Curve-BvJZo-0O.js";import"./types-DnEhxp69.js";import"./step-ChRxg50y.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CRhm6WPg.js";import"./Label-MzgVsBeP.js";import"./Text-Buo3hKKc.js";import"./DOMUtils-QQafW-5D.js";import"./ZIndexLayer-jNA71lIU.js";import"./useAnimationId-CqTJac9i.js";import"./ActivePoints-DmjJPaKb.js";import"./Dot-DeMjnZzF.js";import"./RegisterGraphicalItemId-6llrHCrO.js";import"./ErrorBarContext-BJw7X7Qy.js";import"./GraphicalItemClipPath-BF8Vebbu.js";import"./SetGraphicalItem-OjQ_8WxS.js";import"./getRadiusAndStrokeWidthFromDot-wgzhKlDZ.js";import"./ActiveShapeUtils-C75e4XAE.js";import"./CartesianAxis-CKLUnXwa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
