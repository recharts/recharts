import{r as s,R as e}from"./iframe-DHvlXZZp.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-DJFnKyaG.js";import{R as C}from"./zIndexSlice-D7_5YQCx.js";import{L as n}from"./Line-DYyHO80i.js";import{X as p}from"./XAxis-C0xAN7Vm.js";import{T as c}from"./Tooltip-B5NiwQTr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CaVHAbWI.js";import"./index-CDvSCu-7.js";import"./index-B_pekVWz.js";import"./index-rrh18h4R.js";import"./index-DGFoeBTW.js";import"./throttle-Bg-VcpoN.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-C2TzwS0g.js";import"./axisSelectors-lbKqd9aP.js";import"./resolveDefaultProps-DAXfWdSl.js";import"./isWellBehavedNumber-D3uQHhq6.js";import"./d3-scale-Cey7ctPf.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DFvBiy9D.js";import"./chartDataContext-kJZSLmpd.js";import"./CategoricalChart-sk98qpS9.js";import"./Layer-BW5xomOj.js";import"./Curve-Bc6Wc-5h.js";import"./types-CRJA0nge.js";import"./step-B2khkJJz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BVZCnb1h.js";import"./Label-TKCFRexK.js";import"./Text-D-2er-qS.js";import"./DOMUtils-CXaSfF0Q.js";import"./ZIndexLayer-D7_As1-8.js";import"./useAnimationId-uiW7aOrL.js";import"./ActivePoints-oifiU6yf.js";import"./Dot-Btw86tRD.js";import"./RegisterGraphicalItemId-DWC6_slS.js";import"./ErrorBarContext-BK2fwAvo.js";import"./GraphicalItemClipPath-b_iqRJZZ.js";import"./SetGraphicalItem-D2M9GsyT.js";import"./getRadiusAndStrokeWidthFromDot-B-WHlf9E.js";import"./ActiveShapeUtils-CUQXZ3i4.js";import"./RechartsThemeContext-BqfUunGe.js";import"./CartesianAxis-DdKNIbtf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./useElementOffset-DWKaUxb_.js";import"./uniqBy-B1Poqyga.js";import"./iteratee-CZdVePke.js";import"./Cross-BBJ1Kyk2.js";import"./Rectangle-DPmaYH73.js";import"./util-Dxo8gN5i.js";import"./Sector-C_z4Y56l.js";const Be={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Ie=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Ie as __namedExportsOrder,Be as default};
