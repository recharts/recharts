import{r as i,R as e}from"./iframe-WV_asirj.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-CKO7Z02r.js";import{R as C}from"./zIndexSlice-GixElPZ_.js";import{L as s}from"./Line-CkMWcGog.js";import{X as p}from"./XAxis-DD-Khhe3.js";import{T as c}from"./Tooltip-Wq0KObxC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CsCMkadb.js";import"./resolveDefaultProps-CXdIXtb2.js";import"./get-C2VjdU0L.js";import"./axisSelectors-8uL09VjP.js";import"./throttle-Ba7gBaVO.js";import"./index-BTbJQRbi.js";import"./index-FtwXBSMR.js";import"./isWellBehavedNumber-CU2jbRyM.js";import"./d3-scale-Cy0pMHbr.js";import"./index-DNMQn43Q.js";import"./index-BrA93ln9.js";import"./renderedTicksSlice-Dr2G7YjO.js";import"./index-5piGZExt.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BSNtd9by.js";import"./chartDataContext-DkG6gPSF.js";import"./CategoricalChart-DnjLzrnf.js";import"./Layer-D1F1s_Cb.js";import"./Curve-CiYmGtZr.js";import"./types-Cgo928Y8.js";import"./step-F8CMqi4G.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-xMF2BQb6.js";import"./Label-Q870r3oo.js";import"./Text-Dsqc9k19.js";import"./DOMUtils-CnLU0pz8.js";import"./useId-CWlmqz6v.js";import"./useBackwardsCompatibleTheme-DtOSIckQ.js";import"./ZIndexLayer-rRlGaKvU.js";import"./useAnimationId-DlwLI8cF.js";import"./ActivePoints-BR8sRvdX.js";import"./Dot-CTbzWonC.js";import"./RegisterGraphicalItemId-B1qksrkN.js";import"./ErrorBarContext-CGrnfAaP.js";import"./GraphicalItemClipPath-BBN-JnlO.js";import"./SetGraphicalItem-BpDA6gwY.js";import"./getRadiusAndStrokeWidthFromDot-DQScL_OV.js";import"./ActiveShapeUtils--kX-_F3I.js";import"./useGraphicalItemIdentity-DUG11jyw.js";import"./CartesianAxis-BGGDzNNT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-CbQZLq3o.js";import"./uniqBy-CxPRbKAp.js";import"./iteratee-Bft3m4as.js";import"./Cross-Cg0r-_7I.js";import"./Rectangle-WQEGXCsY.js";import"./util-Dxo8gN5i.js";import"./Sector-BoAqnBGz.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
