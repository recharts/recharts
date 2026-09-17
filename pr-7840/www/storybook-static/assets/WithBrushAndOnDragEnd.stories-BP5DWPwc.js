import{R as t}from"./iframe-Bz2BdfN4.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CrpvQ3cZ.js";import{B as p}from"./BarChart-BrU-eq5t.js";import{X as l}from"./XAxis-Dd1a0uMa.js";import{Y as h}from"./YAxis-BsNZ_B30.js";import{B as x}from"./Brush-CYc9T8Is.js";import{B as c}from"./Bar-CPuLU6xL.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B-XPotXa.js";import"./index-m3Fpm_2g.js";import"./index-C_HDr07T.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CwyxmUze.js";import"./isWellBehavedNumber-CN1l9n-g.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BKy4IHB9.js";import"./axisSelectors-DHqPZzoA.js";import"./d3-scale-BYzlom2n.js";import"./index-Coj5AO7r.js";import"./index-D7YhX5lQ.js";import"./renderedTicksSlice-BaDfPCVK.js";import"./index-CC0XKx94.js";import"./CartesianChart-D9Oal9EV.js";import"./chartDataContext-BjNcuyRP.js";import"./CategoricalChart-Bq1JSSY0.js";import"./CartesianAxis-CSM2PXhl.js";import"./Layer-DzdETfRU.js";import"./Text-BBc8PFQR.js";import"./DOMUtils-DYVcve-D.js";import"./useId-BTmP1k4h.js";import"./useBackwardsCompatibleTheme-CuJrnw16.js";import"./Label-CorAy009.js";import"./ZIndexLayer-CfRVDFXb.js";import"./types-DhKwB64F.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CrHQSA2B.js";import"./useAnimationId-DBdf0eRq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cg4r9N9p.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ds6IyY6j.js";import"./tooltipContext-Bl3LsZVk.js";import"./RegisterGraphicalItemId-T7-fSXxk.js";import"./ErrorBarContext-CeKdQ828.js";import"./GraphicalItemClipPath-DlHTJze-.js";import"./SetGraphicalItem-BSvf_Zq8.js";import"./getZIndexFromUnknown-n_ivOQfH.js";import"./useGraphicalItemIdentity-Ccoked2c.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
