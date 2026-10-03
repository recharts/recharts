import{R as t}from"./iframe-BiVlDiGB.js";import{R as m}from"./zIndexSlice-BT91VcLs.js";import{L as s}from"./LineChart-DNV6imcl.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Bk_cwfyz.js";import{X as l}from"./XAxis-DvOqqISP.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-YKevu-yW.js";import"./index-QwesTmYv.js";import"./index-ChXYLaG0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CzQIEG40.js";import"./isWellBehavedNumber-6NC8t9If.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BDkbatGL.js";import"./axisSelectors-BEkueF2I.js";import"./d3-scale-GIUO3qKs.js";import"./index-BUQ8JU-K.js";import"./index-BgrYIa47.js";import"./renderedTicksSlice-BO57uAxz.js";import"./index-BlprVplm.js";import"./CartesianChart-zLDK9f_1.js";import"./chartDataContext-C02yhzPU.js";import"./CategoricalChart-C5Ob1It2.js";import"./Layer-CGg1zqLT.js";import"./Curve-vjyprLTK.js";import"./types-D-F_NfC0.js";import"./step-CkhChmyV.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-0a3kF70I.js";import"./Label-CTisYkFS.js";import"./Text-B7j_haGg.js";import"./DOMUtils-uFQLQ8Py.js";import"./useId-Di9tEwNI.js";import"./useBackwardsCompatibleTheme-C8tb1jUV.js";import"./ZIndexLayer-SmUjHGv1.js";import"./useAnimationId-BDtWHeb_.js";import"./ActivePoints-DAXej_aD.js";import"./Dot-CRQkuIVU.js";import"./RegisterGraphicalItemId-BA3j10pa.js";import"./ErrorBarContext-CYWSJ13C.js";import"./GraphicalItemClipPath-3vc4gJgj.js";import"./SetGraphicalItem-jWHGIqY5.js";import"./getRadiusAndStrokeWidthFromDot-BevzmnHp.js";import"./ActiveShapeUtils-Dqrzinyd.js";import"./useGraphicalItemIdentity-DlBKGkIj.js";import"./CartesianAxis-CosHp30d.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
