import{e as t}from"./iframe-GFfTjQoK.js";import{P as a}from"./PlotAreaShower-DSjypVDX.js";import{c as p}from"./hooks-CqeOQ7eW.js";import{R as s}from"./arrayEqualityCheck-rTBxpMje.js";import{C as n}from"./ComposedChart-D9Sx-1p6.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BM3xvdML.js";import{X as h}from"./XAxis-DKH_cPy1.js";import{Y as c}from"./YAxis-BZdMUrT_.js";import{L as g}from"./Legend-BemLAAW3.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-C4mVk4KC.js";import"./immer-DuJeroaq.js";import"./axisSelectors-L84MoTjP.js";import"./d3-scale-BPfRQFr_.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BjWq3AFN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C0HFJBeI.js";import"./index-DXddhZW0.js";import"./zIndexSlice-BfN4rN3H.js";import"./renderedTicksSlice-DKYVxNAz.js";import"./CartesianChart-D-2ecpa2.js";import"./chartDataContext-FYXA0LCO.js";import"./CategoricalChart-B30LS6x5.js";import"./Layer-CKdwahrM.js";import"./ReactUtils-D17-4l-2.js";import"./Label-B7hBq0Ji.js";import"./Text-CMg3-e7E.js";import"./DOMUtils-D3LQizf9.js";import"./ZIndexLayer-BaMuJtoq.js";import"./ActivePoints-DRajpHvZ.js";import"./Dot-zVj_nUxC.js";import"./types-CLB7ynuJ.js";import"./RegisterGraphicalItemId-BcS1kKIp.js";import"./ErrorBarContext-CFOED4N_.js";import"./GraphicalItemClipPath-Bgdp1vAv.js";import"./SetGraphicalItem-mKeT8kkZ.js";import"./useAnimationId-Yz3h7jnZ.js";import"./getRadiusAndStrokeWidthFromDot-DW9LVMsc.js";import"./ActiveShapeUtils-rLEzUBWB.js";import"./isPlainObject-DZFhrpuV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CYvKy2lW.js";import"./Trapezoid-BzxYlSmA.js";import"./Sector-BM4VUaxN.js";import"./Symbols-I86a4FCe.js";import"./symbol-B1lNwkQx.js";import"./step-BFgO3zi8.js";import"./Curve-mNHJmuek.js";import"./CartesianAxis-Cx84Q0BH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-C2BhWW9o.js";import"./uniqBy-CZKOzj_D.js";import"./iteratee-DZbtrRGQ.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <PlotAreaShower />
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["UsePlotArea"];export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
