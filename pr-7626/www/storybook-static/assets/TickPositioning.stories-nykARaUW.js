import{R as t}from"./iframe-mg7UZdto.js";import{R as m}from"./zIndexSlice-DEfN8C0Z.js";import{L as s}from"./LineChart-BWgolCOG.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CKKxuewC.js";import{X as l}from"./XAxis-BsNzvHKv.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-HD1NX84B.js";import"./index-DZOBKqcM.js";import"./index-bFsd1KxH.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BbtnPTv-.js";import"./isWellBehavedNumber-D_gpPOh3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BkHp-MEf.js";import"./index-BUwgWfYf.js";import"./index-DeDE_LvF.js";import"./axisSelectors-BM8BDlXD.js";import"./d3-scale-BWztF9lr.js";import"./renderedTicksSlice-sYtIEKKa.js";import"./CartesianChart-B1jEcb3f.js";import"./chartDataContext-Dda0Eag5.js";import"./CategoricalChart-B1n3f5Qd.js";import"./Layer-C85ssoby.js";import"./Curve-k9Dj6G6o.js";import"./types-afGVOb_T.js";import"./step-CmgtGEqA.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B1JY3m8f.js";import"./Label-Dkvvn7Fi.js";import"./Text-B1zEX4dn.js";import"./DOMUtils-L0wsUfkf.js";import"./ZIndexLayer-CwALprKR.js";import"./useAnimationId-B9PPVOgc.js";import"./ActivePoints-q5U2dg7Z.js";import"./Dot-Bxa-PMP9.js";import"./RegisterGraphicalItemId-k1fDZWtY.js";import"./ErrorBarContext-BlA0hFY9.js";import"./graphicalItemIdentity-C58faD0D.js";import"./SetGraphicalItem-Cs3-aGdX.js";import"./getRadiusAndStrokeWidthFromDot-DhEmmwnz.js";import"./ActiveShapeUtils-vQCoYSuM.js";import"./RechartsThemeContext-CO1IbQpv.js";import"./CartesianAxis-DSGrP4Zf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const pt=["TickPositioning"];export{r as TickPositioning,pt as __namedExportsOrder,at as default};
