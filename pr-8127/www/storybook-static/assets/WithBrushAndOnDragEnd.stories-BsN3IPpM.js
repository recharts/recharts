import{R as t}from"./iframe-BmCEaXnl.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CCSErHLO.js";import{B as p}from"./BarChart-Bx-tbGSm.js";import{X as l}from"./XAxis-u0XIPlGG.js";import{Y as h}from"./YAxis-wM7iKB0B.js";import{B as x}from"./Brush-5WXJtwyW.js";import{B as c}from"./Bar-XQvoAjlB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CFAPbmi-.js";import"./throttle-qcDxTsLf.js";import"./index-BqP1aJDu.js";import"./index-F6n6DaVK.js";import"./RechartsWrapper-e4k-RA_5.js";import"./axisSelectors-jGKN6-F9.js";import"./polarAxisSelectors-pAXQteq7.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DOe-rCGU.js";import"./index-BTkbJW8j.js";import"./index-B6BvyTbH.js";import"./renderedTicksSlice-2egCQc0E.js";import"./index-C_f_Jppx.js";import"./CartesianChart-r4VMNRon.js";import"./ZIndexPortal-QH_cbCJt.js";import"./CategoricalChart-DB6XzEGw.js";import"./CartesianAxis-MWIUmivx.js";import"./Layer-BpXqwf7v.js";import"./Text-CVqIJR2f.js";import"./DOMUtils-C4PB-VGE.js";import"./ZIndexLayer-CQzpYkd8.js";import"./Label-BMv4awTg.js";import"./types-_yr4vfnQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-BgUgtMai.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CcFLRt9n.js";import"./useAnimationId-DcrGLg07.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DMtsKFiW.js";import"./tooltipContext-DSyzjZp1.js";import"./dataEntryStyles-D18H_t3x.js";import"./fillDefinitions-Cf5kf7-L.js";import"./ErrorBarContext-D_xcSKmk.js";import"./activeStyles-D5gryLfg.js";import"./SetGraphicalItem-CsEqG3iP.js";import"./getZIndexFromUnknown-CQIvZbrs.js";import"./useEffectiveDataKey-CdWL-HwP.js";import"./omit-BMQg-LFW.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
