import{R as t}from"./iframe-Cohm3Mgw.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CL7XnP-K.js";import{R as l}from"./zIndexSlice-B9ueg08S.js";import{C as x}from"./ComposedChart-NgaAeXu7.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-x9NEp1x1.js";import{L as a}from"./Line-CSUvTs5t.js";import{X as c}from"./XAxis-CVOvqpzX.js";import{T as g}from"./Tooltip-D5IMBnAQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CjpZErbZ.js";import"./Text-YiVIU37_.js";import"./resolveDefaultProps-C0M5TZCe.js";import"./DOMUtils-txvPDt5R.js";import"./isWellBehavedNumber-gcpDVDB0.js";import"./useId-C6wOq3r0.js";import"./useBackwardsCompatibleTheme-VM02li75.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CYwij2WM.js";import"./index-D7CetYi-.js";import"./index-S5rsC3Tw.js";import"./RechartsWrapper-BRBo2AAI.js";import"./axisSelectors-CjhsklJ0.js";import"./throttle-yX9WQlUu.js";import"./d3-scale-DvRyM4Sf.js";import"./index-DvtaYKH7.js";import"./index-BauJCgFC.js";import"./renderedTicksSlice-BCr9iPCV.js";import"./index-Cm_kbqdK.js";import"./CartesianAxis-ayk5133x.js";import"./Layer-0g-9u_Rw.js";import"./types-DRz-ZInT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Cpw2D3LX.js";import"./chartDataContext-H3bm4v7q.js";import"./CategoricalChart-Df9xH4Hr.js";import"./AnimatedItems-CnXe2R42.js";import"./useAnimationId-Cli-i2xG.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DOtTacNo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Vqel86XU.js";import"./tooltipContext-DdAWIxhw.js";import"./RegisterGraphicalItemId-zE1kxnUQ.js";import"./ErrorBarContext-CroV_pde.js";import"./GraphicalItemClipPath-C_0K_X_g.js";import"./SetGraphicalItem-Cu_GzdoF.js";import"./getZIndexFromUnknown-CJYu-wF5.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CwKvOcZJ.js";import"./Curve-BoBL6qva.js";import"./step-DcnLL6eP.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D3t_JlJ4.js";import"./Dot-bF3RsuDa.js";import"./getRadiusAndStrokeWidthFromDot-BzpvHiho.js";import"./useElementOffset-CIa7YSgL.js";import"./uniqBy-DMinejVi.js";import"./iteratee-Cno2h-aJ.js";import"./Cross-u0ASlHbu.js";import"./Sector-BbiA_v6i.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
