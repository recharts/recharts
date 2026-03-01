import{e as t}from"./iframe-Dic5b5u9.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-CfNiUq5T.js";import{B as p}from"./BarChart-BolOVvNt.js";import{X as l}from"./XAxis-DwuUVeKv.js";import{Y as h}from"./YAxis-B6y0Pw6u.js";import{B as c}from"./Brush-DOQ7_Rwx.js";import{B as x}from"./Bar-Bxzwlyex.js";import{R as u}from"./RechartsHookInspector-BvAm56d5.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DDhFhLoK.js";import"./immer-DO_1p9A2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BwcAc9rH.js";import"./index-BBLbjH9O.js";import"./hooks-Bu1stH2v.js";import"./axisSelectors-CqWe9_C7.js";import"./d3-scale-CJF7DMMB.js";import"./zIndexSlice-c2vW1fTY.js";import"./renderedTicksSlice-CXC0QcBD.js";import"./CartesianChart-ouzhSpug.js";import"./chartDataContext-hawu8zXf.js";import"./CategoricalChart-CJvtpOjk.js";import"./CartesianAxis-rhfOp6jM.js";import"./Layer--MXbGqBf.js";import"./Text-DgjxsA1i.js";import"./DOMUtils-Dx-Do2uf.js";import"./Label-XiLbdVhV.js";import"./ZIndexLayer-Du88RvFA.js";import"./types-MaB3S0wV.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BCIFIRU3.js";import"./ReactUtils-C3t93VlX.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Bfxy2ZjA.js";import"./isPlainObject-DFOBG5y0.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C-Toc0UH.js";import"./useAnimationId-BHBeabuo.js";import"./Trapezoid-BhSV_XOS.js";import"./Sector-Dn12wzOD.js";import"./Symbols-Dq5eEVdj.js";import"./symbol-DYOCtDcg.js";import"./step-CGWB_5kj.js";import"./Curve-C8vpU7Np.js";import"./RegisterGraphicalItemId-Wdyfwocl.js";import"./ErrorBarContext-BCjIHby4.js";import"./GraphicalItemClipPath-Uq3L6gOZ.js";import"./SetGraphicalItem-DESbPWBV.js";import"./getZIndexFromUnknown-baSjVdEM.js";import"./graphicalItemSelectors-BaU2hrjo.js";import"./index-D-G3yyNK.js";import"./ChartSizeDimensions-BPhsCp9P.js";import"./OffsetShower-DiZAUQqT.js";import"./PlotAreaShower-BoaFsJKz.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
