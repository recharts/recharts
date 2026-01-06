import{r as s,e}from"./iframe-DP2mOMln.js";import{a as L}from"./ChartProps-h4DKB0dX.js";import{L as r}from"./LineChart-CxKONjb3.js";import{R as C}from"./arrayEqualityCheck-5iTHPuD6.js";import{L as i}from"./Line-7aVkqytC.js";import{R as k}from"./RechartsHookInspector-DVpbP7qM.js";import{X as m}from"./XAxis-B_VQg86f.js";import{T as c}from"./Tooltip-CtUAS5no.js";import{p as f}from"./Page-Cj8EiXz7.js";const T={argTypes:L,component:r},t={render:a=>{const[g,n]=s.useState(!1),y=s.useCallback(()=>{n(!0)},[n]),E=s.useCallback(()=>{n(!1)},[n]);return e.createElement(C,{width:"100%",height:400},e.createElement(r,{...a},e.createElement(i,{onMouseEnter:y,onMouseLeave:E,dataKey:"uv",strokeWidth:g?8:4,animationDuration:5e3}),e.createElement(k,null)))},args:{data:f}},o={render:a=>e.createElement("div",null,e.createElement(r,{...a,id:"BookOne",className:"BookOne"},e.createElement(i,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(m,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(k,null)),e.createElement(r,{...a,id:"BookTwo",className:"BookTwo"},e.createElement(i,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(m,{dataKey:"name"}),e.createElement(c,null))),args:{data:f,syncId:"example-syncId",width:400,height:400}};var l,d,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
    data: pageData
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,v,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
    data: pageData,
    syncId: 'example-syncId',
    width: 400,
    height: 400
  }
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const A=["Simple","SynchronizedTooltip"],R=Object.freeze(Object.defineProperty({__proto__:null,Simple:t,SynchronizedTooltip:o,__namedExportsOrder:A,default:T},Symbol.toStringTag,{value:"Module"}));export{R as L,t as S};
