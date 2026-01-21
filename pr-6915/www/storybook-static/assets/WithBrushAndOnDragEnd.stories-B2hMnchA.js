import{e as t}from"./iframe-NQnSavsc.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-ClUhvVMc.js";import{B as p}from"./BarChart-hboThQMx.js";import{X as l}from"./XAxis-BVWUh-i7.js";import{Y as h}from"./YAxis-B4mT5_6h.js";import{B as c}from"./Brush-piUxM61N.js";import{B as x}from"./Bar-Bmq4VPww.js";import{R as u}from"./RechartsHookInspector-CrS4ifUj.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-clR4-9At.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-BFx6ycKR.js";import"./hooks-BcaLrk1Y.js";import"./axisSelectors-GttesoX_.js";import"./zIndexSlice-nS_oTVB0.js";import"./CartesianChart-DsO03C2-.js";import"./chartDataContext-BPtWcoks.js";import"./CategoricalChart--MZ7Ud20.js";import"./CartesianAxis-BxH1zk3Y.js";import"./Layer-BUJpEzYu.js";import"./Text-s16izCJe.js";import"./DOMUtils-hORVmOPR.js";import"./Label-CdLQa_Zq.js";import"./ZIndexLayer-D7r7UDo0.js";import"./types-Ditu6fq2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BSe215jy.js";import"./ReactUtils-B56Ms0vK.js";import"./ActiveShapeUtils-CdNAARSB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-dUbZu5CP.js";import"./useAnimationId-DY2MKiMD.js";import"./Trapezoid-BZ0zgDCf.js";import"./Sector-DKYprxhX.js";import"./Symbols-C7hNVpPd.js";import"./Curve-D3iL2MuF.js";import"./RegisterGraphicalItemId-CF9d6kYM.js";import"./ErrorBarContext-CSixxnwN.js";import"./GraphicalItemClipPath-DBWQaJ3W.js";import"./SetGraphicalItem-BSyTvg-d.js";import"./getZIndexFromUnknown-Bc6e8_kW.js";import"./graphicalItemSelectors-Bq6_wx_b.js";import"./index-CtOaP7ae.js";import"./ChartSizeDimensions-BZdR1kHO.js";import"./OffsetShower-CoGf8iJT.js";import"./PlotAreaShower-CFMI3s33.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
