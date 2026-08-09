import{R as t}from"./iframe-DQWQDaPi.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DcHJpvAl.js";import{B as p}from"./BarChart-CfTwCT4c.js";import{X as l}from"./XAxis-BBBhOkeu.js";import{Y as h}from"./YAxis-C2-Mzga3.js";import{B as x}from"./Brush-BPf2SvI5.js";import{B as c}from"./Bar-CxOE93s-.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BQvRWZqy.js";import"./index-CVzBZnUD.js";import"./index-Boa57nB7.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Booe6JJa.js";import"./isWellBehavedNumber-BYWBnctP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BYnvhIY5.js";import"./index-BkyhQGGW.js";import"./index-CXa1CePB.js";import"./axisSelectors-CuF4kGlO.js";import"./d3-scale-CLTv1Y1c.js";import"./renderedTicksSlice-D0V9j1Gj.js";import"./CartesianChart-DeUhDNtd.js";import"./chartDataContext-BGbsBt_h.js";import"./CategoricalChart-BVqvVrz0.js";import"./CartesianAxis-DrD9H6GX.js";import"./Layer-7j8XoA_H.js";import"./Text-C8i9V0Ud.js";import"./DOMUtils-D6N96cFz.js";import"./Label-DuuyKMi1.js";import"./ZIndexLayer-CfwFYr9r.js";import"./types-D4LIC8ZM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CJF-_HuY.js";import"./isBuffer-BG75eWKN.js";import"./tooltipContext-bs4hkATZ.js";import"./AnimatedItems-Brr5wTGw.js";import"./useAnimationId-C7lsUvOa.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cj344d-6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BFafhpNl.js";import"./RegisterGraphicalItemId-DoLIlFOq.js";import"./ErrorBarContext-Ch1rJbNM.js";import"./graphicalItemIdentity-CCnPSphi.js";import"./SetGraphicalItem-rBiZ9Gct.js";import"./getZIndexFromUnknown-lb92iRUB.js";import"./graphicalItemSelectors-X4IgffWK.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const pt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,pt as __namedExportsOrder,st as default};
