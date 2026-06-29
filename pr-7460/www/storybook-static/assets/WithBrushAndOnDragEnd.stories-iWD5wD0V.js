import{R as t}from"./iframe-CA6cNkus.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-O14BPpZi.js";import{B as p}from"./BarChart-A81PP5Jw.js";import{X as l}from"./XAxis-C-xfE_6F.js";import{Y as h}from"./YAxis-CFfqmSxu.js";import{B as x}from"./Brush-C8u5vksE.js";import{B as c}from"./Bar-BxGRO0Xo.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Dmy9GJDo.js";import"./index-CfaPbByM.js";import"./index-DbciZ0iE.js";import"./get-CFJz0ojL.js";import"./resolveDefaultProps-C9L5vbOj.js";import"./isWellBehavedNumber-BkzajOOq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BrfCX34J.js";import"./index-DQmIhdua.js";import"./index-PI3smBoN.js";import"./renderedTicksSlice-DwJ0KlHq.js";import"./axisSelectors-BqSveJ2d.js";import"./d3-scale-C6_zgknL.js";import"./CartesianChart-B9pQBHyJ.js";import"./chartDataContext-D73bINqU.js";import"./CategoricalChart-D2WxsK_0.js";import"./CartesianAxis-Bnc9pIGx.js";import"./Layer-D-oRDXko.js";import"./Text-NUcA7Wwc.js";import"./DOMUtils-BVqsAse9.js";import"./Label-B1-Zgg5t.js";import"./ZIndexLayer-L_zBn_oX.js";import"./types-BSXU9Oqu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-B8e44Ric.js";import"./AnimatedItems-B54-TdNS.js";import"./useAnimationId-b25y8QfL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-7u_GUvK2.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DCmnuM_G.js";import"./RegisterGraphicalItemId-pJmMrti4.js";import"./ErrorBarContext-arfdjlYp.js";import"./GraphicalItemClipPath-B1gJnBar.js";import"./SetGraphicalItem-BUx_zIn8.js";import"./getZIndexFromUnknown-c778BFGd.js";import"./graphicalItemSelectors-BC60pa2o.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
