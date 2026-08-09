import{r as s,R as e}from"./iframe--KdzZtf9.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-DlkvpuLa.js";import{R as C}from"./zIndexSlice-CHztvQxJ.js";import{L as n}from"./Line-CLz33ZR0.js";import{X as p}from"./XAxis-BtfaW-Ms.js";import{T as c}from"./Tooltip-_1wfcGQ4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DbMAL-gW.js";import"./index-q7cE3wgI.js";import"./index-BlCKzZxU.js";import"./index-S42N58hu.js";import"./index-BmB7_o0P.js";import"./throttle-hG26ZCHv.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DJc-QTCs.js";import"./resolveDefaultProps-DclZvKxN.js";import"./isWellBehavedNumber-vpVCWLp_.js";import"./d3-scale-DQou-uOy.js";import"./renderedTicksSlice-D0sDrWJo.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-tb7UCCzE.js";import"./chartDataContext-sbVF-hg4.js";import"./CategoricalChart-DmFxRtAx.js";import"./Layer-DCgJY1vZ.js";import"./Curve-Blx4pOcl.js";import"./types-DxjttXzA.js";import"./step-CWWzJll9.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Ca9tbEhj.js";import"./Label-Bwq_3Ge6.js";import"./Text-DiczCyux.js";import"./DOMUtils-DCy02iSc.js";import"./ZIndexLayer--b9avAgZ.js";import"./useAnimationId-Dz24l0hc.js";import"./ActivePoints-9Jl-GXNH.js";import"./Dot-BnDtKOPm.js";import"./RegisterGraphicalItemId-DrHIocnK.js";import"./ErrorBarContext-DDlfLFIp.js";import"./graphicalItemIdentity-BErd8u6-.js";import"./SetGraphicalItem-BhKlnoJm.js";import"./getRadiusAndStrokeWidthFromDot-Ccc-h-4F.js";import"./ActiveShapeUtils-BtJUa3Ui.js";import"./RechartsThemeContext-CFhBSuLJ.js";import"./CartesianAxis-8V80jjh3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-DuPTW83n.js";import"./uniqBy-DGNEKTWG.js";import"./iteratee-BAaHiQpy.js";import"./Cross-rTbuR9fV.js";import"./Rectangle-24EhHdQN.js";import"./util-Dxo8gN5i.js";import"./Sector-emOqlKu7.js";const Be={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Ie=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Ie as __namedExportsOrder,Be as default};
