import{R as t}from"./iframe-B0yo2V4n.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-B7uClMUs.js";import{B as p}from"./BarChart-DA-otKS1.js";import{X as l}from"./XAxis-DsnV8ZqK.js";import{Y as h}from"./YAxis-DL4kDslF.js";import{B as x}from"./Brush-BAsPcHYz.js";import{B as c}from"./Bar-D4kwm2yp.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CrsZu1Ef.js";import"./index-CksSbcNy.js";import"./index-CCtvozBT.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C_-4-Tqn.js";import"./isWellBehavedNumber-CZXpTiYT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CQikX2jp.js";import"./axisSelectors-CMjYVwhk.js";import"./d3-scale-B4crR7Dq.js";import"./index-T1a_0V0g.js";import"./index-DKVx0AFW.js";import"./renderedTicksSlice-Boaz1NGF.js";import"./index-2BBeHhTL.js";import"./CartesianChart-DjmfdwhX.js";import"./chartDataContext-B2JeciGL.js";import"./CategoricalChart-BCaNllRk.js";import"./CartesianAxis-DRTEDz7X.js";import"./Layer-BkWM3RIH.js";import"./Text-CHF9ypYR.js";import"./pageBackground-0wikHvI2.js";import"./useId-BnV_tbx_.js";import"./useBackwardsCompatibleTheme-DI9J0y19.js";import"./Label-CnUHNStt.js";import"./ZIndexLayer-DLG58JCm.js";import"./types-L-bd4Nc-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-_C6RQVwk.js";import"./useAnimationId-DO-aK-tu.js";import"./dataEntryStyles-CjubJGLE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-xNB1EmnK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C0F7emTJ.js";import"./tooltipContext-CBxtMnXL.js";import"./ErrorBarContext-DwnKv10Z.js";import"./GraphicalItemClipPath-CMzZysYx.js";import"./SetGraphicalItem-Z-H48Tbu.js";import"./getZIndexFromUnknown-BNXeUExr.js";import"./useEffectiveDataKey-Bupc-s0s.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
