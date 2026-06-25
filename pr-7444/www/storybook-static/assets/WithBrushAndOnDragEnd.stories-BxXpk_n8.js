import{R as t}from"./iframe-DlHhS40N.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BvmXOpzL.js";import{B as p}from"./BarChart-CCo-h1EV.js";import{X as l}from"./XAxis-BYYxNJmZ.js";import{Y as h}from"./YAxis-Co8rzPpk.js";import{B as x}from"./Brush-CChP9cVg.js";import{B as c}from"./Bar-CZK8AbiV.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-C3uuw8B2.js";import"./index-BUtjLbCz.js";import"./index-eOMfBDqm.js";import"./get-BPDhRHlu.js";import"./resolveDefaultProps-4rQlADP4.js";import"./isWellBehavedNumber-BWgZXzoO.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BQ3sg0O8.js";import"./index-BvgD5YGJ.js";import"./index-BmuILyMJ.js";import"./renderedTicksSlice-DXDO0JDp.js";import"./axisSelectors-pVGzxNLo.js";import"./d3-scale-Be18i-DH.js";import"./CartesianChart-DhGeGokB.js";import"./chartDataContext-DsGTg2xD.js";import"./CategoricalChart-CoJqtrPl.js";import"./CartesianAxis-CWmejQ4H.js";import"./Layer-DqnJz-la.js";import"./Text-C8e4MCrJ.js";import"./DOMUtils-BzX9kZMs.js";import"./Label-CKxxcWab.js";import"./ZIndexLayer-BO_RiOSE.js";import"./types-CJTuBoPn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-Dgpam99v.js";import"./AnimatedItems-DaDDpUgR.js";import"./useAnimationId-BsYp4mlV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ByySwgNe.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BvZP5z0J.js";import"./RegisterGraphicalItemId-CerVMuzL.js";import"./ErrorBarContext-CwPwud_C.js";import"./GraphicalItemClipPath-DrafemYl.js";import"./SetGraphicalItem-SnNwrY5U.js";import"./getZIndexFromUnknown-BvnCincg.js";import"./graphicalItemSelectors-DyoI6Nh-.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const mt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,mt as __namedExportsOrder,dt as default};
