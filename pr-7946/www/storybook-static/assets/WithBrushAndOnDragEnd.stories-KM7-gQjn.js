import{R as t}from"./iframe-Cz1yxjbp.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DX3VWAAP.js";import{B as p}from"./BarChart-COUtKUAA.js";import{X as l}from"./XAxis-DTtwNRvk.js";import{Y as h}from"./YAxis-YGbQi-tl.js";import{B as x}from"./Brush-BQEaXlDa.js";import{B as c}from"./Bar-CNZItV1l.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C8kMLDgG.js";import"./index-Dy-7Z4OS.js";import"./index-BeLMDhbN.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C4uWhlBE.js";import"./isWellBehavedNumber-DJ2sQW5i.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DNAVCaGG.js";import"./axisSelectors-aNzSC39T.js";import"./d3-scale-DcjoLk-1.js";import"./index-Cvw52HpG.js";import"./index-CrhYCmzz.js";import"./renderedTicksSlice-B4zhNEhU.js";import"./index-BH1YgSAq.js";import"./CartesianChart-Bs3sClFN.js";import"./chartDataContext-D9TeAJoj.js";import"./CategoricalChart-L3mAew-j.js";import"./CartesianAxis-C6EZvJj2.js";import"./Layer-DX0-A7eX.js";import"./Text-Ct14p3WC.js";import"./pageBackground-Aluj06Yi.js";import"./useId-BgDV8Bbk.js";import"./useBackwardsCompatibleTheme-DMuqWF8p.js";import"./Label-CKYWHIAB.js";import"./ZIndexLayer-CpvAEusS.js";import"./types-CaS-TM-K.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-DBmoV7wT.js";import"./useAnimationId-Bstcgfr3.js";import"./dataEntryStyles-Cvogs2XX.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DcCVFLvW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-TTXriytS.js";import"./tooltipContext-Dfsd04Pr.js";import"./ErrorBarContext-Dxzs7LXM.js";import"./GraphicalItemClipPath-C4RVkUJq.js";import"./SetGraphicalItem-DcIBNzJU.js";import"./getZIndexFromUnknown-D0hbVpGK.js";import"./useGraphicalItemIdentity-D9IvhHId.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
