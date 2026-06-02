import{c as t}from"./iframe-Dy-e7pIM.js";import{g as m}from"./zIndexSlice-BAzwug6r.js";import{L as s}from"./LineChart-JuSWOshG.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-C_3X6bsH.js";import{X as l}from"./XAxis-CumYrXMb.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-kVBDWM7h.js";import"./index-DUyY-sZ6.js";import"./index-B7Kt7cV8.js";import"./get-D_U-7Kmb.js";import"./resolveDefaultProps-BOUnRnbS.js";import"./isWellBehavedNumber-Bj92k7jm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D0mQ-9Gw.js";import"./index-SXoyUqv9.js";import"./index-rCxGgy9o.js";import"./renderedTicksSlice-D80uYtAJ.js";import"./axisSelectors-DHlr3EdZ.js";import"./d3-scale-MtjUkFvo.js";import"./CartesianChart-Cf77c1Wa.js";import"./chartDataContext-HpYadsZ6.js";import"./CategoricalChart-Csue9Qd9.js";import"./Curve-rRxZ5v9J.js";import"./types-B745wbwD.js";import"./step-r56XM2D6.js";import"./path-DyVhHtw_.js";import"./Layer-BQggJIEv.js";import"./ReactUtils-DdYRakW1.js";import"./Label-Bd4SV5Lr.js";import"./Text-DrCcB5Q6.js";import"./DOMUtils-CWH-10kL.js";import"./ZIndexLayer-DgxZOhGb.js";import"./ActivePoints-Bnfm65-K.js";import"./Dot-DJgC10rz.js";import"./RegisterGraphicalItemId-CWayAjG_.js";import"./ErrorBarContext-N7PuOz_i.js";import"./GraphicalItemClipPath-Birlsn4M.js";import"./SetGraphicalItem-rhS26CgA.js";import"./useAnimationId-D1tL6Rir.js";import"./getRadiusAndStrokeWidthFromDot-CBX6IKOe.js";import"./ActiveShapeUtils-FFunzflv.js";import"./CartesianAxis-kW3aoD-D.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
