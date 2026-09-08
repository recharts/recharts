import{R as t}from"./iframe-pbo-QmUV.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-nh7YJu46.js";import{R as l}from"./zIndexSlice-uFV94i-F.js";import{C as x}from"./ComposedChart-DxMGwfzH.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DW5tQXMU.js";import{L as a}from"./Line-6O9C2MB0.js";import{X as c}from"./XAxis-D3aLIvS-.js";import{T as g}from"./Tooltip-Dw5XD65M.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DU5Wkeud.js";import"./Text-BdcAn3_A.js";import"./resolveDefaultProps-Bn-8X6Qs.js";import"./DOMUtils-C6RebZcO.js";import"./isWellBehavedNumber-zRxxoDF3.js";import"./useId-BuOtXniO.js";import"./useBackwardsCompatibleTheme-CqO1jBVJ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DMCFd0Py.js";import"./index-D_Ub_wFV.js";import"./index-CKUumD7T.js";import"./RechartsWrapper-D_F_8pjg.js";import"./axisSelectors-Ry70X2n2.js";import"./throttle-pz4AEyIn.js";import"./d3-scale-CHgOHIs9.js";import"./index-Cqrsc3wV.js";import"./index-DRjmG3NL.js";import"./renderedTicksSlice-DBjq58iQ.js";import"./index-CgW8Pfrl.js";import"./CartesianAxis-DdLDEoN3.js";import"./Layer-Cu62JC_z.js";import"./types-C5-2SUHa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CVXeZ94e.js";import"./chartDataContext-D8AV35hB.js";import"./CategoricalChart-C7FDKNmd.js";import"./AnimatedItems--5FH9Bfg.js";import"./useAnimationId-w92tOT6t.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-rbQamDu_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-ompTjO3b.js";import"./tooltipContext-V-NOq3Cg.js";import"./RegisterGraphicalItemId-m6HZhBI1.js";import"./ErrorBarContext-DqrAg45D.js";import"./GraphicalItemClipPath-Q1XGfFBL.js";import"./SetGraphicalItem-Dbyeimyx.js";import"./getZIndexFromUnknown-ymucRa9E.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CNZHpa4t.js";import"./Curve-mcatnmip.js";import"./step-LTM-Duq3.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D9o-N645.js";import"./Dot-D4f4qHEu.js";import"./getRadiusAndStrokeWidthFromDot-CFJndDg7.js";import"./useElementOffset-Br9Bj8uR.js";import"./uniqBy-H0z77HUa.js";import"./iteratee-pV8VR7RL.js";import"./Cross-Bfo2Pftl.js";import"./Sector-T8h-oVN9.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
