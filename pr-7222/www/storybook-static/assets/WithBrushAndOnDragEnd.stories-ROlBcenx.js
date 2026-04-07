import{e as t}from"./iframe-BbLTqg_I.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-CBxHnj40.js";import{B as p}from"./BarChart-dgKw6BfO.js";import{X as l}from"./XAxis-WOMOBxy0.js";import{Y as h}from"./YAxis-DbPxFlg1.js";import{B as c}from"./Brush-D09EQoiT.js";import{B as x}from"./Bar-BPAUjJIP.js";import{R as u}from"./RechartsHookInspector-D5b-YMWc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DeEvTvqp.js";import"./immer-0I19eR8v.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-sXCJwmzA.js";import"./index-t2-XMrpS.js";import"./hooks-lBsi1Lte.js";import"./axisSelectors-Bham5zd3.js";import"./d3-scale-DytBNPzq.js";import"./zIndexSlice-DaNYP2h4.js";import"./renderedTicksSlice-mAMVqgeM.js";import"./CartesianChart-6nDSe5MW.js";import"./chartDataContext-CkbwJfZ5.js";import"./CategoricalChart-CiUZR458.js";import"./CartesianAxis-BQlJw0QH.js";import"./Layer-De7FJLXT.js";import"./Text-Doa3jS46.js";import"./DOMUtils-_WjkpCG3.js";import"./Label-Dp17yuaT.js";import"./ZIndexLayer-CG-7pAPx.js";import"./types-BQQUehNG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CoSAbHdV.js";import"./ReactUtils-BKGICeIT.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DIUxAYHp.js";import"./isPlainObject--uBpLfXE.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-oP2ZElLD.js";import"./useAnimationId-Dzq-5vwQ.js";import"./Trapezoid-CEWsUmUR.js";import"./Sector-DvZKa3JR.js";import"./Symbols-DHvudbT_.js";import"./symbol-C3VSVIbg.js";import"./step-DZPsS0dg.js";import"./Curve-Bfkmy_Vr.js";import"./RegisterGraphicalItemId-BMAYZOJ5.js";import"./ErrorBarContext-DVSsr0NQ.js";import"./GraphicalItemClipPath-BQ69dXZ4.js";import"./SetGraphicalItem-BZCA2PlV.js";import"./getZIndexFromUnknown-CyUn9MXU.js";import"./graphicalItemSelectors-aeE1LDGN.js";import"./index-BvC3nlY0.js";import"./ChartSizeDimensions-BXlHCl-n.js";import"./OffsetShower-ifdzBZ5-.js";import"./PlotAreaShower-CxkyObXY.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
