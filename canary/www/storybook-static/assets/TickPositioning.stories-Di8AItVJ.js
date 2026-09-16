import{R as t}from"./iframe-H7jEjneP.js";import{R as m}from"./zIndexSlice-Dwk71gAs.js";import{L as s}from"./LineChart-B_r2C6lQ.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CejbRaJQ.js";import{X as l}from"./XAxis-C43A4phh.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bn1i2xOI.js";import"./index-DTPOqFjg.js";import"./index-DgXESwgB.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bj9dJCv2.js";import"./isWellBehavedNumber-DWCHHiO4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BVH4-pX9.js";import"./axisSelectors-D2lTMvot.js";import"./d3-scale-BleojrFS.js";import"./index-zqvhcYYr.js";import"./index-DrbE-eKG.js";import"./renderedTicksSlice-BRHju3tw.js";import"./index-CGgy5q-V.js";import"./CartesianChart-DtibPJLh.js";import"./chartDataContext-B51jhbZz.js";import"./CategoricalChart-W9YrWS6c.js";import"./Layer-FJAqqNNz.js";import"./Curve-Etd9Rf3G.js";import"./types-CAmW2CbH.js";import"./step-vnfu6Ctu.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-zgVz-4ei.js";import"./Label-DbiDHxJi.js";import"./Text-B4P_g0R9.js";import"./DOMUtils-C61hDB9-.js";import"./useId-ZSgrseWl.js";import"./useBackwardsCompatibleTheme-CTObI66g.js";import"./ZIndexLayer-5waeKBAU.js";import"./useAnimationId-CpeZSN5w.js";import"./ActivePoints-BbbrdPUM.js";import"./Dot-DQi7JtyA.js";import"./RegisterGraphicalItemId-BUF7N8O-.js";import"./ErrorBarContext-VTewkZK5.js";import"./GraphicalItemClipPath-7Dat9Ey8.js";import"./SetGraphicalItem-sO5iD_xL.js";import"./getRadiusAndStrokeWidthFromDot-8tlUvvpa.js";import"./ActiveShapeUtils-6A9Zooe8.js";import"./useGraphicalItemIdentity-DWbVUF44.js";import"./CartesianAxis-YWS3Tdxj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
