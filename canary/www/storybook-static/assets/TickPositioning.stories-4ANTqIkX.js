import{R as t}from"./iframe-D-xaWYx8.js";import{R as m}from"./zIndexSlice-D3SQ2MTt.js";import{L as s}from"./LineChart-CqgqkJAf.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BZDALygc.js";import{X as l}from"./XAxis-CMZs7JPg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Js9uooEF.js";import"./throttle-BmvgL6Rb.js";import"./index-B0Sv0m1A.js";import"./index-CA946KFv.js";import"./RechartsWrapper-BqPcQfd6.js";import"./axisSelectors-DG_H3BOM.js";import"./polarAxisSelectors-B6of_7Ld.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-fHLtEQjZ.js";import"./index-DJEWl4Hb.js";import"./index-ByDoJ5qb.js";import"./renderedTicksSlice-L8xFZ5qK.js";import"./index-BBNxXXGk.js";import"./CartesianChart-Dmz6gYzC.js";import"./ZIndexPortal-BwYTG8oV.js";import"./CategoricalChart-q3kg2ZZV.js";import"./Layer-BIK5Xkd-.js";import"./Curve-BcR2PIcQ.js";import"./types-Bc5RKUKD.js";import"./step-Dvrj1lLE.js";import"./path-DyVhHtw_.js";import"./LabelList-ZtaAtRMQ.js";import"./Label-1rgKTcFA.js";import"./Text-0YUR20e7.js";import"./pageBackground-DVX0bm4d.js";import"./ZIndexLayer-E_Dtb0Mx.js";import"./ActivePoints-13gcbTTt.js";import"./Dot-Chr86R6e.js";import"./activeStyles-QtdqAqWx.js";import"./useAnimationId-CvbEaa0a.js";import"./dataEntryStyles-Dh5c7_-V.js";import"./Symbols-DPqFwa0y.js";import"./symbol-BsZHRk5J.js";import"./ErrorBarContext-ChtZm3AF.js";import"./SetGraphicalItem-DMIM43_P.js";import"./getRadiusAndStrokeWidthFromDot-CuwhE4ca.js";import"./ActiveShapeUtils-wywHDhQW.js";import"./useEffectiveDataKey-D7oticDs.js";import"./CartesianAxis-Df6qFn96.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
