import{r as i,R as e}from"./iframe-r3x3_yf4.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-Bw5WcD6h.js";import{R as C}from"./zIndexSlice-NMb2vrpT.js";import{L as s}from"./Line-DTsRfFau.js";import{X as p}from"./XAxis-CR4ARCer.js";import{T as c}from"./Tooltip-6IxPy6gq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-_voIQt-f.js";import"./resolveDefaultProps-D1EJxC7c.js";import"./get-cF5BDHN6.js";import"./axisSelectors-vmwSvweQ.js";import"./throttle-8hacI6eE.js";import"./index-DCzxVT24.js";import"./index-BmCC5OWu.js";import"./polarAxisSelectors-jpdu1VNr.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Dyg5lSMz.js";import"./index-CXlPhSWr.js";import"./index-Br7b2-_x.js";import"./renderedTicksSlice-Bwv1Ycq-.js";import"./index-XR02wMNZ.js";import"./fillDefinitions-6lmPyfb7.js";import"./CartesianChart-Cu7l70fA.js";import"./chartDataContext-ZH5Padeo.js";import"./CategoricalChart-B9Dtz71g.js";import"./Layer-Bgw_1AH_.js";import"./Curve-D6X3Km74.js";import"./types-C8JZdNIX.js";import"./step-iF2C6urg.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CPsjZ3pD.js";import"./Label-C--_kXjw.js";import"./Text-BJw7R8d_.js";import"./ZIndexLayer-U0OKF9Zk.js";import"./ActivePoints-Cjc4G9GK.js";import"./Dot-CLqyjgQR.js";import"./activeStyles-TIYUw2JD.js";import"./useAnimationId-EE0FjekO.js";import"./Symbols-C3Jeo7wF.js";import"./symbol-BJuLtVcg.js";import"./ErrorBarContext-U5wRur_B.js";import"./SetGraphicalItem-C13buv2r.js";import"./getRadiusAndStrokeWidthFromDot-Bt8N-NmA.js";import"./ActiveShapeUtils-Dpt4d3xT.js";import"./useEffectiveDataKey-CUQD41kZ.js";import"./CartesianAxis-D0GcJHV6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Bty5qG4M.js";import"./uniqBy-B7Rcd-R6.js";import"./iteratee-Bw3PE4p8.js";import"./isArguments-yB-y1yaH.js";import"./Cross-D-GxHVeh.js";import"./Rectangle-BHZ7OtoD.js";import"./util-Dxo8gN5i.js";import"./Sector-C2_QhYTT.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
