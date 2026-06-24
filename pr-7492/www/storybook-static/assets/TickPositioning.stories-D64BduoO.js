import{R as t}from"./iframe-Cmv2uZik.js";import{R as m}from"./zIndexSlice-kpWLrDSf.js";import{L as s}from"./LineChart-DULh8e8Q.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DqG_n08P.js";import{X as l}from"./XAxis-BHNxMNK7.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BpVJ12_R.js";import"./index-1nWXUQRt.js";import"./index-BODQ_clV.js";import"./get-26q7mLtB.js";import"./resolveDefaultProps-CVMWQw0A.js";import"./isWellBehavedNumber-DPLnuG7C.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B1y6zL6A.js";import"./index-F92hSDpv.js";import"./index-Blrf4sdp.js";import"./renderedTicksSlice-De354RnA.js";import"./axisSelectors-DN7Qk49e.js";import"./d3-scale-C0Ts3d9o.js";import"./CartesianChart-Culr-Wpg.js";import"./chartDataContext-DDdGqXS2.js";import"./CategoricalChart-BzXggkHJ.js";import"./Layer-BSNuGngv.js";import"./Curve-DX9DZst-.js";import"./types-DtyijqTI.js";import"./step-DGX6e4k6.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-lktoz8YW.js";import"./Label-COZByZz9.js";import"./Text-579iQBnG.js";import"./DOMUtils-BF0MLXBa.js";import"./ZIndexLayer-D1dh8rie.js";import"./useAnimationId-9e7OJi4C.js";import"./ActivePoints-DII5AyZv.js";import"./Dot-Drefe2Tr.js";import"./RegisterGraphicalItemId-snzh5Pbt.js";import"./ErrorBarContext-kFIcQTi0.js";import"./GraphicalItemClipPath-BiRXHsBx.js";import"./SetGraphicalItem-HiTeWvOV.js";import"./getRadiusAndStrokeWidthFromDot-Bl4mU7H4.js";import"./ActiveShapeUtils-Dvr59oga.js";import"./CartesianAxis-BCDXmj_o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
