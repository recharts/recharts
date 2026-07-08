import{R as t}from"./iframe-DGYc5Evr.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CjPpABdt.js";import{B as p}from"./BarChart-6-ftRz7-.js";import{X as l}from"./XAxis-v5Hkx9ES.js";import{Y as h}from"./YAxis-D-S3NpvC.js";import{B as x}from"./Brush-B-HSihuc.js";import{B as c}from"./Bar-BgWNK6Um.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-44TCHeAp.js";import"./index-D_ZxU5Q3.js";import"./index-sF9bEsAF.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BzwDYh32.js";import"./isWellBehavedNumber-BpEOcoHg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CM9ry10x.js";import"./index-cJf64k7_.js";import"./index-xTx_eyuL.js";import"./renderedTicksSlice-BojFd99l.js";import"./axisSelectors-BNixzxMM.js";import"./d3-scale-DWZ-qO9T.js";import"./CartesianChart-BPYrXhHn.js";import"./chartDataContext-CnthLNs9.js";import"./CategoricalChart-CwbInpB3.js";import"./CartesianAxis-XkVfHgZD.js";import"./Layer-Cp66mevN.js";import"./Text-C1RHjt0W.js";import"./DOMUtils-D9lLS2TF.js";import"./Label-ByCQCza6.js";import"./ZIndexLayer-BiqJjXGY.js";import"./types-m9Fzmc4X.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-DhQqMsQN.js";import"./AnimatedItems-DpTt0Un9.js";import"./useAnimationId-CRdgro7A.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-2UtW3B_i.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-0IrxfALl.js";import"./RegisterGraphicalItemId-BYtbpB8Y.js";import"./ErrorBarContext-CDutCjUn.js";import"./GraphicalItemClipPath-D4tdWuXE.js";import"./SetGraphicalItem-sSG1dofq.js";import"./getZIndexFromUnknown-CKy08MvG.js";import"./graphicalItemSelectors-o-2IsEs2.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
