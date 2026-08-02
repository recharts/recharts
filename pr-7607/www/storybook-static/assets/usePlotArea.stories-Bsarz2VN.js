import{R as t}from"./iframe-Da76_689.js";import{u as a}from"./CategoricalChart-D82DfAs8.js";import{R as p}from"./zIndexSlice-a0xNinnk.js";import{C as s}from"./ComposedChart--w51xXk6.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Cqr58geY.js";import{X as l}from"./XAxis-DepWA4im.js";import{Y as h}from"./YAxis-Dp_F69G6.js";import{L as c}from"./Legend-D54_s6lq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BJISCefM.js";import"./index-DhFXp8vM.js";import"./index-JDhekbA3.js";import"./index-C8Z1S5Pt.js";import"./index-DUt0bfqM.js";import"./throttle-COYVVxZg.js";import"./get-C2VjdU0L.js";import"./renderedTicksSlice-ObOqR6xe.js";import"./axisSelectors-Bw6517Pm.js";import"./resolveDefaultProps-BpFPYIFo.js";import"./isWellBehavedNumber-CH2-kpaa.js";import"./d3-scale-DyCdYIOY.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cprw1vi1.js";import"./chartDataContext-BxrKQ5f-.js";import"./Layer-BItCE877.js";import"./Curve-BZ7uJ3AN.js";import"./types-Dy7AAOTV.js";import"./step-fSL6Yfr6.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-TTrqb8VQ.js";import"./Label-BNqYKN1e.js";import"./Text-C0rNKqCf.js";import"./DOMUtils-B2_jGy5F.js";import"./ZIndexLayer-DP22msHm.js";import"./useAnimationId-hnsh8Uwf.js";import"./ActivePoints-XUjLYmrr.js";import"./Dot-Clx9ykW3.js";import"./RegisterGraphicalItemId-DiJJvqsF.js";import"./ErrorBarContext-rSCCD8H3.js";import"./GraphicalItemClipPath-BO9b33Ly.js";import"./SetGraphicalItem-Bzc-F73M.js";import"./graphicalItemIdentity-HzAIj0MZ.js";import"./ActiveShapeUtils-Da9-43zR.js";import"./RechartsThemeContext-BbZg4AjH.js";import"./CartesianAxis-BQNrFnRM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C6OkA8gc.js";import"./symbol-BZZREhJC.js";import"./useElementOffset-BzkW5WMd.js";import"./uniqBy-CW1xeKFH.js";import"./iteratee-Bhotarsi.js";const ct={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
