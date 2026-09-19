import{R as t}from"./iframe-EacBJx3u.js";import{j as a}from"./RechartsWrapper-DvnaJvMy.js";import{R as p}from"./zIndexSlice-BiNX82M2.js";import{C as n}from"./ComposedChart-DLV9kOGF.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CgqeytmG.js";import{X as l}from"./XAxis-Cl6K2xWP.js";import{Y as h}from"./YAxis-qieo9xUf.js";import{L as c}from"./Legend-DUal1kSr.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Pp64jnNu.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BsKbaT3c.js";import"./throttle-CQWyIvYS.js";import"./index-zONtSjtR.js";import"./index-Cp5XPxNK.js";import"./isWellBehavedNumber-cllAzHLG.js";import"./d3-scale-XN8I2g_L.js";import"./index-Cjnu8Ghr.js";import"./index-DAXn18Z3.js";import"./renderedTicksSlice-Bi45b659.js";import"./index-BWFLwSJj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CpkU4zi_.js";import"./chartDataContext-6_AZEoRj.js";import"./CategoricalChart-DR3NAbyi.js";import"./Layer-BUsl6vHA.js";import"./Curve-DXkxZuR3.js";import"./types-CDt3wtpt.js";import"./step--LIF_hlk.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CgPok0XL.js";import"./Label-DrX_jEaz.js";import"./Text-DusUwDRl.js";import"./DOMUtils-R4-PljPA.js";import"./useId-Cx3ryNMd.js";import"./useBackwardsCompatibleTheme-C878E-FF.js";import"./ZIndexLayer-CbjobkdE.js";import"./useAnimationId-BrvpB7V7.js";import"./ActivePoints-BKu6KFOZ.js";import"./Dot-Dlf7mAE0.js";import"./RegisterGraphicalItemId-C6xi7qpR.js";import"./ErrorBarContext-Di28pWGd.js";import"./GraphicalItemClipPath-DdpslyMR.js";import"./SetGraphicalItem-DIVfOwKJ.js";import"./getRadiusAndStrokeWidthFromDot-D1gfmqoH.js";import"./ActiveShapeUtils-D1Q_UPVj.js";import"./useGraphicalItemIdentity-PgG_6CLw.js";import"./CartesianAxis-DHoeZLWk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DQqKkMeQ.js";import"./symbol-Gpg8Q1c8.js";import"./useElementOffset-CW3PsA1I.js";import"./uniqBy-DulbN1k2.js";import"./iteratee-CZcssftL.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
