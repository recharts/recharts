import{R as t}from"./iframe-DUnkgIOQ.js";import{e as a}from"./RechartsWrapper-Cnrgjbh6.js";import{R as p}from"./zIndexSlice-r-fMsMuk.js";import{C as n}from"./ComposedChart-DmUk4KiU.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Bcr6rtjC.js";import{X as l}from"./XAxis-CsNzSfhq.js";import{Y as h}from"./YAxis-CvXueHp_.js";import{L as c}from"./Legend-q2Udb48u.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DLNxblaS.js";import"./get-C2VjdU0L.js";import"./axisSelectors-zqyiWpFa.js";import"./throttle-BvBsSQNH.js";import"./index-Bi2SJwnS.js";import"./index-DrITryDs.js";import"./isWellBehavedNumber-dou1peGm.js";import"./d3-scale-D5X6Q4ub.js";import"./index-BneZVI-r.js";import"./index-B4osSD3q.js";import"./renderedTicksSlice-B8EBEqyh.js";import"./index-CsDFOcOo.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-5Wn1_YAG.js";import"./chartDataContext-jAnWnb0r.js";import"./CategoricalChart-CgAmM9Jo.js";import"./Layer-B-Hy8zN7.js";import"./Curve-DuIVBM1d.js";import"./types-BzNQj-ku.js";import"./step-BgKuKAEi.js";import"./path-DyVhHtw_.js";import"./activeStyles-BaanO1pI.js";import"./Label-C4zX0cwX.js";import"./Text-2AgJvCRv.js";import"./pageBackground-DK5qsHYc.js";import"./useId-NTbtm6dC.js";import"./useBackwardsCompatibleTheme-BSnNSNn_.js";import"./ZIndexLayer-BhOOp4BW.js";import"./useAnimationId-Dm7GmgCn.js";import"./dataEntryStyles-YmAEtIi5.js";import"./ActivePoints-CKn97wio.js";import"./Dot-DF5hxMLE.js";import"./ErrorBarContext-CpGIL_Og.js";import"./GraphicalItemClipPath-YZJU-iu_.js";import"./SetGraphicalItem-C8kjqmoZ.js";import"./getRadiusAndStrokeWidthFromDot-DP2NGMyj.js";import"./ActiveShapeUtils-jD8IoLvy.js";import"./useEffectiveDataKey-BUAhKumu.js";import"./CartesianAxis-DLgiES_b.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DQWfOt37.js";import"./symbol-DaljVJK8.js";import"./useElementOffset-CA4XVRci.js";import"./uniqBy-iGwqEOr_.js";import"./iteratee-DrlCX8r1.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
