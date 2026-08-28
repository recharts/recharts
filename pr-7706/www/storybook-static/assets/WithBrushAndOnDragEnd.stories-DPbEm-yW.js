import{R as t}from"./iframe-CIwxHuVP.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-4cOqtSJ1.js";import{B as p}from"./BarChart-T2N3EASZ.js";import{X as l}from"./XAxis-CIHUnpyu.js";import{Y as h}from"./YAxis-COiio6CI.js";import{B as x}from"./Brush-BVLyv4sb.js";import{B as c}from"./Bar-DnCAG48h.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DyeZ31Gg.js";import"./index-DYcgeWKW.js";import"./index-BBY9vn-H.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BqjvsCVB.js";import"./isWellBehavedNumber-DnH2FQ7z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-saup7v4_.js";import"./axisSelectors-YcB3o8_5.js";import"./d3-scale-BsCK15DF.js";import"./index-Dret-drz.js";import"./index-KtvOjFJW.js";import"./renderedTicksSlice-BymeN3Gd.js";import"./index-CgMi-XQz.js";import"./CartesianChart-BuIzZkiF.js";import"./chartDataContext-BnEwWcTU.js";import"./CategoricalChart-BsI6BCbz.js";import"./CartesianAxis-D27Sw88P.js";import"./Layer-QH0nRmzc.js";import"./Text-DdeI7QFK.js";import"./DOMUtils-DJmg_ALb.js";import"./useId-CvnBUwAn.js";import"./useBackwardsCompatibleTheme-CaEtd9Gi.js";import"./Label-P76xZGuB.js";import"./ZIndexLayer-DSlR-fbE.js";import"./types-CaxJYW3v.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CJSCuTfT.js";import"./useAnimationId-CRxHEUg9.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dicx6LJz.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C_X8XuiV.js";import"./tooltipContext-MJGQSXdg.js";import"./RegisterGraphicalItemId-Bx9h1qwh.js";import"./ErrorBarContext-BBpfpkXa.js";import"./GraphicalItemClipPath-DfR7F3pr.js";import"./SetGraphicalItem-DCJicVim.js";import"./getZIndexFromUnknown-Bjm0lEjM.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BMtT3rRV.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const xt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};
