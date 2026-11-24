import{R as t}from"./iframe-DFEJf-6F.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Bh4qmv0V.js";import{B as p}from"./BarChart-XK-TDswl.js";import{X as l}from"./XAxis-DQsdb669.js";import{Y as h}from"./YAxis-Cx2H2wIk.js";import{B as x}from"./Brush-Cvt4N_FC.js";import{B as c}from"./Bar-CehlGihj.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-e-IgV90n.js";import"./get-CjriyByo.js";import"./throttle-t_Ovqcxg.js";import"./index-UCW2HZhy.js";import"./index-BocwXP9h.js";import"./RechartsWrapper-CjcGVgxW.js";import"./axisSelectors-mOjibS9Y.js";import"./polarAxisSelectors-Bm_q4tEf.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-tiUNr7pP.js";import"./index-CuX-9nTc.js";import"./index-BaTm8cby.js";import"./renderedTicksSlice-CyR8q6N_.js";import"./index-B-weJfXM.js";import"./fillDefinitions-CQ2sIcKf.js";import"./CartesianChart-Dsv7MZH7.js";import"./chartDataContext-DG3vMJ0c.js";import"./CategoricalChart-BE4FjrpO.js";import"./CartesianAxis-DcDhI6Zy.js";import"./Layer-BocGZ-Qs.js";import"./Text-kTUl7smJ.js";import"./ZIndexLayer-DicbFK_2.js";import"./Label-DJktLpOl.js";import"./types-BDYL0NFs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-3agXA2tK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DkydH7xZ.js";import"./useAnimationId-CO4-0stH.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-YveQ6HiU.js";import"./tooltipContext-BiBs8VgD.js";import"./ErrorBarContext-BaUlHsru.js";import"./activeStyles-DE7rNFoN.js";import"./SetGraphicalItem-BSkWbVqw.js";import"./getZIndexFromUnknown-CcmNpfj2.js";import"./useEffectiveDataKey-Don9Yvym.js";import"./omit-Djllq5nh.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
