import{e as t}from"./iframe-5gSlIHH4.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BEqt-CBJ.js";import{B as p}from"./BarChart-D8KE9xeB.js";import{X as l}from"./XAxis-CJFZHxba.js";import{Y as h}from"./YAxis-BedJogos.js";import{B as c}from"./Brush-HCQaGMuC.js";import{B as x}from"./Bar-Cbg4c7ne.js";import{R as u}from"./RechartsHookInspector-DIk6ks1k.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BqaV8AGt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D6JQB65s.js";import"./hooks-DcJw7lCF.js";import"./axisSelectors-DaxAJyom.js";import"./zIndexSlice-BvmJeHFk.js";import"./CartesianChart-BZLhng-O.js";import"./chartDataContext-CS2RN2FU.js";import"./CategoricalChart-CaF4nfMG.js";import"./CartesianAxis-BR-I9vbL.js";import"./Layer-OyNvh1Ue.js";import"./Text-BQ538cjB.js";import"./DOMUtils-Cwe4TU_Z.js";import"./Label-A5hrmEss.js";import"./ZIndexLayer-CgtyelTd.js";import"./types-D2uPaQlB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DWBZc0FA.js";import"./ReactUtils-DmzojIhK.js";import"./ActiveShapeUtils-B3Ii4nXp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CsjrTG3t.js";import"./useAnimationId-CiuthG3f.js";import"./Trapezoid-CZIjMiGb.js";import"./Sector-BnVCCXEU.js";import"./Symbols-BlEQEpn8.js";import"./Curve-D2ClwKYm.js";import"./RegisterGraphicalItemId-C8051Zi-.js";import"./ErrorBarContext-BOsyAuvl.js";import"./GraphicalItemClipPath-DuWpJ7iO.js";import"./SetGraphicalItem-GsI-naXM.js";import"./getZIndexFromUnknown-DUxz7EUs.js";import"./graphicalItemSelectors-vmrcIgpC.js";import"./index-BT-ezfJz.js";import"./ChartSizeDimensions-sc7nlrKR.js";import"./OffsetShower-DmAztKvM.js";import"./PlotAreaShower-Druc4JY3.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
