import{R as t}from"./iframe-tjocxRUU.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Dxy8HPki.js";import{B as p}from"./BarChart-_EXzP4pO.js";import{X as l}from"./XAxis-Ds3HH0B9.js";import{Y as h}from"./YAxis-CC3Fea7J.js";import{B as x}from"./Brush-GXw47Cm6.js";import{B as c}from"./Bar-BH4xSSZn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BcfnasjV.js";import"./throttle-BtJBXhY8.js";import"./index-CjBb-5aG.js";import"./index-cbjgkIoT.js";import"./RechartsWrapper-CFmoW3Jf.js";import"./axisSelectors-Bh1ZEFRN.js";import"./polarAxisSelectors-D1WllP0e.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DxsTJ-Fh.js";import"./index-Ccuv5XKu.js";import"./index-Ct8BdbUc.js";import"./renderedTicksSlice-Dd6HrSiu.js";import"./index-E7H9Mo8F.js";import"./CartesianChart-BvDUjaEm.js";import"./ZIndexPortal-HUDzz5Yk.js";import"./CategoricalChart-BwEKGQoK.js";import"./CartesianAxis-DzErZjsk.js";import"./Layer-YyRceVq5.js";import"./Text-DmRL3-09.js";import"./pageBackground-C5tWOGC0.js";import"./ZIndexLayer-1nCesNvZ.js";import"./Label-CDvz32IL.js";import"./dataEntryStyles-D26LCbZx.js";import"./types-C53JcC0M.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-C2EwX980.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-nUsjOQfN.js";import"./useAnimationId-g7Nwbj-R.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BbQcFRH2.js";import"./tooltipContext-DoMXm-JT.js";import"./RegisterGraphicalItemId-B4AeGnTP.js";import"./ErrorBarContext-ClXwNuC-.js";import"./activeStyles-BO5quCC2.js";import"./SetGraphicalItem-CJ8TRMDr.js";import"./getZIndexFromUnknown-B9nrNTyo.js";import"./useEffectiveDataKey-BAWm_Xnd.js";import"./omit-CcbPjjvC.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
