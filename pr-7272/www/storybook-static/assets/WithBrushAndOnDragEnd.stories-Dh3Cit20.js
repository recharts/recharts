import{e as t}from"./iframe-4M-PkSVA.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-9hxUK6as.js";import{B as p}from"./BarChart-DcwChvcH.js";import{X as l}from"./XAxis-B7sM9A7a.js";import{Y as h}from"./YAxis-C60ythyu.js";import{B as c}from"./Brush-BxkKsKkf.js";import{B as x}from"./Bar-YucOP4EX.js";import{R as u}from"./RechartsHookInspector-Bu2v4BgA.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CYaStK-U.js";import"./immer-CY9nZJ0O.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ct_1KIIG.js";import"./index-QhWebp7-.js";import"./hooks-0Lo_6wsQ.js";import"./axisSelectors-DzylQYKT.js";import"./d3-scale-CUJe2CI0.js";import"./zIndexSlice-Bg894_FJ.js";import"./renderedTicksSlice-BOIzxlRf.js";import"./CartesianChart-Cd9DDcz_.js";import"./chartDataContext-D4ebhXUv.js";import"./CategoricalChart-DBff51gh.js";import"./CartesianAxis-sJnvrLg-.js";import"./Layer-CSsW14jT.js";import"./Text-CVSiM3-K.js";import"./DOMUtils-BLTsClHS.js";import"./Label-HHw2Wo4F.js";import"./ZIndexLayer-BqzZgYR4.js";import"./types-BizJXa69.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-D_B82NQG.js";import"./ReactUtils-CI9blSHi.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BtPvL2qu.js";import"./isPlainObject-C0kslINo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B8e1dRmE.js";import"./useAnimationId-AkEyWWXN.js";import"./Trapezoid-DJP_R3rw.js";import"./Sector-DG5p09xu.js";import"./Symbols-BWbej2Re.js";import"./symbol-gex8G6F3.js";import"./step-r2s_c4Hj.js";import"./Curve-DGVbHr3U.js";import"./RegisterGraphicalItemId-D74ncS90.js";import"./ErrorBarContext-B-CC6fNm.js";import"./GraphicalItemClipPath-ClTLLJGZ.js";import"./SetGraphicalItem-BO1ROXvb.js";import"./getZIndexFromUnknown-CxMiEiEl.js";import"./graphicalItemSelectors-BTk3Cb8i.js";import"./index-1NSbHYzy.js";import"./ChartSizeDimensions-CyhagkHh.js";import"./OffsetShower-D5VKQHJL.js";import"./PlotAreaShower-CwVyk3um.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
