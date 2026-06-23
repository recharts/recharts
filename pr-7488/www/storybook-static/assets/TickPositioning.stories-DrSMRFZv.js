import{R as t}from"./iframe-CMVn_SNm.js";import{R as m}from"./zIndexSlice-5bfS2JCG.js";import{L as s}from"./LineChart-Bp5qTEb4.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CGg890gZ.js";import{X as l}from"./XAxis-BK_m78bZ.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BrNA81ld.js";import"./index-BHUmbQo-.js";import"./index-BNNprLMB.js";import"./get-CIPBGhdg.js";import"./resolveDefaultProps-CRaaAotp.js";import"./isWellBehavedNumber-C4Dcoy8i.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DcTKM8HZ.js";import"./index-DgABY5rS.js";import"./index-o3wTHYCY.js";import"./renderedTicksSlice-B8N2zN9Q.js";import"./axisSelectors-Dk5pLmzI.js";import"./d3-scale-p_vnFVNW.js";import"./CartesianChart-Bhmmmn5c.js";import"./chartDataContext-Dg2f8fbZ.js";import"./CategoricalChart-DUjGX6JP.js";import"./Layer-NKsa_8yv.js";import"./Curve-Bldv1TQU.js";import"./types-DXSGjGm9.js";import"./step-BXHdJ1Cz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-i8neEi91.js";import"./Label-DCWSGF-w.js";import"./Text-DjHHlwuG.js";import"./DOMUtils-DEDVnuPv.js";import"./ZIndexLayer-qzvYtv-n.js";import"./useAnimationId-DARzAta0.js";import"./ActivePoints-BTW7Abvw.js";import"./Dot-BUoSKBIz.js";import"./RegisterGraphicalItemId-B5nu-pPZ.js";import"./ErrorBarContext-B0E3DilN.js";import"./GraphicalItemClipPath-CTln66En.js";import"./SetGraphicalItem-rX6NUfmr.js";import"./getRadiusAndStrokeWidthFromDot-CIJw8Q-v.js";import"./ActiveShapeUtils-DbnUcZo7.js";import"./CartesianAxis-HAFu0ua0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
