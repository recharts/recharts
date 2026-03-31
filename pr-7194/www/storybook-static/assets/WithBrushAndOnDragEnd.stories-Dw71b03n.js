import{e as t}from"./iframe-C4ae8FtK.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-lfrA5Bq2.js";import{B as p}from"./BarChart-BmnmV_ls.js";import{X as l}from"./XAxis-D-4HgMe7.js";import{Y as h}from"./YAxis-BwAcKPAC.js";import{B as c}from"./Brush-Bpzj_b1I.js";import{B as x}from"./Bar-PvtMDXCV.js";import{R as u}from"./RechartsHookInspector-BUlLV83W.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CeAK8DLj.js";import"./immer-JFltD55q.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-tTigpQ5n.js";import"./index-BAPPw7tY.js";import"./hooks-CXUA9yEr.js";import"./axisSelectors-DobMcDEZ.js";import"./d3-scale-Bqdags1w.js";import"./zIndexSlice-CgotL-NA.js";import"./renderedTicksSlice-Cj9ny3Ly.js";import"./CartesianChart-DasFBtUo.js";import"./chartDataContext-DPN8Z90E.js";import"./CategoricalChart-D917O6MX.js";import"./CartesianAxis-2J4hk8WJ.js";import"./Layer-N4FzZ7QF.js";import"./Text-CIi3nsya.js";import"./DOMUtils-Ds2y4XHZ.js";import"./Label-DBvzFRUp.js";import"./ZIndexLayer-Cm0MOpfC.js";import"./types-C9HDIMgp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-xQWUTslI.js";import"./ReactUtils-DyI5Xl8b.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CpUyToQw.js";import"./isPlainObject-NFlPGfOx.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-36uwRJjR.js";import"./useAnimationId-DYnPgr1F.js";import"./Trapezoid-PDWBfkS4.js";import"./Sector-CiJRQ-kP.js";import"./Symbols-CuAJ11rV.js";import"./symbol-BxTsEubx.js";import"./step-ycAKK8HO.js";import"./Curve-DBFjwflq.js";import"./RegisterGraphicalItemId-CypQFo50.js";import"./ErrorBarContext-BJJjhQzu.js";import"./GraphicalItemClipPath-DrPrMemX.js";import"./SetGraphicalItem-C5fi9q2Q.js";import"./getZIndexFromUnknown-Dln3iDql.js";import"./graphicalItemSelectors-VawM8fXn.js";import"./index-DYmzarGE.js";import"./ChartSizeDimensions-DrJNk4HA.js";import"./OffsetShower-CscpLTCd.js";import"./PlotAreaShower-LJKqGtZ8.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
