import{r as s,R as e}from"./iframe-Y7LdsWUd.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-WJ5j_Csb.js";import{R as C}from"./zIndexSlice-g6buOjPK.js";import{L as n}from"./Line-BAxmXSR0.js";import{X as p}from"./XAxis-BEn1qEwo.js";import{T as c}from"./Tooltip-Cng7Ygo_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bz-cSrDT.js";import"./index-468XY5rC.js";import"./index-D9y4Xpfg.js";import"./index-Bl2KzI3D.js";import"./index-BqhFnWN1.js";import"./immer-CTHxJNnh.js";import"./get-Bl7iuY_G.js";import"./renderedTicksSlice-_dHdD9iU.js";import"./axisSelectors-BKqrOX2w.js";import"./d3-scale-D0YrMM7V.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-EYxijulG.js";import"./isWellBehavedNumber-D670Qdyl.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DUAWwhpK.js";import"./chartDataContext-DK8YFcnh.js";import"./CategoricalChart-BHdb9DL7.js";import"./Layer-CYliWRnL.js";import"./Curve-Bl41E8Lc.js";import"./types-D3i7dddg.js";import"./step-Dw52zkwm.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BfJAUGfB.js";import"./Label-B9hAjr1E.js";import"./Text-c0cVIonZ.js";import"./DOMUtils-CMyDK0NY.js";import"./ZIndexLayer-0MAyxgOl.js";import"./useAnimationId-BlokCSh_.js";import"./ActivePoints-a2kVi7nQ.js";import"./Dot-CVhodtQ4.js";import"./RegisterGraphicalItemId-5Onr2PDk.js";import"./ErrorBarContext-D6wkc7ti.js";import"./GraphicalItemClipPath-BBsC6IJX.js";import"./SetGraphicalItem-rvXq_PhO.js";import"./getRadiusAndStrokeWidthFromDot-BgmRcAea.js";import"./ActiveShapeUtils-OWHYk5VD.js";import"./CartesianAxis-1pwFs9AH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-BkAfi0ht.js";import"./uniqBy-PH-f1KA8.js";import"./iteratee-S0C_aG4j.js";import"./Cross-BKF9cuwV.js";import"./Rectangle-DJ2W9D_9.js";import"./Sector-C69Sioi8.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
