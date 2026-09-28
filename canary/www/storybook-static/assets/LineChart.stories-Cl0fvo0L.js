import{r as i,R as e}from"./iframe-C0xznG0O.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-U1g15pC4.js";import{R as C}from"./zIndexSlice-DJPgYMzR.js";import{L as s}from"./Line-Dnaet704.js";import{X as p}from"./XAxis-3Gc-ze43.js";import{T as c}from"./Tooltip-DiFOpZfZ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CVCjkFWi.js";import"./resolveDefaultProps-BUVviTw0.js";import"./get-C2VjdU0L.js";import"./axisSelectors-KY5G3glE.js";import"./throttle-ca9JXI34.js";import"./index-3uxIGkdF.js";import"./index-D3C5hy7v.js";import"./isWellBehavedNumber-LB6DsCms.js";import"./d3-scale-D_nuk9af.js";import"./index-_lyS6R2I.js";import"./index-DGO5Pcl1.js";import"./renderedTicksSlice-Bn386d_U.js";import"./index-BsyGVjbB.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BilL1rox.js";import"./chartDataContext-r0-EMCxL.js";import"./CategoricalChart-AELfSP8z.js";import"./Layer-DEw218Et.js";import"./Curve-BhnG6nXS.js";import"./types-CAt-4Uam.js";import"./step-GNpLhVcs.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ykdNzwWW.js";import"./Label-CdEwuWhi.js";import"./Text-DqaiwO2M.js";import"./DOMUtils-CfITjNXH.js";import"./useId-CG9ImVhA.js";import"./useBackwardsCompatibleTheme-Dw2k0O31.js";import"./ZIndexLayer-Dqy54YGG.js";import"./useAnimationId-DxkHkn8_.js";import"./ActivePoints-sJpS3tVi.js";import"./Dot-BWAKHyTE.js";import"./RegisterGraphicalItemId-CHswFd-U.js";import"./ErrorBarContext-BMmbs1Vg.js";import"./GraphicalItemClipPath-BwjkPZ9S.js";import"./SetGraphicalItem-BcdUc_t-.js";import"./getRadiusAndStrokeWidthFromDot-MXaDMjOJ.js";import"./ActiveShapeUtils-s_Kx4tDI.js";import"./useGraphicalItemIdentity-BPVVk20a.js";import"./CartesianAxis-CXWr6EGM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-CJZMOgR9.js";import"./uniqBy-Ck71NLZs.js";import"./iteratee-B2v99DCQ.js";import"./Cross-BP0FfHwZ.js";import"./Rectangle-BUlwcvxX.js";import"./util-Dxo8gN5i.js";import"./Sector-DmMCKaPf.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
