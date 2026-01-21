import{e as t}from"./iframe-Dt2-Rn2T.js";import{R as s}from"./arrayEqualityCheck-e3rdG8sZ.js";import{L as m}from"./LineChart-Ct2spzHg.js";import{L as c}from"./Line-BoGV8EYk.js";import{X as d}from"./XAxis-CRrkfAWq.js";import{R as l}from"./RechartsHookInspector-5aSdxu_t.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BoKEDzkZ.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CBGhND_r.js";import"./hooks-DJKBhfj1.js";import"./axisSelectors-B_oLlWSB.js";import"./zIndexSlice-C1nzEFYS.js";import"./CartesianChart-B7uV6D3o.js";import"./chartDataContext-DW1Hpk6b.js";import"./CategoricalChart-Dpdb76Jr.js";import"./Layer-Cy-kS3Tn.js";import"./ReactUtils-OtSSiA15.js";import"./Label-C32CYHoq.js";import"./Text-Bi0muiqL.js";import"./DOMUtils-ngjC_q0v.js";import"./ZIndexLayer-RqzvM65R.js";import"./ActivePoints-DYpwLrvq.js";import"./Dot-yws4r2HM.js";import"./types-BU6HIYaW.js";import"./RegisterGraphicalItemId-BHPtgntX.js";import"./ErrorBarContext-Ds0jOqwg.js";import"./GraphicalItemClipPath-DzB0Slfu.js";import"./SetGraphicalItem-C72JWaDt.js";import"./useAnimationId-C5m05tY7.js";import"./getRadiusAndStrokeWidthFromDot-9ys3gSvC.js";import"./ActiveShapeUtils-d0cRIwlh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CbTbEpru.js";import"./Trapezoid-BtcZZN-I.js";import"./Sector-D7OsKu7Y.js";import"./Symbols-Cq9VSHhf.js";import"./Curve-Ff2ksW4t.js";import"./CartesianAxis-CuL6QCDl.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-DBIfqZnx.js";import"./ChartSizeDimensions-CGKu1G21.js";import"./OffsetShower-Cg1AihHI.js";import"./PlotAreaShower-Byk-bE4C.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,at as default};
