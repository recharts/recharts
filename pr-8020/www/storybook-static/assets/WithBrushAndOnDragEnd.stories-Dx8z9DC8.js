import{R as t}from"./iframe-BYNQK8LM.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CnKvPC-T.js";import{B as p}from"./BarChart-DOwNubeA.js";import{X as l}from"./XAxis-CBcIWiwv.js";import{Y as h}from"./YAxis-CHFcgGbi.js";import{B as x}from"./Brush-DjkINs2J.js";import{B as c}from"./Bar-BcpcZOGd.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DlEVZZqo.js";import"./index-PSgPxbx_.js";import"./index-C0msNLyf.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-e-zsAsB1.js";import"./isWellBehavedNumber-BZZV9Me7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Di3THVkM.js";import"./axisSelectors-f_hhqOEQ.js";import"./d3-scale-D4yBTTO3.js";import"./index-Cg_72k7E.js";import"./index-CsXf8i4B.js";import"./renderedTicksSlice-D3c5wsjJ.js";import"./index-C5WITlKt.js";import"./CartesianChart-C_kwKDBD.js";import"./chartDataContext-clQVsdi0.js";import"./CategoricalChart-CJdqn6cX.js";import"./CartesianAxis-DHgd3hOW.js";import"./Layer-CWziNCLd.js";import"./Text-uEN8Pqjn.js";import"./pageBackground-ezRX3My0.js";import"./useId-Dpi4gaCB.js";import"./useBackwardsCompatibleTheme-Dydi4_BE.js";import"./Label--8HpHVT6.js";import"./ZIndexLayer-DnQxIb9c.js";import"./types-8Tp7AoeZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-CDuvBT6X.js";import"./useAnimationId-BA2hTS6j.js";import"./dataEntryStyles-BhOKhuEL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CtScsc5f.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CozVnlhs.js";import"./tooltipContext-DdQ6U365.js";import"./ErrorBarContext-ymRWszCz.js";import"./GraphicalItemClipPath-BzYQ5qPw.js";import"./SetGraphicalItem-C56xRO9a.js";import"./getZIndexFromUnknown-BD35HtNd.js";import"./useEffectiveDataKey-Cq2dQ4RC.js";import"./omit-x0RYk8Kc.js";import"./isArguments-yB-y1yaH.js";const xt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ct=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ct as __namedExportsOrder,xt as default};
