import{r as s,R as e}from"./iframe-Cmv2uZik.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-DULh8e8Q.js";import{R as C}from"./zIndexSlice-kpWLrDSf.js";import{L as n}from"./Line-DqG_n08P.js";import{X as p}from"./XAxis-BHNxMNK7.js";import{T as c}from"./Tooltip-D3bM9iro.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B1y6zL6A.js";import"./index-F92hSDpv.js";import"./index-Blrf4sdp.js";import"./index-1nWXUQRt.js";import"./index-BODQ_clV.js";import"./immer-BpVJ12_R.js";import"./get-26q7mLtB.js";import"./renderedTicksSlice-De354RnA.js";import"./axisSelectors-DN7Qk49e.js";import"./d3-scale-C0Ts3d9o.js";import"./resolveDefaultProps-CVMWQw0A.js";import"./isWellBehavedNumber-DPLnuG7C.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Culr-Wpg.js";import"./chartDataContext-DDdGqXS2.js";import"./CategoricalChart-BzXggkHJ.js";import"./Layer-BSNuGngv.js";import"./Curve-DX9DZst-.js";import"./types-DtyijqTI.js";import"./step-DGX6e4k6.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-lktoz8YW.js";import"./Label-COZByZz9.js";import"./Text-579iQBnG.js";import"./DOMUtils-BF0MLXBa.js";import"./ZIndexLayer-D1dh8rie.js";import"./useAnimationId-9e7OJi4C.js";import"./ActivePoints-DII5AyZv.js";import"./Dot-Drefe2Tr.js";import"./RegisterGraphicalItemId-snzh5Pbt.js";import"./ErrorBarContext-kFIcQTi0.js";import"./GraphicalItemClipPath-BiRXHsBx.js";import"./SetGraphicalItem-HiTeWvOV.js";import"./getRadiusAndStrokeWidthFromDot-Bl4mU7H4.js";import"./ActiveShapeUtils-Dvr59oga.js";import"./CartesianAxis-BCDXmj_o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-CSu7wa8E.js";import"./uniqBy-Bk8Zomuw.js";import"./iteratee-DwbYjoyw.js";import"./Cross-CtkqI7lB.js";import"./Rectangle-OJfYPkwR.js";import"./util-Dxo8gN5i.js";import"./Sector-DBPKh_N3.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
