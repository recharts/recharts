import{e as t}from"./iframe-IlsB_rJq.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DRku3AZG.js";import{B as p}from"./BarChart-DmKXhdli.js";import{X as l}from"./XAxis-BQuXAPTr.js";import{Y as h}from"./YAxis-454ehxbM.js";import{B as c}from"./Brush-BkWjjiUG.js";import{B as x}from"./Bar-D37IreDG.js";import{R as u}from"./RechartsHookInspector-HlZdM34s.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B3pOdsrQ.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-C3UkR7qf.js";import"./hooks-DcodrmVZ.js";import"./axisSelectors-DKjWCzWL.js";import"./zIndexSlice-CKbt9tj5.js";import"./CartesianChart-KFcBxL2h.js";import"./chartDataContext-CrRgJL1Z.js";import"./CategoricalChart-Bh-A6rTf.js";import"./CartesianAxis-SxT37-Os.js";import"./Layer-vBbFq665.js";import"./Text-_vyUeh1U.js";import"./DOMUtils-C0sVJTg_.js";import"./Label-DZIMKlIj.js";import"./ZIndexLayer-9CrWluzk.js";import"./types-tqXwELcn.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-C9iFvvqf.js";import"./ReactUtils-Pssbr3N2.js";import"./ActiveShapeUtils-Cv3IrxQk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DxgUhFQy.js";import"./useAnimationId-Bms0uFs7.js";import"./Trapezoid-CcrDALRL.js";import"./Sector-D5hYxMFM.js";import"./Symbols-DKmDvY-C.js";import"./Curve-BktJTjWe.js";import"./RegisterGraphicalItemId-jN59e1bG.js";import"./ErrorBarContext-XG0EPrx-.js";import"./GraphicalItemClipPath-C9Or-tsl.js";import"./SetGraphicalItem-Aa6pLrW9.js";import"./getZIndexFromUnknown-B_khhYrD.js";import"./graphicalItemSelectors-Da7SJyMZ.js";import"./index-Bb2whpql.js";import"./ChartSizeDimensions-B6V8cLcI.js";import"./OffsetShower-CdxkHZVP.js";import"./PlotAreaShower-BGz_VUd3.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const pt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,pt as __namedExportsOrder,st as default};
