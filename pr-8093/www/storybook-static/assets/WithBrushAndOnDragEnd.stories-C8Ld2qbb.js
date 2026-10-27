import{R as t}from"./iframe-BhkmDUK8.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Cx3NgCbD.js";import{B as p}from"./BarChart-Dojl2D04.js";import{X as l}from"./XAxis-C6NctsPw.js";import{Y as h}from"./YAxis-CXhwTwOE.js";import{B as x}from"./Brush-k-rUnJmy.js";import{B as c}from"./Bar-mg0AFLko.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CBrUOLtb.js";import"./throttle-BvBRI7mu.js";import"./index-BGM2KozU.js";import"./index-Co7lnbSI.js";import"./RechartsWrapper-DFqlV8En.js";import"./axisSelectors-iANbDNdr.js";import"./polarAxisSelectors-BxjhUIGd.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-6P_5w6kZ.js";import"./index-CMvdSvcn.js";import"./index-DbiGNxfl.js";import"./renderedTicksSlice-BaGEcMV8.js";import"./index-EMj2ovmv.js";import"./CartesianChart-DAEGsrX3.js";import"./ZIndexPortal-B4U04QBk.js";import"./CategoricalChart-DsbjL1iZ.js";import"./CartesianAxis-BmcJMrp5.js";import"./Layer-DN_2iRDC.js";import"./Text-DMX7oKTI.js";import"./pageBackground-4Wz1Kk9n.js";import"./ZIndexLayer-CK_kCyLL.js";import"./Label-BVWylkM-.js";import"./dataEntryStyles-BVrjnugi.js";import"./types-CU7_71qS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-CB1bAazX.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CulpOJA0.js";import"./useAnimationId-49rixTyB.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DRwsgq7-.js";import"./tooltipContext-W-jQ97Ft.js";import"./RegisterGraphicalItemId-BQIh3gpM.js";import"./ErrorBarContext-BtfMVugS.js";import"./activeStyles-Bn41iv6z.js";import"./SetGraphicalItem-B5IS3skS.js";import"./getZIndexFromUnknown-BQ3YpVib.js";import"./useEffectiveDataKey-C5G10thl.js";import"./omit-DVpTfk6D.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
