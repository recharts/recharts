import{e as t}from"./iframe-BRNudyUC.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BDDqf68l.js";import{B as p}from"./BarChart-B4W8rNPb.js";import{X as l}from"./XAxis-D5flW7iC.js";import{Y as h}from"./YAxis-LQ7YWmSW.js";import{B as c}from"./Brush-BDZ4P5kE.js";import{B as x}from"./Bar-CPkOULeV.js";import{R as u}from"./RechartsHookInspector-bCgKsqnr.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-bvYT90Do.js";import"./immer-efUMdrFM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ny_QHnuL.js";import"./index-BpzgcC1p.js";import"./hooks-g1pwYnn9.js";import"./axisSelectors-DBRNeiSB.js";import"./d3-scale-BE1R65Yr.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-Bxbwbl5M.js";import"./renderedTicksSlice-Dd_sUH3I.js";import"./CartesianChart-DtfUiseX.js";import"./chartDataContext-DWt96v8T.js";import"./CategoricalChart-BAXoX5YA.js";import"./CartesianAxis-BGRfLIi8.js";import"./Layer-72bRSYZY.js";import"./Text-DYXt0Tk2.js";import"./DOMUtils-BUce29Ys.js";import"./Label-C0IwlP1f.js";import"./ZIndexLayer-BqNsDADZ.js";import"./types-CuUkJyrv.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-a1yvY8Zp.js";import"./AnimatedItems-DyV65I1f.js";import"./useAnimationId-DKTA-eAm.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BgG6X-fa.js";import"./isPlainObject-D-_-2woO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DWclrIl5.js";import"./Trapezoid-Da1UYdj_.js";import"./Sector-D7BMvRVb.js";import"./Symbols-hkZNpq1J.js";import"./symbol-BcfkrHFP.js";import"./step-OjWirnGE.js";import"./Curve-DS1o2tEO.js";import"./RegisterGraphicalItemId-DKtlUZkV.js";import"./ErrorBarContext-D3Lj0Odf.js";import"./GraphicalItemClipPath-sl_sf-ia.js";import"./SetGraphicalItem-BMN_yPrU.js";import"./getZIndexFromUnknown-CMXRnERf.js";import"./graphicalItemSelectors-BJwrjMjb.js";import"./index-DrL1-A17.js";import"./ChartSizeDimensions-Bj0myzFp.js";import"./OffsetShower-6Jy39FxY.js";import"./PlotAreaShower-DGNr6qsk.js";const vt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
