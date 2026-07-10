import{R as t}from"./iframe-GFu4u_Sr.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-B5qFJFtI.js";import{B as p}from"./BarChart-CxHQRb8J.js";import{X as l}from"./XAxis-DCmYbaAb.js";import{Y as h}from"./YAxis-DPkQctbd.js";import{B as x}from"./Brush-FnJj8ehy.js";import{B as c}from"./Bar-BRYtNt63.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CQYhSY5q.js";import"./index-J8ff_bgA.js";import"./index-BoT4UeUf.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-B2kj8vGo.js";import"./isWellBehavedNumber-BzBjtwBe.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-GJPBo-3J.js";import"./index-fFvV_i1o.js";import"./index-CFslUPNA.js";import"./renderedTicksSlice-Dhv-F3Ii.js";import"./axisSelectors-CITTcs7P.js";import"./d3-scale-XJfpe2FZ.js";import"./CartesianChart-5jGrrHiW.js";import"./chartDataContext-ABcCQ5OY.js";import"./CategoricalChart-DaWqkQxP.js";import"./CartesianAxis-BChvL9JZ.js";import"./Layer-rjKJbMCf.js";import"./Text-CHl4arA0.js";import"./DOMUtils-BV_Da9To.js";import"./Label-DJGaBZN0.js";import"./ZIndexLayer-DO98mi6X.js";import"./types-CpBB06eN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-2Jmu8Kxq.js";import"./AnimatedItems-BMr3q6ws.js";import"./useAnimationId-DHrR_uSV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BEnsF74A.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DrDRZtp1.js";import"./RegisterGraphicalItemId-C2TZCZTY.js";import"./ErrorBarContext-E48lOcW2.js";import"./GraphicalItemClipPath-Dp-oK_MY.js";import"./SetGraphicalItem-BWFxWlyV.js";import"./getZIndexFromUnknown-DTnGh4bz.js";import"./graphicalItemSelectors-B3NohPBl.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
