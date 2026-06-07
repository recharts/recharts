import{r as s,R as e}from"./iframe-BppzjNnb.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-Com6S3Xg.js";import{R as C}from"./zIndexSlice-Bz25ueAP.js";import{L as n}from"./Line-DXBTQPhH.js";import{X as p}from"./XAxis-C5D711PO.js";import{T as c}from"./Tooltip-Ya19WNi9.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BctTvK_s.js";import"./index-BbKylj6c.js";import"./index-e2oR9ZSK.js";import"./index-C65TBMtY.js";import"./index-G9uqktgG.js";import"./immer-BMUlrvOK.js";import"./get-BADN9FM0.js";import"./renderedTicksSlice-DTii-kcm.js";import"./axisSelectors-W078EOTn.js";import"./d3-scale-CWnXAf3z.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-DWEEC0T7.js";import"./isWellBehavedNumber-C8JMlk1c.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DAZ3YXd0.js";import"./chartDataContext-C-pJrkOs.js";import"./CategoricalChart-CXNjM0Ue.js";import"./Layer-InP7nrar.js";import"./Curve-WhS8CD1Y.js";import"./types-CY6jhn9K.js";import"./step-DI4lIq9s.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ClsYQppB.js";import"./Label-mqH-rpXP.js";import"./Text-YWAIgGvz.js";import"./DOMUtils-CKoiYbaH.js";import"./ZIndexLayer-vT85rwTx.js";import"./useAnimationId-CFK7zTSZ.js";import"./ActivePoints-Bg1sxNgn.js";import"./Dot-DL7hVzu-.js";import"./RegisterGraphicalItemId-B42PFFZO.js";import"./ErrorBarContext-DT0m-eV5.js";import"./GraphicalItemClipPath-C_3x93JD.js";import"./SetGraphicalItem-DoX9EqUs.js";import"./getRadiusAndStrokeWidthFromDot-BbbBTUy4.js";import"./ActiveShapeUtils-BLIRe5G7.js";import"./CartesianAxis-DwkD9703.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-BHylbXnP.js";import"./uniqBy-BmI5nKZU.js";import"./iteratee-Cj4c1lFv.js";import"./Cross-zS2EhUi7.js";import"./Rectangle-BFXd9BK5.js";import"./Sector-C2TQ2tDr.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Te=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Te as __namedExportsOrder,Ee as default};
