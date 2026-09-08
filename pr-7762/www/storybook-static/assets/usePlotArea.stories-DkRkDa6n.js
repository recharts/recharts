import{R as t}from"./iframe-BAkJeTr4.js";import{j as a}from"./RechartsWrapper-EWDb0L0f.js";import{R as p}from"./zIndexSlice-CKNgQ3a1.js";import{C as n}from"./ComposedChart-BuIARBZ7.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CY96wbQv.js";import{X as l}from"./XAxis-BD-kVe53.js";import{Y as h}from"./YAxis-wkouAcT5.js";import{L as c}from"./Legend-Dcb99-gu.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-5cpPAvAv.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CSrb8LKj.js";import"./throttle-Dv1aPsuB.js";import"./index-DjVuoFnH.js";import"./index-XgffbxYa.js";import"./isWellBehavedNumber-tRFPHljB.js";import"./d3-scale-CDR0rKSq.js";import"./index-DAtUpVNY.js";import"./index-D15jXgP1.js";import"./renderedTicksSlice-BJEMwp3X.js";import"./index-I2U5t58b.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DDPBhM-t.js";import"./chartDataContext-BT4eLMiU.js";import"./CategoricalChart-BbbjbFxH.js";import"./Layer-CKQWhaEi.js";import"./Curve-BVog-1mq.js";import"./types-HIIkAPMh.js";import"./step-C9hVegCW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DuF6Bkm2.js";import"./Label-Dc3MUSo6.js";import"./Text-CbVPJcpZ.js";import"./DOMUtils-Cq0_H_rP.js";import"./useId-Dap1RfTv.js";import"./useBackwardsCompatibleTheme-sM5V7IYB.js";import"./ZIndexLayer-D5m0oF5l.js";import"./useAnimationId-CvTUgOKN.js";import"./ActivePoints-AYIQDcyP.js";import"./Dot-CleLxuMG.js";import"./RegisterGraphicalItemId-Bt_uVbrn.js";import"./ErrorBarContext-DuO3heB_.js";import"./GraphicalItemClipPath-Bys_fmGG.js";import"./SetGraphicalItem-BwMH--N4.js";import"./getRadiusAndStrokeWidthFromDot-BNUuDnnH.js";import"./ActiveShapeUtils-EPv0ZgAx.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-DtahLlIk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-fYq7nkG0.js";import"./symbol-DpBVLgIw.js";import"./useElementOffset-A8S9o9XT.js";import"./uniqBy-DQFF8pwP.js";import"./iteratee-plK0tt8R.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
