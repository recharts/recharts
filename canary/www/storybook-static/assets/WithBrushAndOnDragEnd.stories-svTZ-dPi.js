import{R as t}from"./iframe-DgKiVndY.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-dNuJcHRn.js";import{B as p}from"./BarChart-BZq_XsvL.js";import{X as l}from"./XAxis-BLbqPkVx.js";import{Y as h}from"./YAxis-DbeD2sP7.js";import{B as x}from"./Brush-B_SCfw2S.js";import{B as c}from"./Bar-BqidhIqf.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C4KEmVOQ.js";import"./index-ClqqO2lb.js";import"./index-DJwO8k8A.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D4xdWGM2.js";import"./isWellBehavedNumber-D3WetmgY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CVLdrR-G.js";import"./axisSelectors-IaZq8uO9.js";import"./d3-scale-DcAUA4PB.js";import"./index-DtVHhaCV.js";import"./index-DmBw5bKk.js";import"./renderedTicksSlice-RB0exVxa.js";import"./index-CkxJWCtX.js";import"./CartesianChart-BjKzNNSZ.js";import"./chartDataContext-Dv6GfWKh.js";import"./CategoricalChart-tj-0AtFI.js";import"./CartesianAxis-O82DChWw.js";import"./Layer-CitR-d8V.js";import"./Text-CbY3j4Ck.js";import"./DOMUtils-DDi-aYdE.js";import"./useId-DRmEtgtu.js";import"./useBackwardsCompatibleTheme-CVo9PiuG.js";import"./Label-Dw6GSad7.js";import"./ZIndexLayer-CiPL_m_c.js";import"./types-BGF6RwMG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-t-O5cYrN.js";import"./useAnimationId-Df1EENv3.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C7PgJRAr.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-A4Sw_vLw.js";import"./tooltipContext-Br61voC1.js";import"./RegisterGraphicalItemId-D1zFL55b.js";import"./ErrorBarContext-D4mtJzrM.js";import"./GraphicalItemClipPath-CbvSbhMn.js";import"./SetGraphicalItem-BLJqw_fJ.js";import"./getZIndexFromUnknown-D1tG7Oz6.js";import"./useGraphicalItemIdentity-Mjj8dgtd.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
