import{R as t}from"./iframe-DeP4Wy7i.js";import{j as a}from"./RechartsWrapper-CSrF3qvK.js";import{R as p}from"./zIndexSlice-nnPIR1gF.js";import{C as n}from"./ComposedChart-CJez4X5P.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BE3lNE-B.js";import{X as l}from"./XAxis-D55ujQEE.js";import{Y as h}from"./YAxis-Blw3_-Cc.js";import{L as c}from"./Legend-Wsna19w5.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cuw6EoTI.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CZy9dm6d.js";import"./throttle-meF8BPI2.js";import"./index-iD4LtFlt.js";import"./index-CP6Rv1Sw.js";import"./isWellBehavedNumber-oQsvKY8H.js";import"./d3-scale-BMFuZ2xk.js";import"./index-bTLe7Jwh.js";import"./index-LaINuLzR.js";import"./renderedTicksSlice-UEqy9PPR.js";import"./index-BI5vUZLp.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-n8mpzi4z.js";import"./chartDataContext-O08JVLGx.js";import"./CategoricalChart-DHRd-r0A.js";import"./Layer-CBmTHU88.js";import"./Curve-BgvZ8zEy.js";import"./types-CanfrVuk.js";import"./step-D7VIgsjb.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-XIng_I1E.js";import"./Label-BDn5In4u.js";import"./Text-tlJnHXas.js";import"./DOMUtils-fGj0XAk5.js";import"./useId-Bwy1FQE5.js";import"./useBackwardsCompatibleTheme-CIuhIiJU.js";import"./ZIndexLayer-46z2Emao.js";import"./useAnimationId-BrY9w4yL.js";import"./ActivePoints-CKZ5Aqki.js";import"./Dot-BLQMwT0r.js";import"./RegisterGraphicalItemId-C2Pze7xm.js";import"./ErrorBarContext-kXoA89OY.js";import"./GraphicalItemClipPath-F-rOP2Wx.js";import"./SetGraphicalItem-Bb8kLJya.js";import"./getRadiusAndStrokeWidthFromDot-mAqkcHAK.js";import"./ActiveShapeUtils-DbA45Jz_.js";import"./useGraphicalItemIdentity-DO54SzyN.js";import"./CartesianAxis-CZDdo6k-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Bx3k4bkK.js";import"./symbol-CoUfccn9.js";import"./useElementOffset-DWI8BIOr.js";import"./uniqBy-Dv4DpKxP.js";import"./iteratee-CkWGGgWz.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
