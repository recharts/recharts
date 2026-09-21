import{r as i,R as e}from"./iframe-C_u1NPXq.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-DoEKyRKj.js";import{R as C}from"./zIndexSlice-D4vNODax.js";import{L as s}from"./Line-Do5qQsI6.js";import{X as p}from"./XAxis-5AKDuUiC.js";import{T as c}from"./Tooltip-qNiYugKv.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BFhYeyxK.js";import"./resolveDefaultProps-Du-QS2vu.js";import"./get-C2VjdU0L.js";import"./axisSelectors-ClVjVkSn.js";import"./throttle-B6uw1bdh.js";import"./index-C5_PYkqz.js";import"./index-BAmjystd.js";import"./isWellBehavedNumber-BXJecvkc.js";import"./d3-scale-CA32_7ZH.js";import"./index-DFS_VDHO.js";import"./index-BGZsApoZ.js";import"./renderedTicksSlice-7TbUk5kV.js";import"./index-ChjG3lJf.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CHKIuE1P.js";import"./chartDataContext-CkGBCjv4.js";import"./CategoricalChart-B7Ubj1Y5.js";import"./Layer-B3fcXYMK.js";import"./Curve-CaQ3Xb8z.js";import"./types-CMh3udVy.js";import"./step-Dh3cXytf.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BBge8Oki.js";import"./Label-4YL6LIZD.js";import"./Text-V-XbkyPz.js";import"./DOMUtils-COAF9wVa.js";import"./useId-DJNZORW6.js";import"./useBackwardsCompatibleTheme-nG_PFK3f.js";import"./ZIndexLayer-D3gVBGpt.js";import"./useAnimationId-GgyVLnbG.js";import"./ActivePoints-CI6FJtyy.js";import"./Dot-CycumfnH.js";import"./RegisterGraphicalItemId-eQxwtpTA.js";import"./ErrorBarContext-BDzlZSzL.js";import"./GraphicalItemClipPath-j2cLfrt9.js";import"./SetGraphicalItem-DbKh9IZb.js";import"./getRadiusAndStrokeWidthFromDot-tymVsWd9.js";import"./ActiveShapeUtils-BCBUr_LW.js";import"./useGraphicalItemIdentity-DhPf_S2E.js";import"./CartesianAxis-CfxEFnrg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-Cn_Ipt4K.js";import"./uniqBy-C0r4dBBH.js";import"./iteratee-DI25ZzqD.js";import"./Cross-DAPDO_TP.js";import"./Rectangle-DgloZmA0.js";import"./util-Dxo8gN5i.js";import"./Sector-DhupiDx1.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
