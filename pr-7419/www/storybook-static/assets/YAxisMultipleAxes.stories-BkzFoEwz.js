import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-B0Kxc9j6.js";import{n as a,t as o}from"./Tooltip-1joug3q7.js";import{n as s,t as c}from"./Line-CGcNDODy.js";import{n as l,t as u}from"./Bar-C29P9vfb.js";import{n as d,t as f}from"./XAxis-DaKmDvZB.js";import{n as p,t as m}from"./YAxis-DFF_vhTk.js";import{n as h,t as g}from"./ComposedChart-BMuDWuTx.js";import{r as _,t as v}from"./Page-DUsfWi7y.js";import{n as y,t as b}from"./utils-vqcWnakT.js";import{n as x,t as S}from"./YAxisArgs-CVzi3wci.js";var C,w,T,E;function D(){return(D=t((()=>{C=e(n()),l(),h(),s(),i(),a(),d(),p(),v(),y(),x(),w={component:m,argTypes:S,title:`Examples/cartesian/YAxis/WithLeftAndRightAxes`},T={render:e=>C.createElement(`article`,{style:{display:`flex`,flexDirection:`column`}},C.createElement(`div`,{style:{width:`100%`}},C.createElement(r,{width:`100%`,height:500},C.createElement(g,{data:_},C.createElement(u,{dataKey:`pv`,fill:`red`,yAxisId:`right`}),C.createElement(u,{dataKey:`uv`,fill:`red`,yAxisId:`right-mirror`}),C.createElement(c,{dataKey:`amt`,fill:`green`,yAxisId:`left`}),C.createElement(c,{dataKey:`amt`,fill:`green`,yAxisId:`left-mirror`}),C.createElement(f,{padding:{left:50,right:50},dataKey:`name`,scale:`band`}),C.createElement(m,{...e,yAxisId:`left`,orientation:`left`,domain:[`dataMin-20`,`dataMax`]}),C.createElement(m,{...e,yAxisId:`left-mirror`,orientation:`left`,mirror:!0,tickCount:8}),C.createElement(m,{...e,yAxisId:`right`,orientation:`right`,domain:[`dataMin-20`,`dataMax`]}),C.createElement(m,{...e,yAxisId:`right-mirror`,orientation:`right`,mirror:!0,tickCount:20}),C.createElement(o,null)))),C.createElement(`h4`,null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:b(S)},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E=[`WithLeftAndRightAxes`]})))()}D();export{T as WithLeftAndRightAxes,E as __namedExportsOrder,w as default};