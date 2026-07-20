import{R as t}from"./iframe-txLfFnZC.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BxlfArAG.js";import{B as p}from"./BarChart-Dv6PQqcI.js";import{X as l}from"./XAxis-CUKDl1yE.js";import{Y as h}from"./YAxis-Bqp7D6OE.js";import{B as x}from"./Brush-CKT5N3U9.js";import{B as c}from"./Bar-DIBt6LBj.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-q2TDx7Oc.js";import"./index-faRlTy-y.js";import"./index-BnBpNwbh.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BBYfN4li.js";import"./isWellBehavedNumber-DsLwC3LI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BDYeTMp6.js";import"./index-CYC3OVnH.js";import"./index-CTiUFbNZ.js";import"./renderedTicksSlice-C2wSEtKv.js";import"./axisSelectors-ClpNZRSK.js";import"./d3-scale-C2Ev96_0.js";import"./CartesianChart-CZzNDwaM.js";import"./chartDataContext-B9BMm3ef.js";import"./CategoricalChart-D2mtca-7.js";import"./CartesianAxis-Bpg83Llu.js";import"./Layer-DgCStFRG.js";import"./Text-CFMnT5X2.js";import"./DOMUtils-BfTHFrOm.js";import"./Label-Bg0xf_F2.js";import"./ZIndexLayer-CgOQ9duv.js";import"./types-DBwOBb8v.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-CKBdin0m.js";import"./AnimatedItems-DXTzwQHr.js";import"./useAnimationId-BBZuCs7J.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DXH6HZeC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CgPV4Ht_.js";import"./RegisterGraphicalItemId-CKNrcWiv.js";import"./ErrorBarContext-g-_09_Lv.js";import"./GraphicalItemClipPath-CeZp1Nou.js";import"./SetGraphicalItem-ZtkOOX-3.js";import"./getZIndexFromUnknown-Cu0mtb3l.js";import"./graphicalItemSelectors-p5AVEwSd.js";const mt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
