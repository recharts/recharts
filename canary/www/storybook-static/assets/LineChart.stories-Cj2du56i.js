import{r as i,R as e}from"./iframe-Bo_zsOWR.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-DB8aTiAD.js";import{R as C}from"./zIndexSlice-OHt7JoW7.js";import{L as s}from"./Line-BWClZ-ca.js";import{X as p}from"./XAxis-D98tl-gx.js";import{T as c}from"./Tooltip-CBfeQ_-p.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DXOTGCmH.js";import"./resolveDefaultProps-BUDDeE56.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CoIK-Kuy.js";import"./throttle-BqQSOARz.js";import"./index-BFt4SfZr.js";import"./index-PR_8Seu8.js";import"./isWellBehavedNumber-DciPVP_A.js";import"./d3-scale-CKJS4wTS.js";import"./index-krRAv2GK.js";import"./index-Mut52yxE.js";import"./renderedTicksSlice-CdFXeG0P.js";import"./index-DviWxMqn.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CzEQA5tK.js";import"./chartDataContext-Cxr8uE5y.js";import"./CategoricalChart-fHgXn9UL.js";import"./Layer-CAovhaI5.js";import"./Curve-BhTc2Eo1.js";import"./types-BNv_Hlvb.js";import"./step-CUJcIDHf.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Ctbn0EH3.js";import"./Label-9TZrIdzh.js";import"./Text-bwywBWWq.js";import"./DOMUtils-Bc-kV__a.js";import"./useId-DYywqoqR.js";import"./useBackwardsCompatibleTheme-Qf0ZXpAz.js";import"./ZIndexLayer-BMSvUtDW.js";import"./useAnimationId-D_pJ9jTl.js";import"./ActivePoints-BWLdti4e.js";import"./Dot-C29FoJO-.js";import"./RegisterGraphicalItemId-Cd8-cCZH.js";import"./ErrorBarContext-Dd08ywVQ.js";import"./GraphicalItemClipPath-Dbz5b6yM.js";import"./SetGraphicalItem-Drf2tYBV.js";import"./getRadiusAndStrokeWidthFromDot-CoOWrleJ.js";import"./ActiveShapeUtils-Bp87fl58.js";import"./useGraphicalItemIdentity-jZjWs-3I.js";import"./CartesianAxis-CKvATVWA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-BUX1YZEU.js";import"./uniqBy-DNoDnVLW.js";import"./iteratee-Bt5_-zpO.js";import"./Cross-DWRwsjTl.js";import"./Rectangle-BjhkbRaf.js";import"./util-Dxo8gN5i.js";import"./Sector-Ba2-1_MP.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
