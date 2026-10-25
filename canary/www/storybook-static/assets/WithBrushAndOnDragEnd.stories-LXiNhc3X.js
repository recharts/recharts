import{R as t}from"./iframe-BpBItmb8.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Cjb21_4Z.js";import{B as p}from"./BarChart-DbUZ2KCa.js";import{X as l}from"./XAxis-tyIX1Ek0.js";import{Y as h}from"./YAxis-ggvkQSih.js";import{B as x}from"./Brush-C_fW9nkm.js";import{B as c}from"./Bar-BZxiHsTg.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cdo2rlHX.js";import"./index-CeEoeaxD.js";import"./index-BHZp9bX2.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BIOpi0B9.js";import"./isWellBehavedNumber-Q3FqKNV7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BaBorYia.js";import"./axisSelectors-DhTQuZeq.js";import"./d3-scale-B2krDzkw.js";import"./index-B9ogi8SM.js";import"./index-Do7_Vkj1.js";import"./renderedTicksSlice-BqaS8KpG.js";import"./index-C1AeM7Yu.js";import"./CartesianChart-DDWDYlWD.js";import"./chartDataContext-CgZ-KInW.js";import"./CategoricalChart-9xHNb1kz.js";import"./CartesianAxis-BCv_yRQ4.js";import"./Layer-DJh0sOtA.js";import"./Text-BsqzutiJ.js";import"./pageBackground-Dn3J6qJY.js";import"./useId-DaRO87cF.js";import"./useBackwardsCompatibleTheme-CZ-OPOyh.js";import"./Label-D427CKrx.js";import"./ZIndexLayer-8Y_K5uPK.js";import"./dataEntryStyles-CqfS8fAi.js";import"./types-Dpz8_0OY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-BpJuNb5z.js";import"./useAnimationId-B0lGZ7N8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cc2PuLg6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BOsiS21F.js";import"./tooltipContext-jbEOTzDc.js";import"./RegisterGraphicalItemId-CrKPJKPG.js";import"./ErrorBarContext-Dxg5DLJl.js";import"./SetGraphicalItem-CJwlJ3sC.js";import"./getZIndexFromUnknown-Bm4eECHR.js";import"./useEffectiveDataKey-UghoeVMt.js";import"./omit-z34g81uG.js";import"./isArguments-yB-y1yaH.js";const xt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ct=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ct as __namedExportsOrder,xt as default};
