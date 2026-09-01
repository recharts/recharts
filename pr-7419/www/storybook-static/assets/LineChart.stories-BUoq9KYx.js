import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-B0Kxc9j6.js";import{n as a,t as o}from"./Tooltip-1joug3q7.js";import{n as s,t as c}from"./Line-CGcNDODy.js";import{n as l,t as u}from"./XAxis-DaKmDvZB.js";import{n as d,t as f}from"./LineChart-TpeFf1Zc.js";import{r as p,t as m}from"./Page-DUsfWi7y.js";import{n as h,t as g}from"./utils-vqcWnakT.js";import{n as _,t as v}from"./LineChartArgs-BTSdCahn.js";var y,b,x,S,C;function w(){return(w=t((()=>{y=e(n()),m(),s(),d(),i(),a(),l(),_(),h(),b={argTypes:v,component:f},x={name:`Simple`,render:e=>{let[t,n]=(0,y.useState)(!1),i=(0,y.useCallback)(()=>{n(!0)},[n]),a=(0,y.useCallback)(()=>{n(!1)},[n]);return y.createElement(r,{width:`100%`,height:400},y.createElement(f,e,y.createElement(c,{onMouseEnter:i,onMouseLeave:a,dataKey:`uv`,strokeWidth:t?8:4,animationDuration:5e3})))},args:{...g(v),data:p}},S={render:e=>y.createElement(`div`,null,y.createElement(f,{...e,id:`BookOne`,className:`BookOne`},y.createElement(c,{isAnimationActive:!1,name:`BookOne`,type:`monotone`,dataKey:`uv`,stroke:`#111`}),y.createElement(u,{dataKey:`name`}),y.createElement(o,{active:!0})),y.createElement(f,{...e,id:`BookTwo`,className:`BookTwo`},y.createElement(c,{isAnimationActive:!1,name:`BookTwo`,type:`monotone`,dataKey:`uv`,stroke:`#ff7300`}),y.createElement(u,{dataKey:`name`}),y.createElement(o,null))),args:{...g(v),data:p,syncId:`example-syncId`,width:400,height:400}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    const [isHovered, setIsHovered] = useState(false);
    const onMouseEnter = useCallback(() => {
      setIsHovered(true);
    }, [setIsHovered]);
    const onMouseLeave = useCallback(() => {
      setIsHovered(false);
    }, [setIsHovered]);
    return <ResponsiveContainer width="100%" height={400}>
        <LineChart {...args}>
          <Line onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} dataKey="uv" strokeWidth={isHovered ? 8 : 4} animationDuration={5000} />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    data: pageData
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <div>
        <LineChart {...args} id="BookOne" className="BookOne">
          <Line isAnimationActive={false} name="BookOne" type="monotone" dataKey="uv" stroke="#111" />
          <XAxis dataKey="name" />
          <Tooltip active />
        </LineChart>
        <LineChart {...args} id="BookTwo" className="BookTwo">
          <Line isAnimationActive={false} name="BookTwo" type="monotone" dataKey="uv" stroke="#ff7300" />
          <XAxis dataKey="name" />
          <Tooltip />
        </LineChart>
      </div>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    data: pageData,
    syncId: 'example-syncId',
    width: 400,
    height: 400
  }
}`,...S.parameters?.docs?.source}}},C=[`API`,`SynchronizedTooltip`]})))()}w();export{x as API,S as SynchronizedTooltip,C as __namedExportsOrder,b as default};