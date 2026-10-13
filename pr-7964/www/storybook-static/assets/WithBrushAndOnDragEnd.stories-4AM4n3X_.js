import{R as t}from"./iframe-BKHpBCGR.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-MbsPskuO.js";import{B as p}from"./BarChart-Kn3DLInD.js";import{X as l}from"./XAxis-DTRZ1dWN.js";import{Y as h}from"./YAxis-BEhxTh9O.js";import{B as x}from"./Brush-BxYixcCS.js";import{B as c}from"./Bar-B7j_Zzvh.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-3nfkHG5O.js";import"./index-BGfSAvuv.js";import"./index-AIIPc7Ew.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-LMHkslvY.js";import"./isWellBehavedNumber-DZ2Xn8RG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D-Zfjt-o.js";import"./axisSelectors-CJodVBjM.js";import"./d3-scale-CFmaNxVK.js";import"./index-MJAbFl6s.js";import"./index-D7XXjqey.js";import"./renderedTicksSlice-BZuStCiV.js";import"./index-pfuxfga8.js";import"./CartesianChart-CXURKO2Z.js";import"./chartDataContext-BJRV3EGA.js";import"./CategoricalChart-sVMN8Krq.js";import"./CartesianAxis-mCcuS_Uy.js";import"./Layer-DybYLhVT.js";import"./Text-DYCZls4m.js";import"./pageBackground-CYge6A3w.js";import"./useId-Dt-1BK0Z.js";import"./useBackwardsCompatibleTheme-C46GemJr.js";import"./Label-O1JP__wG.js";import"./ZIndexLayer-BdmXZICd.js";import"./types-Ck1lG8KT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-Ciq5Cwqo.js";import"./useAnimationId-yls0YfbP.js";import"./dataEntryStyles-dsuf4aHw.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CDgGLfNl.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DQESG7Jg.js";import"./tooltipContext-CPk4H5jm.js";import"./ErrorBarContext-D-66_lvv.js";import"./GraphicalItemClipPath--201yH7F.js";import"./SetGraphicalItem-BcZa1iuc.js";import"./getZIndexFromUnknown-DRba0iYY.js";import"./useEffectiveDataKey-BIsGwEM1.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
