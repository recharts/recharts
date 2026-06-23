import{r as s,R as e}from"./iframe-CMVn_SNm.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-Bp5qTEb4.js";import{R as C}from"./zIndexSlice-5bfS2JCG.js";import{L as n}from"./Line-CGg890gZ.js";import{X as p}from"./XAxis-BK_m78bZ.js";import{T as c}from"./Tooltip-Dbl1c9aE.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DcTKM8HZ.js";import"./index-DgABY5rS.js";import"./index-o3wTHYCY.js";import"./index-BHUmbQo-.js";import"./index-BNNprLMB.js";import"./immer-BrNA81ld.js";import"./get-CIPBGhdg.js";import"./renderedTicksSlice-B8N2zN9Q.js";import"./axisSelectors-Dk5pLmzI.js";import"./d3-scale-p_vnFVNW.js";import"./resolveDefaultProps-CRaaAotp.js";import"./isWellBehavedNumber-C4Dcoy8i.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bhmmmn5c.js";import"./chartDataContext-Dg2f8fbZ.js";import"./CategoricalChart-DUjGX6JP.js";import"./Layer-NKsa_8yv.js";import"./Curve-Bldv1TQU.js";import"./types-DXSGjGm9.js";import"./step-BXHdJ1Cz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-i8neEi91.js";import"./Label-DCWSGF-w.js";import"./Text-DjHHlwuG.js";import"./DOMUtils-DEDVnuPv.js";import"./ZIndexLayer-qzvYtv-n.js";import"./useAnimationId-DARzAta0.js";import"./ActivePoints-BTW7Abvw.js";import"./Dot-BUoSKBIz.js";import"./RegisterGraphicalItemId-B5nu-pPZ.js";import"./ErrorBarContext-B0E3DilN.js";import"./GraphicalItemClipPath-CTln66En.js";import"./SetGraphicalItem-rX6NUfmr.js";import"./getRadiusAndStrokeWidthFromDot-CIJw8Q-v.js";import"./ActiveShapeUtils-DbnUcZo7.js";import"./CartesianAxis-HAFu0ua0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-C51qjBi2.js";import"./uniqBy-DICaK5oX.js";import"./iteratee-C6Ehk9Ya.js";import"./Cross-sXi5GBj7.js";import"./Rectangle-DOnpVfWW.js";import"./util-Dxo8gN5i.js";import"./Sector-BnI29xdT.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
