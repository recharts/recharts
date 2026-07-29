import{r as s,R as e}from"./iframe-BfLA0-xE.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-C4BbF93J.js";import{R as C}from"./zIndexSlice-CxHl2f9g.js";import{L as n}from"./Line-BoI2xV5j.js";import{X as p}from"./XAxis-WPatnG2H.js";import{T as c}from"./Tooltip-Btjpelxl.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BAR0yTLB.js";import"./index-BjcF9KIO.js";import"./index-Ua2Ph-JY.js";import"./index-B543iUM5.js";import"./index-BW364ill.js";import"./throttle-B4u_I-fq.js";import"./get-C2VjdU0L.js";import"./renderedTicksSlice-CGglt0-o.js";import"./axisSelectors-k3PcgN9v.js";import"./resolveDefaultProps-DtsxpH35.js";import"./isWellBehavedNumber-D8uyT4tB.js";import"./d3-scale-d2-bssiM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BkXNVBYX.js";import"./chartDataContext-CGwkpgmd.js";import"./CategoricalChart-Y3X7k6Lu.js";import"./Layer-D2dAv-AD.js";import"./Curve-BA6tKfOd.js";import"./types-CMVKXdeT.js";import"./step-V7C6Dr8u.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-27DP4DZS.js";import"./Label-KTqJ5zS0.js";import"./Text-ClB8EwPj.js";import"./DOMUtils-AQyyON10.js";import"./ZIndexLayer-t--MbcyW.js";import"./useAnimationId-Uu44n6G0.js";import"./ActivePoints-paS1xZt9.js";import"./Dot-BEY7sYgl.js";import"./RegisterGraphicalItemId-E0HC7VAQ.js";import"./ErrorBarContext-CpZDTVtA.js";import"./GraphicalItemClipPath-Cw3vhXUK.js";import"./SetGraphicalItem-DquyLFCZ.js";import"./getRadiusAndStrokeWidthFromDot-je8BEofk.js";import"./ActiveShapeUtils-DGNTXBhg.js";import"./RechartsThemeContext-BFvPG-1n.js";import"./CartesianAxis-C347muns.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-cUYp3EBW.js";import"./uniqBy-B3gL9YDt.js";import"./iteratee-cDLRKSLL.js";import"./Cross-DNC6Puay.js";import"./Rectangle-CJAi1gPv.js";import"./util-Dxo8gN5i.js";import"./Sector-Cu3c-EO-.js";const Be={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
