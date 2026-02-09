import{e as t}from"./iframe-CtEwCT9X.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-H3JWu4Kp.js";import{B as p}from"./BarChart-C5NdC5K-.js";import{X as l}from"./XAxis-Dyu1KvxF.js";import{Y as h}from"./YAxis-KCRp4wE3.js";import{B as c}from"./Brush-BXeeLi2z.js";import{B as x}from"./Bar-BJigzLxa.js";import{R as u}from"./RechartsHookInspector-DzvPF_wD.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D4rIxQ8x.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-AnHxT7w4.js";import"./hooks-rcQ-gxvj.js";import"./axisSelectors-CLqmQnll.js";import"./zIndexSlice-C0NscEQ4.js";import"./CartesianChart-DROVOQUl.js";import"./chartDataContext-3NcgbJTI.js";import"./CategoricalChart-DA7sCUkZ.js";import"./CartesianAxis-CVBmqBFQ.js";import"./Layer-BNdxATQx.js";import"./Text-BjHYQlz2.js";import"./DOMUtils-B7ui-v2S.js";import"./Label-4VfWqw9i.js";import"./ZIndexLayer-BGiHPSQp.js";import"./types-BlQIDijQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-B6fZsSyh.js";import"./ReactUtils-BjGJq1or.js";import"./ActiveShapeUtils-BcU5bshf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BpE70r4e.js";import"./useAnimationId-DKUOkxb7.js";import"./Trapezoid-DBpBN19V.js";import"./Sector-Do1ff_IB.js";import"./Symbols-DsTuGPc2.js";import"./Curve-CYu7zDaL.js";import"./RegisterGraphicalItemId-g2iXfztY.js";import"./ErrorBarContext-G6eCMKH6.js";import"./GraphicalItemClipPath-C8XfWWgk.js";import"./SetGraphicalItem-bKBrJsc3.js";import"./getZIndexFromUnknown-DsJj_IZc.js";import"./graphicalItemSelectors-D3ATsXBN.js";import"./index-wj7KHo_g.js";import"./ChartSizeDimensions-yLUqjZ4u.js";import"./OffsetShower-2b6-cTCa.js";import"./PlotAreaShower-CQqB1CA9.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
