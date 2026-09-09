import{R as t}from"./iframe-Gdd3jtsk.js";import{R as m}from"./zIndexSlice-CSZDPlYV.js";import{L as s}from"./LineChart-CRmN4vtz.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BsY-LYne.js";import{X as l}from"./XAxis-CfRxe5fa.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BmbkxDbb.js";import"./index-OXuJkc0G.js";import"./index-BYdAkKa9.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BAx7A2d0.js";import"./isWellBehavedNumber-dcNjbQjU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DHzy1vja.js";import"./axisSelectors-gB1Qysm6.js";import"./d3-scale-CuO1bYlf.js";import"./index-BA4wfNHy.js";import"./index-DLhl39MV.js";import"./renderedTicksSlice-Bnpylx8R.js";import"./index-D3-ryID0.js";import"./CartesianChart-Ddy5lGq_.js";import"./chartDataContext-Cj_vDVUA.js";import"./CategoricalChart-Wstkm_N3.js";import"./Layer-D1lMlbyy.js";import"./Curve-CY9DQNQA.js";import"./types-TRPks9BY.js";import"./step-Tntu3fQG.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BmvPvy1l.js";import"./Label-DL60lMB9.js";import"./Text-vzNtnCvi.js";import"./DOMUtils-DsTGrs8B.js";import"./useId-DBiLJeK_.js";import"./useBackwardsCompatibleTheme-vrrckkYj.js";import"./ZIndexLayer-BONCUyCr.js";import"./useAnimationId-DI-q8E5L.js";import"./ActivePoints-DdmI4xi2.js";import"./Dot-BEO0U3qq.js";import"./RegisterGraphicalItemId-BmqdRBnz.js";import"./ErrorBarContext-uChJYirb.js";import"./GraphicalItemClipPath-CxxXrJBj.js";import"./SetGraphicalItem-C6Ve9h1l.js";import"./getRadiusAndStrokeWidthFromDot-Bfe6QX96.js";import"./ActiveShapeUtils-Cb2VhDvv.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-ZunbmCHs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,st as __namedExportsOrder,mt as default};
