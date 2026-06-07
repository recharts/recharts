import{R as t}from"./iframe-B27eVaFF.js";import{u as a}from"./CategoricalChart-DFkUIq_Y.js";import{R as p}from"./zIndexSlice-DLq0QSm6.js";import{C as s}from"./ComposedChart-CYtA9C9q.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Bk9BDUUg.js";import{X as l}from"./XAxis-C-VjsgkB.js";import{Y as h}from"./YAxis-CC995jnJ.js";import{L as c}from"./Legend-iE0muHoS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DlESZ7tm.js";import"./index-Cw-Wuc3D.js";import"./index-DI6zkpD0.js";import"./index-DoegUUyt.js";import"./index-DDpWztz3.js";import"./immer-YcLAmGMI.js";import"./get-BRxKQDDf.js";import"./renderedTicksSlice-DHlObRt7.js";import"./axisSelectors-DxuiIF3z.js";import"./d3-scale-BTGRH2n_.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-BE08UwbV.js";import"./isWellBehavedNumber-CotgHNs1.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bm35oZlB.js";import"./chartDataContext-Cx0GXsRx.js";import"./Layer-CvC1SkE0.js";import"./Curve-C9ctIi4z.js";import"./types-CkVecV7M.js";import"./step-C1n6zis1.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-6YxWbeO7.js";import"./Label-k_ca_Zdh.js";import"./Text-dTW2gHUK.js";import"./DOMUtils-DxsvOJTL.js";import"./ZIndexLayer-DlBEWXQx.js";import"./useAnimationId-BitHcKd_.js";import"./ActivePoints-59Xfju6r.js";import"./Dot-CXeM3dGw.js";import"./RegisterGraphicalItemId-oZqB1u6h.js";import"./ErrorBarContext-tb2PhcR_.js";import"./GraphicalItemClipPath-BA_nO_Lx.js";import"./SetGraphicalItem-DWdSfkk6.js";import"./getRadiusAndStrokeWidthFromDot-Dvm3ARSn.js";import"./ActiveShapeUtils-Bzy2q7aU.js";import"./CartesianAxis-1UkcRdSJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DHmT1gXs.js";import"./symbol-DcOqxn3y.js";import"./useElementOffset-IkfKbF5l.js";import"./uniqBy-BtjkBcJS.js";import"./iteratee-B8u85uZV.js";const ht={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ct=["UsePlotArea"];export{e as UsePlotArea,ct as __namedExportsOrder,ht as default};
