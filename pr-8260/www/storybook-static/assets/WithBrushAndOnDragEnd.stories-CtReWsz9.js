import{R as t}from"./iframe-BrId7CKe.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DF5zMGO6.js";import{B as p}from"./BarChart-BGTH1qXQ.js";import{X as l}from"./XAxis-CGJzYa5v.js";import{Y as h}from"./YAxis-CGC-AYss.js";import{B as x}from"./Brush-B2j8O8VG.js";import{B as c}from"./Bar-C3ge_sdb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DIgz9kBc.js";import"./throttle-CvD-CMS9.js";import"./index-D7ICnWyX.js";import"./index-EO2EMNzs.js";import"./RechartsWrapper-C0PTLzSu.js";import"./axisSelectors-BWicBn7w.js";import"./polarAxisSelectors-BScTjZiA.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Did4wLnp.js";import"./index-B4UkUUGe.js";import"./index-CKY_1Z5f.js";import"./renderedTicksSlice-DAS2rh9P.js";import"./index-Drj8yiU0.js";import"./fillDefinitions-dpOaLydo.js";import"./CartesianChart-BQoBJqDq.js";import"./chartDataContext-BtKuFOy0.js";import"./CategoricalChart-D7PumRDT.js";import"./CartesianAxis-CGWn72D3.js";import"./Layer-CxlvVVO_.js";import"./Text-CtzCspEf.js";import"./ZIndexLayer-DtobrSuN.js";import"./Label-BOSTGjYW.js";import"./types-BIH_CFXa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-Dl3_KD-K.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BiqZRBIg.js";import"./useAnimationId-DnW4K7Yj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B-iMU9qH.js";import"./tooltipContext-CzexA5ec.js";import"./ErrorBarContext-Di-OPTeN.js";import"./activeStyles-haHqTj48.js";import"./SetGraphicalItem-Bx9N4hIP.js";import"./getZIndexFromUnknown-DuaM8Eae.js";import"./useEffectiveDataKey-BlMggeza.js";import"./omit-3XqNU2p2.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
