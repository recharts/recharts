import{r as s,R as e}from"./iframe-BaPbaLaJ.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-BBsJQSYM.js";import{R as C}from"./zIndexSlice-Ct9oD4yM.js";import{L as n}from"./Line-Qtz2YiMf.js";import{X as p}from"./XAxis-DyE7q0u7.js";import{T as c}from"./Tooltip-CPyECygK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-j68O-sFh.js";import"./index-DbNPAuc7.js";import"./index-C-SXM_61.js";import"./index-8NR0Yac6.js";import"./index-uHodW5ti.js";import"./immer-DiDZ85-K.js";import"./get-D2ZTbC0U.js";import"./renderedTicksSlice-C6EU1Gxc.js";import"./axisSelectors-Csn4G978.js";import"./d3-scale-njnUDxXP.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-B9a4hmwF.js";import"./isWellBehavedNumber-Cw93K2XK.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-FGH_s-P1.js";import"./chartDataContext-BKJVmU0E.js";import"./CategoricalChart-D9BrBGmX.js";import"./Layer-DnTHWC2s.js";import"./Curve-Upd9kr-b.js";import"./types-Bxe0zMe1.js";import"./step-Dmz9aP0W.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BRL6-mrZ.js";import"./Label-nvXx3zPl.js";import"./Text-gi3hDHLU.js";import"./DOMUtils-N0jxLcJa.js";import"./ZIndexLayer-Cmf1UnqU.js";import"./useAnimationId-BlKkbeMI.js";import"./ActivePoints-DjBhRx8i.js";import"./Dot-C2L5-Wjg.js";import"./RegisterGraphicalItemId-C1UHdJ8R.js";import"./ErrorBarContext-D5Gab5oy.js";import"./GraphicalItemClipPath-DrUrL8JH.js";import"./SetGraphicalItem-D7ChpxF2.js";import"./getRadiusAndStrokeWidthFromDot-CwJ3_b_N.js";import"./ActiveShapeUtils-BKxrj1Kx.js";import"./CartesianAxis-C9WUsr8e.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-BiSEPHYV.js";import"./uniqBy-CEb4341A.js";import"./iteratee-DHRfW3v4.js";import"./Cross-BvxMZ5D8.js";import"./Rectangle-ClzNIlMR.js";import"./Sector-BAoP8TPe.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
