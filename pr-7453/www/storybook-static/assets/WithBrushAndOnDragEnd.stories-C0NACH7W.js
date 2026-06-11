import{R as t}from"./iframe-BCtefvpd.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DLtTjfC4.js";import{B as p}from"./BarChart-HM8JKkjl.js";import{X as l}from"./XAxis-DRnpS9Qy.js";import{Y as h}from"./YAxis-CXAPbw5z.js";import{B as x}from"./Brush-CweaFmrd.js";import{B as c}from"./Bar-D4Vx9-GH.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DIhiteEo.js";import"./index-DA3zv02Q.js";import"./index-BqWWOLm7.js";import"./get-DFMRZS9d.js";import"./resolveDefaultProps-CVGnLM0G.js";import"./isWellBehavedNumber-OR7M83Gu.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cp9N8_Bk.js";import"./index-BcefENIv.js";import"./index-C3JFnZZi.js";import"./renderedTicksSlice-kBir8HDa.js";import"./axisSelectors-DOKBLmJM.js";import"./d3-scale-CVyajGd1.js";import"./string-B6fdYHAA.js";import"./CartesianChart-COa7p1e9.js";import"./chartDataContext-qlylvQc9.js";import"./CategoricalChart-B2VvTH4v.js";import"./CartesianAxis-CgS78KcM.js";import"./Layer-sJOcNnwh.js";import"./Text-BeTx0pmM.js";import"./DOMUtils-BhG_b4P2.js";import"./Label-CC74cj4o.js";import"./ZIndexLayer-DEcD4grM.js";import"./types-Cdi5Da9N.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-D86cnIru.js";import"./AnimatedItems-C8IovmVa.js";import"./useAnimationId-Bcchcs5m.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-LhiWNSwp.js";import"./ActiveShapeUtils-4S977V9W.js";import"./RegisterGraphicalItemId-6mFWr6Iy.js";import"./ErrorBarContext-Cvn2xdUy.js";import"./GraphicalItemClipPath-B0sf68Y7.js";import"./SetGraphicalItem-DFYwZ-xH.js";import"./getZIndexFromUnknown-DzLokJsa.js";import"./graphicalItemSelectors-CDWfuhcE.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
