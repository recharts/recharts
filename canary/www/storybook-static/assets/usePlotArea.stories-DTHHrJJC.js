import{R as t}from"./iframe-C1szs8Ge.js";import{z as p}from"./RechartsWrapper-xd3kaPdN.js";import{R as a}from"./zIndexSlice-2Z2wgmDW.js";import{C as n}from"./ComposedChart-CENNwY7-.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BHGjXSGr.js";import{X as l}from"./XAxis-DAR-gQPA.js";import{Y as h}from"./YAxis-BL_YScKz.js";import{L as c}from"./Legend-EF6fUOtk.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CIiYtXni.js";import"./get-cF5BDHN6.js";import"./axisSelectors-D9npcJPs.js";import"./throttle-BnhEbDBT.js";import"./index-Bs58vI0d.js";import"./index-DcPa8fOp.js";import"./polarAxisSelectors-Du9qp_Aq.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D4TUcbxA.js";import"./index-CRFlBobz.js";import"./index-D0v9EDwx.js";import"./renderedTicksSlice-CTsziWKi.js";import"./index-BmvynZon.js";import"./CartesianChart-CXVzGtkA.js";import"./ZIndexPortal-DqFnA3uG.js";import"./CategoricalChart-dJgQ9xv_.js";import"./Layer-KO-TauTm.js";import"./Curve-BGMmiUdq.js";import"./types-DbKLPbYB.js";import"./step-CEIdKdZW.js";import"./path-DyVhHtw_.js";import"./LabelList-iP8lFrAf.js";import"./Label-DKy-t54T.js";import"./Text-BAXgr8vS.js";import"./DOMUtils-DrwuOTMG.js";import"./ZIndexLayer-n44qhyKx.js";import"./ActivePoints-CPsO1qxs.js";import"./Dot-DMbI3mI2.js";import"./activeStyles-CqRrjByh.js";import"./useAnimationId-Cg9ej0wY.js";import"./dataEntryStyles-D1ZH1qoE.js";import"./Symbols-By-_RD8m.js";import"./symbol-D-xguMnA.js";import"./ErrorBarContext-C-G-Mak5.js";import"./SetGraphicalItem-DIZkXs21.js";import"./getRadiusAndStrokeWidthFromDot-DKxug9PK.js";import"./ActiveShapeUtils-Cmzt23TH.js";import"./useEffectiveDataKey-SSLwUhsN.js";import"./themeFill-BkM1x4hA.js";import"./CartesianAxis-8dKjDOC0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-DO3waM5C.js";import"./useElementOffset-B3huUP7p.js";import"./uniqBy-BgGgOORw.js";import"./iteratee-CroL2MN8.js";import"./isArguments-yB-y1yaH.js";const ft={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},o={name:"usePlotAreaExample",render:r=>t.createElement(a,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},yt=["UsePlotArea"];var e,i,m;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{o as UsePlotArea,yt as __namedExportsOrder,ft as default};
