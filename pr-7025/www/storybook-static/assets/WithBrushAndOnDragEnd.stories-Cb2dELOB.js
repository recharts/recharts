import{e as t}from"./iframe-DRECDyJu.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-CwmcLezE.js";import{B as p}from"./BarChart-BGwcKe6g.js";import{X as l}from"./XAxis-0kgYDqpD.js";import{Y as h}from"./YAxis-DS55SlTE.js";import{B as c}from"./Brush-tvJOeY-o.js";import{B as x}from"./Bar-D8ay3I_c.js";import{R as u}from"./RechartsHookInspector-CkXF-mFA.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BL8CG5Be.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CU5EzhmX.js";import"./hooks-CjbPLp91.js";import"./axisSelectors-B-ON6UuJ.js";import"./zIndexSlice-DfG_LBZH.js";import"./renderedTicksSlice-BLRX00yy.js";import"./CartesianChart-B_9qra-d.js";import"./chartDataContext-D1nxolyM.js";import"./CategoricalChart-B6UPKjrz.js";import"./CartesianAxis-BgGI7FTB.js";import"./Layer-BVdUfIl0.js";import"./Text-DYPz2gV9.js";import"./DOMUtils-bfarr5el.js";import"./Label-CYBLI-Y2.js";import"./ZIndexLayer-DsAf8BK3.js";import"./types-BSPZHGNH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-kU_ZqqVJ.js";import"./ReactUtils--6xJa5xj.js";import"./ActiveShapeUtils-BIKdmm5h.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bt3TSPnX.js";import"./useAnimationId-DgWDlavz.js";import"./Trapezoid-D7oKFicN.js";import"./Sector-DGNmg5hs.js";import"./Symbols-4bVcflIB.js";import"./Curve-BflKxEFk.js";import"./RegisterGraphicalItemId-CnbfgSt4.js";import"./ErrorBarContext-Du4SjFis.js";import"./GraphicalItemClipPath-Cm2-R3a1.js";import"./SetGraphicalItem-BUqWhQAE.js";import"./getZIndexFromUnknown-D6kEC5-j.js";import"./graphicalItemSelectors-C1R8rUPC.js";import"./index-2vD-No8t.js";import"./ChartSizeDimensions-EJWE07nJ.js";import"./OffsetShower-Dgs61RIJ.js";import"./PlotAreaShower-B71aiz9a.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const lt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};
