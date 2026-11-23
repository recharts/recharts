import{R as t}from"./iframe-CBRSMBnf.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-G_MKhK64.js";import{B as p}from"./BarChart-BwQbfb44.js";import{X as l}from"./XAxis-hFmUjMoe.js";import{Y as h}from"./YAxis-DSUkkbnx.js";import{B as x}from"./Brush-iChl77V4.js";import{B as c}from"./Bar-ChhL6TYD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-rMq54uQA.js";import"./throttle-9ZU0NYV2.js";import"./index-BFSKO-j2.js";import"./index-Dr6qgTGt.js";import"./RechartsWrapper-CtIo7IeI.js";import"./axisSelectors-Ca58SJJZ.js";import"./polarAxisSelectors-CmG6JvL9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-YF59ukCY.js";import"./index-1te-Kc2Q.js";import"./index-DGSnNf5w.js";import"./renderedTicksSlice-Dn7AqsKy.js";import"./index-AkU5pxMr.js";import"./fillDefinitions-1nZ0ZPs-.js";import"./CartesianChart-PQ4f033u.js";import"./chartDataContext-sCDQ5wEf.js";import"./CategoricalChart-BElxArO-.js";import"./CartesianAxis-BvwIwDWJ.js";import"./Layer-aUkXnOjv.js";import"./Text-DWGdTCGH.js";import"./ZIndexLayer-BCt1x8VL.js";import"./Label-BfZk-Sdf.js";import"./types-BEawq_c0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-CAxQKe3A.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-J9wv2qAO.js";import"./useAnimationId-cL_ennFP.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DgOfPYb9.js";import"./tooltipContext-knuJxyd9.js";import"./ErrorBarContext-D6qhDPP-.js";import"./activeStyles-DpG6wBQs.js";import"./SetGraphicalItem-C5CBQIUL.js";import"./getZIndexFromUnknown-mqsPc7De.js";import"./useEffectiveDataKey-CyhT1JOs.js";import"./omit-V1T1hArI.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
