import{R as t}from"./iframe-prgBh1Qf.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DdjKeJcD.js";import{B as p}from"./BarChart-BSH2pqbN.js";import{X as l}from"./XAxis-BWvJnYnv.js";import{Y as h}from"./YAxis-CBYYm0_0.js";import{B as x}from"./Brush-DN-Q-xno.js";import{B as c}from"./Bar-CCjA1KKG.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DhCsYq_l.js";import"./index-Bl_8pcbE.js";import"./index-DznvQCe0.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DEZlg4EB.js";import"./isWellBehavedNumber-DeolLGU-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-FIpEFVMR.js";import"./index-TRfcR2ow.js";import"./index-p6BXHd-9.js";import"./renderedTicksSlice-C3Oo4Aw2.js";import"./axisSelectors-HShZFAmb.js";import"./d3-scale-CthO7aNE.js";import"./CartesianChart-EDRdBXz4.js";import"./chartDataContext-BRCxcd-D.js";import"./CategoricalChart-C0JPuI-j.js";import"./CartesianAxis-DyI7y6fg.js";import"./Layer-B4SceqN1.js";import"./Text-XjkeXE_1.js";import"./DOMUtils-B922snu2.js";import"./Label-CpgdF2bt.js";import"./ZIndexLayer-Coay8-vh.js";import"./types-BLB4Kpk-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-44zxrOu4.js";import"./AnimatedItems-JyKHnHqe.js";import"./useAnimationId-Dho-yl2L.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CHjX_Wi4.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CCY3sSOl.js";import"./RegisterGraphicalItemId-QOUSEuOJ.js";import"./ErrorBarContext-_HsKWF8T.js";import"./GraphicalItemClipPath-D8U1RFPj.js";import"./SetGraphicalItem-cAeJSBXs.js";import"./getZIndexFromUnknown-DBxTf_kG.js";import"./graphicalItemSelectors-DU6HXrJ0.js";const mt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const st=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,st as __namedExportsOrder,mt as default};
