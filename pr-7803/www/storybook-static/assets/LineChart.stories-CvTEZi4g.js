import{r as i,R as e}from"./iframe-CbFuLFtu.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-_ExzCiC5.js";import{R as C}from"./zIndexSlice-D_moIlDh.js";import{L as s}from"./Line-BaLTgSTX.js";import{X as p}from"./XAxis-DNc-Fb9p.js";import{T as c}from"./Tooltip-CIq0HG2Z.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-mkS7ocZy.js";import"./resolveDefaultProps-CPfR2KLv.js";import"./get-C2VjdU0L.js";import"./axisSelectors-rEOj_nFC.js";import"./throttle-B61_h2S2.js";import"./index-KwOlWhXR.js";import"./index-BJNLJA8n.js";import"./isWellBehavedNumber-I93tJShS.js";import"./d3-scale-Dx3NsH5I.js";import"./index-BqC7Dl52.js";import"./index-KFI10z6J.js";import"./renderedTicksSlice-DX_n3Vj3.js";import"./index-Cqx3EeHn.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B3yIAK9J.js";import"./chartDataContext-D0ZC99YL.js";import"./CategoricalChart-Bc2ATxVj.js";import"./Layer-DrMT32rq.js";import"./Curve-_JdbhAIS.js";import"./types-CI87_xcK.js";import"./step-DlCZnSaC.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-pPCGFSQU.js";import"./Label-B0AIyR8e.js";import"./Text-Cl3vVdZy.js";import"./DOMUtils-ac9yPFyL.js";import"./useId-eR1BXb0O.js";import"./useBackwardsCompatibleTheme-CAlV4td3.js";import"./ZIndexLayer-DLo3iEV5.js";import"./useAnimationId-B7x_KCom.js";import"./ActivePoints-Ba6uCDOF.js";import"./Dot-BGjmzY1b.js";import"./RegisterGraphicalItemId-Bfab39Ve.js";import"./ErrorBarContext-u6MEnxN0.js";import"./GraphicalItemClipPath-Cc0KTnBN.js";import"./SetGraphicalItem-Ga4RFH-2.js";import"./getRadiusAndStrokeWidthFromDot-Dp4xn9Uf.js";import"./ActiveShapeUtils-C1bQLB6k.js";import"./useGraphicalItemIdentity-WLgpMifT.js";import"./CartesianAxis-DmdL1NlC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-D0ssS32b.js";import"./uniqBy-qMnMoCvD.js";import"./iteratee-C1nM4-Ch.js";import"./Cross-DITT8qNm.js";import"./Rectangle-DDNbo7Ju.js";import"./util-Dxo8gN5i.js";import"./Sector-VzpKEpAo.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
