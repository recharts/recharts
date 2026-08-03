import{R as t}from"./iframe-ge4_mRTY.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-6Axf8DBL.js";import{R as l}from"./zIndexSlice-uDWjDJHd.js";import{C as x}from"./ComposedChart-BCRhkK5V.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BDYz_LHE.js";import{L as a}from"./Line-CVLhEgT6.js";import{X as c}from"./XAxis-DVigS2Vl.js";import{T as g}from"./Tooltip-BXR5Wqsp.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DHHP6jol.js";import"./Text-D0QrHV93.js";import"./resolveDefaultProps-zgTsAR7U.js";import"./DOMUtils-B5z_Rz2Y.js";import"./isWellBehavedNumber-D2jfZHGG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-nB6oQ6-0.js";import"./index-DZPpWsc8.js";import"./index-BWkGghDn.js";import"./RechartsWrapper-DrRaVIDn.js";import"./index-DroDtVMI.js";import"./index-C2Y_Hicx.js";import"./throttle-5caQeXVN.js";import"./renderedTicksSlice-BAzheGmb.js";import"./axisSelectors-Cxx4umpa.js";import"./d3-scale-DAQlT4KL.js";import"./CartesianAxis-DfPCf8Ah.js";import"./Layer-CMf1Vf_h.js";import"./types-BGJIvFfK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-Z1jjPkTn.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BuotdUK2.js";import"./chartDataContext-pSMyX_Ym.js";import"./CategoricalChart-Brm-3Wpy.js";import"./tooltipContext-Xt6j081a.js";import"./AnimatedItems-DTVko9-M.js";import"./useAnimationId-BwVBlHti.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C3sbzP8A.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-SugLVfR8.js";import"./RegisterGraphicalItemId-uw1PY0zP.js";import"./ErrorBarContext-CqyguIOl.js";import"./GraphicalItemClipPath-B2dCpKux.js";import"./SetGraphicalItem-CNlJ3f0Q.js";import"./getZIndexFromUnknown-C_ohvU9X.js";import"./graphicalItemSelectors-WhTa9SlS.js";import"./Curve-DgHNdRhX.js";import"./step-DgphAjx2.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D4PeEGz4.js";import"./Dot-CSi-hwhf.js";import"./graphicalItemIdentity-UY1iR6Cu.js";import"./useElementOffset-B1ayTe9X.js";import"./uniqBy-H1XeOGJd.js";import"./iteratee-DetP-FdP.js";import"./Cross-CCksfaKi.js";import"./Sector-DkwubCkH.js";const vt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Kt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Kt as __namedExportsOrder,vt as default};
