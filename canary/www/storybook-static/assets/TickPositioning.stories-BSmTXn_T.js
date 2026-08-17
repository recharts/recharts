import{R as t}from"./iframe-BPne-Hl-.js";import{R as m}from"./zIndexSlice-Vbxajxxh.js";import{L as s}from"./LineChart-DLc4rpuH.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BF3gtbV4.js";import{X as l}from"./XAxis-rRwDqEnY.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bi_zW3_L.js";import"./index-uv_fcL6C.js";import"./index-CwJJwB5T.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DDnfF8y9.js";import"./isWellBehavedNumber-Ct771fgh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D7wPyuzK.js";import"./index-B-eC6RsS.js";import"./index-CxrNEW2y.js";import"./axisSelectors-LTfENhRo.js";import"./d3-scale-DOpYrlme.js";import"./renderedTicksSlice-DT6TytRZ.js";import"./CartesianChart-QFuu_jnw.js";import"./chartDataContext-BudnyF2r.js";import"./CategoricalChart-DWAFRQOx.js";import"./Layer-SpL-rjyd.js";import"./Curve-DxMSvAJ7.js";import"./types-BUNHJ5Kw.js";import"./step-BuUE8tSH.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BPcfKqDa.js";import"./Label-BrzCwn25.js";import"./Text-C95v_Vb1.js";import"./DOMUtils-J3bqy14P.js";import"./useBackwardsCompatibleTheme-CL2xpGGY.js";import"./ZIndexLayer-DfzxMoSO.js";import"./useAnimationId-Bq5h4Na4.js";import"./ActivePoints-vna83Vpl.js";import"./Dot-_aT20vJp.js";import"./RegisterGraphicalItemId-DLHR3ZEz.js";import"./ErrorBarContext-DTKdWH8V.js";import"./GraphicalItemClipPath-pLYwGWiU.js";import"./SetGraphicalItem-DdmyrxA9.js";import"./getRadiusAndStrokeWidthFromDot-DdxPvC-_.js";import"./ActiveShapeUtils-IyyDIcQz.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-ClYaFBOz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
