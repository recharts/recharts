import{R as t}from"./iframe-B5suke5B.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-D0kihEsS.js";import{B as p}from"./BarChart-C3zUXOcK.js";import{X as l}from"./XAxis-CtU2ba0a.js";import{Y as h}from"./YAxis-6eL7FIQY.js";import{B as x}from"./Brush-Dad3fKey.js";import{B as c}from"./Bar-BXplb2Fd.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-yXst2GNy.js";import"./index-D-nx8SRU.js";import"./index-0E1UP6ea.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CLTE-4Yl.js";import"./isWellBehavedNumber-BdM77gE7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-xDK7h46M.js";import"./axisSelectors-Bxd1L_G4.js";import"./d3-scale-lqW361z6.js";import"./index-AUvHwQMM.js";import"./index-QzaRG_bO.js";import"./renderedTicksSlice-DN6DkPzy.js";import"./index-BJ8eFwlr.js";import"./CartesianChart-an0uCQ19.js";import"./chartDataContext-7ysfjD_K.js";import"./CategoricalChart-am3Id38i.js";import"./CartesianAxis-DDYqByWb.js";import"./Layer-TMg83YAh.js";import"./Text-rc7ZZmS8.js";import"./DOMUtils-W5ZSww-v.js";import"./useId-BWjKNL9O.js";import"./useBackwardsCompatibleTheme-D8o_0ZGr.js";import"./Label-BAgGrzQX.js";import"./ZIndexLayer-BCqg4Zz6.js";import"./types-AnLHRdTF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-vhEGvzj0.js";import"./useAnimationId-rfQUB_TF.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BS91G8m4.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CHch558p.js";import"./tooltipContext-B3JMcLrm.js";import"./RegisterGraphicalItemId-BgozNBK6.js";import"./ErrorBarContext-DlJnMayP.js";import"./GraphicalItemClipPath-DRG66VTj.js";import"./SetGraphicalItem-CVhYGG_S.js";import"./getZIndexFromUnknown-C1v2ynrK.js";import"./useGraphicalItemIdentity-Caq5Yc5Z.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
