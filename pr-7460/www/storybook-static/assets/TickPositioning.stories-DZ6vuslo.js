import{R as t}from"./iframe-ChdTnuJZ.js";import{R as m}from"./zIndexSlice-DTuHfx_p.js";import{L as s}from"./LineChart-BdYSpQ06.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-zKyE8rWG.js";import{X as l}from"./XAxis--3XEHI4a.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DHJNVAe2.js";import"./index-DteGnOzp.js";import"./index-Dq9WTpJB.js";import"./get-BljYdgC6.js";import"./resolveDefaultProps-CmZ2lQdU.js";import"./isWellBehavedNumber-CwWlLsdj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-VmQ82j3S.js";import"./index-Dl7IIVL4.js";import"./index-BnBFbJTw.js";import"./renderedTicksSlice-IsDkktPX.js";import"./axisSelectors-UyjPZuEn.js";import"./d3-scale-Ch-uXsQ6.js";import"./CartesianChart-DV13kS8z.js";import"./chartDataContext-COA3hxu-.js";import"./CategoricalChart-JBgYyUd3.js";import"./Layer-CbZTDJjb.js";import"./Curve-BLJbrdKh.js";import"./types-Blkff1hk.js";import"./step-C9h4VCgc.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BDYJ2E_L.js";import"./Label-ODDr4Kfk.js";import"./Text-BqDkAbeE.js";import"./DOMUtils-BvzDzAj2.js";import"./ZIndexLayer-DzezyKwN.js";import"./useAnimationId-w9_6HKPK.js";import"./ActivePoints-zze0EoKb.js";import"./Dot-B3nzfqLK.js";import"./RegisterGraphicalItemId-BcQylArw.js";import"./ErrorBarContext-CZ-WTEC7.js";import"./GraphicalItemClipPath-D0CBaYt_.js";import"./SetGraphicalItem-Dx80ZtIC.js";import"./getRadiusAndStrokeWidthFromDot-JQNnNq8i.js";import"./ActiveShapeUtils-t-acR5v1.js";import"./CartesianAxis-DeJGk3LW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
