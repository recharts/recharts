import{R as t}from"./iframe-BcyvxDDm.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CjqwPb4I.js";import{B as p}from"./BarChart-CHgFhUR0.js";import{X as l}from"./XAxis-hKqegIsy.js";import{Y as h}from"./YAxis-DWNExzo5.js";import{B as x}from"./Brush-BirXXjmP.js";import{B as c}from"./Bar-CSue2tQL.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Da4mYIun.js";import"./index-BbDVdbFr.js";import"./index-DylQUhO9.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DYK2TugC.js";import"./isWellBehavedNumber-DT8eXGOZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BKq7sB4k.js";import"./index-VYrkeph1.js";import"./index-CmO5XTPj.js";import"./renderedTicksSlice-C78J9WJd.js";import"./axisSelectors-Ft8qoIRM.js";import"./d3-scale-CuOcyn8C.js";import"./CartesianChart-Dy4JzN_k.js";import"./chartDataContext-q6A5cODj.js";import"./CategoricalChart-CjQdcPEp.js";import"./CartesianAxis-X-wBC9Mi.js";import"./Layer-BbNzeSuC.js";import"./Text-DHboH0PZ.js";import"./DOMUtils-BbuOOwxk.js";import"./Label-DKWc-r2Z.js";import"./ZIndexLayer-O4JEDRQM.js";import"./types-BRN82dlo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-gCCyTBXM.js";import"./AnimatedItems-C_84PZuB.js";import"./useAnimationId-UCivMRaV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Df6t51Wj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CAO4oJEH.js";import"./RegisterGraphicalItemId-MfcacHn_.js";import"./ErrorBarContext-Bo7tXsWd.js";import"./GraphicalItemClipPath-gcf9l3Dr.js";import"./SetGraphicalItem-NfXYYfkR.js";import"./getZIndexFromUnknown-F_HTt5lD.js";import"./graphicalItemSelectors-BBvA2a8_.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
