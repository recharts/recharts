import{R as t}from"./iframe-dVfgBJJs.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Bw51heiQ.js";import{R as l}from"./zIndexSlice-Cjn5-XTM.js";import{C as x}from"./ComposedChart-EYm7zLU4.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DPL8yQrI.js";import{L as a}from"./Line-CqjanWML.js";import{X as c}from"./XAxis-Dq_1Ikw5.js";import{T as g}from"./Tooltip-CJSXK5by.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-aoe5sT-Z.js";import"./Layer-CMYHU7wr.js";import"./resolveDefaultProps-BJYE31LD.js";import"./Text-pzoHfxc1.js";import"./DOMUtils-BHngjwEG.js";import"./isWellBehavedNumber-Dps59fvg.js";import"./Label-Qwq3mE6t.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CwGLm3MP.js";import"./index-C6eTt67z.js";import"./index-MNnIylKM.js";import"./types-zZpSojV-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D2-S4Lnl.js";import"./throttle-B7XzNIu7.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-BUOG_0PT.js";import"./index-CFOPrJ2a.js";import"./index-CZjDID2X.js";import"./axisSelectors-rruDH4Fs.js";import"./d3-scale-BnZ4Lirr.js";import"./CartesianChart-lwgDkPey.js";import"./chartDataContext-CKWmrP30.js";import"./CategoricalChart-C8uoPany.js";import"./tooltipContext-D6BeuZ0a.js";import"./AnimatedItems-_UVM3ygI.js";import"./useAnimationId-DepU2l4z.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CBvNSrWO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BR_u5MdP.js";import"./RegisterGraphicalItemId-B-wtHeoX.js";import"./ErrorBarContext-CcM5piDn.js";import"./GraphicalItemClipPath-CjVY23ZB.js";import"./SetGraphicalItem-BrDpUng6.js";import"./getZIndexFromUnknown-BIwG92vh.js";import"./graphicalItemSelectors-BdW54Xar.js";import"./Curve-BS8zfYeH.js";import"./step-DuOmXCgZ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CtZ_3WUF.js";import"./Dot-C7HuS7dU.js";import"./getRadiusAndStrokeWidthFromDot--eZofM29.js";import"./useElementOffset-B6pjqzOx.js";import"./uniqBy-B0dYKt0p.js";import"./iteratee-C7S4GxDg.js";import"./Cross-BdrRvahT.js";import"./Sector-CC1aczQ9.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const vt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,vt as __namedExportsOrder,Yt as default};
