import{R as t}from"./iframe-6EoNA_L8.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-De49t7iX.js";import{B as p}from"./BarChart-Cj3kuqV_.js";import{X as l}from"./XAxis-D5W76h4C.js";import{Y as h}from"./YAxis-BC8F1g7K.js";import{B as x}from"./Brush-PETssYBj.js";import{B as c}from"./Bar-DUdvJfUb.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-qfBh-gJU.js";import"./index-DOuZqOP2.js";import"./index-drI4VfER.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BeiJcrCE.js";import"./isWellBehavedNumber-B08jv1io.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DIgVm8D4.js";import"./axisSelectors-CPDr9W-8.js";import"./d3-scale-BHNzH7iq.js";import"./index-CW_YvHl3.js";import"./index-BUgLS7M1.js";import"./renderedTicksSlice-CIIKzgpq.js";import"./index-BvtgduTj.js";import"./CartesianChart-Cysh7fYc.js";import"./chartDataContext-B2QOvGi0.js";import"./CategoricalChart-BUH5Yjzv.js";import"./CartesianAxis-BCnvc9Ye.js";import"./Layer-CUxzD1DR.js";import"./Text-DZDh1E85.js";import"./DOMUtils-DNveQWYn.js";import"./useId-BXan0_nA.js";import"./useBackwardsCompatibleTheme-BhrjNye9.js";import"./Label-BMFW6Zd2.js";import"./ZIndexLayer-BqdDjbl9.js";import"./types-M0OtQk6p.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DI4_Ab0i.js";import"./useAnimationId-peOMMxO5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BR58mqpl.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C7faasOA.js";import"./tooltipContext-CCFV9lmN.js";import"./RegisterGraphicalItemId-DCPWXijy.js";import"./ErrorBarContext-Dh7d5kUD.js";import"./GraphicalItemClipPath-0snefndl.js";import"./SetGraphicalItem-D09cPUlM.js";import"./getZIndexFromUnknown-DW1zPNLP.js";import"./useGraphicalItemIdentity-T4kDeRpG.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
