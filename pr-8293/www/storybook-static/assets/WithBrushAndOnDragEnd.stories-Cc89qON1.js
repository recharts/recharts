import{R as t}from"./iframe-BzxAUdBV.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CpYrgVZX.js";import{B as p}from"./BarChart-D9UwdeVD.js";import{X as l}from"./XAxis-CtYxvtbo.js";import{Y as h}from"./YAxis-DCmm8K7b.js";import{B as x}from"./Brush-Ct1ScJeA.js";import{B as c}from"./Bar-D8YpP4v0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DheJQ_-R.js";import"./throttle-C2l7QP8r.js";import"./index-DxuOyH9Y.js";import"./index-5gwlPTJD.js";import"./RechartsWrapper-BCictS_F.js";import"./axisSelectors-D1428BGH.js";import"./polarAxisSelectors-CqQp2e17.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BnAxRH73.js";import"./index-DwsBZD05.js";import"./index-D3M5mM9_.js";import"./renderedTicksSlice-DYvam8ud.js";import"./index-CIBNfLVZ.js";import"./fillDefinitions-fx1J2dmJ.js";import"./CartesianChart-Cryci4Uo.js";import"./chartDataContext-CextJDGM.js";import"./CategoricalChart-DzNtI-Go.js";import"./CartesianAxis-C9p6cgyy.js";import"./Layer-Df_NEF0m.js";import"./Text-DPkQNMpB.js";import"./ZIndexLayer-BUHaqwT6.js";import"./Label-9brnKF6Z.js";import"./types-djSleOln.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-C-ZfbqEc.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-s-gxJKKB.js";import"./useAnimationId-CdQeQcKS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BTD3-pm6.js";import"./tooltipContext-Bxtbw3Co.js";import"./ErrorBarContext-iCVMvaG7.js";import"./activeStyles-DjlDJ1Rs.js";import"./SetGraphicalItem-in8OQb6t.js";import"./getZIndexFromUnknown-D-mAhRYA.js";import"./useEffectiveDataKey-BLws13Ws.js";import"./omit-BdgkeM2z.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
