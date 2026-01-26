import{e as t}from"./iframe-BGOJmNjB.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BjRvnt0s.js";import{B as p}from"./BarChart-2aR_7haH.js";import{X as l}from"./XAxis-CH74Oy12.js";import{Y as h}from"./YAxis-BYgICbJJ.js";import{B as c}from"./Brush-CXkL27VV.js";import{B as x}from"./Bar-B40LocQN.js";import{R as u}from"./RechartsHookInspector-Cgn96sot.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BSJBVX4C.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-h16g3EQQ.js";import"./hooks-Nz6DJ1YN.js";import"./axisSelectors-Lz_2OI8_.js";import"./zIndexSlice-DAfFf7yA.js";import"./CartesianChart-OgoW6u2Y.js";import"./chartDataContext-aYFPQGqf.js";import"./CategoricalChart-DgJaNq2v.js";import"./CartesianAxis-CTaqfxTH.js";import"./Layer-LxxzUP-k.js";import"./Text-BhvB3_o-.js";import"./DOMUtils-CB_Ew6lr.js";import"./Label-Bv9s524x.js";import"./ZIndexLayer-4QAOL5IQ.js";import"./types-DLAnyyDj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-cVTwqAl2.js";import"./ReactUtils-BB1AONhv.js";import"./ActiveShapeUtils-DNGFFUmc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ChTFz8xc.js";import"./useAnimationId-G8K3lY41.js";import"./Trapezoid-DXqtA9Y7.js";import"./Sector-Bdq99Tgd.js";import"./Symbols-NLXHxAGu.js";import"./Curve-Bf5GHIVx.js";import"./RegisterGraphicalItemId-BpPOmR2M.js";import"./ErrorBarContext-5jw4fggF.js";import"./GraphicalItemClipPath-CldBUZWH.js";import"./SetGraphicalItem-CMM_HPdn.js";import"./getZIndexFromUnknown-DTiDJHkG.js";import"./graphicalItemSelectors-CsdTwm_s.js";import"./index-CbiKP7W2.js";import"./ChartSizeDimensions-DlrFd0zO.js";import"./OffsetShower-CQ-BgPhh.js";import"./PlotAreaShower-C5FoW2lp.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
