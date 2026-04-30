import{e as t}from"./iframe-CIkWUaKQ.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BBFq7eoK.js";import{B as p}from"./BarChart-BDuGKzbO.js";import{X as l}from"./XAxis-BerErBSJ.js";import{Y as h}from"./YAxis-DcHa1OqQ.js";import{B as c}from"./Brush-BL-9WmPk.js";import{B as x}from"./Bar-CM3PyAZ_.js";import{R as u}from"./RechartsHookInspector-BuUCbDqR.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CLDluMEp.js";import"./immer-BHU9OU6q.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-YxwXYQPU.js";import"./index-CbwLYB0M.js";import"./hooks-sjogQk2Y.js";import"./axisSelectors-BaK7cqC2.js";import"./d3-scale-BZ-edMt9.js";import"./zIndexSlice-Cbu3nPXF.js";import"./renderedTicksSlice-BjREbE6W.js";import"./CartesianChart-CjcihWnV.js";import"./chartDataContext-noqwwTdm.js";import"./CategoricalChart-BcDmeBuN.js";import"./CartesianAxis-ZLsdGGHc.js";import"./Layer-Dzvfyp4W.js";import"./Text-D4ohdNx9.js";import"./DOMUtils-BREdjKiT.js";import"./Label-SHiyMzcT.js";import"./ZIndexLayer-CUuZZhUK.js";import"./types-CPlIJWRj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CzaA5N3V.js";import"./ReactUtils-RCeASTt3.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DT1OniMN.js";import"./isPlainObject-D-WQBCb_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CAWEyFEy.js";import"./useAnimationId-DBBbISIM.js";import"./Trapezoid-BDKa0CKl.js";import"./Sector-B07-nfVs.js";import"./Symbols-DLm1p1c0.js";import"./symbol-DsKaePiJ.js";import"./step-lfJzJxuy.js";import"./Curve-Cbg_n5d0.js";import"./RegisterGraphicalItemId-f4iA6laj.js";import"./ErrorBarContext-dR6dFvJy.js";import"./GraphicalItemClipPath-D13aRDH0.js";import"./SetGraphicalItem-0e33RWLj.js";import"./getZIndexFromUnknown-Bk4g6T2D.js";import"./graphicalItemSelectors-B-8Yn4Xj.js";import"./index-C6VPi8LL.js";import"./ChartSizeDimensions-C20x4d8E.js";import"./OffsetShower-B6J-0iMz.js";import"./PlotAreaShower-BBKrHEPi.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
