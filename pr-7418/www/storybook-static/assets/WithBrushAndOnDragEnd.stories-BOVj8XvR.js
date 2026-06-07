import{R as t}from"./iframe-B32UfMsX.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DkyNtvIV.js";import{B as p}from"./BarChart-BzV8y2Se.js";import{X as l}from"./XAxis-DsOSB3OX.js";import{Y as h}from"./YAxis-4E9uo8Up.js";import{B as x}from"./Brush-BFPguk_k.js";import{B as c}from"./Bar-DmuuFxqL.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BidytqCU.js";import"./index-BAP72phy.js";import"./index-wjzF3nV2.js";import"./get-CT3OO5rn.js";import"./resolveDefaultProps-SHHlCQDD.js";import"./isWellBehavedNumber-B3ho9k16.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BXDb61uY.js";import"./index-DzoQc6cZ.js";import"./index-Q93duC2Q.js";import"./renderedTicksSlice-DtIdXCHL.js";import"./axisSelectors-B8hXjmBG.js";import"./d3-scale-BwqG5DLv.js";import"./string-B6fdYHAA.js";import"./CartesianChart-s4vgD_mJ.js";import"./chartDataContext-d3sJv4oK.js";import"./CategoricalChart-svLbPFL5.js";import"./CartesianAxis-CrAWHyC2.js";import"./Layer-M7lMUPI2.js";import"./Text-DenoxlLY.js";import"./DOMUtils-qhHnbbUp.js";import"./Label-Ba3mw93_.js";import"./ZIndexLayer-DIk8UPq9.js";import"./types-BFdTLIuF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-BLrLP8j9.js";import"./AnimatedItems-CWOjCZuo.js";import"./useAnimationId-kKOEl60u.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Chp3lP1V.js";import"./ActiveShapeUtils-rTJK82Vs.js";import"./RegisterGraphicalItemId-BPd8SjvM.js";import"./ErrorBarContext-CC6gZVl6.js";import"./GraphicalItemClipPath-DtFSmlFx.js";import"./SetGraphicalItem-CLuszb-H.js";import"./getZIndexFromUnknown-CctZbkJb.js";import"./graphicalItemSelectors-CCBoqdYH.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
