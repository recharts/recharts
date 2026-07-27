import{R as t}from"./iframe-dVfgBJJs.js";import{R as m}from"./zIndexSlice-Cjn5-XTM.js";import{L as s}from"./LineChart-Bjmb6A16.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CqjanWML.js";import{X as l}from"./XAxis-Dq_1Ikw5.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B7XzNIu7.js";import"./index-C6eTt67z.js";import"./index-MNnIylKM.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BJYE31LD.js";import"./isWellBehavedNumber-Dps59fvg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BUOG_0PT.js";import"./index-CFOPrJ2a.js";import"./index-CZjDID2X.js";import"./renderedTicksSlice-D2-S4Lnl.js";import"./axisSelectors-rruDH4Fs.js";import"./d3-scale-BnZ4Lirr.js";import"./CartesianChart-lwgDkPey.js";import"./chartDataContext-CKWmrP30.js";import"./CategoricalChart-C8uoPany.js";import"./Layer-CMYHU7wr.js";import"./Curve-BS8zfYeH.js";import"./types-zZpSojV-.js";import"./step-DuOmXCgZ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-_UVM3ygI.js";import"./Label-Qwq3mE6t.js";import"./Text-pzoHfxc1.js";import"./DOMUtils-BHngjwEG.js";import"./ZIndexLayer-CwGLm3MP.js";import"./useAnimationId-DepU2l4z.js";import"./ActivePoints-CtZ_3WUF.js";import"./Dot-C7HuS7dU.js";import"./RegisterGraphicalItemId-B-wtHeoX.js";import"./ErrorBarContext-CcM5piDn.js";import"./GraphicalItemClipPath-CjVY23ZB.js";import"./SetGraphicalItem-BrDpUng6.js";import"./getRadiusAndStrokeWidthFromDot--eZofM29.js";import"./ActiveShapeUtils-BR_u5MdP.js";import"./CartesianAxis-aoe5sT-Z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const at=["TickPositioning"];export{r as TickPositioning,at as __namedExportsOrder,ot as default};
