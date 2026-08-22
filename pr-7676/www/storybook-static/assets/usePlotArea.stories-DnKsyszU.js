import{R as t}from"./iframe-Ca32ubBP.js";import{u as a}from"./CategoricalChart-CBCGNfzQ.js";import{R as p}from"./zIndexSlice-dHiwLFUj.js";import{C as s}from"./ComposedChart-BtIdPlG5.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-C8JVpIOW.js";import{X as l}from"./XAxis-Doj-lEYw.js";import{Y as h}from"./YAxis-wOxJ_8VY.js";import{L as c}from"./Legend-Ndh8y7nt.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C_dCGHdd.js";import"./index-CHNh1dey.js";import"./index-Dge3NWQD.js";import"./index-8HLzHw6r.js";import"./index-CHnduxoF.js";import"./throttle-B0sCMXOK.js";import"./get-C2VjdU0L.js";import"./axisSelectors-A6ndeoHc.js";import"./resolveDefaultProps-FNg74tNy.js";import"./isWellBehavedNumber-C-9KtVDX.js";import"./d3-scale-Do2gUorH.js";import"./renderedTicksSlice-CpRpGU6M.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D1u_uw1Q.js";import"./chartDataContext-Dgyo9muf.js";import"./Layer-B0UktO7Z.js";import"./Curve-BTmElVc4.js";import"./types-_9LccsBU.js";import"./step-CYvNd-lj.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CDoRaH70.js";import"./Label-DD1RmAzE.js";import"./Text-i5MeFzWV.js";import"./DOMUtils-BJ447lE9.js";import"./useId-BjxuxzLj.js";import"./useBackwardsCompatibleTheme-Ddp8u6f9.js";import"./ZIndexLayer-BAqimWYO.js";import"./useAnimationId-B8VHZUPO.js";import"./ActivePoints-BBA7jI6r.js";import"./Dot-B4PeYlma.js";import"./RegisterGraphicalItemId-B_2qN3HQ.js";import"./ErrorBarContext-CAeoPaJo.js";import"./GraphicalItemClipPath-CrTkoGhX.js";import"./SetGraphicalItem-CnmA_FOG.js";import"./getRadiusAndStrokeWidthFromDot-BY_VbDBa.js";import"./ActiveShapeUtils-x7koemir.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-Dfpoi9-r.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DPe3GKhA.js";import"./symbol-gQzWWZLj.js";import"./useElementOffset-B__IOwrq.js";import"./uniqBy-Vn-_Z9lW.js";import"./iteratee-C66mF7I5.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
