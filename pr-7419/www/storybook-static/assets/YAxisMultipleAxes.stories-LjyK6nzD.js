import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{B as r,R as i,Rt as a,Vn as o,W as s,X as c,t as l,u}from"./iframe-BqVvK_R4.js";import{t as d}from"./data-J2vpPkF6.js";import{r as f}from"./Page-C0w_0_Yr.js";import{n as p,t as m}from"./utils-4uF5A2JM.js";import{n as h,t as g}from"./YAxisArgs-yPWmA9Ka.js";var _,v,y,b;e((()=>{_=t(n()),l(),d(),p(),h(),v={component:i,argTypes:g,title:`Examples/cartesian/YAxis/WithLeftAndRightAxes`},y={render:e=>_.createElement(`article`,{style:{display:`flex`,flexDirection:`column`}},_.createElement(`div`,{style:{width:`100%`}},_.createElement(o,{width:`100%`,height:500},_.createElement(u,{data:f},_.createElement(s,{dataKey:`pv`,fill:`red`,yAxisId:`right`}),_.createElement(s,{dataKey:`uv`,fill:`red`,yAxisId:`right-mirror`}),_.createElement(c,{dataKey:`amt`,fill:`green`,yAxisId:`left`}),_.createElement(c,{dataKey:`amt`,fill:`green`,yAxisId:`left-mirror`}),_.createElement(r,{padding:{left:50,right:50},dataKey:`name`,scale:`band`}),_.createElement(i,{...e,yAxisId:`left`,orientation:`left`,domain:[`dataMin-20`,`dataMax`]}),_.createElement(i,{...e,yAxisId:`left-mirror`,orientation:`left`,mirror:!0,tickCount:8}),_.createElement(i,{...e,yAxisId:`right`,orientation:`right`,domain:[`dataMin-20`,`dataMax`]}),_.createElement(i,{...e,yAxisId:`right-mirror`,orientation:`right`,mirror:!0,tickCount:20}),_.createElement(a,null)))),_.createElement(`h4`,null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:m(g)},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`WithLeftAndRightAxes`]}))();export{y as WithLeftAndRightAxes,b as __namedExportsOrder,v as default};