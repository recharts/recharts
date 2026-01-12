import{e}from"./iframe-CsBbFWpF.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-jcy1YLjA.js";import{B as p}from"./BarChart-enY4hOPB.js";import{X as l}from"./XAxis-n00lD-aM.js";import{Y as h}from"./YAxis-Ctuh_Y30.js";import{B as c}from"./Brush-C2CXFv6b.js";import{B as x}from"./Bar-DnPRHuD-.js";import{R as u}from"./RechartsHookInspector-Ce0vrec4.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Di-bRFCz.js";import"./PolarUtils-DudrDAyL.js";import"./RechartsWrapper-M1yD5X0u.js";import"./hooks-51EGl8Fk.js";import"./axisSelectors-C8uaVJja.js";import"./zIndexSlice-CXgHVliP.js";import"./CartesianChart-DlU5PpKX.js";import"./chartDataContext-C4MvfWzW.js";import"./CategoricalChart-BoRcIHlb.js";import"./CartesianAxis-DTyJ3mcB.js";import"./Layer-B5pUJ7d6.js";import"./Text-CXOTFpC0.js";import"./DOMUtils-DCk3Ra7U.js";import"./Label-vO0tFBMQ.js";import"./ZIndexLayer-DoHUAHyH.js";import"./types-DZkoNYJ-.js";import"./tooltipContext-BJ3STaWo.js";import"./ReactUtils-B73M-NEp.js";import"./ActiveShapeUtils-Cp7opGs8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CRfJXidx.js";import"./useAnimationId-DQyCpAJd.js";import"./Trapezoid-CqG9LomH.js";import"./Sector-DZ4anR9n.js";import"./Symbols-GutgQl5i.js";import"./Curve-BV6casI8.js";import"./RegisterGraphicalItemId-DEKbhPBq.js";import"./ErrorBarContext-UJH6PLVM.js";import"./GraphicalItemClipPath-BGGubKyF.js";import"./SetGraphicalItem-D-yEZ2eQ.js";import"./getZIndexFromUnknown-BgxLqYAp.js";import"./graphicalItemSelectors-p0H2OFb-.js";import"./index-30ex7hAw.js";import"./ChartSizeDimensions-BxqurYlH.js";import"./OffsetShower-Cz9yhNvC.js";import"./PlotAreaShower-CYw1ViUZ.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const se=["WithBrushAndOnDragEnd"];export{t as WithBrushAndOnDragEnd,se as __namedExportsOrder,me as default};
