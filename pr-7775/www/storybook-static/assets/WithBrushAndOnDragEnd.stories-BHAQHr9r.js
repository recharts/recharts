import{R as t}from"./iframe-Gdd3jtsk.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CSZDPlYV.js";import{B as p}from"./BarChart-GDfmULTb.js";import{X as l}from"./XAxis-CfRxe5fa.js";import{Y as h}from"./YAxis-Di2w_laQ.js";import{B as x}from"./Brush-BW0to0zZ.js";import{B as c}from"./Bar-BeBClCqv.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BmbkxDbb.js";import"./index-OXuJkc0G.js";import"./index-BYdAkKa9.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BAx7A2d0.js";import"./isWellBehavedNumber-dcNjbQjU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DHzy1vja.js";import"./axisSelectors-gB1Qysm6.js";import"./d3-scale-CuO1bYlf.js";import"./index-BA4wfNHy.js";import"./index-DLhl39MV.js";import"./renderedTicksSlice-Bnpylx8R.js";import"./index-D3-ryID0.js";import"./CartesianChart-Ddy5lGq_.js";import"./chartDataContext-Cj_vDVUA.js";import"./CategoricalChart-Wstkm_N3.js";import"./CartesianAxis-ZunbmCHs.js";import"./Layer-D1lMlbyy.js";import"./Text-vzNtnCvi.js";import"./DOMUtils-DsTGrs8B.js";import"./useId-DBiLJeK_.js";import"./useBackwardsCompatibleTheme-vrrckkYj.js";import"./Label-DL60lMB9.js";import"./ZIndexLayer-BONCUyCr.js";import"./types-TRPks9BY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BmvPvy1l.js";import"./useAnimationId-DI-q8E5L.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-4hOwKYjA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cb2VhDvv.js";import"./tooltipContext-BmzT63fq.js";import"./RegisterGraphicalItemId-BmqdRBnz.js";import"./ErrorBarContext-uChJYirb.js";import"./GraphicalItemClipPath-CxxXrJBj.js";import"./SetGraphicalItem-C6Ve9h1l.js";import"./getZIndexFromUnknown-Co3R5rHO.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CVTQbG3C.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
