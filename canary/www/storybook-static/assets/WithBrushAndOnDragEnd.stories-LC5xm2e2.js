import{R as t}from"./iframe-B2Q_Qgm0.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-lJSwut70.js";import{B as p}from"./BarChart-DNgKOt_E.js";import{X as l}from"./XAxis-BDkGAuXm.js";import{Y as h}from"./YAxis-BJcew9Oa.js";import{B as x}from"./Brush-C25SgYGq.js";import{B as c}from"./Bar-D0HR7G-A.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bfct0QsM.js";import"./index-D0I5UczE.js";import"./index-CRJ1kynM.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DEmHyBTe.js";import"./isWellBehavedNumber-CTjozt9e.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B1GYxDJl.js";import"./axisSelectors-DGf_3ZFA.js";import"./d3-scale-E67z2Ey2.js";import"./index-t1Y9-LeO.js";import"./index-BmNUC2xp.js";import"./renderedTicksSlice-lf8jbds5.js";import"./index-Zw4_MUHC.js";import"./CartesianChart-CVDOe7y_.js";import"./chartDataContext-B5bxwzwP.js";import"./CategoricalChart-BC5WuIRL.js";import"./CartesianAxis-C0j9EsZJ.js";import"./Layer-BV6rSg6M.js";import"./Text-0iD6BYPe.js";import"./pageBackground-ufzNbkAg.js";import"./useId-BUg3av0m.js";import"./useBackwardsCompatibleTheme-CHG3CyzU.js";import"./Label-BGi8ZrBi.js";import"./ZIndexLayer-BL2VuU0B.js";import"./types-Ck2mmBqf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-C4EynwUE.js";import"./useAnimationId-L9mW9rF6.js";import"./dataEntryStyles-BZP5jTPc.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DZSjMbdp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DztkhC9X.js";import"./tooltipContext-B0sUWVAK.js";import"./ErrorBarContext-v_vPPXxo.js";import"./GraphicalItemClipPath-D_eZ4vKD.js";import"./SetGraphicalItem-C_s7gSpu.js";import"./getZIndexFromUnknown-GC8jswXs.js";import"./useEffectiveDataKey-FHRr8rA1.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
