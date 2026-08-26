import{R as t}from"./iframe-DgQvZQyh.js";import{u as a}from"./CategoricalChart-ZwyKDo7N.js";import{R as p}from"./zIndexSlice-Btq-n8Y8.js";import{C as s}from"./ComposedChart-BGAWRlKr.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-ndrlyXuf.js";import{X as l}from"./XAxis-B4xwOvnI.js";import{Y as h}from"./YAxis-B-S92WaL.js";import{L as c}from"./Legend-CvI7QQBV.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DQot8Dvj.js";import"./index-Bb9OGTvq.js";import"./index-D86HQKsa.js";import"./index-Cq8r6DAn.js";import"./index-BZXsqVam.js";import"./throttle-Dk-DfWHx.js";import"./get-C2VjdU0L.js";import"./axisSelectors-VvYM7u3M.js";import"./resolveDefaultProps-CgdEm8CY.js";import"./isWellBehavedNumber-1FtJDRA4.js";import"./d3-scale-uYT3pExD.js";import"./renderedTicksSlice-Cx5LcFk7.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CPjqqiaN.js";import"./chartDataContext-CZdqNQBA.js";import"./Layer-jy0y6JzX.js";import"./Curve-ihXVzoU6.js";import"./types-DyDamtmF.js";import"./step-ByO1iE7m.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CDuN3lv4.js";import"./Label-D7SUzQZZ.js";import"./Text-BCNrLAhU.js";import"./DOMUtils-Dc6imoC2.js";import"./useId-Dpr_zhHQ.js";import"./useBackwardsCompatibleTheme-CyfSeWLo.js";import"./ZIndexLayer-COjkhmxj.js";import"./useAnimationId-CMrpUBKd.js";import"./ActivePoints-Lw7-gIIJ.js";import"./Dot-Cp5LqDbN.js";import"./RegisterGraphicalItemId-CgmuqVKA.js";import"./ErrorBarContext-C9gjoIKa.js";import"./GraphicalItemClipPath-wWG5NmBB.js";import"./SetGraphicalItem-WfznSmPk.js";import"./getRadiusAndStrokeWidthFromDot-zg-JnYSm.js";import"./ActiveShapeUtils-bdnMAsi3.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BguBsSE9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Cx2m1nqb.js";import"./symbol-DU_MIklD.js";import"./useElementOffset-BASXZrSa.js";import"./uniqBy-rST57Vux.js";import"./iteratee-BL-nEGkT.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
