import{e as t}from"./iframe-Gbg_l78M.js";import{R as n}from"./arrayEqualityCheck-B69LB4m3.js";import{L as s}from"./LineChart-eaZmFXO6.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-4pnz_hNM.js";import{X as l}from"./XAxis-DY33qp1b.js";import{R as v}from"./RechartsHookInspector-Do2lkGOS.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-sMeqIZjn.js";import"./immer-mU5ngVSZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B733cAvp.js";import"./index-Ck6DfcF7.js";import"./hooks-BX9UIUih.js";import"./axisSelectors-BhOsWb8H.js";import"./d3-scale-B1Xdl3mZ.js";import"./zIndexSlice-BsUMgwVy.js";import"./renderedTicksSlice-CfnOktJ2.js";import"./CartesianChart-D0_pR8lQ.js";import"./chartDataContext-DKgbTOGI.js";import"./CategoricalChart-CF19xo_7.js";import"./Layer-BI5znRpT.js";import"./ReactUtils-BEyTjZ-J.js";import"./Label-C97vZCUD.js";import"./Text-BbIMZo50.js";import"./DOMUtils-BEdmeFzJ.js";import"./ZIndexLayer-Cu_ZYhKd.js";import"./ActivePoints-CLdEaCHn.js";import"./Dot-DiubYT5n.js";import"./types-6-jxyL20.js";import"./RegisterGraphicalItemId-B4Pbzoa5.js";import"./ErrorBarContext-muYUytku.js";import"./GraphicalItemClipPath-C6vmlIdz.js";import"./SetGraphicalItem-BeRS8RAb.js";import"./useAnimationId-FFZ8e1iF.js";import"./getRadiusAndStrokeWidthFromDot-qW4tViY-.js";import"./ActiveShapeUtils-BF5Ec1rO.js";import"./isPlainObject-C5_xiZ-_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Ao9F5Oc0.js";import"./Trapezoid-B9yBSbp-.js";import"./Sector-NBw4H--I.js";import"./Symbols-DdxMLZNU.js";import"./symbol-gfqsi-zR.js";import"./step-BMA_kAfe.js";import"./Curve-CLZ73sU1.js";import"./CartesianAxis-Dca3a3op.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-Dqxuu1t4.js";import"./ChartSizeDimensions-BLrRxRyE.js";import"./OffsetShower-C_0qPv4p.js";import"./PlotAreaShower-C7q1PybE.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
