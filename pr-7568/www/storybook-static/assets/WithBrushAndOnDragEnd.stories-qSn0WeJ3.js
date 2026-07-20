import{R as t}from"./iframe-E9cTKeRE.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DgjoBcM4.js";import{B as p}from"./BarChart-Bnt2rVw9.js";import{X as l}from"./XAxis-rRrOlgKo.js";import{Y as h}from"./YAxis-F7YCqO7L.js";import{B as x}from"./Brush-DokvHU2b.js";import{B as c}from"./Bar-D5mdgqCB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CGWlJj3Y.js";import"./index-CXgkWbkn.js";import"./index-dTe_TrB1.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-VcEXnedp.js";import"./isWellBehavedNumber-CNJuLpb3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B1G603CI.js";import"./index-BKdHAXhr.js";import"./index-CCDqlq1e.js";import"./renderedTicksSlice-8_6vlRT3.js";import"./axisSelectors-Cz4e0hh2.js";import"./d3-scale-BKY6FaDv.js";import"./CartesianChart-h93kYpLN.js";import"./chartDataContext-BLSdU0GF.js";import"./CategoricalChart-Dgnr1Z5s.js";import"./CartesianAxis-X6rLp4nN.js";import"./Layer-gCSDlxX6.js";import"./Text-Z5PFJcO5.js";import"./DOMUtils-7h76k5q7.js";import"./Label-BpZfxLrK.js";import"./ZIndexLayer-T104iiSj.js";import"./types-BiCnzAm7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-Dip-pauz.js";import"./AnimatedItems-B1DMV_LJ.js";import"./useAnimationId-DdQ6zElL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CPcTji69.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D82Ok3yU.js";import"./RegisterGraphicalItemId-y5W6RdIF.js";import"./ErrorBarContext-CrHnHUPz.js";import"./GraphicalItemClipPath-BanWagPz.js";import"./SetGraphicalItem-i24-OBmJ.js";import"./getZIndexFromUnknown-CdNXl1gM.js";import"./graphicalItemSelectors-D0cXoEU9.js";const mt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const st=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,st as __namedExportsOrder,mt as default};
