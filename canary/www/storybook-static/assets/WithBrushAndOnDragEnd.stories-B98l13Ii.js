import{R as t}from"./iframe-C55y8OzM.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-mi5wuovt.js";import{B as p}from"./BarChart-D0cbZKjr.js";import{X as l}from"./XAxis-BhP0mslG.js";import{Y as h}from"./YAxis-DGa7nV3z.js";import{B as x}from"./Brush-DNjkpw0f.js";import{B as c}from"./Bar-DkhpMUyg.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-zPKptILV.js";import"./index-B1erB4OF.js";import"./index-Bbw2aGRN.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cgrl3e7D.js";import"./isWellBehavedNumber-mxdqJrTq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DsEVXtD9.js";import"./axisSelectors-DyDkozWt.js";import"./d3-scale-CwLPJ1sG.js";import"./index-kqQD3Gpu.js";import"./index-DnfvrK_t.js";import"./renderedTicksSlice-BczpgcuJ.js";import"./index-Dykf-EVS.js";import"./CartesianChart-HAuDRHmx.js";import"./chartDataContext-DnaKmrEK.js";import"./CategoricalChart-BdM0esTK.js";import"./CartesianAxis-UMkVq4pL.js";import"./Layer-D0VzgPFA.js";import"./Text-BSBFwZ1P.js";import"./pageBackground-D6U7S1qf.js";import"./useId-XdK2U0Ar.js";import"./useBackwardsCompatibleTheme-B8dADBlT.js";import"./Label-BceBwSRN.js";import"./ZIndexLayer-BdI7uft_.js";import"./types-BjarwEzr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-DVnALFej.js";import"./useAnimationId-4Vo2vEHF.js";import"./dataEntryStyles-Cic1JpuQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-kX1A_stc.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-7zk5n9mh.js";import"./tooltipContext-CA6M0awf.js";import"./ErrorBarContext-DIbssQ08.js";import"./GraphicalItemClipPath-BHQAz3ae.js";import"./SetGraphicalItem-PlWMyb2e.js";import"./getZIndexFromUnknown-Cj3V-2_L.js";import"./useEffectiveDataKey-BY6K7cit.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
