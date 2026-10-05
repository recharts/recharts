import{r as i,R as e}from"./iframe-BfMFh77x.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-m0PmXRK9.js";import{R as C}from"./zIndexSlice-Cztpg_sh.js";import{L as s}from"./Line-CwvcO-PT.js";import{X as p}from"./XAxis-k9LTsr7W.js";import{T as c}from"./Tooltip-BFWrEaqv.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C0SS5kvR.js";import"./resolveDefaultProps-B4G3dz_P.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DoWmjLIh.js";import"./throttle-BwatAsiE.js";import"./index-DROOMzyH.js";import"./index-B4iccN4g.js";import"./isWellBehavedNumber-MC_-4Sz8.js";import"./d3-scale-DZONVDEO.js";import"./index-D4qjDIL1.js";import"./index-3-96IZAO.js";import"./renderedTicksSlice-BnDYFPsi.js";import"./index-DX1BsebK.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-nK5Jsuas.js";import"./chartDataContext-icTGDudH.js";import"./CategoricalChart-CD0F4PlX.js";import"./Layer-ckuwG36h.js";import"./Curve-QoN7k3_4.js";import"./types-Ccphz-V5.js";import"./step-DXJqGD70.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DBTQ-7wC.js";import"./Label-D2fJdiFl.js";import"./Text-DEsVSfke.js";import"./DOMUtils-CakfvwTP.js";import"./useId-DVFEoxf5.js";import"./useBackwardsCompatibleTheme-DnqD941W.js";import"./ZIndexLayer-DqwLDNFX.js";import"./useAnimationId-DwVIllah.js";import"./ActivePoints-BxTaRtGv.js";import"./Dot-BjmaMaBF.js";import"./RegisterGraphicalItemId-CyLRpybL.js";import"./ErrorBarContext-CANgFbqT.js";import"./GraphicalItemClipPath-D-McSxMj.js";import"./SetGraphicalItem-BkQyU4p0.js";import"./getRadiusAndStrokeWidthFromDot-LBHtKVz7.js";import"./ActiveShapeUtils-PP0TbsoH.js";import"./useGraphicalItemIdentity-CFRBZ7j4.js";import"./CartesianAxis-BFOn3Dtf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-CVbgoa7K.js";import"./uniqBy-ZtJmq_p1.js";import"./iteratee-Blwx8XDY.js";import"./Cross-DbVxZsyn.js";import"./Rectangle-r3IYiQGz.js";import"./util-Dxo8gN5i.js";import"./Sector-DFGMbU-S.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
