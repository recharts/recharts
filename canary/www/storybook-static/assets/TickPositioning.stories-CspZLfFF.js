import{R as t}from"./iframe-kr7fVjhm.js";import{R as m}from"./zIndexSlice-BZPaZoVE.js";import{L as s}from"./LineChart-DAaRd2c5.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-6cFMEXcZ.js";import{X as l}from"./XAxis-DuCvvYgu.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D_awpPCx.js";import"./index-D2MHq5Hk.js";import"./index-B4gF14t1.js";import"./get-Clowvj21.js";import"./resolveDefaultProps-B2SvaHgo.js";import"./isWellBehavedNumber-Dgwr4Y0K.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BXLkHwYV.js";import"./index-Bi4GHbSg.js";import"./index-C_7j0jGJ.js";import"./renderedTicksSlice-DSu7HAeh.js";import"./axisSelectors-C6aKDGBg.js";import"./d3-scale-D8KPLyuv.js";import"./CartesianChart-xwjZDYjt.js";import"./chartDataContext-CX_0Naaw.js";import"./CategoricalChart-Bef2xtAx.js";import"./Layer-BpeNKyUn.js";import"./Curve-B0z7kkbw.js";import"./types-BF09pdOO.js";import"./step-DhEFjA1U.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DqhNqm_F.js";import"./Label-BzX4e21C.js";import"./Text-DjM5ugTe.js";import"./DOMUtils-C68MxIVY.js";import"./ZIndexLayer-DgDl0x_M.js";import"./useAnimationId-D5l55oDh.js";import"./ActivePoints-DGPf_3U2.js";import"./Dot-B_HKYeQ3.js";import"./RegisterGraphicalItemId-fKNs0JEp.js";import"./ErrorBarContext-CdB9Q1sE.js";import"./GraphicalItemClipPath-BFOwa2gv.js";import"./SetGraphicalItem-CV-IUFmw.js";import"./getRadiusAndStrokeWidthFromDot-ow-LYvhf.js";import"./ActiveShapeUtils-DcRBgo4o.js";import"./CartesianAxis-BtEPbzKb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
