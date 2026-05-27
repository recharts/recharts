import{e as t}from"./iframe-DJXOgax2.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./arrayEqualityCheck-k7PS2xak.js";import{B as p}from"./BarChart-DlB-wWFK.js";import{X as l}from"./XAxis-9kxG52aU.js";import{Y as h}from"./YAxis-DRv5Ieqa.js";import{B as c}from"./Brush-DIl5QwcR.js";import{B as x}from"./Bar-Csd2W3IH.js";import{R as u}from"./RechartsHookInspector-s82vtdQF.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DPbWDBA5.js";import"./immer-2a_xTrdV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BaSgqIB_.js";import"./index-BNAJMwXV.js";import"./hooks-CZ0TOrWM.js";import"./axisSelectors-Dr5KL0ZI.js";import"./d3-scale-DuWCsZHZ.js";import"./zIndexSlice-B--1gOPM.js";import"./renderedTicksSlice-Bl5jCaCZ.js";import"./CartesianChart-BFo4vKxS.js";import"./chartDataContext-kJxPcL-i.js";import"./CategoricalChart-Bx8_lMCZ.js";import"./CartesianAxis-BuS9D4Ek.js";import"./Layer-PAWXt2PX.js";import"./Text-npnYAvG4.js";import"./DOMUtils-i2w-QAqd.js";import"./Label-C8y2_6Vy.js";import"./ZIndexLayer-DVdyi4xb.js";import"./types-CX2SK57G.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-COH2Afi-.js";import"./ReactUtils-DyBcDzzn.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-oqaSBBRm.js";import"./useAnimationId-B1Sa6L7Z.js";import"./ActiveShapeUtils-TINQfrs9.js";import"./RegisterGraphicalItemId-BxDB977O.js";import"./ErrorBarContext-Cq-5bVpD.js";import"./GraphicalItemClipPath-BH4qa2aX.js";import"./SetGraphicalItem-W-67q1_i.js";import"./getZIndexFromUnknown-m5ylCZfL.js";import"./graphicalItemSelectors-gJ1uXDK1.js";import"./index-Bnctlgv-.js";import"./ChartSizeDimensions-Dwe9HRTS.js";import"./OffsetShower-BjMyZ4ga.js";import"./PlotAreaShower-6s_jSFmp.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
