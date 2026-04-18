import{e as t}from"./iframe-h5CV-Rcn.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-ANgy1i9u.js";import{B as p}from"./BarChart-BQqqNA4Q.js";import{X as l}from"./XAxis-DJ5PnZv1.js";import{Y as h}from"./YAxis-C2a8cqyi.js";import{B as c}from"./Brush-3uui56VH.js";import{B as x}from"./Bar-CsknfNMa.js";import{R as u}from"./RechartsHookInspector-aIveFv2Z.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B2Z0u3RB.js";import"./immer-CtltHNiU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DDGX7JTv.js";import"./index-DX1weHGw.js";import"./hooks-Cj5zxCap.js";import"./axisSelectors-CS0Gz9QT.js";import"./d3-scale-ezQ-I_PQ.js";import"./zIndexSlice-Ca__6ThW.js";import"./renderedTicksSlice-D6PrsZnk.js";import"./CartesianChart-D92F_vnb.js";import"./chartDataContext-DblKe8Ss.js";import"./CategoricalChart-CjLLFuSG.js";import"./CartesianAxis-Xrizv51e.js";import"./Layer-wxMTYWnZ.js";import"./Text-guYC2Xjr.js";import"./DOMUtils-DWY4ljAG.js";import"./Label-CVl-fQEc.js";import"./ZIndexLayer-Ca4oOtQE.js";import"./types-BA97OiOO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-Cp5c1SCJ.js";import"./ReactUtils-BBFoxYe1.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-7Gb1tHPG.js";import"./isPlainObject-ByvTdsK-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BxYiR-g6.js";import"./useAnimationId-DviPtx6L.js";import"./Trapezoid-CeuEkWeu.js";import"./Sector-sEDjKq2Y.js";import"./Symbols-BjDCCe4r.js";import"./symbol-BfwBQG5X.js";import"./step-oPLXy2cm.js";import"./Curve-Br2Il0bq.js";import"./RegisterGraphicalItemId-DtcV1RZB.js";import"./ErrorBarContext-BMIPJTH3.js";import"./GraphicalItemClipPath-cwCUl8BP.js";import"./SetGraphicalItem-CaZ4MYuw.js";import"./getZIndexFromUnknown-270mLj5U.js";import"./graphicalItemSelectors-ZxOOdcH0.js";import"./index-D_mIMI9F.js";import"./ChartSizeDimensions-BotkTU91.js";import"./OffsetShower-BoyHPNkq.js";import"./PlotAreaShower-DoB2hHNO.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
