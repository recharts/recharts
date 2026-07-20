import{r as s,R as e}from"./iframe-DXKzzws4.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-B_HT4_qO.js";import{R as C}from"./zIndexSlice-DMX8Hhzz.js";import{L as n}from"./Line-CqA0P4v1.js";import{X as p}from"./XAxis-B7JoDVaz.js";import{T as c}from"./Tooltip-BgqWabVR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CAtabfYs.js";import"./index-D033D4Zv.js";import"./index-Bg5IH0LC.js";import"./index-lFjFQb2-.js";import"./index-CL_M0WF6.js";import"./throttle-BD3oF8Du.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-egJwNk4f.js";import"./axisSelectors-v3JljGjn.js";import"./resolveDefaultProps-BSNhK7r6.js";import"./isWellBehavedNumber-C7AyK_9S.js";import"./d3-scale-DYAtoVGZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BbjVuMqC.js";import"./chartDataContext-CSoMwZ9z.js";import"./CategoricalChart-CAv3CBz7.js";import"./Layer-C_ZH39cx.js";import"./Curve-DmVGde8u.js";import"./types-BceUICSF.js";import"./step-BR5H3S21.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DnXQuXZD.js";import"./Label-C30Q7qcI.js";import"./Text-H0ump6nt.js";import"./DOMUtils-DglI10nq.js";import"./ZIndexLayer-CMaU0WuF.js";import"./useAnimationId-DeOyrvrW.js";import"./ActivePoints-CSBiBk5C.js";import"./Dot-sf8y4IWV.js";import"./RegisterGraphicalItemId-CW1tA6c4.js";import"./ErrorBarContext-CuLgZ_wX.js";import"./GraphicalItemClipPath-C72bnPxn.js";import"./SetGraphicalItem-CYGj1XVR.js";import"./getRadiusAndStrokeWidthFromDot-BvNGRFfN.js";import"./ActiveShapeUtils-D95WmeDO.js";import"./CartesianAxis-CVHxu40z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./useElementOffset-BqV11enm.js";import"./uniqBy-CUADLInF.js";import"./iteratee-CHkUkcds.js";import"./Cross-5OJntGQy.js";import"./Rectangle-DKjzEYBW.js";import"./util-Dxo8gN5i.js";import"./Sector-G5hJhTYV.js";const Te={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Be=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Be as __namedExportsOrder,Te as default};
