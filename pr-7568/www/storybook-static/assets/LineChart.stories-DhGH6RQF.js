import{r as s,R as e}from"./iframe-E9cTKeRE.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-YopgjNIh.js";import{R as C}from"./zIndexSlice-DgjoBcM4.js";import{L as n}from"./Line-oPEUnh-k.js";import{X as p}from"./XAxis-rRrOlgKo.js";import{T as c}from"./Tooltip-DkJ_BFd4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B1G603CI.js";import"./index-BKdHAXhr.js";import"./index-CCDqlq1e.js";import"./index-CXgkWbkn.js";import"./index-dTe_TrB1.js";import"./throttle-CGWlJj3Y.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-8_6vlRT3.js";import"./axisSelectors-Cz4e0hh2.js";import"./resolveDefaultProps-VcEXnedp.js";import"./isWellBehavedNumber-CNJuLpb3.js";import"./d3-scale-BKY6FaDv.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-h93kYpLN.js";import"./chartDataContext-BLSdU0GF.js";import"./CategoricalChart-Dgnr1Z5s.js";import"./Layer-gCSDlxX6.js";import"./Curve-CKjkPgN2.js";import"./types-BiCnzAm7.js";import"./step-xjRdG8EV.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B1DMV_LJ.js";import"./Label-BpZfxLrK.js";import"./Text-Z5PFJcO5.js";import"./DOMUtils-7h76k5q7.js";import"./ZIndexLayer-T104iiSj.js";import"./useAnimationId-DdQ6zElL.js";import"./ActivePoints-Co1l_Ha9.js";import"./Dot-DCqiO5Z7.js";import"./RegisterGraphicalItemId-y5W6RdIF.js";import"./ErrorBarContext-CrHnHUPz.js";import"./GraphicalItemClipPath-BanWagPz.js";import"./SetGraphicalItem-i24-OBmJ.js";import"./getRadiusAndStrokeWidthFromDot-CZrTH9En.js";import"./ActiveShapeUtils-D82Ok3yU.js";import"./CartesianAxis-X6rLp4nN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./useElementOffset-D-VfA5vV.js";import"./uniqBy-BABLZnAx.js";import"./iteratee-CoZ1T3nQ.js";import"./Cross-B3_mywlq.js";import"./Rectangle-CPcTji69.js";import"./util-Dxo8gN5i.js";import"./Sector-BitZCkPD.js";const Te={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
