import{e as t}from"./iframe-3667Tvz2.js";import{R as n}from"./arrayEqualityCheck-D9OvKJwD.js";import{L as s}from"./LineChart-CgpJj2mZ.js";import{L as c}from"./Line-D4SOJls3.js";import{X as d}from"./XAxis-BpxRjWnh.js";import{R as l}from"./RechartsHookInspector-CJCnB7_4.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BtuJUOf7.js";import"./immer-UKt74SqS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-oIAnzkqM.js";import"./index-C4SUCtnx.js";import"./hooks-BZsQuy7Q.js";import"./axisSelectors-DQHNBIMP.js";import"./d3-scale-DGzXDIH7.js";import"./zIndexSlice-T5ACl1fd.js";import"./renderedTicksSlice-AmLe9sEW.js";import"./CartesianChart-DujR4c01.js";import"./chartDataContext-DwqmBR6M.js";import"./CategoricalChart-BIICkzoQ.js";import"./Layer-DkCxZ1Nm.js";import"./ReactUtils-BGYookdr.js";import"./Label-BZ-HO-n4.js";import"./Text-BJUXCfBk.js";import"./DOMUtils-CXQ8jzVY.js";import"./ZIndexLayer-DQkUzdJa.js";import"./ActivePoints-uWw7uTV8.js";import"./Dot-CliWMADJ.js";import"./types-B-N1LhIG.js";import"./RegisterGraphicalItemId-6KUqIGYl.js";import"./ErrorBarContext-f546Mx0J.js";import"./GraphicalItemClipPath-B2jRUZRX.js";import"./SetGraphicalItem-9InqSUgs.js";import"./useAnimationId-QOY8B5bM.js";import"./getRadiusAndStrokeWidthFromDot-knWG_owO.js";import"./ActiveShapeUtils-BGTdwFBk.js";import"./isPlainObject-BNfNO1bM.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CBZ7nnGZ.js";import"./Trapezoid-BmNjJBFD.js";import"./Sector-DqFdBDD-.js";import"./Symbols-Dz33hGQT.js";import"./symbol-DLtpIQQd.js";import"./step-DREQNBhH.js";import"./Curve-BaNFvaPx.js";import"./CartesianAxis-C27eZMEL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BoqoSvrt.js";import"./ChartSizeDimensions-rVAYYRrn.js";import"./OffsetShower-DYHCblSP.js";import"./PlotAreaShower-BlEzOlOg.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ht=["TickPositioning"];export{r as TickPositioning,ht as __namedExportsOrder,vt as default};
