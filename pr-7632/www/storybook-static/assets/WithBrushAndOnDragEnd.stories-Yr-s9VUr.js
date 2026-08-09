import{R as t}from"./iframe-DYQm5pDK.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CJYweGKN.js";import{B as p}from"./BarChart-DE2be-Z8.js";import{X as l}from"./XAxis-CZY80vys.js";import{Y as h}from"./YAxis-CVSg61xk.js";import{B as x}from"./Brush-VnS14qUG.js";import{B as c}from"./Bar-IQAk7hC0.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Ctp9_qVa.js";import"./index-D9641aDn.js";import"./index-CSHdKH08.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-V2XetKb4.js";import"./isWellBehavedNumber-Db1VnkRV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-gRpL_xKU.js";import"./index-B8vof7O1.js";import"./index-Dvf4xz5M.js";import"./axisSelectors-CSPBywkg.js";import"./d3-scale-CuSyjdwU.js";import"./renderedTicksSlice-C_bKCtit.js";import"./CartesianChart-1bq5gRk4.js";import"./chartDataContext-Dp_kX4bj.js";import"./CategoricalChart-DNCs6fuc.js";import"./CartesianAxis-DZAfkwU8.js";import"./Layer-BE5fWip9.js";import"./Text-BBWNQ9ND.js";import"./DOMUtils-DI2U8hPw.js";import"./Label-2fJkWQrM.js";import"./ZIndexLayer-CYpXSJgQ.js";import"./types-DMj2PdKG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BL-IAPcg.js";import"./isBuffer-BG75eWKN.js";import"./tooltipContext-BHSbnupy.js";import"./AnimatedItems-CRKAM_Pk.js";import"./useAnimationId-Dfuzx8c4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C2cnIGYc.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DDuLsW0U.js";import"./RegisterGraphicalItemId-CoopfHz0.js";import"./ErrorBarContext-BW9yLQD5.js";import"./graphicalItemIdentity-c8N24HJ4.js";import"./SetGraphicalItem-F1NAG8Fb.js";import"./getZIndexFromUnknown-ypmuN3X8.js";import"./graphicalItemSelectors-B1i3HIK9.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const pt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,pt as __namedExportsOrder,st as default};
