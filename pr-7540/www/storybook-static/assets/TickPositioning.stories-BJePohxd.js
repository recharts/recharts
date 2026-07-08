import{R as t}from"./iframe-DGYc5Evr.js";import{R as m}from"./zIndexSlice-CjPpABdt.js";import{L as s}from"./LineChart-COWPxTAF.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CXcSqzzS.js";import{X as l}from"./XAxis-v5Hkx9ES.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-44TCHeAp.js";import"./index-D_ZxU5Q3.js";import"./index-sF9bEsAF.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BzwDYh32.js";import"./isWellBehavedNumber-BpEOcoHg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CM9ry10x.js";import"./index-cJf64k7_.js";import"./index-xTx_eyuL.js";import"./renderedTicksSlice-BojFd99l.js";import"./axisSelectors-BNixzxMM.js";import"./d3-scale-DWZ-qO9T.js";import"./CartesianChart-BPYrXhHn.js";import"./chartDataContext-CnthLNs9.js";import"./CategoricalChart-CwbInpB3.js";import"./Layer-Cp66mevN.js";import"./Curve-CIxbvgQM.js";import"./types-m9Fzmc4X.js";import"./step-ClaeK2JI.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DpTt0Un9.js";import"./Label-ByCQCza6.js";import"./Text-C1RHjt0W.js";import"./DOMUtils-D9lLS2TF.js";import"./ZIndexLayer-BiqJjXGY.js";import"./useAnimationId-CRdgro7A.js";import"./ActivePoints-vXI-iHsm.js";import"./Dot-CRtBS-b6.js";import"./RegisterGraphicalItemId-BYtbpB8Y.js";import"./ErrorBarContext-CDutCjUn.js";import"./GraphicalItemClipPath-D4tdWuXE.js";import"./SetGraphicalItem-sSG1dofq.js";import"./getRadiusAndStrokeWidthFromDot-CuWeSJ3l.js";import"./ActiveShapeUtils-0IrxfALl.js";import"./CartesianAxis-XkVfHgZD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
