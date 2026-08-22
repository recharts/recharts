import{R as e}from"./iframe-CbdG93Rp.js";import{R as i}from"./zIndexSlice-BBA2vYL9.js";import{C as a}from"./ComposedChart-BlErnFXo.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BtzF_dyJ.js";import{X as s}from"./XAxis-gGpg7lh6.js";import{Y as c}from"./YAxis-Dmha2qJn.js";import{L as d}from"./Line-U7gysocc.js";import{R as g}from"./ReferenceLine-14fgRFTJ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-k7AnGod1.js";import"./index-yQCZGhVI.js";import"./index-BiGXtIk6.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BNACGTBd.js";import"./isWellBehavedNumber-DBJb9JTb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bx7VgKe3.js";import"./index-D8WEHlsH.js";import"./index-ybXde8ox.js";import"./axisSelectors-BHZKzxax.js";import"./d3-scale-CLJM1nE7.js";import"./renderedTicksSlice-H0Ext-F-.js";import"./CartesianChart-KT4JQkAx.js";import"./chartDataContext-fDUY1EA6.js";import"./CategoricalChart-BZ6Syier.js";import"./CartesianAxis-D93bSTxK.js";import"./Layer-BZ6Fc3lQ.js";import"./Text-DuH_mhct.js";import"./DOMUtils-CqvRu_MB.js";import"./useId-Ca5c2KHs.js";import"./useBackwardsCompatibleTheme-CqJEL2NO.js";import"./Label-DXZsEXpn.js";import"./ZIndexLayer-FtCXwXjd.js";import"./types-CpUmxW-2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-Dl3donnJ.js";import"./step-DJlKpvLR.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-LAFrqwsd.js";import"./useAnimationId-Ctl7EN5N.js";import"./ActivePoints-BK9QhdV8.js";import"./Dot-CTYtj4mc.js";import"./RegisterGraphicalItemId-VTOA4vtw.js";import"./ErrorBarContext-DKNTm7fJ.js";import"./GraphicalItemClipPath-B5C5ys39.js";import"./SetGraphicalItem-OAT4QAS1.js";import"./getRadiusAndStrokeWidthFromDot-CZbk3-9Z.js";import"./ActiveShapeUtils-DQoUFAUU.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ge=["Segment"];export{t as Segment,ge as __namedExportsOrder,de as default};
