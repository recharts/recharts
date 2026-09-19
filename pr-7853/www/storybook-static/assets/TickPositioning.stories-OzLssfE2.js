import{R as t}from"./iframe-BrTyBnwX.js";import{R as m}from"./zIndexSlice-fCAjIC-s.js";import{L as s}from"./LineChart-92onHMm3.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DkNRiu0X.js";import{X as l}from"./XAxis-D80iBJd5.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DoecO86t.js";import"./index-Bv6_RxtD.js";import"./index-COio-J2v.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-pdBcEa5m.js";import"./isWellBehavedNumber-yFPwar6M.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BNiYksGw.js";import"./axisSelectors-CsVFdpc7.js";import"./d3-scale-BBCERD4_.js";import"./index-6bvANrWw.js";import"./index-CY5SFnak.js";import"./renderedTicksSlice-BfFRGBwT.js";import"./index-DWzY76B7.js";import"./CartesianChart-C4EYf5JO.js";import"./chartDataContext-C8snCbmL.js";import"./CategoricalChart-C8btz5qd.js";import"./Layer-DXlWYKjQ.js";import"./Curve-C0Njno5j.js";import"./types-CIyrEG5X.js";import"./step-DqmVBTvC.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Cw_YQpsP.js";import"./Label-BmV3H-Sw.js";import"./Text-BiFKA33F.js";import"./DOMUtils-DAEkqOho.js";import"./useId-DsdbKPS3.js";import"./useBackwardsCompatibleTheme-DZwZ5sQ-.js";import"./ZIndexLayer-CRDOSP7u.js";import"./useAnimationId-CQ1-fLBA.js";import"./ActivePoints-DGnEStBQ.js";import"./Dot-BNzrtaBE.js";import"./RegisterGraphicalItemId-NAciwQoL.js";import"./ErrorBarContext-ESvWnAE_.js";import"./GraphicalItemClipPath-DJrsjfnr.js";import"./SetGraphicalItem-eWJRfUVz.js";import"./getRadiusAndStrokeWidthFromDot-Ds0TVCkG.js";import"./ActiveShapeUtils-DenUl92R.js";import"./useGraphicalItemIdentity-CTGe8VwY.js";import"./CartesianAxis-MCmd_z9-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
