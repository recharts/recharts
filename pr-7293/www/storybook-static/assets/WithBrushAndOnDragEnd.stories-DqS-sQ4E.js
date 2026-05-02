import{e as t}from"./iframe-BBzssXFz.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-Bjl1KGHu.js";import{B as p}from"./BarChart-Dce_ivsX.js";import{X as l}from"./XAxis-BKkUGHg6.js";import{Y as h}from"./YAxis-DM7CZp2-.js";import{B as c}from"./Brush-CyF46aVG.js";import{B as x}from"./Bar-D22_560x.js";import{R as u}from"./RechartsHookInspector-Cq_u8Fnd.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Csr8SK85.js";import"./immer-7XFVXXFB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CsBkMUfg.js";import"./index-CafXZux5.js";import"./hooks-Cdjbv1yZ.js";import"./axisSelectors-CFvd2CpI.js";import"./d3-scale-CV33LrVl.js";import"./zIndexSlice-BlJdEm2b.js";import"./renderedTicksSlice-D_eYSGtp.js";import"./CartesianChart-D4Tq8Mp4.js";import"./chartDataContext-DUrxX3r4.js";import"./CategoricalChart-B-bxACDj.js";import"./CartesianAxis-Dax8GbgD.js";import"./Layer-CAh1Kgp_.js";import"./Text-Boz5VXT5.js";import"./DOMUtils-DJmkFWFo.js";import"./Label-B9ZSBmHd.js";import"./ZIndexLayer-C1_Q11sr.js";import"./types-CER3-J_V.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-D0k-ChEM.js";import"./ReactUtils-CabJhVob.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-C0KQrGSC.js";import"./isPlainObject-CwCFEtjI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BnC0X1TR.js";import"./useAnimationId-G1z57dIT.js";import"./Trapezoid-CWYXYqYR.js";import"./Sector-DeNvZ5DZ.js";import"./Symbols-CoEYrWYs.js";import"./symbol-C10iTT4Z.js";import"./step-Dmy2-h0-.js";import"./Curve-Dzo1_9a0.js";import"./RegisterGraphicalItemId-5EdXQ8V-.js";import"./ErrorBarContext-CM0hmmky.js";import"./GraphicalItemClipPath-DFMtaTzW.js";import"./SetGraphicalItem-C2_0J6B5.js";import"./getZIndexFromUnknown-Cjs2fupU.js";import"./graphicalItemSelectors-22dngLJU.js";import"./index-BMusN9RV.js";import"./ChartSizeDimensions-DX20IRBn.js";import"./OffsetShower-0ikHXz0q.js";import"./PlotAreaShower-ddoTAOnv.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const vt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,vt as __namedExportsOrder,It as default};
