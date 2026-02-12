import{e as t}from"./iframe-D8RsH_ZD.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DfUQQqNG.js";import{B as p}from"./BarChart-DrKcHSn4.js";import{X as l}from"./XAxis-9qpGEcGJ.js";import{Y as h}from"./YAxis-C3MuBlcJ.js";import{B as c}from"./Brush-BJDdSFgv.js";import{B as x}from"./Bar--mMrRiZM.js";import{R as u}from"./RechartsHookInspector-DuFREeNP.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DzNWwwyR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CikDBT3M.js";import"./hooks-DGT9tgIE.js";import"./axisSelectors-ChLst7_e.js";import"./zIndexSlice-CPBYLdgp.js";import"./CartesianChart-BGLWUdnj.js";import"./chartDataContext-CstLMBvp.js";import"./CategoricalChart-oK3glHJg.js";import"./CartesianAxis-ewa7ZF2u.js";import"./Layer-BDdUxbHF.js";import"./Text-Bgd2WUX9.js";import"./DOMUtils-BqZCiNgw.js";import"./Label-DsxuCRwy.js";import"./ZIndexLayer-DiTXvVi3.js";import"./types-Dyd5Crad.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DuqSWYAC.js";import"./ReactUtils-6PKXXThp.js";import"./ActiveShapeUtils-DLbkhbSb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BpAQA-Oa.js";import"./useAnimationId-DRWFjGg3.js";import"./Trapezoid-bxIuEYMQ.js";import"./Sector-DQgAed3H.js";import"./Symbols-CBAU6oWP.js";import"./Curve-CIshv-2z.js";import"./RegisterGraphicalItemId-_gizEZQr.js";import"./ErrorBarContext-CAtMmrl9.js";import"./GraphicalItemClipPath-BpK8_oIG.js";import"./SetGraphicalItem-DsenAHry.js";import"./getZIndexFromUnknown-CD6jXCW3.js";import"./graphicalItemSelectors-Bhv9Ot21.js";import"./index-CnFLVdtg.js";import"./ChartSizeDimensions-QjwVXzW8.js";import"./OffsetShower-CN6ZOhg2.js";import"./PlotAreaShower-BPwRhRjP.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
