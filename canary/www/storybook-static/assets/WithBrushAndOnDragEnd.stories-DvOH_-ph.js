import{e as t}from"./iframe-CxCywqzA.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./arrayEqualityCheck-yVNwB6mW.js";import{B as p}from"./BarChart-CbU_Fvdo.js";import{X as l}from"./XAxis-_gXpBYMm.js";import{Y as h}from"./YAxis-DxVfrwf5.js";import{B as c}from"./Brush-EICeLH7m.js";import{B as x}from"./Bar-BHX1MDeb.js";import{R as u}from"./RechartsHookInspector-DGOvaE6a.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DyFfO_sZ.js";import"./immer-B8hoAty4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ReU4AUnJ.js";import"./index-Pf0lqjAZ.js";import"./hooks-bOP2AOQf.js";import"./axisSelectors-DhlA5n5_.js";import"./d3-scale-CxndOeQp.js";import"./zIndexSlice-DVQoyP0x.js";import"./renderedTicksSlice-D6OwKyas.js";import"./CartesianChart-DzAU9ZU1.js";import"./chartDataContext-DIpKw8P8.js";import"./CategoricalChart-Bsvtk9Il.js";import"./CartesianAxis-CJvJrEPT.js";import"./Layer-BIf3cKek.js";import"./Text-D9QqhyNw.js";import"./DOMUtils-C_VBv5EQ.js";import"./Label-C7vnjRze.js";import"./ZIndexLayer-DP6IzTUW.js";import"./types-ou1XrYCh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DpnGzNJg.js";import"./ReactUtils-9u_I1YpW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B_fNhFcV.js";import"./useAnimationId-C-vOWrwQ.js";import"./ActiveShapeUtils-sPKYOUtI.js";import"./RegisterGraphicalItemId-BpFbTFO3.js";import"./ErrorBarContext-CRsTDduf.js";import"./GraphicalItemClipPath-vFOoMVO7.js";import"./SetGraphicalItem-CwSOO4xE.js";import"./getZIndexFromUnknown-DP36f3hj.js";import"./graphicalItemSelectors-CYtQB4Qt.js";import"./index-DGGA_IR8.js";import"./ChartSizeDimensions-CFycJ4k1.js";import"./OffsetShower-BkZVXWFE.js";import"./PlotAreaShower-BM-3w1mr.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
