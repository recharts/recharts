import{r as s,R as e}from"./iframe-CUx1TCgW.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-CNLXTUer.js";import{R as C}from"./zIndexSlice-CyWJB_IO.js";import{L as n}from"./Line-BEUTyBzO.js";import{X as p}from"./XAxis-XVUuusjp.js";import{T as c}from"./Tooltip--yATZ1LX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DPzAHq-Z.js";import"./index-CvhQIsHS.js";import"./index-BwmXDkUH.js";import"./index-DFl4S33S.js";import"./index-BJ8mfrgX.js";import"./throttle-BjWBzxHj.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-DwQTH0-L.js";import"./axisSelectors-VAnXlTNN.js";import"./resolveDefaultProps-BueptT4L.js";import"./isWellBehavedNumber-CUV8846M.js";import"./d3-scale-BarhEeTK.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BiT6vKeC.js";import"./chartDataContext-DUiXobBm.js";import"./CategoricalChart-BV_ZCc_1.js";import"./Layer-DkHmdg7h.js";import"./Curve-Mg827IgF.js";import"./types-5kZg7jgz.js";import"./step-Dl-o-ZW1.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ScvXBbCb.js";import"./Label-Bd7WMI0X.js";import"./Text-C0Bz7-yS.js";import"./DOMUtils-D7djwgJL.js";import"./ZIndexLayer-B-tk4cwY.js";import"./useAnimationId-Cx6lzC6E.js";import"./ActivePoints-BFL4MLXA.js";import"./Dot-CUsFN3PS.js";import"./RegisterGraphicalItemId-BLmhcDXv.js";import"./ErrorBarContext-h5QrqZl2.js";import"./GraphicalItemClipPath-J1io5uDl.js";import"./SetGraphicalItem-CaISs0rU.js";import"./getRadiusAndStrokeWidthFromDot-CPoinBTG.js";import"./ActiveShapeUtils-D9lVsXDE.js";import"./CartesianAxis-BocxUsAL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-DNdZu7MT.js";import"./uniqBy-DSJ0hFsD.js";import"./iteratee-CuBpgztc.js";import"./Cross-Bzly_9F2.js";import"./Rectangle-C2v-PTgf.js";import"./util-Dxo8gN5i.js";import"./Sector-BCKOGouU.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
