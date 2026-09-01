import{r as s,R as e}from"./iframe-eCr2-59Z.js";import{L as n}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-Dp6CvQsD.js";import{R as C}from"./zIndexSlice-CD7Nzmbk.js";import{L as m}from"./Line-C0J7S93P.js";import{X as p}from"./XAxis-BeuO0xzQ.js";import{T as c}from"./Tooltip-Nk-JtxEK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DoeZcTzK.js";import"./resolveDefaultProps-CLrpEwf5.js";import"./get-C2VjdU0L.js";import"./axisSelectors-XgUrcrj-.js";import"./throttle-CHiOBW5g.js";import"./index-DlVaZeCX.js";import"./index-CDbn5IN3.js";import"./isWellBehavedNumber-BX5cDItw.js";import"./d3-scale-DSuKdHKR.js";import"./index-D2uCi-Qk.js";import"./index-CyK8wlGY.js";import"./renderedTicksSlice-BlPrZ01d.js";import"./index-BuNBM-8V.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DC1yVdgS.js";import"./chartDataContext-BNVmIje_.js";import"./CategoricalChart-w4Nfi_R8.js";import"./Layer-B9Pm5ax2.js";import"./Curve-_JaX0enx.js";import"./types-CkIcctJW.js";import"./step-DPSpBZpB.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ObasoevI.js";import"./Label-Dt0yALiM.js";import"./Text-Dt8yoLTw.js";import"./DOMUtils-CvaVkNT1.js";import"./useId-wEfkqppv.js";import"./useBackwardsCompatibleTheme-chYhM6Hr.js";import"./ZIndexLayer-t0OZMtls.js";import"./useAnimationId-BzRkh0x1.js";import"./ActivePoints-Cr5YS-RN.js";import"./Dot-C_rZA8Hd.js";import"./RegisterGraphicalItemId-C5jGdxAH.js";import"./ErrorBarContext-CMzXWbdm.js";import"./GraphicalItemClipPath-C8yNHMes.js";import"./SetGraphicalItem-zq2UkTvM.js";import"./getRadiusAndStrokeWidthFromDot-BYtBcAc6.js";import"./ActiveShapeUtils-9F7-N6Ps.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-DM1SJqww.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-MEJhTGNO.js";import"./uniqBy-U4NYpMNG.js";import"./iteratee-iLRiaLVh.js";import"./Cross-BfzXoIjE.js";import"./Rectangle-BNHBAKh_.js";import"./util-Dxo8gN5i.js";import"./Sector-CE_l6vGe.js";const we={argTypes:n,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(m,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(n),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(m,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(m,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(n),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Ke=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Ke as __namedExportsOrder,we as default};
