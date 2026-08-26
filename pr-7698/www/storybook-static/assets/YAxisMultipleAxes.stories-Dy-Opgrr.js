import{R as t}from"./iframe-zaa1iZav.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DJCm-s1B.js";import{R as l}from"./zIndexSlice-BWWEcbGp.js";import{C as x}from"./ComposedChart-SWtXcCgK.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-c98uwW-j.js";import{L as a}from"./Line-Dy42oF7S.js";import{X as c}from"./XAxis-BVnwJxOu.js";import{T as g}from"./Tooltip-DmmlIPoF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-dEEe5X5F.js";import"./Text-CNT20nWc.js";import"./resolveDefaultProps-CJqzH_DM.js";import"./DOMUtils-CDT7WRtk.js";import"./isWellBehavedNumber-DAhZ9La7.js";import"./useId-B4zmx8V0.js";import"./useBackwardsCompatibleTheme-XO0ISL55.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dn1PwF1U.js";import"./index-BrIYS7Za.js";import"./index-B2mdcnwD.js";import"./RechartsWrapper-Bf_8sWMW.js";import"./index-BZPWANmU.js";import"./index-CM-qLXxp.js";import"./throttle-CPqxLIQd.js";import"./axisSelectors-ucT8kUEv.js";import"./d3-scale-DKZbRsMk.js";import"./renderedTicksSlice-jJ4uAB34.js";import"./CartesianAxis-BEMiFdQK.js";import"./Layer-Diqr5-jO.js";import"./types-DFArERnY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BUEIFsCx.js";import"./chartDataContext-CPRHK_4k.js";import"./CategoricalChart-DzU0tABe.js";import"./AnimatedItems-O1YgZXLs.js";import"./useAnimationId-B8kms9uE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Ddidi1ZR.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-lGuUrwlM.js";import"./tooltipContext-BhuGSjmc.js";import"./RegisterGraphicalItemId-dsCSOxKS.js";import"./ErrorBarContext-ZTRuZpEO.js";import"./GraphicalItemClipPath-Dhs9LVS9.js";import"./SetGraphicalItem-Dk_WNLiG.js";import"./getZIndexFromUnknown-_9N3dKhy.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-B9jF_9OY.js";import"./Curve-PUx2QnOd.js";import"./step-Bfrhe9AG.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DVBi-AIt.js";import"./Dot-oGoSOzAY.js";import"./getRadiusAndStrokeWidthFromDot-DJ1u3-OH.js";import"./useElementOffset-BkrFnIvv.js";import"./uniqBy-BVIzKSm2.js";import"./iteratee-CL50YqF6.js";import"./Cross-BLdWMmSw.js";import"./Sector-D1nZ1jgF.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Rt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
