import{r as n,e}from"./iframe-oKMzB0d-.js";import{L as m}from"./LineChartArgs-C9Vp8FkW.js";import{g as y}from"./utils-ePvtT4un.js";import{L as s}from"./LineChart-D9yrf0T2.js";import{R as E}from"./arrayEqualityCheck-Caoo2I2E.js";import{L as i}from"./Line-Bwc4TWJK.js";import{R as f}from"./RechartsHookInspector-BzEUDXeW.js";import{X as c}from"./XAxis-DlRmKJ01.js";import{T as l}from"./Tooltip-B8PD1RTL.js";import{p as k}from"./Page-Cj8EiXz7.js";const T={argTypes:m,component:s},t={name:"Simple",render:a=>{const[A,r]=n.useState(!1),L=n.useCallback(()=>{r(!0)},[r]),C=n.useCallback(()=>{r(!1)},[r]);return e.createElement(E,{width:"100%",height:400},e.createElement(s,{...a},e.createElement(i,{onMouseEnter:L,onMouseLeave:C,dataKey:"uv",strokeWidth:A?8:4,animationDuration:5e3}),e.createElement(f,null)))},args:{...y(m),data:k}},o={render:a=>e.createElement("div",null,e.createElement(s,{...a,id:"BookOne",className:"BookOne"},e.createElement(i,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(c,{dataKey:"name"}),e.createElement(l,{active:!0}),e.createElement(f,null)),e.createElement(s,{...a,id:"BookTwo",className:"BookTwo"},e.createElement(i,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(c,{dataKey:"name"}),e.createElement(l,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,p,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    data: pageData
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,v,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <div>
        <LineChart {...args} id="BookOne" className="BookOne">
          <Line isAnimationActive={false} name="BookOne" type="monotone" dataKey="uv" stroke="#111" />
          <XAxis dataKey="name" />
          <Tooltip active />
          <RechartsHookInspector />
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
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const I=["API","SynchronizedTooltip"],_=Object.freeze(Object.defineProperty({__proto__:null,API:t,SynchronizedTooltip:o,__namedExportsOrder:I,default:T},Symbol.toStringTag,{value:"Module"}));export{t as A,_ as C};
