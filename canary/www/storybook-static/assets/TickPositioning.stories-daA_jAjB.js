import{R as t}from"./iframe-eHTE8XbR.js";import{R as m}from"./zIndexSlice-CwHm8jEL.js";import{L as s}from"./LineChart-BlrWvgHb.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DcoeyTM0.js";import{X as l}from"./XAxis-Cvnzf1dT.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D7Re1Y2w.js";import"./index-Dxr-7wC-.js";import"./index-gcAHcJS-.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-l2cuQuhM.js";import"./isWellBehavedNumber-BEewLsBb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DGSwepyW.js";import"./axisSelectors-CazxXIUK.js";import"./d3-scale-CyTtDi_G.js";import"./index-BaEdESzW.js";import"./index-sqcRhlaW.js";import"./renderedTicksSlice-GO_dvkn7.js";import"./index-1QxhuPS4.js";import"./CartesianChart-DWMHxp7T.js";import"./chartDataContext-B57YfjZ7.js";import"./CategoricalChart-NxXAGTpx.js";import"./Layer-Rvjy0lqp.js";import"./Curve-CpXkKn29.js";import"./types-BOeFjqIc.js";import"./step-B8Kmttuh.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-iYX-QLNJ.js";import"./Label-BHKNCvXv.js";import"./Text-qSZv8Fj3.js";import"./DOMUtils-C0F5dZFI.js";import"./useId-6ohiSOpB.js";import"./useBackwardsCompatibleTheme-BGy_-u8K.js";import"./ZIndexLayer-DPdP9SWD.js";import"./useAnimationId-Dn1LCCOz.js";import"./ActivePoints-CD98k9Q1.js";import"./Dot-CrWlWXGl.js";import"./RegisterGraphicalItemId-Cmo8QrR_.js";import"./ErrorBarContext-B3ngcVu0.js";import"./GraphicalItemClipPath-Dm2FfYtP.js";import"./SetGraphicalItem-Byf3PY1O.js";import"./getRadiusAndStrokeWidthFromDot-D8K1Hpkd.js";import"./ActiveShapeUtils-DCxXoOp2.js";import"./useGraphicalItemIdentity-Bl8ISiJK.js";import"./CartesianAxis-Dyb6UtbO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
