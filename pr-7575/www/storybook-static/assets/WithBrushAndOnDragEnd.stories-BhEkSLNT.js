import{R as t}from"./iframe-DzzybHr3.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-APm024yE.js";import{B as p}from"./BarChart-CI1Rveym.js";import{X as l}from"./XAxis-C2N3vX2E.js";import{Y as h}from"./YAxis-CKuS-Mr_.js";import{B as x}from"./Brush-B0y_hEiV.js";import{B as c}from"./Bar-BQxA2sHd.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DXJQ7qa7.js";import"./index-CNtIrdbG.js";import"./index-YXsj3yx_.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CV8kmKtp.js";import"./isWellBehavedNumber-DhXkb0Zj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BQrYaWuY.js";import"./index-DKv_ekDa.js";import"./index-BbqbzQag.js";import"./renderedTicksSlice-BnoTH0LX.js";import"./axisSelectors-DxliL3D-.js";import"./d3-scale-ikjFpXkq.js";import"./CartesianChart-C60EyfpF.js";import"./chartDataContext-mNy84WxM.js";import"./CategoricalChart-B7eTVHmG.js";import"./CartesianAxis-Bp9IVHGC.js";import"./Layer-DBuOEsC-.js";import"./Text-CKYGhwj_.js";import"./DOMUtils-CofpyxHf.js";import"./Label-Yw7Q0JfB.js";import"./ZIndexLayer-B65O7Oyl.js";import"./types-Ck7x6Nhk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-CRNSKdn8.js";import"./AnimatedItems-CJCL0mBl.js";import"./useAnimationId--dSVNcdm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-1YG-OgZS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CXtuLtCa.js";import"./RegisterGraphicalItemId-r8RRCwhl.js";import"./ErrorBarContext-CW8Stc7O.js";import"./GraphicalItemClipPath-BPmTqE-t.js";import"./SetGraphicalItem-Dv_WYCgN.js";import"./getZIndexFromUnknown-aIczdU7c.js";import"./graphicalItemSelectors-CPc8JmzW.js";const mt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
