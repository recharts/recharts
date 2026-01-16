import{e}from"./iframe-BVH8UecD.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-vgKGXjJg.js";import{B as p}from"./BarChart-CGFFqr0A.js";import{X as l}from"./XAxis-DOmXqRCS.js";import{Y as h}from"./YAxis-Bmsarh4g.js";import{B as c}from"./Brush-DlGOXvz6.js";import{B as x}from"./Bar-DUIeT-xj.js";import{R as u}from"./RechartsHookInspector-Dq3yykk5.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cdk0Kr5w.js";import"./PolarUtils-D3PpCgED.js";import"./RechartsWrapper-BZaLp-vS.js";import"./hooks-EmSSg1xf.js";import"./axisSelectors-CdzAnCbl.js";import"./zIndexSlice-BoigZ-y7.js";import"./CartesianChart-nAdRozku.js";import"./chartDataContext-DfFz62HT.js";import"./CategoricalChart-361vez3Q.js";import"./CartesianAxis-DndSeeNX.js";import"./Layer-CdphaBoS.js";import"./Text-B5hVuEjR.js";import"./DOMUtils-Awr9GIGy.js";import"./Label-DbioSpEE.js";import"./ZIndexLayer-Qipy46x2.js";import"./types-iQF7hC2M.js";import"./tooltipContext-BBDmyfFl.js";import"./ReactUtils-CPhzqwNY.js";import"./ActiveShapeUtils-BkZUQSXK.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DWlX6cPO.js";import"./useAnimationId-B1orywOS.js";import"./Trapezoid-BHTAQ8Mn.js";import"./Sector-DWTAjqin.js";import"./Symbols-Bx3sDerM.js";import"./Curve-5Yzr7IBn.js";import"./RegisterGraphicalItemId-BvvWKN3n.js";import"./ErrorBarContext-B2FM21nb.js";import"./GraphicalItemClipPath-Ds_tmloi.js";import"./SetGraphicalItem-B2OXJLzy.js";import"./getZIndexFromUnknown-CfC1pp7O.js";import"./graphicalItemSelectors-FDpsy6X0.js";import"./index-C-t36GsJ.js";import"./ChartSizeDimensions-C0bbugJp.js";import"./OffsetShower-CgbwF9et.js";import"./PlotAreaShower-HC6koTfx.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
