import{R as t}from"./iframe-CbdG93Rp.js";import{u as a}from"./CategoricalChart-BZ6Syier.js";import{R as p}from"./zIndexSlice-BBA2vYL9.js";import{C as s}from"./ComposedChart-BlErnFXo.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-U7gysocc.js";import{X as l}from"./XAxis-gGpg7lh6.js";import{Y as h}from"./YAxis-Dmha2qJn.js";import{L as c}from"./Legend-Dz0C8B_9.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bx7VgKe3.js";import"./index-D8WEHlsH.js";import"./index-ybXde8ox.js";import"./index-yQCZGhVI.js";import"./index-BiGXtIk6.js";import"./throttle-k7AnGod1.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BHZKzxax.js";import"./resolveDefaultProps-BNACGTBd.js";import"./isWellBehavedNumber-DBJb9JTb.js";import"./d3-scale-CLJM1nE7.js";import"./renderedTicksSlice-H0Ext-F-.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-KT4JQkAx.js";import"./chartDataContext-fDUY1EA6.js";import"./Layer-BZ6Fc3lQ.js";import"./Curve-Dl3donnJ.js";import"./types-CpUmxW-2.js";import"./step-DJlKpvLR.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-LAFrqwsd.js";import"./Label-DXZsEXpn.js";import"./Text-DuH_mhct.js";import"./DOMUtils-CqvRu_MB.js";import"./useId-Ca5c2KHs.js";import"./useBackwardsCompatibleTheme-CqJEL2NO.js";import"./ZIndexLayer-FtCXwXjd.js";import"./useAnimationId-Ctl7EN5N.js";import"./ActivePoints-BK9QhdV8.js";import"./Dot-CTYtj4mc.js";import"./RegisterGraphicalItemId-VTOA4vtw.js";import"./ErrorBarContext-DKNTm7fJ.js";import"./GraphicalItemClipPath-B5C5ys39.js";import"./SetGraphicalItem-OAT4QAS1.js";import"./getRadiusAndStrokeWidthFromDot-CZbk3-9Z.js";import"./ActiveShapeUtils-DQoUFAUU.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-D93bSTxK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CuasTVW9.js";import"./symbol-DOXCA695.js";import"./useElementOffset-g697mWa_.js";import"./uniqBy-BjmPaqQH.js";import"./iteratee-mNdZ8SiJ.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const At=["UsePlotArea"];export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
