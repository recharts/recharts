import{R as t}from"./iframe-qeJRbQC_.js";import{R as m}from"./zIndexSlice-7202Aouk.js";import{L as s}from"./LineChart-SK0JI0QU.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-gjOGxWIr.js";import{X as l}from"./XAxis-u_1Q5fGR.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bm7TlndJ.js";import"./index-BD72gC8i.js";import"./index-DyUeFg7T.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DeRAgm8x.js";import"./isWellBehavedNumber-CEbP45d6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CI86w_cv.js";import"./axisSelectors-D3Tk6yw2.js";import"./d3-scale-DPqZAioL.js";import"./index-DfrLYgMZ.js";import"./index-COOVNst_.js";import"./renderedTicksSlice-BMyK9gC5.js";import"./index-BOsshKUN.js";import"./CartesianChart-D9mK1Hr2.js";import"./chartDataContext-BPJsRsvJ.js";import"./CategoricalChart-DXUZLIpB.js";import"./Layer-DnfYbRaC.js";import"./Curve-u1NUazY3.js";import"./types-CQ8TW7B4.js";import"./step-m8FbBLvj.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Ba5qFTnf.js";import"./Label-IJrwe4z6.js";import"./Text-CGxsVVX7.js";import"./DOMUtils-DzJTCa9O.js";import"./useId-BP7tb9fo.js";import"./useBackwardsCompatibleTheme-DmTHavmp.js";import"./ZIndexLayer-D8LlaNHN.js";import"./useAnimationId-Dc0yoLfA.js";import"./ActivePoints-zmt_Feef.js";import"./Dot-BTyyD634.js";import"./RegisterGraphicalItemId-C6fN5b4g.js";import"./ErrorBarContext-Brj2ZIP_.js";import"./GraphicalItemClipPath-wv7NC4zW.js";import"./SetGraphicalItem-BpzaqcDs.js";import"./getRadiusAndStrokeWidthFromDot-8Ne4VOFo.js";import"./ActiveShapeUtils-DKEMCySD.js";import"./useGraphicalItemIdentity-DtcgFGn-.js";import"./CartesianAxis-BByvFPIV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
