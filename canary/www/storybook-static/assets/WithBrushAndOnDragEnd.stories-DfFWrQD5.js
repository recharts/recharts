import{e as t}from"./iframe-DT_QfCX6.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DgclqCQe.js";import{B as p}from"./BarChart-CdddPzA7.js";import{X as l}from"./XAxis-BE7dRx6e.js";import{Y as h}from"./YAxis-8Bgwa54a.js";import{B as c}from"./Brush-Ct8t4YDx.js";import{B as x}from"./Bar-CxgD5Vgd.js";import{R as u}from"./RechartsHookInspector-BZlaUGyM.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CM621BjQ.js";import"./immer-Dm_eTc-x.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BjKAVIgx.js";import"./index-B5fX5g4a.js";import"./hooks-hb3YajwI.js";import"./axisSelectors-DEJjMxLA.js";import"./d3-scale-DdauB95s.js";import"./zIndexSlice-St67sYO3.js";import"./renderedTicksSlice-C-8YagrD.js";import"./CartesianChart-DSP5L81p.js";import"./chartDataContext-CtAEKjsT.js";import"./CategoricalChart-Dym2TIuH.js";import"./CartesianAxis-BXsDKsAg.js";import"./Layer-V2SZsz4R.js";import"./Text-Btk8OOuM.js";import"./DOMUtils-CXMayvsd.js";import"./Label-HvHa-kvb.js";import"./ZIndexLayer-LaPkRlL4.js";import"./types-BFIPf9k1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BN5nQaTj.js";import"./ReactUtils-DiJ6wwjh.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-5Z9knZsD.js";import"./isPlainObject-CkHzR63e.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BR7QntkE.js";import"./useAnimationId-Kk_Sm5qp.js";import"./Trapezoid-DBAlB0P9.js";import"./Sector-c2ULWy9q.js";import"./Symbols-LHeYuxni.js";import"./symbol-D2MJ3HO9.js";import"./step-BvjBdR90.js";import"./Curve-DVqXjtuH.js";import"./RegisterGraphicalItemId-C3WllrLT.js";import"./ErrorBarContext-DjRWnVpQ.js";import"./GraphicalItemClipPath-CjwarN2Z.js";import"./SetGraphicalItem-DaPsLcNS.js";import"./getZIndexFromUnknown-CDA1UKXp.js";import"./graphicalItemSelectors-YXDpMJDg.js";import"./index-Cn6U4qah.js";import"./ChartSizeDimensions-Dwz-fLgS.js";import"./OffsetShower-BpQcdb8I.js";import"./PlotAreaShower-Bt6tAbug.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
