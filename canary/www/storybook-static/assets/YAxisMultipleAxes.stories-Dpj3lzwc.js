import{R as t}from"./iframe-C2DTpPl5.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Dd6HyrUG.js";import{R as l}from"./zIndexSlice-BA0v7Oer.js";import{C as x}from"./ComposedChart-DhPH0eg5.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DGO9OwJo.js";import{L as a}from"./Line-ByVEcfKk.js";import{X as c}from"./XAxis-BQlNmsKr.js";import{T as g}from"./Tooltip-DYSfubzK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CwiguCux.js";import"./Text-kmupVaPK.js";import"./resolveDefaultProps-D8zMOS_0.js";import"./DOMUtils-8MPdkl0j.js";import"./isWellBehavedNumber-C10dxuDW.js";import"./useId-CX7EaZRb.js";import"./useBackwardsCompatibleTheme-DFA95kD1.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BzV-OpAF.js";import"./index-5V0YvSc1.js";import"./index-Cmgx4ukp.js";import"./RechartsWrapper-DbTeQzXN.js";import"./index-b8OMPhKV.js";import"./index-PELgc84d.js";import"./throttle-DTXNpE5t.js";import"./axisSelectors-DI7xvKPh.js";import"./d3-scale-CRpbK976.js";import"./renderedTicksSlice-B1AYXvSw.js";import"./CartesianAxis-vCI6MyTM.js";import"./Layer-C1G5_il7.js";import"./types-C_I2Qi1-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DveAlEiH.js";import"./chartDataContext-zaCSk4E3.js";import"./CategoricalChart-9si9MCW4.js";import"./AnimatedItems-3hjUFG-5.js";import"./useAnimationId-en1pQLdR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D3EFseWQ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DeKqyUUr.js";import"./tooltipContext-CWDhAN1_.js";import"./RegisterGraphicalItemId-7_0Fa0Or.js";import"./ErrorBarContext-DBVQitzE.js";import"./GraphicalItemClipPath-Q21k0d2A.js";import"./SetGraphicalItem-BC-u-qk6.js";import"./getZIndexFromUnknown-Di2_GH9h.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DqOVzhXB.js";import"./Curve-BQfn95_j.js";import"./step-BpdWCqp5.js";import"./path-DyVhHtw_.js";import"./ActivePoints-JZ0NgfaJ.js";import"./Dot-0HxiRhRw.js";import"./getRadiusAndStrokeWidthFromDot-D3vyunVf.js";import"./useElementOffset-zoX8Bj2Z.js";import"./uniqBy-DPi6r0Q4.js";import"./iteratee-Qg6w15Mi.js";import"./Cross-Cy_CnH1y.js";import"./Sector-B8OeAdlI.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
