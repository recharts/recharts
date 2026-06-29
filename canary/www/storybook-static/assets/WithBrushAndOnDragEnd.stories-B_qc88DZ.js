import{R as t}from"./iframe-CszBinxB.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CutJbhUL.js";import{B as p}from"./BarChart-CEx_hHkn.js";import{X as l}from"./XAxis-oYdZhs_K.js";import{Y as h}from"./YAxis-Dcemgb8R.js";import{B as x}from"./Brush-BtRN9K0e.js";import{B as c}from"./Bar-Da0uY_G_.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D83-jpt2.js";import"./index-Dk3UIdqq.js";import"./index-CK8GAH5B.js";import"./get-Dkt-pB45.js";import"./resolveDefaultProps-Bibg6aom.js";import"./isWellBehavedNumber-CQgoIKii.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B9WMJT6y.js";import"./index-CJ5FwB5R.js";import"./index-CqsgrxyY.js";import"./renderedTicksSlice-BApmRI5D.js";import"./axisSelectors-ChU_3Lvt.js";import"./d3-scale-8f-0eAbn.js";import"./CartesianChart-CKqsh66i.js";import"./chartDataContext-D1nSjPO9.js";import"./CategoricalChart-KozYfQM0.js";import"./CartesianAxis-BWqORJkK.js";import"./Layer-CbC5ZndY.js";import"./Text-BedxJwrY.js";import"./DOMUtils-BDWRPNb8.js";import"./Label-Dp0h3UHP.js";import"./ZIndexLayer-BWnK9pgn.js";import"./types-BcRZVSBA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-DORuRmNv.js";import"./AnimatedItems-dM5mhDfD.js";import"./useAnimationId-DACL8E3O.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-3wzUTOWc.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BBAZWV6w.js";import"./RegisterGraphicalItemId-BWZQesOM.js";import"./ErrorBarContext--gRpVtKO.js";import"./GraphicalItemClipPath-BrN2bI9m.js";import"./SetGraphicalItem-DWL3HNya.js";import"./getZIndexFromUnknown-DcZtLSk_.js";import"./graphicalItemSelectors-Bl27Wn5K.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const mt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,mt as __namedExportsOrder,dt as default};
