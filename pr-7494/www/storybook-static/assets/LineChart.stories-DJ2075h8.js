import{r as s,R as e}from"./iframe-BeltcMgq.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-BZZD7aXm.js";import{R as C}from"./zIndexSlice-ChbQV9za.js";import{L as n}from"./Line-jXfK2EIu.js";import{X as p}from"./XAxis-DT2umrlt.js";import{T as c}from"./Tooltip-VcPokJLr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-afo15-1c.js";import"./index-DN-_Sx45.js";import"./index-BWKSKuqG.js";import"./index-DdbLs963.js";import"./index-D1BJqAdU.js";import"./immer-BYDh_fcZ.js";import"./get-Blzhyn8O.js";import"./renderedTicksSlice-BWzIqvlP.js";import"./axisSelectors-DoBuhKXQ.js";import"./d3-scale-D9qfoPRi.js";import"./resolveDefaultProps-Bi5xr7q4.js";import"./isWellBehavedNumber-Ho-XzrAB.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DU3tYN-2.js";import"./chartDataContext-BTBnexhV.js";import"./CategoricalChart-CYbFsyR9.js";import"./Layer-CtUZ3qxP.js";import"./Curve-CGP8Kyx3.js";import"./types-BjpCNPaQ.js";import"./step-BCv6lKfH.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dkw2Nvms.js";import"./Label-CRfC-ZbS.js";import"./Text-zWkWuZ8O.js";import"./DOMUtils-BiPI68kE.js";import"./ZIndexLayer-CXY-gIuZ.js";import"./useAnimationId-CnyBiRCJ.js";import"./ActivePoints-Ba7rTZZ7.js";import"./Dot-BQsxsBTP.js";import"./RegisterGraphicalItemId-B1kcHgmx.js";import"./ErrorBarContext-DUSNqADu.js";import"./GraphicalItemClipPath-CSrYVdhv.js";import"./SetGraphicalItem-D8n7ZbTI.js";import"./getRadiusAndStrokeWidthFromDot-BvOJydOS.js";import"./ActiveShapeUtils-BaRNo4pA.js";import"./CartesianAxis-SUuO_eM5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-RMclYIFs.js";import"./uniqBy-DrzaHxV1.js";import"./iteratee-CApTMtkb.js";import"./Cross-Cu-v3FDR.js";import"./Rectangle-tmcejSqz.js";import"./util-Dxo8gN5i.js";import"./Sector-D5WoZfqi.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
