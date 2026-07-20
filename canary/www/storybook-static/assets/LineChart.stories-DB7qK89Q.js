import{r as s,R as e}from"./iframe-txLfFnZC.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-BfGf2KFD.js";import{R as C}from"./zIndexSlice-BxlfArAG.js";import{L as n}from"./Line-D0hoDC_i.js";import{X as p}from"./XAxis-CUKDl1yE.js";import{T as c}from"./Tooltip-DkUgIqYd.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BDYeTMp6.js";import"./index-CYC3OVnH.js";import"./index-CTiUFbNZ.js";import"./index-faRlTy-y.js";import"./index-BnBpNwbh.js";import"./throttle-q2TDx7Oc.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-C2wSEtKv.js";import"./axisSelectors-ClpNZRSK.js";import"./resolveDefaultProps-BBYfN4li.js";import"./isWellBehavedNumber-DsLwC3LI.js";import"./d3-scale-C2Ev96_0.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CZzNDwaM.js";import"./chartDataContext-B9BMm3ef.js";import"./CategoricalChart-D2mtca-7.js";import"./Layer-DgCStFRG.js";import"./Curve-C5z8NQ6L.js";import"./types-DBwOBb8v.js";import"./step-Ca4h6n57.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DXTzwQHr.js";import"./Label-Bg0xf_F2.js";import"./Text-CFMnT5X2.js";import"./DOMUtils-BfTHFrOm.js";import"./ZIndexLayer-CgOQ9duv.js";import"./useAnimationId-BBZuCs7J.js";import"./ActivePoints-CFI3c4jj.js";import"./Dot-BIm_l5LV.js";import"./RegisterGraphicalItemId-CKNrcWiv.js";import"./ErrorBarContext-g-_09_Lv.js";import"./GraphicalItemClipPath-CeZp1Nou.js";import"./SetGraphicalItem-ZtkOOX-3.js";import"./getRadiusAndStrokeWidthFromDot-B1a7F3Ip.js";import"./ActiveShapeUtils-CgPV4Ht_.js";import"./CartesianAxis-Bpg83Llu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./useElementOffset--duMbzsX.js";import"./uniqBy-mrq-VNPF.js";import"./iteratee-BctTBoA4.js";import"./Cross-DcMHT31L.js";import"./Rectangle-DXH6HZeC.js";import"./util-Dxo8gN5i.js";import"./Sector-B_dMD-mA.js";const Te={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Be=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Be as __namedExportsOrder,Te as default};
