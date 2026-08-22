import{R as t}from"./iframe-CEnpMkUD.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-05A266o9.js";import{B as p}from"./BarChart-CzhlGI3s.js";import{X as l}from"./XAxis-BSzDUhhq.js";import{Y as h}from"./YAxis-EWhR1Mjx.js";import{B as x}from"./Brush-B8Z3Uham.js";import{B as c}from"./Bar-CRuJ9KPJ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dmrqe0jJ.js";import"./index-BLMKt3XR.js";import"./index-CJbnSVQD.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BfNWPFnd.js";import"./isWellBehavedNumber-DR4aYfcx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-0XuY0pKu.js";import"./index-D3euSQxt.js";import"./index-By9AGPbV.js";import"./axisSelectors-DC8u1mMs.js";import"./d3-scale-Dz-RCPbg.js";import"./renderedTicksSlice-CMfBipfM.js";import"./CartesianChart-RDTjk-Mf.js";import"./chartDataContext-fs3yspT4.js";import"./CategoricalChart-BbjRWCL9.js";import"./CartesianAxis-kR2Dl0Mj.js";import"./Layer-tgou8wwH.js";import"./Text-BovGSesW.js";import"./DOMUtils-Bq__MZjJ.js";import"./useId-DkQeXuoN.js";import"./useBackwardsCompatibleTheme-Cl8wy0Yl.js";import"./Label-keTZMkCE.js";import"./ZIndexLayer--32eJAmt.js";import"./types-Y-jxBs1c.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BBWAA05W.js";import"./useAnimationId-CAXeIAhh.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DwQubN_8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BUkWWRfj.js";import"./tooltipContext-uIua17wn.js";import"./RegisterGraphicalItemId-CbjDoXD2.js";import"./ErrorBarContext-COjMx0cf.js";import"./GraphicalItemClipPath-CisBO3GG.js";import"./SetGraphicalItem-WHlYrVZg.js";import"./getZIndexFromUnknown-BbxTe_0t.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Dzh6Njpd.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const ht=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
