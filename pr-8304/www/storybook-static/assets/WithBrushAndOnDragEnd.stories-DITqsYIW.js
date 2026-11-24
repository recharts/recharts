import{R as t}from"./iframe-Cg_iar9N.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BjUOfyjh.js";import{B as p}from"./BarChart-D-twKjoP.js";import{X as l}from"./XAxis-CGc4hdT9.js";import{Y as h}from"./YAxis-D6x7oYcH.js";import{B as x}from"./Brush-CExOkr_D.js";import{B as c}from"./Bar-DFJwXaP_.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DTSDaMdx.js";import"./get-CjriyByo.js";import"./throttle-BblIHJT1.js";import"./index-7C4ywAbx.js";import"./index-CwdEjpHW.js";import"./RechartsWrapper-C7ImdcI0.js";import"./axisSelectors-CZOBtonL.js";import"./polarAxisSelectors-B1d4qlCW.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DPBNOBhz.js";import"./index-VP3OIQj6.js";import"./index-jWuQwiwF.js";import"./renderedTicksSlice-CLd9gyLd.js";import"./index-V_wxvl63.js";import"./fillDefinitions-DSB60PQ6.js";import"./CartesianChart-B4msnQ_2.js";import"./chartDataContext-BigsU9AL.js";import"./CategoricalChart-CPdnXejQ.js";import"./CartesianAxis-DOu6asA8.js";import"./Layer-Bzrsb6mZ.js";import"./Text-B2P7H0Ri.js";import"./ZIndexLayer-CSE-z-0P.js";import"./Label-BJnLd782.js";import"./types-ltSKN6AB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-CxwfrkTv.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C_eYXhuf.js";import"./useAnimationId-9EHB1qr6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CsQyYPRe.js";import"./tooltipContext-DvVRje4i.js";import"./ErrorBarContext-CGI8-gVI.js";import"./activeStyles-BGKrSIuv.js";import"./SetGraphicalItem-B4YPaENS.js";import"./getZIndexFromUnknown-Cei6wpWn.js";import"./useEffectiveDataKey-Cs5zYK5x.js";import"./omit-CBv3Naky.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};
