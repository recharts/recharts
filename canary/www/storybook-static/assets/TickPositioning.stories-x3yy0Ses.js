import{R as t}from"./iframe-DfmqqqCr.js";import{R as m}from"./zIndexSlice-d0YHK6xw.js";import{L as s}from"./LineChart-CvLyjXJ6.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Dip9Rer8.js";import{X as l}from"./XAxis-B0knr_7L.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-ComwQ6WC.js";import"./throttle-DAA8X2l5.js";import"./index-Lp2jcwfG.js";import"./index-CSO17-J0.js";import"./RechartsWrapper-D6KUw4si.js";import"./axisSelectors-DWglHHAi.js";import"./polarAxisSelectors-DpDn-hFD.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Ci_zYY1V.js";import"./index-pJqwg3_d.js";import"./index-hdUN889v.js";import"./renderedTicksSlice-C4mLmnSQ.js";import"./index-CQMOT26p.js";import"./CartesianChart-LSHb6JPq.js";import"./ZIndexPortal-BDrojabW.js";import"./CategoricalChart-BsBaBvnF.js";import"./Layer-BrcDHHcB.js";import"./Curve-DdFuR-cZ.js";import"./types-9Kx7AXVb.js";import"./step-pAgvwVo8.js";import"./path-DyVhHtw_.js";import"./LabelList-C0IeivS9.js";import"./Label-C130jv2t.js";import"./Text-CG3VrxOm.js";import"./pageBackground-dHeomk-I.js";import"./ZIndexLayer-Cvk6PIs7.js";import"./dataEntryStyles-CeCkFK1K.js";import"./ActivePoints-h83UhP7R.js";import"./Dot-BTf9HS3j.js";import"./activeStyles-CHOILxkP.js";import"./useAnimationId-RNI69aEn.js";import"./Symbols-BOmwAADp.js";import"./symbol-CvaR8Ff4.js";import"./RegisterGraphicalItemId-CzjpJBeg.js";import"./ErrorBarContext-C3AKnlrm.js";import"./SetGraphicalItem-41fol6Y1.js";import"./getRadiusAndStrokeWidthFromDot-CCLTT3lF.js";import"./ActiveShapeUtils-Csx1hMVo.js";import"./useEffectiveDataKey-Ri-wD3JN.js";import"./CartesianAxis-CYll20RU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,ct as __namedExportsOrder,st as default};
