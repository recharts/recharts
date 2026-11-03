import{R as t}from"./iframe-XIWN-8LW.js";import{R as m}from"./zIndexSlice-CeTDvnmV.js";import{L as s}from"./LineChart-BUZeOAC5.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-B6hIzkaB.js";import{X as l}from"./XAxis-xF4zDX5U.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B5b48pxf.js";import"./throttle-DRx8DeZx.js";import"./index-aVJjGtUe.js";import"./index-BkVjohbh.js";import"./RechartsWrapper-BeCgk11S.js";import"./axisSelectors-Ct9ZEPSa.js";import"./polarAxisSelectors-DQxdihyW.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BvS2o_Zb.js";import"./index-CLmLkjoe.js";import"./index-DUogMgN_.js";import"./renderedTicksSlice-DpPQ5RFR.js";import"./index-pEcVg_GN.js";import"./fillDefinitions-BnpiLimK.js";import"./CartesianChart-Cb1xlur4.js";import"./ZIndexPortal-DjT5vY1_.js";import"./CategoricalChart-xnoIgStO.js";import"./Layer-CxaTRkgO.js";import"./Curve-BDW_2Enz.js";import"./types-CnZsW2lD.js";import"./step-D7Gnf8qO.js";import"./path-DyVhHtw_.js";import"./LabelList-DPGWqLfL.js";import"./Label-DO8sqqdZ.js";import"./Text-DltUF9fa.js";import"./DOMUtils-CCpPdTbp.js";import"./ZIndexLayer-Bd21CySm.js";import"./ActivePoints-CytZfQ5l.js";import"./Dot-8IXYnCyr.js";import"./activeStyles-C-BzGRm8.js";import"./useAnimationId-BQkOAk0c.js";import"./dataEntryStyles-GFsHahL2.js";import"./Symbols-Cwdzyt52.js";import"./symbol-DWZ08l1L.js";import"./ErrorBarContext-BZ9_Mv4V.js";import"./SetGraphicalItem-DypkohdD.js";import"./getRadiusAndStrokeWidthFromDot-DRDDou6B.js";import"./ActiveShapeUtils-DHUczxG_.js";import"./useEffectiveDataKey-qss65ryL.js";import"./CartesianAxis-BxPz-Jvl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,ct as __namedExportsOrder,st as default};
