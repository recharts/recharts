import{R as t}from"./iframe-DMAX8_B_.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BVHCVdkF.js";import{B as p}from"./BarChart-BuPknjzM.js";import{X as l}from"./XAxis-C1NK8RoH.js";import{Y as h}from"./YAxis-DHMD8bK9.js";import{B as x}from"./Brush-CsFT_6LV.js";import{B as c}from"./Bar-Cmvb1KlD.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B-jnSQsL.js";import"./index-Dqqrq3j2.js";import"./index-t_NEKWw0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Q3rDitrf.js";import"./isWellBehavedNumber-9EXxFos5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-1Z3_sa1T.js";import"./axisSelectors-xVjud6VL.js";import"./d3-scale-BX29oM_v.js";import"./index-KGIc8sd0.js";import"./index-CBEUuOpp.js";import"./renderedTicksSlice-C6uANPht.js";import"./index-BQc2wBrK.js";import"./CartesianChart-Bezscfrc.js";import"./chartDataContext-D-vUUGf6.js";import"./CategoricalChart-lpsuDSMi.js";import"./CartesianAxis-BiWmv3xt.js";import"./Layer-bgHLcwl9.js";import"./Text-BwCj1acG.js";import"./pageBackground-BEqOe7lR.js";import"./useId-BVZoqUN1.js";import"./useBackwardsCompatibleTheme-BxWKmMDT.js";import"./Label-CAcaahuf.js";import"./ZIndexLayer-YH55ha4J.js";import"./types-mmDyRX3a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-B1Ozispl.js";import"./useAnimationId-DjHV_c7w.js";import"./dataEntryStyles-Bgri-3l2.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-PLb_DD4F.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CH9-BPrn.js";import"./tooltipContext-C61lU4k-.js";import"./ErrorBarContext-eOToNj9e.js";import"./GraphicalItemClipPath-DrxfmPj-.js";import"./SetGraphicalItem-Car8jOkS.js";import"./getZIndexFromUnknown-B7k7nw6m.js";import"./useEffectiveDataKey-BofpFvC7.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
