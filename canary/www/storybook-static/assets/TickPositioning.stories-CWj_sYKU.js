import{R as t}from"./iframe-CZhceScU.js";import{R as n}from"./zIndexSlice-6KQyntdT.js";import{L as s}from"./LineChart-D9jiPPn3.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BVbkMHTj.js";import{X as l}from"./XAxis-o7n6bJ8R.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-4vdN6P2D.js";import"./index-CDuDfojR.js";import"./index-DpQK2wXv.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DKz_FWjC.js";import"./isWellBehavedNumber-D-87yJTE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-FSanOK4G.js";import"./index-BEy16_lK.js";import"./index-Blwm4_kv.js";import"./axisSelectors-8JBi47Qo.js";import"./d3-scale-C7Vm1zun.js";import"./renderedTicksSlice-Cf3Ebwgh.js";import"./CartesianChart-8qShj_eX.js";import"./chartDataContext-DJFrW4dv.js";import"./CategoricalChart-Cgj8wKUd.js";import"./Layer-Drn4JAex.js";import"./Curve-FuimFyqA.js";import"./types-B4F0kvck.js";import"./step-H2rxpHgP.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DXBAxv9p.js";import"./Label-CNgEIlwK.js";import"./Text-CmIo03No.js";import"./DOMUtils-DbT53TZn.js";import"./useId-BZ6DWjsO.js";import"./useBackwardsCompatibleTheme-DNlLIhqX.js";import"./ZIndexLayer-wFB7jUG1.js";import"./useAnimationId-Cx8RIuDl.js";import"./ActivePoints-B1Bif-Ou.js";import"./Dot-0p8__XhD.js";import"./RegisterGraphicalItemId-DnHmtku0.js";import"./ErrorBarContext-CS2ZLStC.js";import"./GraphicalItemClipPath-BzJCuoya.js";import"./SetGraphicalItem-DuTz6hix.js";import"./getRadiusAndStrokeWidthFromDot-CVlp7Tat.js";import"./ActiveShapeUtils-Dk1tODGi.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-C3rrpirv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,mt as default};
