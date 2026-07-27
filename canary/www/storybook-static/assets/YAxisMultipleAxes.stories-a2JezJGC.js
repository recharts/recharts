import{R as t}from"./iframe-aNoK1EMe.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-flrMIfza.js";import{R as l}from"./zIndexSlice-DOhDXvjb.js";import{C as x}from"./ComposedChart-ciK3m7lP.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-a0LmDLx9.js";import{L as a}from"./Line-2K1Q72AI.js";import{X as c}from"./XAxis-BsEbRcU-.js";import{T as g}from"./Tooltip-DyXF2ljh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CeEjLShX.js";import"./Layer-BCtIHmhS.js";import"./resolveDefaultProps-DbC1kYAP.js";import"./Text-Dek-bfvO.js";import"./DOMUtils-B40T5FB1.js";import"./isWellBehavedNumber-DwwkvD-i.js";import"./Label-DiB3OAIB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DGcx9JLL.js";import"./index-DU0cxzai.js";import"./index-Bu0CjtZ3.js";import"./types-Be_2sCPa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D-IRHrV3.js";import"./throttle-dDtgRmGr.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-k_DNRHdW.js";import"./index-D5XON-Gh.js";import"./index-BdDC1fi3.js";import"./axisSelectors-Bs_-tFvB.js";import"./d3-scale-_Xy_yJsZ.js";import"./CartesianChart-9qcKzyck.js";import"./chartDataContext-DZNoVeTg.js";import"./CategoricalChart-xLJxNslX.js";import"./tooltipContext-BxLcGZlQ.js";import"./AnimatedItems-b0afIUOt.js";import"./useAnimationId-B-ZOGiBc.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DLQWIh8f.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CWDfkNMB.js";import"./RegisterGraphicalItemId-DSvg4gFN.js";import"./ErrorBarContext-Dauct7TC.js";import"./GraphicalItemClipPath-De0s7P9u.js";import"./SetGraphicalItem-CpE1XAUN.js";import"./getZIndexFromUnknown-CygBPzgc.js";import"./graphicalItemSelectors-DmUYu0MJ.js";import"./Curve-CJs4LUT2.js";import"./step-vVmdNkhc.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CZoVwwe_.js";import"./Dot-BDrL_0u-.js";import"./getRadiusAndStrokeWidthFromDot-EFIJD7AT.js";import"./useElementOffset-BI3734qt.js";import"./uniqBy-Bcy6VBQs.js";import"./iteratee-BF5VjlC5.js";import"./Cross-VSrUK5-b.js";import"./Sector-Bt7ISiQZ.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
