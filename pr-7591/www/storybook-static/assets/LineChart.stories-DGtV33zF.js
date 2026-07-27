import{r as s,R as e}from"./iframe-BRjS3pa5.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-xB0mW5OS.js";import{R as C}from"./zIndexSlice-XdBxArD4.js";import{L as n}from"./Line-BnrW5em_.js";import{X as p}from"./XAxis-C08AGWpL.js";import{T as c}from"./Tooltip-BPX6UV8F.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-kdlfkWfS.js";import"./index-BBFKTPis.js";import"./index-JNqHplgB.js";import"./index-CTzNvEbv.js";import"./index-BBA_Z08e.js";import"./throttle-BVKBaBan.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BqYlra_S.js";import"./axisSelectors-CG0YGbYa.js";import"./resolveDefaultProps-CQjC3mbh.js";import"./isWellBehavedNumber-BpzQ2UFz.js";import"./d3-scale-BkRq6yTg.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CNsqprpw.js";import"./chartDataContext-UzO9iCYp.js";import"./CategoricalChart-CG1ra5Si.js";import"./Layer-BT4MOeWW.js";import"./Curve-BAtmvmuC.js";import"./types-DRhRxFpq.js";import"./step-DMngYI5d.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-51O2x23y.js";import"./Label-Dttiw5NK.js";import"./Text-z_Sr8qFY.js";import"./DOMUtils-D9-UYNUT.js";import"./ZIndexLayer-98YKZStn.js";import"./useAnimationId-CRgssPqb.js";import"./ActivePoints-VQONApch.js";import"./Dot-D2cX8i8Q.js";import"./RegisterGraphicalItemId-BMfolY6u.js";import"./ErrorBarContext-CRJaMaH8.js";import"./GraphicalItemClipPath-CPBZ3hrs.js";import"./SetGraphicalItem-B-YWrUBQ.js";import"./getRadiusAndStrokeWidthFromDot-BUdbBqHd.js";import"./ActiveShapeUtils-pSZkQHNE.js";import"./CartesianAxis-Cffb3mHz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CTxTvR-3.js";import"./isBuffer-Crkas5dz.js";import"./useElementOffset-De69kyJ6.js";import"./uniqBy-BAhY2P_x.js";import"./iteratee-vQSh6bDz.js";import"./Cross-x9zwBclm.js";import"./Rectangle-BRRrD7WV.js";import"./util-Dxo8gN5i.js";import"./Sector-MRMFL2R5.js";const Be={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
