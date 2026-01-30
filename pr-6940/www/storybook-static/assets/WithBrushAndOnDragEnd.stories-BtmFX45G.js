import{e as t}from"./iframe-C0b843bJ.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-Cbemodpd.js";import{B as p}from"./BarChart-DhrQddwK.js";import{X as l}from"./XAxis-ARyNq3Ww.js";import{Y as h}from"./YAxis-DsEQlDV3.js";import{B as c}from"./Brush-B7f4XLbd.js";import{B as x}from"./Bar-BIGlxQu-.js";import{R as u}from"./RechartsHookInspector-CBnKyMAv.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DhRhZ63O.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CO19iou7.js";import"./hooks-dTw7M1vz.js";import"./axisSelectors-qWILVFYf.js";import"./zIndexSlice-B8FeRzdW.js";import"./CartesianChart-7cy0WoRj.js";import"./chartDataContext-Btc_iGmV.js";import"./CategoricalChart-Bd7xSF-i.js";import"./CartesianAxis-By4zoTN4.js";import"./Layer-purCCvV2.js";import"./Text-rJUU6KZ4.js";import"./DOMUtils-C0s6ZPvi.js";import"./Label-2fZ2yvU7.js";import"./ZIndexLayer-_DstmVXN.js";import"./types-B5P-qikU.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DNnYpWA8.js";import"./ReactUtils-BUf380BK.js";import"./ActiveShapeUtils-BcJOrbCg.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C4tB6UmQ.js";import"./useAnimationId-D7FQIEyi.js";import"./Trapezoid-CtFJUH4H.js";import"./Sector-C0mFPEM4.js";import"./Symbols-C_e-ILSN.js";import"./Curve-Bs2FAeTM.js";import"./RegisterGraphicalItemId-BWOfQp6C.js";import"./ErrorBarContext-CEzzcyRd.js";import"./GraphicalItemClipPath-BXQrJ9Pv.js";import"./SetGraphicalItem-BrMK-Pyd.js";import"./getZIndexFromUnknown-DNt9VrlA.js";import"./graphicalItemSelectors-y619VRn-.js";import"./index-lXdD0Nzr.js";import"./ChartSizeDimensions-DcGIh6Y9.js";import"./OffsetShower-1eskoS1A.js";import"./PlotAreaShower-8zrELIBX.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
