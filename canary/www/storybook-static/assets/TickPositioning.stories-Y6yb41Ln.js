import{e as t}from"./iframe-CLFlzKU9.js";import{R as n}from"./arrayEqualityCheck-CV0K5b6V.js";import{L as s}from"./LineChart-BeAjylaw.js";import{L as c}from"./Line-SwDxyZLv.js";import{X as d}from"./XAxis-CTep6ajY.js";import{R as l}from"./RechartsHookInspector-EUreR-RY.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BSRSJIfm.js";import"./immer-Dut6E3j8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BmUcxmwQ.js";import"./index-Di3CFc3K.js";import"./hooks-CNG9zZ1X.js";import"./axisSelectors-ZIzlwa2b.js";import"./d3-scale-DFBNx2RG.js";import"./zIndexSlice-Dgcx4EWE.js";import"./renderedTicksSlice-qTsdruV1.js";import"./CartesianChart-CLuzMUl3.js";import"./chartDataContext-BF88oXyn.js";import"./CategoricalChart-Dmo86WGi.js";import"./Layer-D55T8TbI.js";import"./ReactUtils-KqS4Be82.js";import"./Label-B8vPAEDz.js";import"./Text-B9BEHbSp.js";import"./DOMUtils-BVpUDVI2.js";import"./ZIndexLayer-CygGErko.js";import"./ActivePoints-Bn6jZmU2.js";import"./Dot-CU0xm_xN.js";import"./types-C77fUvNb.js";import"./RegisterGraphicalItemId-DlwxkAlg.js";import"./ErrorBarContext-CcCgl_nm.js";import"./GraphicalItemClipPath-BsB0ULuR.js";import"./SetGraphicalItem-DQtM1PSt.js";import"./useAnimationId-B-nqwfiH.js";import"./getRadiusAndStrokeWidthFromDot-DYWP2VQN.js";import"./ActiveShapeUtils-CngmHGxL.js";import"./isPlainObject-C5TOG-jr.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BGUQeJvS.js";import"./Trapezoid-Nj1UelrR.js";import"./Sector-BGoD3vr5.js";import"./Symbols-B84FzpuI.js";import"./symbol-DS4qszt7.js";import"./step-BHh7-B-Y.js";import"./Curve-04aIAzqq.js";import"./CartesianAxis-U7WBccnc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CmeZFfhb.js";import"./ChartSizeDimensions-BcSaWdnw.js";import"./OffsetShower-C38qJAL5.js";import"./PlotAreaShower-CA5JgFjx.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
