import{R as t}from"./iframe-S_Q04LyU.js";import{R as m}from"./zIndexSlice-Bxg2BBQ3.js";import{L as s}from"./LineChart-DzYjjA-7.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BOxz-rUw.js";import{X as l}from"./XAxis-D78GJHE5.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-sJ5Xwj7N.js";import"./index-B7fnCzo3.js";import"./index-bxbAArpl.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Dy-13YZo.js";import"./isWellBehavedNumber-B7JVG4WI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DllIXhjL.js";import"./index-rMJKouwD.js";import"./index-TooQEcPQ.js";import"./renderedTicksSlice-xSk0hPIv.js";import"./axisSelectors-BPn6DSnk.js";import"./d3-scale-C2cmQNtP.js";import"./CartesianChart-BKdvFgR6.js";import"./chartDataContext-pLCds2Ae.js";import"./CategoricalChart-90tJb_l9.js";import"./Layer-gdhaFlzY.js";import"./Curve-By1OgGZW.js";import"./types-B2JQaABL.js";import"./step-DWBBqdOb.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BE3OLqfb.js";import"./Label-DpgEyudD.js";import"./Text-C30Me8vu.js";import"./DOMUtils-b86ja7SN.js";import"./ZIndexLayer-Cyu3q_2t.js";import"./useAnimationId-CWYmV7EH.js";import"./ActivePoints-D50UgDCx.js";import"./Dot-D891HGOH.js";import"./RegisterGraphicalItemId-C_r44y5X.js";import"./ErrorBarContext-TTmfdmNR.js";import"./GraphicalItemClipPath-BhFzIWrz.js";import"./SetGraphicalItem-CmPnocAL.js";import"./getRadiusAndStrokeWidthFromDot-CwsW4Xpc.js";import"./ActiveShapeUtils-CQj2Q4HD.js";import"./CartesianAxis-DhttszFl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
