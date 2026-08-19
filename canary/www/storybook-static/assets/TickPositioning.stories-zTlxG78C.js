import{R as t}from"./iframe-CO2wOmL3.js";import{R as m}from"./zIndexSlice-CjYLmU03.js";import{L as s}from"./LineChart-BDhakp1M.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-C3rvXVP2.js";import{X as l}from"./XAxis-D8l1zj0t.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BF_C9j3I.js";import"./index-C2bFqevd.js";import"./index-vFvBy9sc.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-jUsiawGP.js";import"./isWellBehavedNumber-BQRlzWpP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-QtML1m_J.js";import"./index-di8y7Hm0.js";import"./index-_W7z4BVf.js";import"./axisSelectors-CX7Lxi19.js";import"./d3-scale-C9Gp2SJN.js";import"./renderedTicksSlice-BFOY10tL.js";import"./CartesianChart-CWwcrxvU.js";import"./chartDataContext-XcRgiNTG.js";import"./CategoricalChart-shIifM_V.js";import"./Layer-wYmixdFE.js";import"./Curve-C6VcPqEA.js";import"./types-m7U1KOoZ.js";import"./step-Cwr2l1xw.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D8MD0Tf6.js";import"./Label-DQLK-wuU.js";import"./Text-D02hyY3C.js";import"./DOMUtils-C9bi6LZn.js";import"./useBackwardsCompatibleTheme-DeUToV_i.js";import"./ZIndexLayer-hD4R9Zay.js";import"./useAnimationId-C-2OrkuN.js";import"./ActivePoints-MUpudru6.js";import"./Dot-CFoQsseu.js";import"./RegisterGraphicalItemId-CYj5gZOD.js";import"./ErrorBarContext-CkVZ1uFV.js";import"./GraphicalItemClipPath-Bz34Vg6G.js";import"./SetGraphicalItem-BUOFB7Tk.js";import"./getRadiusAndStrokeWidthFromDot-XN5RTrZo.js";import"./ActiveShapeUtils-CGE1F6kM.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-B8e0zgyu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,pt as default};
