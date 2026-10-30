import{R as t}from"./iframe-B89lyy_-.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BefUx2Nd.js";import{B as p}from"./BarChart-DJ38Ikqn.js";import{X as l}from"./XAxis-CSc3N7hL.js";import{Y as h}from"./YAxis-CnBxKCbE.js";import{B as x}from"./Brush-Gr2DQJRA.js";import{B as c}from"./Bar-DaOrSdsz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CABzBelW.js";import"./throttle-BZuMAyb2.js";import"./index-KRoZzcbe.js";import"./index-BB4NcWJN.js";import"./RechartsWrapper-VgXxR9hf.js";import"./axisSelectors-DR4qXUjK.js";import"./polarAxisSelectors-CVXgDqrg.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BgC9WZfP.js";import"./index-DE_m11QS.js";import"./index-B0mW9FVH.js";import"./renderedTicksSlice-B3wgyDqC.js";import"./index-jctBjl-B.js";import"./CartesianChart-CsOis6XS.js";import"./ZIndexPortal-BM6dYFis.js";import"./CategoricalChart-C1dGPY9G.js";import"./CartesianAxis-DOEm-eMS.js";import"./Layer-CVGlZAI2.js";import"./Text-Dp5nXiQm.js";import"./DOMUtils-QfcpEM-9.js";import"./ZIndexLayer-6gVYvq6w.js";import"./Label-C15axuMc.js";import"./types-DRZvsZyz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./LabelList-6ZaFDz_R.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CXq2cdeR.js";import"./useAnimationId-CrfHw1CS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CFUdvdUp.js";import"./tooltipContext-Dxp7rSLd.js";import"./dataEntryStyles-C4pyloN-.js";import"./ErrorBarContext-CHzFixYj.js";import"./activeStyles-CQvoijJ0.js";import"./SetGraphicalItem-m8DhvWZo.js";import"./getZIndexFromUnknown-BsKTAFT9.js";import"./useEffectiveDataKey-oyhM30Oz.js";import"./fillDefinitions-B-2MwM8M.js";import"./omit-BrVOqOU-.js";import"./isArguments-yB-y1yaH.js";const xt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ct=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
