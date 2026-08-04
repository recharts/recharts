import{R as t}from"./iframe-8y2_-y0l.js";import{u as a}from"./CategoricalChart-CTEs6pXe.js";import{R as p}from"./zIndexSlice-D_xG4Od1.js";import{C as s}from"./ComposedChart-k0StXg-x.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-b4Fm44kj.js";import{X as l}from"./XAxis-C-STHEWl.js";import{Y as h}from"./YAxis-Cka8X-Di.js";import{L as c}from"./Legend-BERrS3MS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B7Kkv9qM.js";import"./index-DMzHieur.js";import"./index-4aNbOO2K.js";import"./index-DRQy4x13.js";import"./index-BErx7veh.js";import"./throttle-vJw1Gj7e.js";import"./get-C2VjdU0L.js";import"./renderedTicksSlice-CEAAcomA.js";import"./axisSelectors-CSK4MjLf.js";import"./resolveDefaultProps-Dr9m88pQ.js";import"./isWellBehavedNumber-CdgGUQY1.js";import"./d3-scale-U7OEzOLT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CB-6O5b4.js";import"./chartDataContext-CRN46eEy.js";import"./Layer-Bx7fY7lj.js";import"./Curve-rx89tdOF.js";import"./types-BqBuCCYn.js";import"./step-DuBNKbdJ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D2ax0Lv8.js";import"./Label-DkE66McM.js";import"./Text-DSeRyRP0.js";import"./DOMUtils-BWSGK_7w.js";import"./ZIndexLayer-Db2-KFbv.js";import"./useAnimationId-Cseq293z.js";import"./ActivePoints-DmGp4Tvx.js";import"./Dot-D1wqWj67.js";import"./RegisterGraphicalItemId-CtYEtvHk.js";import"./ErrorBarContext-CT8kogTh.js";import"./GraphicalItemClipPath-CtYHN7Zm.js";import"./SetGraphicalItem-DMAc9VE6.js";import"./graphicalItemIdentity-CpyAXlc1.js";import"./ActiveShapeUtils-Bx5pmo_f.js";import"./RechartsThemeContext-D6NJDAxr.js";import"./CartesianAxis-Dxt7VdA8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DT910lYp.js";import"./symbol-B3ZeMIeQ.js";import"./useElementOffset-CCRtAZkL.js";import"./uniqBy-CU4rcLT3.js";import"./iteratee-CmpuqRan.js";const ct={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
