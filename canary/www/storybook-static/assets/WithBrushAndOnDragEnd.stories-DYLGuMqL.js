import{R as t}from"./iframe-D_SaqINW.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Nr9A9_cH.js";import{B as p}from"./BarChart-CuP1iWWp.js";import{X as l}from"./XAxis-6wdck5XJ.js";import{Y as h}from"./YAxis-DBPcER2k.js";import{B as x}from"./Brush-CBr9xcFf.js";import{B as c}from"./Bar-CHQnagj8.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-4i53sgvd.js";import"./index-BiWBdnkZ.js";import"./index-TyDw8B7P.js";import"./get-DRtBRZ7g.js";import"./resolveDefaultProps-DUbefueE.js";import"./isWellBehavedNumber-BFJTu4EN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BOxkh1KP.js";import"./index-SZXFPM2d.js";import"./index-C5cOlUnK.js";import"./renderedTicksSlice-nvcrqMwf.js";import"./axisSelectors-KbW_RdYB.js";import"./d3-scale-CQIw_skn.js";import"./CartesianChart-CZi0Hd-v.js";import"./chartDataContext-FaAlL944.js";import"./CategoricalChart-DmnISPC2.js";import"./CartesianAxis-DWHYepa6.js";import"./Layer-CLMd0CrH.js";import"./Text-CDbXravB.js";import"./DOMUtils-olWBsR_G.js";import"./Label-D8rwziA9.js";import"./ZIndexLayer-CNKQ_WkY.js";import"./types-L0YqXeC-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-BQt3eLti.js";import"./AnimatedItems-DrX1vaEn.js";import"./useAnimationId-DJVHCfAF.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CaUfvzDJ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-8phtwrmk.js";import"./RegisterGraphicalItemId-CDtWnv6Z.js";import"./ErrorBarContext-Cv8g9Tm4.js";import"./GraphicalItemClipPath-ClsDcJaX.js";import"./SetGraphicalItem-HY1vpJNM.js";import"./getZIndexFromUnknown-BV3SonT0.js";import"./graphicalItemSelectors-D2YdDHOs.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const mt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,mt as __namedExportsOrder,dt as default};
