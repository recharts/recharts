import{r as s,R as e}from"./iframe-CWxtgXuN.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-BUIVmXVT.js";import{R as C}from"./zIndexSlice-DuNjPOIA.js";import{L as n}from"./Line-CEqOTKT-.js";import{X as p}from"./XAxis-BIy0Ixfj.js";import{T as c}from"./Tooltip-DuwqObOg.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-cC4MiwtJ.js";import"./index-ClfrRk61.js";import"./index-Cgh7W-Sw.js";import"./index-D3Okail2.js";import"./index-Co2hlbGQ.js";import"./throttle-DySWaKHI.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D3U5jtqo.js";import"./resolveDefaultProps-DB57oDCz.js";import"./isWellBehavedNumber-RhnC_be2.js";import"./d3-scale-PJ0eA6WB.js";import"./renderedTicksSlice-DdR3Yk66.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-VS3m0tpN.js";import"./chartDataContext-BzVtDYqK.js";import"./CategoricalChart-CDL51AOI.js";import"./Layer-DvshJojd.js";import"./Curve-D2bA3Qsr.js";import"./types-CUZin1-8.js";import"./step-FW_ylVPK.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-xrLxeBUX.js";import"./Label-B4Vj6wwG.js";import"./Text-Bzp-NWLm.js";import"./DOMUtils-B_ZEHGfF.js";import"./ZIndexLayer-BlQF_3Y8.js";import"./useAnimationId-N7_T0mrz.js";import"./ActivePoints-BZ5j9Isf.js";import"./Dot-BmDNDKDS.js";import"./RegisterGraphicalItemId-DrgIbtZo.js";import"./ErrorBarContext-CAu46fWB.js";import"./GraphicalItemClipPath-C5JLsR_L.js";import"./SetGraphicalItem-DN47EjfQ.js";import"./graphicalItemIdentity-CLct0io8.js";import"./ActiveShapeUtils-CHtnvTAF.js";import"./RechartsThemeContext-DQSpDGj3.js";import"./CartesianAxis-Bg_4zGXW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-ClfhZWor.js";import"./uniqBy-lHl2ZxXA.js";import"./iteratee-D8MGVHsu.js";import"./Cross-CyJKj4w1.js";import"./Rectangle-BaSYnlz4.js";import"./util-Dxo8gN5i.js";import"./Sector-wFNpFLbq.js";const Be={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
