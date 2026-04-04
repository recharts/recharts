import{e as t}from"./iframe-DUJvjQLt.js";import{R as n}from"./arrayEqualityCheck-D73e69Gl.js";import{L as s}from"./LineChart-BxHlyJPM.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CKYIKoib.js";import{X as l}from"./XAxis-CDduZbSd.js";import{R as v}from"./RechartsHookInspector-DrzYioyl.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-8ySwU0EB.js";import"./immer-5FyrIQvG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CgMQObc0.js";import"./index-5w8w8rw4.js";import"./hooks-yQB_dM7s.js";import"./axisSelectors-sUoMIbfp.js";import"./d3-scale-DeFOwVvR.js";import"./zIndexSlice-Bkmt5zDA.js";import"./renderedTicksSlice-CvJNCVvu.js";import"./CartesianChart-DJ5W1dUn.js";import"./chartDataContext-BQu7UVSx.js";import"./CategoricalChart-Fz_Uxhkr.js";import"./Layer-CllgDPqI.js";import"./ReactUtils-t-sHadM3.js";import"./Label-DTyf3h_b.js";import"./Text-xsfGunAq.js";import"./DOMUtils-DjWXT55X.js";import"./ZIndexLayer-CKSncrZg.js";import"./ActivePoints-B-iqIfRa.js";import"./Dot-CMPDiPBa.js";import"./types-CDGURZBi.js";import"./RegisterGraphicalItemId-D72lmnH7.js";import"./ErrorBarContext-DyOg8xi-.js";import"./GraphicalItemClipPath-CkZzGh0E.js";import"./SetGraphicalItem-vFCTqo9Z.js";import"./useAnimationId-Dw_qoDvw.js";import"./getRadiusAndStrokeWidthFromDot-BjM5ou8k.js";import"./ActiveShapeUtils-BpbAKqrS.js";import"./isPlainObject-Dz-OvCgD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BxgoD1Qw.js";import"./Trapezoid-6uim8m8Z.js";import"./Sector-CpvLellE.js";import"./Symbols-uJbjONwG.js";import"./symbol-Dyd8e6t_.js";import"./step-Cx__dv2e.js";import"./Curve-VbNPleyE.js";import"./CartesianAxis-D5lD8t2m.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-v5p6oAve.js";import"./ChartSizeDimensions-BX1JxuVN.js";import"./OffsetShower-CNz_UBJI.js";import"./PlotAreaShower-C2224vVQ.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
