import{R as t}from"./iframe-CXzAxIFn.js";import{e as a}from"./CategoricalChart-CEtFLcT-.js";import{R as p}from"./zIndexSlice-DKHp-gjy.js";import{C as s}from"./ComposedChart-Dp1v7Rwh.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-8hDx2QW5.js";import{X as l}from"./XAxis-CskEzE-5.js";import{Y as h}from"./YAxis-wlQFPYGV.js";import{L as c}from"./Legend-B0xzYbYL.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CktPaUvK.js";import"./index-ZTBFmJUb.js";import"./index-Bt5TuINX.js";import"./index-D8seYp4q.js";import"./index-CTRG8-wP.js";import"./throttle-BEsGyRMh.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BUJigeZt.js";import"./resolveDefaultProps-JH3hFqB6.js";import"./isWellBehavedNumber-De_HX__8.js";import"./d3-scale-BDPPBhC0.js";import"./renderedTicksSlice-CEhRwZ6b.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-8S5--7wV.js";import"./chartDataContext-DY-mZyCM.js";import"./Layer-ypGDY04h.js";import"./Curve-sYpKNcK8.js";import"./types-BCNeIHLh.js";import"./step-DNi3GMvN.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DRjz3iml.js";import"./Label-BVxyVS7u.js";import"./Text-CpguaXBO.js";import"./DOMUtils-tMvYpyJu.js";import"./ZIndexLayer-1UiKp4gF.js";import"./useAnimationId-BbyN3hun.js";import"./ActivePoints-BYqyQqlG.js";import"./Dot-B4u9F4mm.js";import"./RegisterGraphicalItemId-CeJgXyMl.js";import"./ErrorBarContext-xfWRS9uR.js";import"./graphicalItemIdentity-D7fkuVDS.js";import"./SetGraphicalItem-CTeY4uJY.js";import"./getRadiusAndStrokeWidthFromDot-w3Si_Ccg.js";import"./ActiveShapeUtils-CfdhJDcC.js";import"./RechartsThemeContext-CpUwpPC6.js";import"./CartesianAxis-DNVNHP1o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-M_D3JkXn.js";import"./symbol-BPpS_VN0.js";import"./useElementOffset-Cj8IkOFp.js";import"./uniqBy-Bi1ukr1C.js";import"./iteratee-zjhPqw6K.js";const ct={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["UsePlotArea"];export{e as UsePlotArea,gt as __namedExportsOrder,ct as default};
