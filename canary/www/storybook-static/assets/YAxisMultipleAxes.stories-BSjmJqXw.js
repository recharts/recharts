import{R as t}from"./iframe-DNYOsiJO.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BYx3TtuN.js";import{R as l}from"./zIndexSlice-BYsyPOtl.js";import{C as x}from"./ComposedChart-DhpLFFry.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CnUx9NGb.js";import{L as a}from"./Line-R4OFP3LB.js";import{X as c}from"./XAxis-Dc7egqDj.js";import{T as g}from"./Tooltip-B0pZWCVU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DvCBXc2H.js";import"./CartesianAxis-DB2jJ2Vg.js";import"./Layer-BZEyjxjb.js";import"./resolveDefaultProps-BPA_kNXr.js";import"./Text-COQ57Hvt.js";import"./DOMUtils-DMxex0QR.js";import"./isWellBehavedNumber-BdiH4iwW.js";import"./Label-DBVLreiQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B6YZY0_d.js";import"./index-CpvOcg5A.js";import"./index-B-scg1za.js";import"./types-CfyGDdUv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B3G44Ect.js";import"./throttle-DhLz3mrQ.js";import"./RechartsWrapper-D4XAWs0V.js";import"./index-BghJ0rJu.js";import"./index-DN5tCymc.js";import"./axisSelectors-BU0FKw5j.js";import"./d3-scale-Cm3hMOK_.js";import"./CartesianChart-CJ0aqbjB.js";import"./chartDataContext-ALZLxkDM.js";import"./CategoricalChart-Dgn8q3Cx.js";import"./tooltipContext-86Ce_pFB.js";import"./AnimatedItems-CfNYG8xc.js";import"./useAnimationId-DniHu15m.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D0fmCEGG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dv5sca8G.js";import"./RegisterGraphicalItemId-PRQMqBjc.js";import"./ErrorBarContext-8ntzOtYf.js";import"./GraphicalItemClipPath-C8T0qCgO.js";import"./SetGraphicalItem-DQ-8Rtbz.js";import"./getZIndexFromUnknown-CRsb39eG.js";import"./graphicalItemSelectors-BWLE6_sA.js";import"./Curve-C7WD3Hug.js";import"./step-BkXisL-y.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B0cX4VGQ.js";import"./Dot-DPYiTUdf.js";import"./getRadiusAndStrokeWidthFromDot-D7oiSawd.js";import"./useElementOffset-Cw6InSRv.js";import"./uniqBy-Dqcc81ao.js";import"./iteratee-BmMaIqc5.js";import"./Cross-CUFgV_gL.js";import"./Sector-DgmjtNh6.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
