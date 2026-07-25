import{R as t}from"./iframe-GS6tWWpF.js";import{R as m}from"./zIndexSlice-CiKhndgZ.js";import{L as s}from"./LineChart-JxKSilzw.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-gVUwMIqe.js";import{X as l}from"./XAxis-Bx65GQrC.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C-IXy7Zr.js";import"./index-DfG20-Zs.js";import"./index-C2uAvHn9.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BZjeTZ39.js";import"./isWellBehavedNumber-BW5zPDve.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bqosr4xy.js";import"./index-C6xrf2-Z.js";import"./index-Di15QQ8x.js";import"./renderedTicksSlice-BVCAtPIh.js";import"./axisSelectors-yfKyalbW.js";import"./d3-scale-CHW2xi3e.js";import"./CartesianChart-DRtNG600.js";import"./chartDataContext-BZ0W7ETA.js";import"./CategoricalChart-CsHskHmr.js";import"./Layer-C3MBqN5-.js";import"./Curve-DDxJXFaA.js";import"./types-CDHFW4tQ.js";import"./step-DCV2XceF.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DA4k4owl.js";import"./Label--UyVH_YZ.js";import"./Text-CUZPSeM8.js";import"./DOMUtils-cB85CLZU.js";import"./ZIndexLayer-CvFwUsq0.js";import"./useAnimationId-ZFeP4ddJ.js";import"./ActivePoints-DIXN5qj6.js";import"./Dot-Bv3wAmgY.js";import"./RegisterGraphicalItemId-BRazAOV1.js";import"./ErrorBarContext-D6lw1b7W.js";import"./GraphicalItemClipPath-fALP-Awj.js";import"./SetGraphicalItem-XvYC4EkM.js";import"./getRadiusAndStrokeWidthFromDot-Dd_icqpB.js";import"./ActiveShapeUtils-DTjXKb5y.js";import"./CartesianAxis-DPqu1YVY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
