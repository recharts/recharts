import{e as t}from"./iframe-BzU5tZG5.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BsfMiBB8.js";import{B as p}from"./BarChart-BmrQRlh9.js";import{X as l}from"./XAxis-B-W2dzi3.js";import{Y as h}from"./YAxis-l0f4JbWK.js";import{B as c}from"./Brush-BgrGRZQX.js";import{B as x}from"./Bar-CkmoE7uV.js";import{R as u}from"./RechartsHookInspector-DCXeAgKX.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DmGz1ogE.js";import"./immer-C0fwLmkH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BbxErU3E.js";import"./index-De8EN-cC.js";import"./hooks-BZ9lkAel.js";import"./axisSelectors-Cxfo6rVo.js";import"./d3-scale-DcKEztNx.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-Bd6-3QTP.js";import"./renderedTicksSlice-HvaIjOyz.js";import"./CartesianChart-BVGWETT1.js";import"./chartDataContext-DW4aeEtj.js";import"./CategoricalChart-FYUpa-sB.js";import"./CartesianAxis--HQls11E.js";import"./Layer-BoRDeEOm.js";import"./Text-CmxtkjMm.js";import"./DOMUtils-Bnb5Olzx.js";import"./Label-hToV_gRB.js";import"./ZIndexLayer-x07EvPLC.js";import"./types-BbKBmvI2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-hFbAm8Gs.js";import"./AnimatedItems-DpJzQnXc.js";import"./useAnimationId-D2sjwezL.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DAfXePCg.js";import"./isPlainObject-DeEpFnEl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dql0fF0Y.js";import"./Trapezoid-Du0ZEVwP.js";import"./Sector-CPh9calM.js";import"./Symbols-BOk-75a6.js";import"./symbol-CgkrJkl1.js";import"./step-fSDMrmBj.js";import"./Curve-DQMyibMX.js";import"./RegisterGraphicalItemId-B44_OcBQ.js";import"./ErrorBarContext-B_54DcZB.js";import"./GraphicalItemClipPath-CjoeLGJT.js";import"./SetGraphicalItem-D8FHaqBq.js";import"./getZIndexFromUnknown-vIrbzYdS.js";import"./graphicalItemSelectors-D7AZwwu7.js";import"./index-BxJbg6c2.js";import"./ChartSizeDimensions-CVqRiDUJ.js";import"./OffsetShower-0OLqDfEA.js";import"./PlotAreaShower-C8OLz8bs.js";const vt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [dragIndexes, setDragIndexes] = React.useState<BrushStartEndIndex>({
      startIndex: 0,
      endIndex: dateWithValueData.length - 1
    });
    return (
      // Calc compensates for the text above the chart
      <div style={{
        width: '100%',
        height: 'calc(100% - 84px)'
      }}>
        <div>
          Start index:
          {dragIndexes.startIndex}
        </div>
        <div>
          End index:
          {dragIndexes.endIndex}
        </div>
        <ResponsiveContainer>
          <BarChart data={dateWithValueData}>
            <XAxis dataKey="value" />
            <YAxis />
            <Brush dataKey="name" height={30} onDragEnd={indexes => {
              setDragIndexes(indexes as BrushStartEndIndex);
            }} />
            <Bar dataKey="value" />
            <RechartsHookInspector />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const Bt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,Bt as __namedExportsOrder,vt as default};
