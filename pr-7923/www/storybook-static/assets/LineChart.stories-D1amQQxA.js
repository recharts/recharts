import{r as i,R as e}from"./iframe-wyV1OFJQ.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-CkRDvXg6.js";import{R as C}from"./zIndexSlice-0AwT1g9-.js";import{L as s}from"./Line-BEKv9UbE.js";import{X as p}from"./XAxis-C5gx8h5c.js";import{T as c}from"./Tooltip-BNWhP4RQ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-0u6nGOPN.js";import"./resolveDefaultProps-ChoAHX7J.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DUKM8TOz.js";import"./throttle-CUUK7_-R.js";import"./index-D2dSqbX-.js";import"./index-DF9BGNcn.js";import"./isWellBehavedNumber-DZ7NyhtT.js";import"./d3-scale-BCMPgSvY.js";import"./index-ZiSf6-0W.js";import"./index-BMAJF2wT.js";import"./renderedTicksSlice-B5WYeoae.js";import"./index-DnbQaRSG.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-wU-_7i2L.js";import"./chartDataContext-BFbqUx5W.js";import"./CategoricalChart-CYyVEG_Z.js";import"./Layer-C6HNy6Ts.js";import"./Curve-BT6y-5_3.js";import"./types-Df9zKJ57.js";import"./step-DN0D11qs.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-9EcBcc8f.js";import"./Label-DI-dZ1Mj.js";import"./Text-LrIwM5Ef.js";import"./DOMUtils-CMxfKpC9.js";import"./useId-CyB1NCIB.js";import"./useBackwardsCompatibleTheme-DPV1EzeF.js";import"./ZIndexLayer--FDGDHLw.js";import"./useAnimationId-BF1AH8CU.js";import"./ActivePoints-C-ZsoMWs.js";import"./Dot-CQzkvjlm.js";import"./RegisterGraphicalItemId-_B2FfK6k.js";import"./ErrorBarContext-D8mz_gNG.js";import"./GraphicalItemClipPath-Txs2MFfL.js";import"./SetGraphicalItem-DW8cLaxQ.js";import"./getRadiusAndStrokeWidthFromDot-BVhvwnfR.js";import"./ActiveShapeUtils-D6GHKFv-.js";import"./useGraphicalItemIdentity-gmKXJpLw.js";import"./CartesianAxis-C_-7YUyD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-WnBYc90z.js";import"./uniqBy-BDxcmCyA.js";import"./iteratee-KwxnxvYa.js";import"./Cross-CUH5Fm-2.js";import"./Rectangle-CKwfFBjt.js";import"./util-Dxo8gN5i.js";import"./Sector-BrG4-iyx.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
