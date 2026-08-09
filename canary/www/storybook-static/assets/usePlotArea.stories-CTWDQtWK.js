import{R as t}from"./iframe-L3U4PXsg.js";import{u as a}from"./CategoricalChart-mkEHtD3F.js";import{R as p}from"./zIndexSlice-DEY0PQhJ.js";import{C as s}from"./ComposedChart-Dkixnof2.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-C9P8vBQm.js";import{X as l}from"./XAxis-Cr6XecvK.js";import{Y as h}from"./YAxis-f7uBkTcv.js";import{L as c}from"./Legend-DtkrYBZW.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dhr4IQZK.js";import"./index-kTWfYntd.js";import"./index-ywjMrX_X.js";import"./index-Bc6oV31c.js";import"./index-DwDM_7Ax.js";import"./throttle-1AGwrNmW.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BUQrPPfP.js";import"./resolveDefaultProps-DZ-vNTge.js";import"./isWellBehavedNumber-BwlzE5Kb.js";import"./d3-scale-BML9T1At.js";import"./renderedTicksSlice-D2JO8twM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-INIUEhvM.js";import"./chartDataContext-EPhxp5b3.js";import"./Layer-CK7JaaLc.js";import"./Curve-SKtCcge4.js";import"./types-oKR4keO9.js";import"./step-0OJURZ58.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Cx-Jnru-.js";import"./Label-B7Q2YiAq.js";import"./Text-DovToi-v.js";import"./DOMUtils-BtvfpILU.js";import"./ZIndexLayer-Bn3RUVWt.js";import"./useAnimationId-BO1w5K0N.js";import"./ActivePoints-DANj5o8Y.js";import"./Dot-B_tF6fjU.js";import"./RegisterGraphicalItemId-CUZSiPzN.js";import"./ErrorBarContext-BscpV9GC.js";import"./GraphicalItemClipPath-BgQIEIQL.js";import"./SetGraphicalItem-BkVYHSQy.js";import"./getRadiusAndStrokeWidthFromDot-HzlbV5QW.js";import"./ActiveShapeUtils-DLAF0QLB.js";import"./RechartsThemeContext-CsEJ0H_M.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-DJ55n4uj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C3FHvuf0.js";import"./symbol-Da9x_VYL.js";import"./useElementOffset-AZryebb6.js";import"./uniqBy-BfdCN-YR.js";import"./iteratee-BsSJFXKh.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ut=["UsePlotArea"];export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
