import{R as t}from"./iframe-Dlbg_GZB.js";import{u as a}from"./CategoricalChart-BQo9vmvV.js";import{R as p}from"./zIndexSlice-CMn4Cwlm.js";import{C as s}from"./ComposedChart-BqgVwKSR.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BpbqzpNB.js";import{X as l}from"./XAxis-g3Yqs_q0.js";import{Y as h}from"./YAxis-K45jOkJG.js";import{L as c}from"./Legend-D4rjc0mf.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-_RHeF5kh.js";import"./index-5rk_KAjc.js";import"./index-De4F06zW.js";import"./index-CFtDWJsT.js";import"./index-C4pT71Bv.js";import"./throttle-C3Y4hQMj.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CsfsF6Cn.js";import"./axisSelectors-C_hiMAlk.js";import"./resolveDefaultProps-CIJSTnSl.js";import"./isWellBehavedNumber-BSYl2eep.js";import"./d3-scale-DJYjYDtT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DHiwjDYa.js";import"./chartDataContext-MC8Fu7xC.js";import"./Layer-DlhGxg7N.js";import"./Curve-Dcq__Vxv.js";import"./types-Ctdv5TaQ.js";import"./step-BcjH0w06.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-xmicP7QL.js";import"./Label-d3wc6rF5.js";import"./Text-BLnCmUHB.js";import"./DOMUtils-vSgsVfRP.js";import"./ZIndexLayer-feAlcx_0.js";import"./useAnimationId-K2Oa5cBe.js";import"./ActivePoints-CEnLoFiW.js";import"./Dot-DZ8iWzlt.js";import"./RegisterGraphicalItemId-Dj61QivB.js";import"./ErrorBarContext-BKnwTpIO.js";import"./GraphicalItemClipPath-8DGGiF_D.js";import"./SetGraphicalItem-jqk9vogH.js";import"./getRadiusAndStrokeWidthFromDot-rZ7RT_fb.js";import"./ActiveShapeUtils-BApyZjjc.js";import"./CartesianAxis-dbSJQeo2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-CUnsQXWy.js";import"./symbol-BBKXJ5vn.js";import"./useElementOffset-CDDZoyN1.js";import"./uniqBy-DQCU_Q9Y.js";import"./iteratee-CC9cIx0G.js";const lt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ht=["UsePlotArea"];export{e as UsePlotArea,ht as __namedExportsOrder,lt as default};
