import{R as t}from"./iframe-BCDSQyOo.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CihbJEZu.js";import{B as p}from"./BarChart-S9wvRli9.js";import{X as l}from"./XAxis-Bk5D6i9E.js";import{Y as h}from"./YAxis-DnB_2g0Q.js";import{B as x}from"./Brush-Of0T6PbR.js";import{B as c}from"./Bar-BjCB3HvL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-s8FlAHQv.js";import"./throttle-D1lsoNSG.js";import"./index-fM7uFcW2.js";import"./index-I1h0g8eb.js";import"./RechartsWrapper-BqnNMENS.js";import"./axisSelectors-Cvi9anx3.js";import"./polarAxisSelectors-B-E8zUoJ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CYMX0yrb.js";import"./index-ClkyNFpC.js";import"./index-Q4jLEkfo.js";import"./renderedTicksSlice-xgVyqeD0.js";import"./index-oH22xoCa.js";import"./fillDefinitions-LB53xD7z.js";import"./CartesianChart-CkJbsuu1.js";import"./chartDataContext-B0YZn_2w.js";import"./CategoricalChart-CNAFu95B.js";import"./CartesianAxis-DeXvVTxW.js";import"./Layer-sje4p3Rc.js";import"./Text-RrCvwkND.js";import"./ZIndexLayer-PvoR44l1.js";import"./Label-C128IvfG.js";import"./types-Czx6BcyQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-Dui-VolR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CFM8azDG.js";import"./useAnimationId-DOTZ38LK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CHvAKsEu.js";import"./tooltipContext-DaGu1V0P.js";import"./ErrorBarContext-Cfqy-sXq.js";import"./activeStyles-BVEmlDAe.js";import"./SetGraphicalItem-CopBxnc9.js";import"./getZIndexFromUnknown-CtKDpY59.js";import"./useEffectiveDataKey-Chw-9k17.js";import"./omit-cgDoB3Ea.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
