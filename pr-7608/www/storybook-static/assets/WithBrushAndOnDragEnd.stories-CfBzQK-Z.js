import{R as t}from"./iframe-zGdozCQh.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CEf5y4wD.js";import{B as p}from"./BarChart-BUI_OrLV.js";import{X as l}from"./XAxis-PIf9M3x3.js";import{Y as h}from"./YAxis-BF2yy0dt.js";import{B as x}from"./Brush-Cj315008.js";import{B as c}from"./Bar-Cl77mGLk.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DvYlmrcU.js";import"./index-Be9faTsQ.js";import"./index-BA1qNDAx.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DGss-nCf.js";import"./isWellBehavedNumber-BpeZz3pN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-S6h0L_Sx.js";import"./index-Byuc73NK.js";import"./index-lgjWstKk.js";import"./renderedTicksSlice-BCsCwo08.js";import"./axisSelectors-BKjuK8lH.js";import"./d3-scale-MsmZCvzu.js";import"./CartesianChart-C5t9uLew.js";import"./chartDataContext-cAMS_PG1.js";import"./CategoricalChart-BpCZjXPz.js";import"./CartesianAxis-7tIOhqG7.js";import"./Layer-C16c9YM8.js";import"./Text-BFD_FCb6.js";import"./DOMUtils-BJDR7s4v.js";import"./Label-Cn4tQISS.js";import"./ZIndexLayer-BxlIB-HR.js";import"./types-D_e406XV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DKHHji-l.js";import"./isBuffer-BG75eWKN.js";import"./tooltipContext-Dpt0zkgP.js";import"./AnimatedItems-jN_ADWTf.js";import"./useAnimationId-ZvRvsbh2.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cys6_Hxz.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-9hROMAJM.js";import"./RegisterGraphicalItemId-COPie9tE.js";import"./ErrorBarContext-5XLz8TVO.js";import"./GraphicalItemClipPath-DyeI25HQ.js";import"./SetGraphicalItem-CU1gvNiL.js";import"./getZIndexFromUnknown-D6NKGQSF.js";import"./graphicalItemSelectors-CR6pnhzD.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const pt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,pt as __namedExportsOrder,st as default};
