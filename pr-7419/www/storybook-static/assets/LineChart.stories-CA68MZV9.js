import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{A as r,B as i,Rt as a,Vn as o,X as s,t as c}from"./iframe-BiMB5Acc.js";import{t as l}from"./data-J2vpPkF6.js";import{r as u}from"./Page-C0w_0_Yr.js";import{n as d,t as f}from"./utils-4uF5A2JM.js";import{n as p,t as m}from"./LineChartArgs-f-9wms1F.js";var h,g,_,v,y;e((()=>{h=t(n()),l(),c(),p(),d(),g={argTypes:m,component:r},_={name:`Simple`,render:e=>{let[t,n]=(0,h.useState)(!1),i=(0,h.useCallback)(()=>{n(!0)},[n]),a=(0,h.useCallback)(()=>{n(!1)},[n]);return h.createElement(o,{width:`100%`,height:400},h.createElement(r,e,h.createElement(s,{onMouseEnter:i,onMouseLeave:a,dataKey:`uv`,strokeWidth:t?8:4,animationDuration:5e3})))},args:{...f(m),data:u}},v={render:e=>h.createElement(`div`,null,h.createElement(r,{...e,id:`BookOne`,className:`BookOne`},h.createElement(s,{isAnimationActive:!1,name:`BookOne`,type:`monotone`,dataKey:`uv`,stroke:`#111`}),h.createElement(i,{dataKey:`name`}),h.createElement(a,{active:!0})),h.createElement(r,{...e,id:`BookTwo`,className:`BookTwo`},h.createElement(s,{isAnimationActive:!1,name:`BookTwo`,type:`monotone`,dataKey:`uv`,stroke:`#ff7300`}),h.createElement(i,{dataKey:`name`}),h.createElement(a,null))),args:{...f(m),data:u,syncId:`example-syncId`,width:400,height:400}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`API`,`SynchronizedTooltip`]}))();export{_ as API,v as SynchronizedTooltip,y as __namedExportsOrder,g as default};