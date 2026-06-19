import{R as t}from"./iframe-DDa7m_LV.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BGDMq11w.js";import{B as p}from"./BarChart-JLy6sp_4.js";import{X as l}from"./XAxis-C_90q5ur.js";import{Y as h}from"./YAxis-BVn2_RdR.js";import{B as x}from"./Brush-COL4XTyt.js";import{B as c}from"./Bar-B51h6kP-.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CDcbaTsx.js";import"./index-DKvxLdaY.js";import"./index-CQwxmzXl.js";import"./get-BkRD0rv1.js";import"./resolveDefaultProps-_rtxDhh1.js";import"./isWellBehavedNumber-BpYCTIWP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BP1nC8TI.js";import"./index-xetC29GH.js";import"./index-Dqdzi7xh.js";import"./renderedTicksSlice-BldZtaeN.js";import"./axisSelectors-B-E6faSk.js";import"./d3-scale-lQF3DEYD.js";import"./CartesianChart-DQyQReh2.js";import"./chartDataContext-BCuk8KYe.js";import"./CategoricalChart-B4hxnAvN.js";import"./CartesianAxis-BYwyVqNa.js";import"./Layer-DzM6lalT.js";import"./Text-CRfJilvw.js";import"./DOMUtils-jl9bWopj.js";import"./Label-CwmoSFs2.js";import"./ZIndexLayer-DErURTRW.js";import"./types-BQpkl3V-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-BJ-FXG7W.js";import"./AnimatedItems-B4Or3-X4.js";import"./useAnimationId-DndzYlXq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CbWrvagV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CUSMx5gC.js";import"./RegisterGraphicalItemId-D1XWxMPg.js";import"./ErrorBarContext-Cme-vC5F.js";import"./GraphicalItemClipPath-CN8GtY4s.js";import"./SetGraphicalItem-DU_Y3HPI.js";import"./getZIndexFromUnknown-BnLMP2kC.js";import"./graphicalItemSelectors-CMcm9wbK.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
