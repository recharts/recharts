import{R as t}from"./iframe-BfMFh77x.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Cztpg_sh.js";import{B as p}from"./BarChart-CANZBSPl.js";import{X as l}from"./XAxis-k9LTsr7W.js";import{Y as h}from"./YAxis-KlCpPZpc.js";import{B as x}from"./Brush-B1E15ha8.js";import{B as c}from"./Bar-wBG5AvKu.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BwatAsiE.js";import"./index-DROOMzyH.js";import"./index-B4iccN4g.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B4G3dz_P.js";import"./isWellBehavedNumber-MC_-4Sz8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C0SS5kvR.js";import"./axisSelectors-DoWmjLIh.js";import"./d3-scale-DZONVDEO.js";import"./index-D4qjDIL1.js";import"./index-3-96IZAO.js";import"./renderedTicksSlice-BnDYFPsi.js";import"./index-DX1BsebK.js";import"./CartesianChart-nK5Jsuas.js";import"./chartDataContext-icTGDudH.js";import"./CategoricalChart-CD0F4PlX.js";import"./CartesianAxis-BFOn3Dtf.js";import"./Layer-ckuwG36h.js";import"./Text-DEsVSfke.js";import"./DOMUtils-CakfvwTP.js";import"./useId-DVFEoxf5.js";import"./useBackwardsCompatibleTheme-DnqD941W.js";import"./Label-D2fJdiFl.js";import"./ZIndexLayer-DqwLDNFX.js";import"./types-Ccphz-V5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DBTQ-7wC.js";import"./useAnimationId-DwVIllah.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-r3IYiQGz.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-PP0TbsoH.js";import"./tooltipContext-CccmVbNZ.js";import"./RegisterGraphicalItemId-CyLRpybL.js";import"./ErrorBarContext-CANgFbqT.js";import"./GraphicalItemClipPath-D-McSxMj.js";import"./SetGraphicalItem-BkQyU4p0.js";import"./getZIndexFromUnknown-DtBOCMdY.js";import"./useGraphicalItemIdentity-CFRBZ7j4.js";import"./dataEntryStyles-D_xHI-do.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};
