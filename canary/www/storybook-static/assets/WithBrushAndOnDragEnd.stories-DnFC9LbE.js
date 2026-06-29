import{R as t}from"./iframe-kr7fVjhm.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BZPaZoVE.js";import{B as p}from"./BarChart-DI8KvMeo.js";import{X as l}from"./XAxis-DuCvvYgu.js";import{Y as h}from"./YAxis-BoMreVA5.js";import{B as x}from"./Brush-CSdXMt7P.js";import{B as c}from"./Bar-CC7FIpFT.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D_awpPCx.js";import"./index-D2MHq5Hk.js";import"./index-B4gF14t1.js";import"./get-Clowvj21.js";import"./resolveDefaultProps-B2SvaHgo.js";import"./isWellBehavedNumber-Dgwr4Y0K.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BXLkHwYV.js";import"./index-Bi4GHbSg.js";import"./index-C_7j0jGJ.js";import"./renderedTicksSlice-DSu7HAeh.js";import"./axisSelectors-C6aKDGBg.js";import"./d3-scale-D8KPLyuv.js";import"./CartesianChart-xwjZDYjt.js";import"./chartDataContext-CX_0Naaw.js";import"./CategoricalChart-Bef2xtAx.js";import"./CartesianAxis-BtEPbzKb.js";import"./Layer-BpeNKyUn.js";import"./Text-DjM5ugTe.js";import"./DOMUtils-C68MxIVY.js";import"./Label-BzX4e21C.js";import"./ZIndexLayer-DgDl0x_M.js";import"./types-BF09pdOO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-Q_MtGo3C.js";import"./AnimatedItems-DqhNqm_F.js";import"./useAnimationId-D5l55oDh.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DH_b4CsR.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DcRBgo4o.js";import"./RegisterGraphicalItemId-fKNs0JEp.js";import"./ErrorBarContext-CdB9Q1sE.js";import"./GraphicalItemClipPath-BFOwa2gv.js";import"./SetGraphicalItem-CV-IUFmw.js";import"./getZIndexFromUnknown-owanYJoE.js";import"./graphicalItemSelectors-Dqj-Zp-w.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
