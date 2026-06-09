import{R as t}from"./iframe-Bvg5iw6Z.js";import{u as a}from"./CategoricalChart-D7IINMSs.js";import{R as p}from"./zIndexSlice-Ds_NjbNn.js";import{C as s}from"./ComposedChart-20ZO85Nl.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-X30bFimQ.js";import{X as l}from"./XAxis-DCRWzJVy.js";import{Y as h}from"./YAxis-DfqNaUIm.js";import{L as c}from"./Legend-By9J81jo.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CHMdqOJQ.js";import"./index-D6uOIfEh.js";import"./index-DjoxYWbz.js";import"./index-Ce12os93.js";import"./index-C7ALVEHS.js";import"./immer-DHoEBynv.js";import"./get-DHB3VUn4.js";import"./renderedTicksSlice-BOSAcKeB.js";import"./axisSelectors-ChUTyiTu.js";import"./d3-scale-C3JFNDzB.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-DdhPeWBo.js";import"./isWellBehavedNumber-BfXcmwrI.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B5xnpDkJ.js";import"./chartDataContext-C4maze1A.js";import"./Layer-irp4ME8h.js";import"./Curve-C6rubuUm.js";import"./types-C-xtjdCV.js";import"./step-CEyafom-.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BUtl3ij7.js";import"./Label-DkRUWIp2.js";import"./Text-DjnMaOWq.js";import"./DOMUtils-DJUlICsZ.js";import"./ZIndexLayer-BSVnK8Dt.js";import"./useAnimationId-BOUeGlQ3.js";import"./ActivePoints-DfDHJRbx.js";import"./Dot-dsakJdmW.js";import"./RegisterGraphicalItemId-DtXuMSpf.js";import"./ErrorBarContext-CM-RxSPr.js";import"./GraphicalItemClipPath-VUPv1woh.js";import"./SetGraphicalItem-DwOFrAeq.js";import"./getRadiusAndStrokeWidthFromDot-DrdS8yiS.js";import"./ActiveShapeUtils-DAESvJMs.js";import"./CartesianAxis-_p8UXmcr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-Cq3i7-Qm.js";import"./symbol-ht2nF6AE.js";import"./useElementOffset-DAsw9AdB.js";import"./uniqBy-B9Wdfl7r.js";import"./iteratee-BBjRdKWi.js";const ht={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
