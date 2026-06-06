import{R as t}from"./iframe-BUJOmzqi.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DKbaQ5d8.js";import{R as l}from"./zIndexSlice-BsaVfiwf.js";import{C as x}from"./ComposedChart-D5MlcB5U.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CXM7wx16.js";import{L as a}from"./Line-jXTM5sU4.js";import{X as c}from"./XAxis-DaOKHhNP.js";import{T as g}from"./Tooltip-CBmxLb_T.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BL4oPmOH.js";import"./CartesianAxis-Bv_4t9YA.js";import"./Layer-DAIr4ncG.js";import"./resolveDefaultProps-hlzoE81R.js";import"./Text-KTF0LXVS.js";import"./DOMUtils-DD35gjWu.js";import"./isWellBehavedNumber-PVSksaHl.js";import"./Label-BNcqFpiL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DYX-KLdv.js";import"./index-Z5G1v5br.js";import"./index-JbQrqUHI.js";import"./types-BzrTCe99.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CvbHS7R-.js";import"./immer-DH0vdgZo.js";import"./RechartsWrapper-DKJe8hzM.js";import"./index-BFCbJ3zw.js";import"./index-Ba2rQUwD.js";import"./axisSelectors-BsZbVas6.js";import"./d3-scale-DS8AhCL8.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CwVYswgd.js";import"./chartDataContext-BLLyTvAK.js";import"./CategoricalChart--vXw4uUZ.js";import"./tooltipContext-n5p5vu7t.js";import"./AnimatedItems-JOMjWh90.js";import"./useAnimationId-BY-iJyWy.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D2JiSHo9.js";import"./ActiveShapeUtils-ySv4_Jt-.js";import"./RegisterGraphicalItemId-BRRIJdHI.js";import"./ErrorBarContext-DA6daDg9.js";import"./GraphicalItemClipPath-CGh6UnOu.js";import"./SetGraphicalItem-7EGMhuIl.js";import"./getZIndexFromUnknown-C2YVw8tG.js";import"./graphicalItemSelectors-6So_Cw7T.js";import"./Curve-DuctlboJ.js";import"./step-C_dZFxdF.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CMM7Mo_4.js";import"./Dot-DN1GlAfe.js";import"./getRadiusAndStrokeWidthFromDot-DkvFWbU0.js";import"./useElementOffset-BhRUWmtD.js";import"./uniqBy-D07a0IUx.js";import"./iteratee-3mUZv5fI.js";import"./Cross-L5pcMqA6.js";import"./Sector-CYWbhre4.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
