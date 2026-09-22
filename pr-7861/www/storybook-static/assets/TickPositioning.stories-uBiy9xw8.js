import{R as t}from"./iframe-Bnv6kU7L.js";import{R as m}from"./zIndexSlice-DX-eN-rE.js";import{L as s}from"./LineChart-CjHOueXW.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-D6sVYIrE.js";import{X as l}from"./XAxis-DBNaBuJh.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C8n004OX.js";import"./index-6B8fwti2.js";import"./index-B1qZkGH5.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C4JEpLWp.js";import"./isWellBehavedNumber-p1Jk9e7e.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BdebKPLC.js";import"./axisSelectors-W-alhPkw.js";import"./d3-scale-BHEdKRtF.js";import"./index-DLmKm2EF.js";import"./index-C7lLa1F-.js";import"./renderedTicksSlice-B5DhdENT.js";import"./index-DoLpWonQ.js";import"./CartesianChart-4rkSr6qB.js";import"./chartDataContext-DQDeMryS.js";import"./CategoricalChart-a21GUZij.js";import"./Layer-LCeVZLuX.js";import"./Curve-CLFCklxA.js";import"./types-CI78TRyx.js";import"./step-DsteWZ2Z.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BMX-ziY5.js";import"./Label-IhJ6Pxyk.js";import"./Text--hmlT8ZH.js";import"./DOMUtils-CsnJkvN_.js";import"./useId-6CZAolK0.js";import"./useBackwardsCompatibleTheme-C_K8id13.js";import"./ZIndexLayer-BRXf-lni.js";import"./useAnimationId-DYSRVMST.js";import"./ActivePoints-DPnTwfCa.js";import"./Dot-CcU1d5Kn.js";import"./RegisterGraphicalItemId-DzNK_j43.js";import"./ErrorBarContext-B1AHLu2R.js";import"./GraphicalItemClipPath-H0CINiNQ.js";import"./SetGraphicalItem-Gy1IhQNd.js";import"./getRadiusAndStrokeWidthFromDot-CAEUp3rE.js";import"./ActiveShapeUtils-BfWUUsmh.js";import"./useGraphicalItemIdentity-CQh8XILo.js";import"./CartesianAxis-BurxlCSY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
