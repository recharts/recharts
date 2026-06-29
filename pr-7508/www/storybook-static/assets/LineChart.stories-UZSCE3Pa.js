import{r as s,R as e}from"./iframe-CCxa2X_3.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-DECqCDCO.js";import{R as C}from"./zIndexSlice-CjS-6Q6g.js";import{L as n}from"./Line-Hi10lWtZ.js";import{X as p}from"./XAxis-DgXTsbE5.js";import{T as c}from"./Tooltip-C_6OA510.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-2JrQYSBT.js";import"./index-HidsIZF1.js";import"./index-DtdyiYMy.js";import"./index-BTMSijfB.js";import"./index-Bu6kQjLM.js";import"./throttle-DVixtPip.js";import"./get-BWGRxCzY.js";import"./renderedTicksSlice-BZsMGLS6.js";import"./axisSelectors-DutwzDNX.js";import"./d3-scale-BD_lAQxm.js";import"./resolveDefaultProps-DiPmn6d5.js";import"./isWellBehavedNumber-D-qJMApD.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BqBORtky.js";import"./chartDataContext-un8h0oN7.js";import"./CategoricalChart-BETRAeyd.js";import"./Layer-DSUD-a_F.js";import"./Curve-DuMlNmnh.js";import"./types-BCrxJhqI.js";import"./step-Cx1fSWqJ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CtF1ph7i.js";import"./Label-BbbTGnnM.js";import"./Text-zmbPwYi6.js";import"./DOMUtils-D9dcGvYT.js";import"./ZIndexLayer-DK9HGDkh.js";import"./useAnimationId-Qtosu25G.js";import"./ActivePoints-DMw22gL4.js";import"./Dot-BqRYjtmh.js";import"./RegisterGraphicalItemId-Co8JXb8t.js";import"./ErrorBarContext-DiexwYLt.js";import"./GraphicalItemClipPath-hMgxAXNq.js";import"./SetGraphicalItem-BLsqb4fN.js";import"./getRadiusAndStrokeWidthFromDot-CMMqsGHP.js";import"./ActiveShapeUtils-D6Ox5ImN.js";import"./CartesianAxis-06zEjNAD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-DofYk2ft.js";import"./uniqBy-DXRe4Vi9.js";import"./iteratee-C-XK7dPA.js";import"./Cross-DoeHMXog.js";import"./Rectangle-BK1YtbdL.js";import"./util-Dxo8gN5i.js";import"./Sector-DevuOtE1.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,v,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Te=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Te as __namedExportsOrder,Ee as default};
