import{r as i,R as e}from"./iframe-d_I8TNCn.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-C99XMvdd.js";import{R as C}from"./zIndexSlice-C86-Fd8c.js";import{L as s}from"./Line-DdMP5ELM.js";import{X as p}from"./XAxis-CPk4rkW4.js";import{T as c}from"./Tooltip-8x1TIELh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BhDfTeaQ.js";import"./resolveDefaultProps-DvL_oRGd.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DS1SwPss.js";import"./throttle-Dub4vgX-.js";import"./index-Basp38ZP.js";import"./index-KJ9I69Vp.js";import"./isWellBehavedNumber-BiGXAn6V.js";import"./d3-scale-BHQnpvaw.js";import"./index-Bk90M1L4.js";import"./index-IVp7d0na.js";import"./renderedTicksSlice-D-j8NF5Q.js";import"./index-BDSLAMRI.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BkYu52zN.js";import"./chartDataContext-C_MhBuQy.js";import"./CategoricalChart-BaXgxPjJ.js";import"./Layer-yfSSiW9J.js";import"./Curve-7i5iRSvm.js";import"./types-Dqfpifaw.js";import"./step-Zcc4_rmH.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-b-EDeVK-.js";import"./Label-C6LY1R7r.js";import"./Text--rvXV2DW.js";import"./DOMUtils-CklqBmUp.js";import"./useId-CcoqHBc4.js";import"./useBackwardsCompatibleTheme-0Rfjr95D.js";import"./ZIndexLayer-CUsrGrDa.js";import"./useAnimationId-BWx9Rtft.js";import"./ActivePoints-B3dHfjWU.js";import"./Dot-BDaArr9M.js";import"./RegisterGraphicalItemId-dmq8PwmH.js";import"./ErrorBarContext-D8HRGdCI.js";import"./GraphicalItemClipPath-BVkKFKzE.js";import"./SetGraphicalItem-q_w6KGtf.js";import"./getRadiusAndStrokeWidthFromDot-C7z_bU2f.js";import"./ActiveShapeUtils-ByVz5Hkp.js";import"./useGraphicalItemIdentity-BG-BVB46.js";import"./CartesianAxis-C7wfh-vo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-jVsdCbSq.js";import"./uniqBy-Dn4KM-Ky.js";import"./iteratee-CwikYVCT.js";import"./Cross-DmHFzZ2Y.js";import"./Rectangle-EdaUCxay.js";import"./util-Dxo8gN5i.js";import"./Sector-DWNhUzO6.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
