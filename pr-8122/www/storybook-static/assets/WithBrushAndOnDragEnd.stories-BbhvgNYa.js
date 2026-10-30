import{R as t}from"./iframe-C478ayfe.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-T3ZFb7Aa.js";import{B as p}from"./BarChart-1lFXgZ8H.js";import{X as l}from"./XAxis-CU4ivSNq.js";import{Y as h}from"./YAxis-CL1QJJED.js";import{B as x}from"./Brush-BWGKK4po.js";import{B as c}from"./Bar-DiJNqbpP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BQGOYpJv.js";import"./throttle-B99v42cc.js";import"./index-J8Ragxup.js";import"./index-Dt6G_B5v.js";import"./RechartsWrapper-D6tIgYO1.js";import"./axisSelectors-Biv-SyAO.js";import"./polarAxisSelectors-CAckEIKE.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Cz0p_M0k.js";import"./index-Bgd7L3TE.js";import"./index-CujM32ev.js";import"./renderedTicksSlice-BwSyvBJ_.js";import"./index-NXORGKPb.js";import"./CartesianChart-D2eUya_e.js";import"./ZIndexPortal-CaG6-xRf.js";import"./CategoricalChart-nvv--0et.js";import"./CartesianAxis-D6yrNWVj.js";import"./Layer-BzE3AtiA.js";import"./Text-rWn3Xmx5.js";import"./DOMUtils-DMUojBll.js";import"./ZIndexLayer-B9pzlGWv.js";import"./Label-yNY_-txU.js";import"./types-1IO_LGzE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./LabelList-CXPk-iUW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DvnRkiIM.js";import"./useAnimationId-DsdBvcVE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-em0-Yj9t.js";import"./tooltipContext-EbmqIB_N.js";import"./dataEntryStyles-DLRWmObc.js";import"./ErrorBarContext-Cxtks1NA.js";import"./activeStyles-BTHRjD5i.js";import"./SetGraphicalItem-7DZt9-vL.js";import"./getZIndexFromUnknown-BJzUWkXe.js";import"./useEffectiveDataKey-HlgT5Uu2.js";import"./fillDefinitions-7wVPS1Ff.js";import"./omit-BJPZ4RLA.js";import"./isArguments-yB-y1yaH.js";const xt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ct=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
