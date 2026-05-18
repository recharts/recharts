import{e as t}from"./iframe-BziMfoUa.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./arrayEqualityCheck-jGW3YXEm.js";import{B as p}from"./BarChart-CORr0dEo.js";import{X as l}from"./XAxis-zue1oO_9.js";import{Y as h}from"./YAxis-Cam7yyHt.js";import{B as c}from"./Brush-Df5tfvsc.js";import{B as x}from"./Bar-9zI0ZWNU.js";import{R as u}from"./RechartsHookInspector-C7iBq9Tv.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BqM-Yvij.js";import"./immer-Bs1CBStC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Duw6h7Bm.js";import"./index-BIuRyLTB.js";import"./hooks-_tZAqQmm.js";import"./axisSelectors-CAcjMuVN.js";import"./d3-scale-GlbhO23R.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-lEo1dtRN.js";import"./renderedTicksSlice-v3j9k7Mr.js";import"./CartesianChart-Cq-jUzWL.js";import"./chartDataContext-Cp7Sw1KM.js";import"./CategoricalChart-BjhCCKH7.js";import"./CartesianAxis-CBXn4WUR.js";import"./Layer-CoMuIaZe.js";import"./Text-fxmSEe5L.js";import"./DOMUtils-c_Zm-hwi.js";import"./Label-Qwg870Bc.js";import"./ZIndexLayer-CIYsspBg.js";import"./types-CX5BQ__A.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-B5YdumFi.js";import"./AnimatedItems-BBuXONSK.js";import"./useAnimationId-kTU4vPRt.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BFwVaQU9.js";import"./isPlainObject-DmPDszQ3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cqckp2nr.js";import"./Trapezoid-m2Wlm-zm.js";import"./Sector-Gm8VToLD.js";import"./Symbols-DXSNT6Hm.js";import"./symbol-DOCk2oSo.js";import"./step-CeZV8hny.js";import"./Curve-CBntFit6.js";import"./RegisterGraphicalItemId-BtgM2BJV.js";import"./ErrorBarContext-TCqeYJoC.js";import"./GraphicalItemClipPath-CUoKAv3d.js";import"./SetGraphicalItem-DsxyvyCs.js";import"./getZIndexFromUnknown-k0nSw134.js";import"./graphicalItemSelectors-B06k7LJ4.js";import"./index-Cu69lm6g.js";import"./ChartSizeDimensions-DfprWSX6.js";import"./OffsetShower-Cr3DxjzZ.js";import"./PlotAreaShower-OmwxkN4u.js";const vt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const Bt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,Bt as __namedExportsOrder,vt as default};
