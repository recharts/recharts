import{e as t}from"./iframe-aCccIK8W.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-ClrrSpKq.js";import{B as p}from"./BarChart-BZNu37mJ.js";import{X as l}from"./XAxis-DiB5K0gp.js";import{Y as h}from"./YAxis-DESrMeXh.js";import{B as c}from"./Brush-BC-WyBHB.js";import{B as x}from"./Bar-woK3I8Eb.js";import{R as u}from"./RechartsHookInspector-DXULShHw.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BiMbCPR1.js";import"./immer-CMSDbRto.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-KXQQ6Aed.js";import"./index-7BGALgNU.js";import"./hooks-BQl6gm9P.js";import"./axisSelectors-BqKDnBGl.js";import"./d3-scale-CSKaLMYw.js";import"./zIndexSlice-dI_hsE6E.js";import"./renderedTicksSlice-C5CpkahC.js";import"./CartesianChart-Dg_vwzFX.js";import"./chartDataContext-DcZ4BnGt.js";import"./CategoricalChart-43yq3nHJ.js";import"./CartesianAxis-DWcQuKap.js";import"./Layer-CmBSmthE.js";import"./Text-CNK9ky3H.js";import"./DOMUtils-6k1qM2nD.js";import"./Label-BjurlKVT.js";import"./ZIndexLayer-B0CgEJFf.js";import"./types-BigTFNah.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CdIqGXcF.js";import"./ReactUtils-DHbtMuek.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DCYjk_1o.js";import"./isPlainObject-DUQm3b0H.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bexr03gH.js";import"./useAnimationId-DA5IV2DG.js";import"./Trapezoid-XFMgvjFP.js";import"./Sector-v0Uu-y4P.js";import"./Symbols-BntmdNmA.js";import"./symbol-CMsEkqSO.js";import"./step-DZfgQXrh.js";import"./Curve-BLf6fQkp.js";import"./RegisterGraphicalItemId-taqDOdbV.js";import"./ErrorBarContext-BYQ7VTEV.js";import"./GraphicalItemClipPath-DFzOqGMg.js";import"./SetGraphicalItem-C9DhQ9yz.js";import"./getZIndexFromUnknown-BNgycAnv.js";import"./graphicalItemSelectors-DfsXJl_5.js";import"./index-B0bVpeoD.js";import"./ChartSizeDimensions-6pSaZa--.js";import"./OffsetShower-zTVqoSRT.js";import"./PlotAreaShower-DtT8gIxN.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
