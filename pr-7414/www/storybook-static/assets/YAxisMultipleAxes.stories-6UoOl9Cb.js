import{R as t}from"./iframe-UrDM9Xq3.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-B_QpZZ2v.js";import{R as l}from"./zIndexSlice-ByG8njt8.js";import{C as x}from"./ComposedChart-GlsxxvdN.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BOsKiamZ.js";import{L as a}from"./Line-CBbW_oQO.js";import{X as c}from"./XAxis-DnTKDl6t.js";import{T as g}from"./Tooltip-BtWRcXYO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DL-gpN5o.js";import"./CartesianAxis-DMp3qHuF.js";import"./Layer-CegbOy6-.js";import"./resolveDefaultProps-PeQIR1GL.js";import"./Text-Z9b8Q3If.js";import"./DOMUtils-B87CjqTu.js";import"./isWellBehavedNumber-CLVIVmGZ.js";import"./Label-KmMVZ1kh.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DAEesPn0.js";import"./index-DNiwhT54.js";import"./index-Cn_MLy2m.js";import"./types-DWkwwyEz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-SpzHxRDt.js";import"./immer-CN88OGp3.js";import"./RechartsWrapper-Dm1mVgCK.js";import"./index-B2ZS3Yz1.js";import"./index-4YA6lX68.js";import"./axisSelectors-BJCtqUC9.js";import"./d3-scale-DVQsPwxD.js";import"./string-B6fdYHAA.js";import"./CartesianChart-H9EcaXcZ.js";import"./chartDataContext-K_upA5vN.js";import"./CategoricalChart-CUBoZ8Vx.js";import"./tooltipContext-Dgrt9PpW.js";import"./AnimatedItems-BNMmNPct.js";import"./useAnimationId-cQnLIEvC.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CvnkFbTC.js";import"./ActiveShapeUtils-BKflvOdY.js";import"./RegisterGraphicalItemId-cO8s0yof.js";import"./ErrorBarContext-DmZiqBUr.js";import"./GraphicalItemClipPath-1r6w1RAv.js";import"./SetGraphicalItem-BPavUJGK.js";import"./getZIndexFromUnknown-C57GEJc7.js";import"./graphicalItemSelectors-C80CPUyS.js";import"./Curve-CCWULKwl.js";import"./step-CNXFBr8Q.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CH7YBRlt.js";import"./Dot-BIf_XmV-.js";import"./getRadiusAndStrokeWidthFromDot-CQ6KKJq4.js";import"./useElementOffset-DjPVz3Qr.js";import"./uniqBy-BaWx7qNK.js";import"./iteratee-CIqk3D2T.js";import"./Cross-DmyT7eEk.js";import"./Sector-Dybua4qM.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
