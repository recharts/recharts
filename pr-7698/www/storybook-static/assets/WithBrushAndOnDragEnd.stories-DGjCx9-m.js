import{R as t}from"./iframe-zaa1iZav.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BWWEcbGp.js";import{B as p}from"./BarChart-cQTOSyhE.js";import{X as l}from"./XAxis-BVnwJxOu.js";import{Y as h}from"./YAxis-DJCm-s1B.js";import{B as x}from"./Brush-CDV7X3yO.js";import{B as c}from"./Bar-c98uwW-j.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CPqxLIQd.js";import"./index-BrIYS7Za.js";import"./index-B2mdcnwD.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CJqzH_DM.js";import"./isWellBehavedNumber-DAhZ9La7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bf_8sWMW.js";import"./index-BZPWANmU.js";import"./index-CM-qLXxp.js";import"./axisSelectors-ucT8kUEv.js";import"./d3-scale-DKZbRsMk.js";import"./renderedTicksSlice-jJ4uAB34.js";import"./CartesianChart-BUEIFsCx.js";import"./chartDataContext-CPRHK_4k.js";import"./CategoricalChart-DzU0tABe.js";import"./CartesianAxis-BEMiFdQK.js";import"./Layer-Diqr5-jO.js";import"./Text-CNT20nWc.js";import"./DOMUtils-CDT7WRtk.js";import"./useId-B4zmx8V0.js";import"./useBackwardsCompatibleTheme-XO0ISL55.js";import"./Label-dEEe5X5F.js";import"./ZIndexLayer-Dn1PwF1U.js";import"./types-DFArERnY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-O1YgZXLs.js";import"./useAnimationId-B8kms9uE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Ddidi1ZR.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-lGuUrwlM.js";import"./tooltipContext-BhuGSjmc.js";import"./RegisterGraphicalItemId-dsCSOxKS.js";import"./ErrorBarContext-ZTRuZpEO.js";import"./GraphicalItemClipPath-Dhs9LVS9.js";import"./SetGraphicalItem-Dk_WNLiG.js";import"./getZIndexFromUnknown-_9N3dKhy.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-B9jF_9OY.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const ht=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
