import{R as t}from"./iframe-C9psKz5H.js";import{R as m}from"./zIndexSlice-DpmGRp-Q.js";import{L as s}from"./LineChart-5QRg-rPX.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DANxSI-f.js";import{X as l}from"./XAxis-7TSk_dxf.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-ybqMtWK8.js";import"./index-D90R4_Ry.js";import"./index-DO4kgVpb.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DXpX2jzi.js";import"./isWellBehavedNumber-DtoestQf.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DBEUhNwk.js";import"./axisSelectors-BVR1qW5C.js";import"./d3-scale-DOPiKI9I.js";import"./index-Boed59-W.js";import"./index-C0Ds42Ok.js";import"./renderedTicksSlice-C81k7Y0M.js";import"./index-C4HmYpYK.js";import"./CartesianChart-DqQaN6li.js";import"./chartDataContext-C8FZLZVj.js";import"./CategoricalChart-oiLx-c2-.js";import"./Layer-D1lf7NaI.js";import"./Curve-ejO9vv5H.js";import"./types-Bo9cWGoI.js";import"./step-Ba-sjoMn.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CEzVE_qf.js";import"./Label-tLoAdhBg.js";import"./Text-CxmkIGJJ.js";import"./DOMUtils-5QLcrI6X.js";import"./useId-BmRjTouL.js";import"./useBackwardsCompatibleTheme-u-6iGz_C.js";import"./ZIndexLayer-Dp6mI4S2.js";import"./useAnimationId-NO-aRC2z.js";import"./ActivePoints-DV3QsG_s.js";import"./Dot-CoxDYTLK.js";import"./RegisterGraphicalItemId-Bou02MzC.js";import"./ErrorBarContext-C0X-i2LX.js";import"./GraphicalItemClipPath-BiRBEzG3.js";import"./SetGraphicalItem-DbUk56bY.js";import"./getRadiusAndStrokeWidthFromDot-D95GFJQd.js";import"./ActiveShapeUtils-B_bGVHtn.js";import"./useGraphicalItemIdentity-CFJPU_4U.js";import"./CartesianAxis-QX-AYICp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
