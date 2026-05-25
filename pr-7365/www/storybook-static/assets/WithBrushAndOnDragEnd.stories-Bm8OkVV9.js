import{e as t}from"./iframe-CivULM0O.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./arrayEqualityCheck-PbQt1vd_.js";import{B as p}from"./BarChart-BCGcSI-g.js";import{X as l}from"./XAxis-CYAQkN2U.js";import{Y as h}from"./YAxis-ESVpGmgX.js";import{B as c}from"./Brush-BDh5QFrK.js";import{B as x}from"./Bar-CA_IeHFY.js";import{R as u}from"./RechartsHookInspector-B13-Urqc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Bzl3TnEc.js";import"./immer-C3JSSs7p.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DwxV8M50.js";import"./index-D77mCZEn.js";import"./hooks-O1Pz3D70.js";import"./axisSelectors-C5EVC_K9.js";import"./d3-scale-D4k2z_td.js";import"./zIndexSlice-DI8beG-i.js";import"./renderedTicksSlice-DkvK2F6A.js";import"./CartesianChart-DF7vNr1N.js";import"./chartDataContext-BWPeiq2n.js";import"./CategoricalChart-CaQLfBcJ.js";import"./CartesianAxis-G3eNrHbq.js";import"./Layer-BOVDUSvA.js";import"./Text-aFIbFVfW.js";import"./DOMUtils-D-P4J5bL.js";import"./Label-BAI4tr_y.js";import"./ZIndexLayer-CgUDZ3al.js";import"./types-CYA8PCW2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-n77PxYR2.js";import"./ReactUtils-B75F0iOa.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-d22AVGnL.js";import"./useAnimationId-DJJiEnXV.js";import"./ActiveShapeUtils-DzUFHSun.js";import"./RegisterGraphicalItemId-C8jduj3R.js";import"./ErrorBarContext-rnb_GXzV.js";import"./GraphicalItemClipPath-UzEv0mvn.js";import"./SetGraphicalItem-DhyPdJoF.js";import"./getZIndexFromUnknown-Ce8ZJNDV.js";import"./graphicalItemSelectors-CO4I5c3e.js";import"./index-kHVaJKAG.js";import"./ChartSizeDimensions-B7zlPcNh.js";import"./OffsetShower-BTGRafEk.js";import"./PlotAreaShower-BV6yuT_Y.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
