import{R as t}from"./iframe-Cx28kabR.js";import{R as m}from"./zIndexSlice-BJophbSs.js";import{L as s}from"./LineChart-BsMAUKhp.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Cn1MCW6C.js";import{X as l}from"./XAxis-CWTUtLan.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-C9z4Tvb1.js";import"./index-CXdTgtXr.js";import"./index-Cl_UPhhU.js";import"./get-B9lrw7-x.js";import"./resolveDefaultProps-DKQmb89J.js";import"./isWellBehavedNumber-CMbzImp5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DI8RF6tE.js";import"./index-DVR_r8nO.js";import"./index-D-WuKlNL.js";import"./renderedTicksSlice-fyKJy_9M.js";import"./axisSelectors-Bitj5C0u.js";import"./d3-scale-Dbt5vd1_.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Ub9LiVnx.js";import"./chartDataContext-BAHJZWaV.js";import"./CategoricalChart-CC4_m9gZ.js";import"./Layer-DvLhXWX-.js";import"./Curve-BhQA-w3U.js";import"./types-UeNFcMv5.js";import"./step-JKjbkiwo.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BxtLfWI4.js";import"./Label-BDMWILCu.js";import"./Text-CTvgLWx7.js";import"./DOMUtils-XPvxL8R9.js";import"./ZIndexLayer-CZAm4j4p.js";import"./useAnimationId-DLl-Zvtm.js";import"./ActivePoints-Bq-7Nh5y.js";import"./Dot-Iy9OPdn2.js";import"./RegisterGraphicalItemId-Blf5kOwl.js";import"./ErrorBarContext-ZNw_jj1S.js";import"./GraphicalItemClipPath-B8CVXRQ2.js";import"./SetGraphicalItem-Dk5vZuTC.js";import"./getRadiusAndStrokeWidthFromDot-pD6-2pnW.js";import"./ActiveShapeUtils-CP3CGhpS.js";import"./CartesianAxis-BKywCzO2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
