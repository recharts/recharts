import{R as t}from"./iframe-C2y7-rH2.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BQPOy7As.js";import{B as p}from"./BarChart-BVbdizDc.js";import{X as l}from"./XAxis-BRv-fAhZ.js";import{Y as h}from"./YAxis-B28w59_W.js";import{B as x}from"./Brush-BUHGYF9B.js";import{B as c}from"./Bar-BiBRnfSw.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BDe4zlG9.js";import"./index-Bz54eCtj.js";import"./index-ChrJmNNe.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-vPK17mKC.js";import"./isWellBehavedNumber-6_l4g7Xi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BcfYPaoe.js";import"./axisSelectors-Bw0Qwigf.js";import"./d3-scale-D07iQYqn.js";import"./index-DyeRA5Td.js";import"./index-OvZqyYfZ.js";import"./renderedTicksSlice-DVIPHfrA.js";import"./index-DN97KnNV.js";import"./CartesianChart-B1na8-qP.js";import"./chartDataContext-ClTM7zwW.js";import"./CategoricalChart-BgXqKpLI.js";import"./CartesianAxis-DwUPIt0X.js";import"./Layer-Y5hBKOyR.js";import"./Text-Dg2YZl1D.js";import"./DOMUtils-CYVmP7ld.js";import"./useId-rIBzQY0F.js";import"./useBackwardsCompatibleTheme-xd8BeFgY.js";import"./Label-CSUQJf-z.js";import"./ZIndexLayer-Cqkx5XlC.js";import"./types-DDulV5vn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CrKX7S12.js";import"./useAnimationId-BlRPNYZD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-X3oIIIHx.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CXM-saMn.js";import"./tooltipContext-_6Vhu7JT.js";import"./RegisterGraphicalItemId-CD4HP7HF.js";import"./ErrorBarContext-J0sVh-nS.js";import"./GraphicalItemClipPath-SSZXiCnp.js";import"./SetGraphicalItem-B36qE1ly.js";import"./getZIndexFromUnknown-BCkLZ-eQ.js";import"./useGraphicalItemIdentity-B5eIfUAt.js";import"./dataEntryStyles-D42baz0i.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
