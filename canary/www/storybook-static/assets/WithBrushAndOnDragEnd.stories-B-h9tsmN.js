import{e as t}from"./iframe-DNsUwX5k.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./arrayEqualityCheck-XA4mGyWk.js";import{B as p}from"./BarChart-C_HwdY12.js";import{X as l}from"./XAxis-ONim8OVF.js";import{Y as h}from"./YAxis-C_-amdVX.js";import{B as c}from"./Brush-Ddm5eUdd.js";import{B as x}from"./Bar-BlGMhm-q.js";import{R as u}from"./RechartsHookInspector-BUhXRUq2.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BfvXjv4K.js";import"./immer-BPrEK5Rz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-AU67btz7.js";import"./index-DYHZYw9F.js";import"./hooks-B6BHB-7W.js";import"./axisSelectors-YJUEl-2g.js";import"./d3-scale-Bdi71Qs5.js";import"./zIndexSlice-C-6628LZ.js";import"./renderedTicksSlice-JsYvqF2I.js";import"./CartesianChart-FHxIuFwU.js";import"./chartDataContext-A5vEwNfY.js";import"./CategoricalChart-C9xxMr9R.js";import"./CartesianAxis-Ctr04CZm.js";import"./Layer-DWNEDYKO.js";import"./Text-CaUPu0Ls.js";import"./DOMUtils-DEWL1h2i.js";import"./Label-DrlcblLQ.js";import"./ZIndexLayer-COBAY4xu.js";import"./types-DAXoUOiX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CVJil_46.js";import"./ReactUtils-CLpPl2yo.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CsZp4u_s.js";import"./isPlainObject-N__ihfse.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-h1QYOt2M.js";import"./useAnimationId-gBW8_6W-.js";import"./Trapezoid-DDnY6d6S.js";import"./Sector-CETfwnvm.js";import"./Symbols-JY5hg72Q.js";import"./symbol-CKZaVPZy.js";import"./step--sLhjxi-.js";import"./Curve-BVLF1D_I.js";import"./RegisterGraphicalItemId-C0Pyz4Je.js";import"./ErrorBarContext-D803I392.js";import"./GraphicalItemClipPath-DhAcpDyX.js";import"./SetGraphicalItem-BCtoQcNZ.js";import"./getZIndexFromUnknown-BjMHSVL-.js";import"./graphicalItemSelectors-CleLlV7O.js";import"./index-DbbfyfFF.js";import"./ChartSizeDimensions-DUMsduP3.js";import"./OffsetShower-yJre-SEb.js";import"./PlotAreaShower-BRZz345m.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
