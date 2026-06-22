import{R as t}from"./iframe-CvYyRmMb.js";import{R as m}from"./zIndexSlice-Cp8J06te.js";import{L as s}from"./LineChart-DUYYSeZn.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Ox0BYUUe.js";import{X as l}from"./XAxis-3reDaDaV.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DxglGVhE.js";import"./index-ximmRSZs.js";import"./index-GLYrDd_3.js";import"./get-CIMqXaai.js";import"./resolveDefaultProps-VEZFy5tu.js";import"./isWellBehavedNumber-Lw6v0aAh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BcqH_-Dr.js";import"./index-D24-ZTWt.js";import"./index-BDFNdDeq.js";import"./renderedTicksSlice-BWK4MGTQ.js";import"./axisSelectors-C-wRbz-D.js";import"./d3-scale-ZyzwHhuQ.js";import"./CartesianChart-BwCKHjXt.js";import"./chartDataContext-WmbcVDkE.js";import"./CategoricalChart-BVRGiY0N.js";import"./Layer-C5boFLOM.js";import"./Curve-B0ipnk9C.js";import"./types-Zq1Yq0zW.js";import"./step-CfQihZ4L.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C6-g87vu.js";import"./Label-CYZiU-dh.js";import"./Text-B2fcvIhU.js";import"./DOMUtils-Bkzksssp.js";import"./ZIndexLayer-BRD83X3W.js";import"./useAnimationId-BRj_sN3I.js";import"./ActivePoints-T9IVC-_m.js";import"./Dot-B1euizWe.js";import"./RegisterGraphicalItemId-wnXP5bti.js";import"./ErrorBarContext-CaDNtEdt.js";import"./GraphicalItemClipPath-b7ayD98P.js";import"./SetGraphicalItem-Bggld1CO.js";import"./getRadiusAndStrokeWidthFromDot-Dx9iWsDu.js";import"./ActiveShapeUtils-DSfdlNCJ.js";import"./CartesianAxis-Be4--iUh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
