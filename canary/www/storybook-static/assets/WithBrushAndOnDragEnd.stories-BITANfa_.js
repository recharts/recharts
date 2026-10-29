import{R as t}from"./iframe-DlbVoy8b.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DIPR8J8Q.js";import{B as p}from"./BarChart-gxQ9ajZf.js";import{X as l}from"./XAxis-S-cm4cjH.js";import{Y as h}from"./YAxis-BhrY96Pd.js";import{B as x}from"./Brush-NNmLmU7-.js";import{B as c}from"./Bar-D61P4U12.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DXzjMp61.js";import"./throttle-DlhUrerR.js";import"./index-CDdiRPnr.js";import"./index-CPhEmyt7.js";import"./RechartsWrapper-D0Cl8XbA.js";import"./axisSelectors-C1oz2VfT.js";import"./polarAxisSelectors-DH-8MkIE.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-wuSABge9.js";import"./index-CPt_GVUx.js";import"./index-D-eNMO6C.js";import"./renderedTicksSlice-GxAdOI9L.js";import"./index-CIlMrkEO.js";import"./CartesianChart-fxjI_rYy.js";import"./ZIndexPortal-BXiuLmxD.js";import"./CategoricalChart-C4dlmPak.js";import"./CartesianAxis-xtm5bwXL.js";import"./Layer-Cgk1UHKb.js";import"./Text-D-UClZ_j.js";import"./pageBackground-CUuPx32S.js";import"./ZIndexLayer-bE8wUUDO.js";import"./Label-Db_JATF8.js";import"./types-wgD9JhdB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-DZdmLQwZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-6c5uuZ_V.js";import"./useAnimationId-69ly1h0S.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-hcn-O4rR.js";import"./tooltipContext-DqmisGoO.js";import"./dataEntryStyles-CWf0jd4a.js";import"./ErrorBarContext-DTMhIhTa.js";import"./activeStyles-68fYVlFc.js";import"./SetGraphicalItem--R52djyG.js";import"./getZIndexFromUnknown-Mxkab-zw.js";import"./useEffectiveDataKey-Cxmpzb2d.js";import"./omit-D7Zh_glI.js";import"./isArguments-yB-y1yaH.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
