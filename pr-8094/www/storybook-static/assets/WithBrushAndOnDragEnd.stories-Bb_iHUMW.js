import{R as t}from"./iframe-DsuaRm2b.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BHCK5tg8.js";import{B as p}from"./BarChart-BVt2CQDR.js";import{X as l}from"./XAxis-DLqBMq0Q.js";import{Y as h}from"./YAxis-dn2GRGzH.js";import{B as x}from"./Brush-B0pDhptD.js";import{B as c}from"./Bar-rZla8cdr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-tBmiBd0v.js";import"./throttle-CuCThFR3.js";import"./index-BjBwgNd2.js";import"./index-DLanYFve.js";import"./RechartsWrapper-B7rLRibb.js";import"./axisSelectors-CXh7ZK0v.js";import"./polarAxisSelectors-ZY9QidmG.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D1FvEoQ3.js";import"./index-BqhjsQ14.js";import"./index-vSo2F5h4.js";import"./renderedTicksSlice-W2QLd4az.js";import"./index-C0CHU-c7.js";import"./CartesianChart-CFB_Qy3A.js";import"./ZIndexPortal-DYBSHocn.js";import"./CategoricalChart-Do18W6-M.js";import"./CartesianAxis-BCG5Rps_.js";import"./Layer-Bvg1MEF5.js";import"./Text-7KEzSR95.js";import"./pageBackground-gwgMpjOQ.js";import"./ZIndexLayer-FbasJJ13.js";import"./Label-Bg_SjTDz.js";import"./dataEntryStyles-CVVg9ITz.js";import"./types-BVjfEegt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-B1g8Cfod.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dz3Crc0K.js";import"./useAnimationId-BDMFeBiK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-z3i_FVcp.js";import"./tooltipContext-DDBQkYgW.js";import"./RegisterGraphicalItemId-ovNP-fPN.js";import"./ErrorBarContext-BJw3_1Vq.js";import"./activeStyles-BEbyAFUN.js";import"./SetGraphicalItem-DN4Prq4p.js";import"./getZIndexFromUnknown-CpRDmSsj.js";import"./useEffectiveDataKey-DBOtZYxA.js";import"./omit-CmNACTB-.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
