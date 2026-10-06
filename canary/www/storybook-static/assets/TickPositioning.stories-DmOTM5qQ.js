import{R as t}from"./iframe-B0eldO7v.js";import{R as m}from"./zIndexSlice-CXop2G5e.js";import{L as s}from"./LineChart-CWAYa6yv.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-YlkEKwc2.js";import{X as l}from"./XAxis-GLXwZBor.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D7OWylrB.js";import"./index-DCLOFYkq.js";import"./index-BKRX5CvI.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dl5A3vcA.js";import"./isWellBehavedNumber-Bs9ryC8U.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BwMPh17B.js";import"./axisSelectors-B4pxDEAY.js";import"./d3-scale-B5kcweJa.js";import"./index-C_-NyhpR.js";import"./index-Bdj7MaD4.js";import"./renderedTicksSlice-D3LeHV-Y.js";import"./index-DlY7-xoe.js";import"./CartesianChart-CoOYNy_x.js";import"./chartDataContext-1U_QIO6p.js";import"./CategoricalChart-B8AkurP8.js";import"./Layer-BkeFUCM0.js";import"./Curve-W12vhYO0.js";import"./types-BECNnjMS.js";import"./step-BjD9SRNv.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bli2w_x8.js";import"./Label-wnFLP2Gb.js";import"./Text-DkYUHdlt.js";import"./DOMUtils-DXyJKZjT.js";import"./useId-ByWKwJ9t.js";import"./useBackwardsCompatibleTheme-peNjLWv-.js";import"./ZIndexLayer-CuGirjla.js";import"./useAnimationId-REGnqG-r.js";import"./ActivePoints-oqRPT4fh.js";import"./Dot-poKEwaeq.js";import"./RegisterGraphicalItemId-DGTqEQmn.js";import"./ErrorBarContext-CZy75mIo.js";import"./GraphicalItemClipPath-DvdFYP5C.js";import"./SetGraphicalItem-FUNEgggo.js";import"./getRadiusAndStrokeWidthFromDot-D6ch2P3E.js";import"./ActiveShapeUtils-BmGLuzNe.js";import"./useGraphicalItemIdentity-CcjTcmiI.js";import"./CartesianAxis-a7vTeDpH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
