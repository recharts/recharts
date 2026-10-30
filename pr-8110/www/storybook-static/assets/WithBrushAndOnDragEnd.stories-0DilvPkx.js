import{R as t}from"./iframe-Cr7yvMyR.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CsHxFK6N.js";import{B as p}from"./BarChart-leWz3b1M.js";import{X as l}from"./XAxis-6YWl141g.js";import{Y as h}from"./YAxis-CzA9LN6m.js";import{B as x}from"./Brush-DoIbGGKn.js";import{B as c}from"./Bar-DVfa4EfK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-7XokfeB_.js";import"./throttle-RI9qCIcF.js";import"./index-BW-7B_Oi.js";import"./index-BxNxBv76.js";import"./RechartsWrapper-DtToZ6Qn.js";import"./axisSelectors-BefgmR9V.js";import"./polarAxisSelectors-Bu65NBmY.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DsBZl9Yj.js";import"./index-D9o51X71.js";import"./index-DqRp8Gio.js";import"./renderedTicksSlice-BFO9fjGk.js";import"./index-DcWjrMSV.js";import"./CartesianChart-BdMrkwen.js";import"./ZIndexPortal-BAJpkEGh.js";import"./CategoricalChart-Cyp6BiKR.js";import"./CartesianAxis-CEqebLVd.js";import"./Layer-Dr_Plb3q.js";import"./Text-Bgk62K3n.js";import"./DOMUtils-DpKBhuMF.js";import"./ZIndexLayer-DE1YK584.js";import"./Label-Bde3ooKp.js";import"./types-NTnKzXXZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-DKDyf66o.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CzWgcXDx.js";import"./useAnimationId-CrRcWCxT.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DimJ4nan.js";import"./tooltipContext-ifh8sNcF.js";import"./dataEntryStyles-Df9giDaD.js";import"./ErrorBarContext-DICVo2af.js";import"./activeStyles-4Qukhfp5.js";import"./SetGraphicalItem-CPzrGo_B.js";import"./getZIndexFromUnknown-tEuScjx0.js";import"./useEffectiveDataKey-DcbjY3Lr.js";import"./fillDefinitions-C6DfZjQD.js";import"./omit-CIkpQC4Z.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};
