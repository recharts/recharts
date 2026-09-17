import{r as i,R as e}from"./iframe-CqRpABaK.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-vlbdjaP3.js";import{R as C}from"./zIndexSlice-KvzMEBh7.js";import{L as s}from"./Line-8cbiPC_u.js";import{X as p}from"./XAxis-BSRwnZMq.js";import{T as c}from"./Tooltip-3Iqd0Y5A.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Q6-Ges1c.js";import"./resolveDefaultProps-Dp9amxWt.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Bh6roEOt.js";import"./throttle-BjLrRmHo.js";import"./index-TAONuQw1.js";import"./index-D1EEl4o-.js";import"./isWellBehavedNumber-CUSt0J5q.js";import"./d3-scale-DITi7lUc.js";import"./index-DhXYHAxS.js";import"./index-Bn22tw5D.js";import"./renderedTicksSlice-Ddky5d5u.js";import"./index-BT_XvWwU.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bxw3yjgR.js";import"./chartDataContext-Cz0raIOD.js";import"./CategoricalChart-yTIhx19f.js";import"./Layer-g-5IuUpa.js";import"./Curve-BcRTskgb.js";import"./types-CC73-uTJ.js";import"./step-BuSHEP_V.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CBpEgVGL.js";import"./Label-IjPv9f7P.js";import"./Text-CXo2baHO.js";import"./DOMUtils-DJUl9uN8.js";import"./useId-BbgR7tKy.js";import"./useBackwardsCompatibleTheme-DXXC_Hh5.js";import"./ZIndexLayer-D34xXT-L.js";import"./useAnimationId-BJd8TCij.js";import"./ActivePoints-CyBSG7Nh.js";import"./Dot-CMcfKVB4.js";import"./RegisterGraphicalItemId-B1YLlZGq.js";import"./ErrorBarContext-CYofUAqs.js";import"./GraphicalItemClipPath-BVicx7bF.js";import"./SetGraphicalItem-B8cx_Fws.js";import"./getRadiusAndStrokeWidthFromDot-5mvy0zL6.js";import"./ActiveShapeUtils-EpogqgxJ.js";import"./useGraphicalItemIdentity-BjVJGRyR.js";import"./CartesianAxis-NW0JLUgH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-MH0vo0Hf.js";import"./uniqBy-wzlT94X_.js";import"./iteratee-D6dIEdRH.js";import"./Cross-CUKvkafW.js";import"./Rectangle-CNnTJ1N9.js";import"./util-Dxo8gN5i.js";import"./Sector-DhwEBqpB.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,v,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};export{r as API,n as SynchronizedTooltip,Ke as __namedExportsOrder,we as default};
