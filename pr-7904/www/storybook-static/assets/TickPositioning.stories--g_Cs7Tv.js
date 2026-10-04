import{R as t}from"./iframe-DeP4Wy7i.js";import{R as m}from"./zIndexSlice-nnPIR1gF.js";import{L as s}from"./LineChart-DdhqaBVt.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BE3lNE-B.js";import{X as l}from"./XAxis-D55ujQEE.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-meF8BPI2.js";import"./index-iD4LtFlt.js";import"./index-CP6Rv1Sw.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cuw6EoTI.js";import"./isWellBehavedNumber-oQsvKY8H.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CSrF3qvK.js";import"./axisSelectors-CZy9dm6d.js";import"./d3-scale-BMFuZ2xk.js";import"./index-bTLe7Jwh.js";import"./index-LaINuLzR.js";import"./renderedTicksSlice-UEqy9PPR.js";import"./index-BI5vUZLp.js";import"./CartesianChart-n8mpzi4z.js";import"./chartDataContext-O08JVLGx.js";import"./CategoricalChart-DHRd-r0A.js";import"./Layer-CBmTHU88.js";import"./Curve-BgvZ8zEy.js";import"./types-CanfrVuk.js";import"./step-D7VIgsjb.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-XIng_I1E.js";import"./Label-BDn5In4u.js";import"./Text-tlJnHXas.js";import"./DOMUtils-fGj0XAk5.js";import"./useId-Bwy1FQE5.js";import"./useBackwardsCompatibleTheme-CIuhIiJU.js";import"./ZIndexLayer-46z2Emao.js";import"./useAnimationId-BrY9w4yL.js";import"./ActivePoints-CKZ5Aqki.js";import"./Dot-BLQMwT0r.js";import"./RegisterGraphicalItemId-C2Pze7xm.js";import"./ErrorBarContext-kXoA89OY.js";import"./GraphicalItemClipPath-F-rOP2Wx.js";import"./SetGraphicalItem-Bb8kLJya.js";import"./getRadiusAndStrokeWidthFromDot-mAqkcHAK.js";import"./ActiveShapeUtils-DbA45Jz_.js";import"./useGraphicalItemIdentity-DO54SzyN.js";import"./CartesianAxis-CZDdo6k-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
