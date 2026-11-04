import{R as t}from"./iframe-C1xjtyup.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CK_7sDhl.js";import{B as p}from"./BarChart-YG87a6HR.js";import{X as l}from"./XAxis-yfo5ibqs.js";import{Y as h}from"./YAxis-D19WlBcl.js";import{B as x}from"./Brush-wOLtIUU6.js";import{B as c}from"./Bar-wQ6lyeaX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BW194xym.js";import"./throttle-DeB2d41h.js";import"./index-C89VIpwW.js";import"./index-D-Z5HFQV.js";import"./RechartsWrapper-g7B-Y0pQ.js";import"./axisSelectors-CL5t64V7.js";import"./polarAxisSelectors-XOgxAb5A.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CfSN9o3v.js";import"./index-B3Q9mRXR.js";import"./index-DZVn9IOu.js";import"./renderedTicksSlice-DT_F_kFQ.js";import"./index-DNbtHs3M.js";import"./fillDefinitions-Chc0NBrg.js";import"./CartesianChart-CiggLvKc.js";import"./ZIndexPortal-ltJzS4wp.js";import"./CategoricalChart-DLW54M1r.js";import"./CartesianAxis-gqJanQvj.js";import"./Layer-DgAL7HSK.js";import"./Text-dB1JvKf5.js";import"./DOMUtils-DjnwPC-N.js";import"./ZIndexLayer-BioPoHSu.js";import"./Label-rlFXaG67.js";import"./types-BMA5Z4Oj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-DlsMy8UK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-pWpz6jQo.js";import"./useAnimationId-BHg-nTIp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BJp5D_xQ.js";import"./tooltipContext-B1k4F_lJ.js";import"./dataEntryStyles-CoAbyOEr.js";import"./ErrorBarContext-DT5kzwJ3.js";import"./activeStyles-MqObX4-I.js";import"./SetGraphicalItem-f1KdcC0B.js";import"./getZIndexFromUnknown-C1tDfpkk.js";import"./useEffectiveDataKey-C_d_9it0.js";import"./omit-zAXBsbCp.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
