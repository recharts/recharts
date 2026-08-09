import{R as t}from"./iframe-CXzAxIFn.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DKHp-gjy.js";import{B as p}from"./BarChart-2f3VKcR0.js";import{X as l}from"./XAxis-CskEzE-5.js";import{Y as h}from"./YAxis-wlQFPYGV.js";import{B as x}from"./Brush-BjXBWhE0.js";import{B as c}from"./Bar-7Nw1RUS0.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BEsGyRMh.js";import"./index-D8seYp4q.js";import"./index-CTRG8-wP.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-JH3hFqB6.js";import"./isWellBehavedNumber-De_HX__8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CktPaUvK.js";import"./index-ZTBFmJUb.js";import"./index-Bt5TuINX.js";import"./axisSelectors-BUJigeZt.js";import"./d3-scale-BDPPBhC0.js";import"./renderedTicksSlice-CEhRwZ6b.js";import"./CartesianChart-8S5--7wV.js";import"./chartDataContext-DY-mZyCM.js";import"./CategoricalChart-CEtFLcT-.js";import"./CartesianAxis-DNVNHP1o.js";import"./Layer-ypGDY04h.js";import"./Text-CpguaXBO.js";import"./DOMUtils-tMvYpyJu.js";import"./Label-BVxyVS7u.js";import"./ZIndexLayer-1UiKp4gF.js";import"./types-BCNeIHLh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CpUwpPC6.js";import"./isBuffer-BG75eWKN.js";import"./tooltipContext-3cpvxxGl.js";import"./AnimatedItems-DRjz3iml.js";import"./useAnimationId-BbyN3hun.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CIymDIR1.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CfdhJDcC.js";import"./RegisterGraphicalItemId-CeJgXyMl.js";import"./ErrorBarContext-xfWRS9uR.js";import"./graphicalItemIdentity-D7fkuVDS.js";import"./SetGraphicalItem-CTeY4uJY.js";import"./getZIndexFromUnknown-Bos0m94y.js";import"./graphicalItemSelectors-CZZ-sSd8.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const pt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,pt as __namedExportsOrder,st as default};
