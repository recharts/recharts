import{e as t}from"./iframe-C_RKSEYG.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-XhN9n2BV.js";import{B as p}from"./BarChart-CxrMA33C.js";import{X as l}from"./XAxis-3q4SInU2.js";import{Y as h}from"./YAxis-Dw1AfdQf.js";import{B as c}from"./Brush-Cg_UV6k9.js";import{B as x}from"./Bar-B1dB6FMY.js";import{R as u}from"./RechartsHookInspector-2DLThljJ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-wWOI_tEY.js";import"./immer-BXvw-sb6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DJ6mrGyY.js";import"./index-BRt1FalZ.js";import"./hooks-BUBBsNP0.js";import"./axisSelectors-octxjJ6L.js";import"./d3-scale-Bly9GB_U.js";import"./zIndexSlice-Dau3iHk3.js";import"./renderedTicksSlice-BsnvkrRv.js";import"./CartesianChart-Dpt-Gkc_.js";import"./chartDataContext-Dj8ePN8G.js";import"./CategoricalChart-BeDTe7Ft.js";import"./CartesianAxis-Q9iq7WI3.js";import"./Layer-Bdbbvous.js";import"./Text-DZ8oBtno.js";import"./DOMUtils-D3avAUhw.js";import"./Label-DjnSNkR5.js";import"./ZIndexLayer-C2eZ7492.js";import"./types-DsqucEgb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BJDXHnAQ.js";import"./ReactUtils-CN-zxxkn.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DCdigpXF.js";import"./isPlainObject-DUDNoV38.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BR00ZYjW.js";import"./useAnimationId-A_rRmY4T.js";import"./Trapezoid-BcY_848k.js";import"./Sector-C6nUzz_C.js";import"./Symbols-D-Mqycxx.js";import"./symbol-CQ2DdqBk.js";import"./step-CZqcHwF_.js";import"./Curve-C9iWhVEb.js";import"./RegisterGraphicalItemId-BrlGhgM7.js";import"./ErrorBarContext-B6LOYifa.js";import"./GraphicalItemClipPath-mtAKD-sR.js";import"./SetGraphicalItem-DAHF2TwR.js";import"./getZIndexFromUnknown-C0CEJrZ6.js";import"./graphicalItemSelectors-DBJYgnRR.js";import"./index-CYNR1kH5.js";import"./ChartSizeDimensions-Du4NUIhU.js";import"./OffsetShower-B118pl0X.js";import"./PlotAreaShower-BicDzRP-.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
