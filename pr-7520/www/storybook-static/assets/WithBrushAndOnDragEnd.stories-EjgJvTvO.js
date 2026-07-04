import{R as t}from"./iframe-D-BXEDkQ.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CNOaqOPA.js";import{B as p}from"./BarChart-D6qgXyYy.js";import{X as l}from"./XAxis-CsYsIQZ3.js";import{Y as h}from"./YAxis-CY9nfIzq.js";import{B as x}from"./Brush-CMtQLS0L.js";import{B as c}from"./Bar-DrwSdmq0.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DcYZZCS9.js";import"./index-G9DZGzqS.js";import"./index-DyZMLGLF.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BCmCl_HK.js";import"./isWellBehavedNumber-DG1BXq00.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DAPlnek-.js";import"./index-CSvF-BDD.js";import"./index-Dzr30MxI.js";import"./renderedTicksSlice-BW0B_yyu.js";import"./axisSelectors-DbolJrr5.js";import"./d3-scale-Cw0gW9iZ.js";import"./CartesianChart-B9gu2iu_.js";import"./chartDataContext-Drjp45TO.js";import"./CategoricalChart-Dffh87Ow.js";import"./CartesianAxis-BPou2DWk.js";import"./Layer-DZ4WZEl1.js";import"./Text-DKRb_pWs.js";import"./DOMUtils-BtYPMtse.js";import"./Label-BXssQtMI.js";import"./ZIndexLayer-BMtWXslr.js";import"./types-CKqvof5k.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-Da9Q34xm.js";import"./AnimatedItems-Bb-goO_2.js";import"./useAnimationId-BbJgISg4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DhH6fWaa.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D6NCpbS5.js";import"./RegisterGraphicalItemId-D4LQkijr.js";import"./ErrorBarContext-CYH48hpc.js";import"./GraphicalItemClipPath-CpDe9sQE.js";import"./SetGraphicalItem-DFCa6_Km.js";import"./getZIndexFromUnknown-YtoJxASB.js";import"./graphicalItemSelectors-DgXVbdYn.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
