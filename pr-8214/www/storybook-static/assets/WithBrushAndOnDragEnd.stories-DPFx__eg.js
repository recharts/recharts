import{R as t}from"./iframe-DhvgJ3Tw.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DT7jNbQo.js";import{B as p}from"./BarChart-CvI4LuYm.js";import{X as l}from"./XAxis-DydSoLLm.js";import{Y as h}from"./YAxis-BAhPmXz7.js";import{B as x}from"./Brush-OuVBcuRz.js";import{B as c}from"./Bar-VV6I011L.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CKLGeLep.js";import"./throttle-BWeAvDIL.js";import"./index-CU5o85y3.js";import"./index-CQNEDz1o.js";import"./RechartsWrapper-683IwuKd.js";import"./axisSelectors-aIh5be-p.js";import"./polarAxisSelectors-AqVQ4mq9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DUY8Yxll.js";import"./index-BtmI4qTy.js";import"./index-D2OmVz2d.js";import"./renderedTicksSlice-Bh9hRh5k.js";import"./index-D8T5pADG.js";import"./fillDefinitions-Ckysr9fo.js";import"./CartesianChart-BOsacCQH.js";import"./chartDataContext-OAAhd7eo.js";import"./CategoricalChart-C0ZN3rz5.js";import"./CartesianAxis-CudRQX5X.js";import"./Layer-B7fk7F56.js";import"./Text-oQHtFAiE.js";import"./ZIndexLayer-jkdgENMR.js";import"./Label-lswEF7zo.js";import"./types-L33J7ZDL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-CJFnAm-4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-I38bp9Fj.js";import"./useAnimationId-DBeWeQl6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-pVPcv2XP.js";import"./tooltipContext-B9Aw5mks.js";import"./ErrorBarContext-rAqCLm-Y.js";import"./activeStyles-Dbg52UlV.js";import"./SetGraphicalItem-FYK4izOM.js";import"./getZIndexFromUnknown-DCj51Q3j.js";import"./useEffectiveDataKey-NorWb4gC.js";import"./omit-DTYvo1mc.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
