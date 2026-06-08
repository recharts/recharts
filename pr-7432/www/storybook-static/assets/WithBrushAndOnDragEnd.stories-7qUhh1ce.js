import{R as t}from"./iframe-B2GUem4R.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CZi7E6fW.js";import{B as p}from"./BarChart-CpOl580u.js";import{X as l}from"./XAxis-CFUeYXnK.js";import{Y as h}from"./YAxis-_CiWUi77.js";import{B as x}from"./Brush-DgLHbtzp.js";import{B as c}from"./Bar-CQYzrmsh.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DXmH-xiw.js";import"./index-8D89370m.js";import"./index-C3eO1gGD.js";import"./get-Dz6Q_sAk.js";import"./resolveDefaultProps-D8aANFv1.js";import"./isWellBehavedNumber-Dny2ojXK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-wIT9NoUO.js";import"./index-CiX8zsFN.js";import"./index-CRfxI4mA.js";import"./renderedTicksSlice-CFEn6KcH.js";import"./axisSelectors-eBcYGUc1.js";import"./d3-scale-BTfuin0j.js";import"./string-B6fdYHAA.js";import"./CartesianChart-B-JFZAz_.js";import"./chartDataContext-CqMqFbwN.js";import"./CategoricalChart-DLExbf-B.js";import"./CartesianAxis-DVMfjDIU.js";import"./Layer-D33k1icw.js";import"./Text-BI7UFZae.js";import"./DOMUtils-Bf1ILi-r.js";import"./Label-BkYexeGT.js";import"./ZIndexLayer-B6ZLwcmD.js";import"./types-D4D5wSub.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-DitHrbmm.js";import"./AnimatedItems-LimEMMjo.js";import"./useAnimationId-D653EGzA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CNlPjGbB.js";import"./ActiveShapeUtils-1-wftwDY.js";import"./RegisterGraphicalItemId-CH4DvZUM.js";import"./ErrorBarContext-CorbPQDF.js";import"./GraphicalItemClipPath-CAM-mwtd.js";import"./SetGraphicalItem-C_-j0gLb.js";import"./getZIndexFromUnknown-Cxdy8wIR.js";import"./graphicalItemSelectors-DegQp3fd.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
