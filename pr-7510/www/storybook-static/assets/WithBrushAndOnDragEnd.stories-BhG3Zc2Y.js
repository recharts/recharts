import{R as t}from"./iframe-DCxLvNga.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DgwgOA8W.js";import{B as p}from"./BarChart-D2IRMf80.js";import{X as l}from"./XAxis-CvAM-btA.js";import{Y as h}from"./YAxis-BqxXsg45.js";import{B as x}from"./Brush-DfuG6yI5.js";import{B as c}from"./Bar-BNbtkdOd.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BEPLbkDl.js";import"./index-8Ky9zJpe.js";import"./index-eUk0KR26.js";import"./get-Cqaz2t92.js";import"./resolveDefaultProps-Clp0Py5Q.js";import"./isWellBehavedNumber-C0c3JW0z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DQRomY3U.js";import"./index-WumRa2O_.js";import"./index-HEbudI5N.js";import"./renderedTicksSlice-PHCHKu5h.js";import"./axisSelectors-LD-bHnG0.js";import"./d3-scale-U7zf4vxG.js";import"./CartesianChart-WbtSIkDa.js";import"./chartDataContext-1-JtWOIC.js";import"./CategoricalChart-BL0VhkFE.js";import"./CartesianAxis-D6yEppZ-.js";import"./Layer-wgUOVjl0.js";import"./Text-CxvVezqe.js";import"./DOMUtils-CJlLdKU3.js";import"./Label-B5b7aLp5.js";import"./ZIndexLayer-CM9bDnHX.js";import"./types-CVkN-t8Z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-HxNXNBwa.js";import"./AnimatedItems-kb_X2dzq.js";import"./useAnimationId-HOEbSJwy.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-TQcaGvcZ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-j_zEDQtR.js";import"./RegisterGraphicalItemId-uoD-MQmf.js";import"./ErrorBarContext-BqmhDiAL.js";import"./GraphicalItemClipPath-CWBeJB2a.js";import"./SetGraphicalItem-Cst8NOmH.js";import"./getZIndexFromUnknown-DphAGuTV.js";import"./graphicalItemSelectors-z9URsQXH.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
