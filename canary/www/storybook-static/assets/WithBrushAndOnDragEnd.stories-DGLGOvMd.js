import{R as t}from"./iframe-ZSAsyeui.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Dv-5_8A6.js";import{B as p}from"./BarChart-gUl6YPgi.js";import{X as l}from"./XAxis-CE4c8ci4.js";import{Y as h}from"./YAxis-89VrmUc2.js";import{B as x}from"./Brush-BGd2mon6.js";import{B as c}from"./Bar-Chc0x6Xf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CzYlkvqW.js";import"./throttle-D-BJc2jV.js";import"./index-OvyM_4Sm.js";import"./index-DjKI25gJ.js";import"./RechartsWrapper-BzidFlVd.js";import"./axisSelectors-B8o8U7qV.js";import"./polarAxisSelectors-BqI7JiW5.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CC-JJjQv.js";import"./index-uqJ6YOvZ.js";import"./index-zauSQ6TS.js";import"./renderedTicksSlice-CWxjmG2R.js";import"./index-DD-2LlvS.js";import"./CartesianChart-CMZp9es4.js";import"./ZIndexPortal-CvnMM87Z.js";import"./CategoricalChart-D-416rq6.js";import"./CartesianAxis-BLajEobP.js";import"./Layer-DRoxmpYI.js";import"./Text-BRlBLGWa.js";import"./pageBackground-BD4buOa5.js";import"./ZIndexLayer-C2WKPlYv.js";import"./Label-ooeO0hBy.js";import"./types-DmKiIpv6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-Xwc-TPit.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Buh2szsq.js";import"./useAnimationId-DVzTYwao.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-PjK4neH_.js";import"./tooltipContext-BErzQm8t.js";import"./dataEntryStyles-D8AFB-Xx.js";import"./ErrorBarContext-Cg5WWOob.js";import"./activeStyles-BfRigOWz.js";import"./SetGraphicalItem-BULml3ZG.js";import"./getZIndexFromUnknown-B_8wLt4W.js";import"./useEffectiveDataKey-DWBa4tvD.js";import"./omit-CcrkJRlh.js";import"./isArguments-yB-y1yaH.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
