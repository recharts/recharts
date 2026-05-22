import{e as t}from"./iframe-BzghaLEp.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./arrayEqualityCheck-CS3de1t5.js";import{B as p}from"./BarChart-CBtyoCSi.js";import{X as l}from"./XAxis-CsBkluNM.js";import{Y as h}from"./YAxis-BRrP9GqR.js";import{B as c}from"./Brush-DN6igeIL.js";import{B as x}from"./Bar-DL_KonqV.js";import{R as u}from"./RechartsHookInspector-BuYwcCb3.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BVZsWnmP.js";import"./immer-BXETI75S.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DR3m1DYe.js";import"./index-DQ335CG7.js";import"./hooks-BRSXFpN3.js";import"./axisSelectors-aIIB8FuD.js";import"./d3-scale-qhwlSf_5.js";import"./zIndexSlice-DCGzB6PO.js";import"./renderedTicksSlice-STF43WXb.js";import"./CartesianChart-DcVmos4e.js";import"./chartDataContext-D4_qA_s_.js";import"./CategoricalChart-BnPKkEWG.js";import"./CartesianAxis-C9tacUHl.js";import"./Layer-BJAfo-lt.js";import"./Text-B8a7yFIp.js";import"./DOMUtils-Du7GfFqb.js";import"./Label-DpeHQT41.js";import"./ZIndexLayer-Bqel3NP6.js";import"./types-DUQUBotY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BfcmBWgz.js";import"./ReactUtils-DCWlBgg2.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CeWrkHhO.js";import"./useAnimationId-DtC5i2fv.js";import"./ActiveShapeUtils-DC8wyXqX.js";import"./RegisterGraphicalItemId-BXJ3uWYw.js";import"./ErrorBarContext-D8hJtv3V.js";import"./GraphicalItemClipPath-CjgICd57.js";import"./SetGraphicalItem-c7OZec2D.js";import"./getZIndexFromUnknown-AbDvXfB5.js";import"./graphicalItemSelectors-C6wmbeIc.js";import"./index-BG2QvuV2.js";import"./ChartSizeDimensions-hfJquHEG.js";import"./OffsetShower-_lbWu0gQ.js";import"./PlotAreaShower-CKhzQKyo.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const lt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};
