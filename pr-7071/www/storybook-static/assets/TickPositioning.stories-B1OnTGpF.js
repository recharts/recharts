import{e as t}from"./iframe-BKMt6m5h.js";import{R as n}from"./arrayEqualityCheck-DKiSJyxs.js";import{L as s}from"./LineChart-Dum4Cbo_.js";import{L as c}from"./Line-CxUnuEFd.js";import{X as d}from"./XAxis-CDLcqOUJ.js";import{R as l}from"./RechartsHookInspector-C8vh1C69.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DRqv39RM.js";import"./immer-119-Vx0I.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CBmXgxrR.js";import"./index-0ICx_Jh1.js";import"./hooks-CVLKfhqZ.js";import"./axisSelectors-_eXkUPwd.js";import"./d3-scale-eFzonIBi.js";import"./zIndexSlice-C-hcpEb_.js";import"./renderedTicksSlice-CoSXmQJE.js";import"./CartesianChart-DIHhcgBc.js";import"./chartDataContext-BHrrZZEw.js";import"./CategoricalChart-BQZ3b4pY.js";import"./Layer-C7IPz0M5.js";import"./ReactUtils-ChQm2gA4.js";import"./Label-COa6_klK.js";import"./Text-DA8ucQjy.js";import"./DOMUtils-AZdfoklW.js";import"./ZIndexLayer-BVz5K0QN.js";import"./ActivePoints-DcGeiB2-.js";import"./Dot-D-9lW8I7.js";import"./types-CWEN2hKj.js";import"./RegisterGraphicalItemId-Cr9Zp2xj.js";import"./ErrorBarContext-CYXSxlYD.js";import"./GraphicalItemClipPath-DfzX8699.js";import"./SetGraphicalItem-DCaX05zE.js";import"./useAnimationId-CMiOk1pX.js";import"./getRadiusAndStrokeWidthFromDot-Cc011FPr.js";import"./ActiveShapeUtils-CFZSnkxp.js";import"./isPlainObject-7Y5kwcXL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B_C8hcZh.js";import"./Trapezoid-Cs1O72ba.js";import"./Sector-_bf6LJcr.js";import"./Symbols-DEMmgvtO.js";import"./symbol-Mq3R2Ynh.js";import"./step-q1byNl46.js";import"./Curve-CIJPKaTL.js";import"./CartesianAxis-BvH7Qvln.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CM5FbTKx.js";import"./ChartSizeDimensions-DMUyiIA2.js";import"./OffsetShower-r91l4zph.js";import"./PlotAreaShower-Sm9yLIMv.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
