import{R as t}from"./iframe-C2y7-rH2.js";import{j as a}from"./RechartsWrapper-BcfYPaoe.js";import{R as p}from"./zIndexSlice-BQPOy7As.js";import{C as n}from"./ComposedChart-CwCxFjZe.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DB6VwbSy.js";import{X as l}from"./XAxis-BRv-fAhZ.js";import{Y as h}from"./YAxis-B28w59_W.js";import{L as c}from"./Legend-Bz20O50v.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-vPK17mKC.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Bw0Qwigf.js";import"./throttle-BDe4zlG9.js";import"./index-Bz54eCtj.js";import"./index-ChrJmNNe.js";import"./isWellBehavedNumber-6_l4g7Xi.js";import"./d3-scale-D07iQYqn.js";import"./index-DyeRA5Td.js";import"./index-OvZqyYfZ.js";import"./renderedTicksSlice-DVIPHfrA.js";import"./index-DN97KnNV.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B1na8-qP.js";import"./chartDataContext-ClTM7zwW.js";import"./CategoricalChart-BgXqKpLI.js";import"./Layer-Y5hBKOyR.js";import"./Curve-Bc1dsSwG.js";import"./types-DDulV5vn.js";import"./step-CDQ_m3Wy.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CrKX7S12.js";import"./Label-CSUQJf-z.js";import"./Text-Dg2YZl1D.js";import"./DOMUtils-CYVmP7ld.js";import"./useId-rIBzQY0F.js";import"./useBackwardsCompatibleTheme-xd8BeFgY.js";import"./ZIndexLayer-Cqkx5XlC.js";import"./useAnimationId-BlRPNYZD.js";import"./ActivePoints-DOuEp3Ot.js";import"./Dot-Di-XdVIz.js";import"./RegisterGraphicalItemId-CD4HP7HF.js";import"./ErrorBarContext-J0sVh-nS.js";import"./GraphicalItemClipPath-SSZXiCnp.js";import"./SetGraphicalItem-B36qE1ly.js";import"./getRadiusAndStrokeWidthFromDot-AXkwLV7A.js";import"./ActiveShapeUtils-CXM-saMn.js";import"./useGraphicalItemIdentity-B5eIfUAt.js";import"./CartesianAxis-DwUPIt0X.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-D5N7fhe9.js";import"./symbol-BfZZVleY.js";import"./useElementOffset-kO2xZAmN.js";import"./uniqBy-Cquckdt6.js";import"./iteratee-CbQmO-Fp.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
