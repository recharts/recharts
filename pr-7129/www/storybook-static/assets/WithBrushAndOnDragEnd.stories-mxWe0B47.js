import{e as t}from"./iframe-3667Tvz2.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-D9OvKJwD.js";import{B as p}from"./BarChart-DROwWIYr.js";import{X as l}from"./XAxis-BpxRjWnh.js";import{Y as h}from"./YAxis-DW4WG6ok.js";import{B as c}from"./Brush-Cek35xW4.js";import{B as x}from"./Bar-B1C1yyJt.js";import{R as u}from"./RechartsHookInspector-CJCnB7_4.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BtuJUOf7.js";import"./immer-UKt74SqS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-oIAnzkqM.js";import"./index-C4SUCtnx.js";import"./hooks-BZsQuy7Q.js";import"./axisSelectors-DQHNBIMP.js";import"./d3-scale-DGzXDIH7.js";import"./zIndexSlice-T5ACl1fd.js";import"./renderedTicksSlice-AmLe9sEW.js";import"./CartesianChart-DujR4c01.js";import"./chartDataContext-DwqmBR6M.js";import"./CategoricalChart-BIICkzoQ.js";import"./CartesianAxis-C27eZMEL.js";import"./Layer-DkCxZ1Nm.js";import"./Text-BJUXCfBk.js";import"./DOMUtils-CXQ8jzVY.js";import"./Label-BZ-HO-n4.js";import"./ZIndexLayer-DQkUzdJa.js";import"./types-B-N1LhIG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-C2Im_9CK.js";import"./ReactUtils-BGYookdr.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BGTdwFBk.js";import"./isPlainObject-BNfNO1bM.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CBZ7nnGZ.js";import"./useAnimationId-QOY8B5bM.js";import"./Trapezoid-BmNjJBFD.js";import"./Sector-DqFdBDD-.js";import"./Symbols-Dz33hGQT.js";import"./symbol-DLtpIQQd.js";import"./step-DREQNBhH.js";import"./Curve-BaNFvaPx.js";import"./RegisterGraphicalItemId-6KUqIGYl.js";import"./ErrorBarContext-f546Mx0J.js";import"./GraphicalItemClipPath-B2jRUZRX.js";import"./SetGraphicalItem-9InqSUgs.js";import"./getZIndexFromUnknown-BpiGpBWq.js";import"./graphicalItemSelectors-DVTwV7Bz.js";import"./index-BoqoSvrt.js";import"./ChartSizeDimensions-rVAYYRrn.js";import"./OffsetShower-DYHCblSP.js";import"./PlotAreaShower-BlEzOlOg.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
