import{R as t}from"./iframe-BmS0ecXK.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-ChtzqxIP.js";import{B as p}from"./BarChart-a2poxeuK.js";import{X as l}from"./XAxis-Bh2usn2R.js";import{Y as h}from"./YAxis-p6gtuiCl.js";import{B as x}from"./Brush-CpfJNzTn.js";import{B as c}from"./Bar-DSqtxRpI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-L-kb5cDL.js";import"./throttle-OPlZV-qu.js";import"./index-CdWOU_Jt.js";import"./index-CT2dpPb1.js";import"./RechartsWrapper-CUI9gBJC.js";import"./axisSelectors-BzqnuZDm.js";import"./polarAxisSelectors-CE28gFQQ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-3fk2W2Xu.js";import"./index-S9VbsYVM.js";import"./index-B2CB0vSq.js";import"./renderedTicksSlice-DE9Jk9Mo.js";import"./index-B9xLgKg_.js";import"./fillDefinitions-BfTN52CB.js";import"./CartesianChart-MAWW00G9.js";import"./ZIndexPortal-BBTCIcjJ.js";import"./CategoricalChart-Y8ADkKU9.js";import"./CartesianAxis-Brh0Ot5h.js";import"./Layer-BUeogdZj.js";import"./Text-Cy6IgmxI.js";import"./DOMUtils-nGO8S--J.js";import"./ZIndexLayer-CGSpKlNm.js";import"./Label-xOYEqHzO.js";import"./types-BFfgrH_g.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-HbN4s7ci.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BZ-oVzUh.js";import"./useAnimationId-CpCNOV8e.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-UpE3VQFE.js";import"./tooltipContext-VmrjPqqA.js";import"./dataEntryStyles-BusWIJtt.js";import"./ErrorBarContext-D4UbmXd_.js";import"./activeStyles-D5Ig3nSZ.js";import"./SetGraphicalItem-DxeCv-Nd.js";import"./getZIndexFromUnknown-BsWelO8Z.js";import"./useEffectiveDataKey-1aGsCLfO.js";import"./omit-DLYgWUT8.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
