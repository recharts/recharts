import{e as t}from"./iframe-CVCS2awI.js";import{g as n}from"./arrayEqualityCheck-BScHcl7E.js";import{L as s}from"./LineChart-gk_21NPw.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-KS6zX881.js";import{X as l}from"./XAxis-DEoN5sn7.js";import{R as v}from"./RechartsHookInspector-3dEt4e8Z.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-ByXJQ66f.js";import"./immer-BGDSirDa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CsYjkcUu.js";import"./index-DBY1MSkk.js";import"./hooks-DdU_FuUR.js";import"./axisSelectors-Ci1MJvZY.js";import"./d3-scale-BXP4l8lb.js";import"./zIndexSlice-CYiE3KZh.js";import"./renderedTicksSlice-DEe4uQXq.js";import"./CartesianChart-g3EB1H8Z.js";import"./chartDataContext-CE4uM-kC.js";import"./CategoricalChart-DjXgWEwo.js";import"./Layer-ByxoiXYR.js";import"./ReactUtils-rjXWPyV6.js";import"./Label-DaKOoJ3c.js";import"./Text-CDmz-7H5.js";import"./DOMUtils-DM2Mtfvr.js";import"./ZIndexLayer-qvuGpwS0.js";import"./ActivePoints-hZ66QtRZ.js";import"./Dot-BYrokBNa.js";import"./types-Dgqt75FW.js";import"./RegisterGraphicalItemId-DdbYzmem.js";import"./ErrorBarContext-DiMABLnG.js";import"./GraphicalItemClipPath-_oXfIigP.js";import"./SetGraphicalItem-2oqi_YeH.js";import"./useAnimationId-B8F28VZa.js";import"./getRadiusAndStrokeWidthFromDot-l3MHvEmn.js";import"./ActiveShapeUtils-B0Gi97Qx.js";import"./isPlainObject-C1Vy2OK5.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DLDHpE0T.js";import"./Trapezoid-Drv7mFxs.js";import"./Sector-C1cGt--Q.js";import"./Symbols-Dz4m2MlL.js";import"./symbol-DdzOPpJh.js";import"./step-3E9Doowe.js";import"./Curve-CrfOdonX.js";import"./CartesianAxis-PbPLy1Ao.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-D6BiGzwv.js";import"./ChartSizeDimensions-Cz6I6g2_.js";import"./OffsetShower-mSbEp68m.js";import"./PlotAreaShower-Bh-nVQY_.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
