import{r as s,R as e}from"./iframe-C8BOwi09.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-BOoYgCeJ.js";import{R as C}from"./zIndexSlice-BhlUeiz9.js";import{L as n}from"./Line-VLqzwl_7.js";import{X as p}from"./XAxis-Dm5Odjs3.js";import{T as c}from"./Tooltip-Dc0rIQtR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-A-Jl6gDU.js";import"./index-CXTehsJH.js";import"./index-TdmA2U4u.js";import"./index-C1vV4PmY.js";import"./index-B-s74sFu.js";import"./throttle-DKEMBEBf.js";import"./get-Cxci_11r.js";import"./renderedTicksSlice-LkhfGRkv.js";import"./axisSelectors--BiFDCId.js";import"./d3-scale-Aru4SClR.js";import"./resolveDefaultProps-SXD4-6tw.js";import"./isWellBehavedNumber-lzhpgNRQ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CPjCvOHT.js";import"./chartDataContext-C3Wv6QtC.js";import"./CategoricalChart-qjM85PCb.js";import"./Layer--iJ-Hj_L.js";import"./Curve-CCSLWrMV.js";import"./types-BPAGzNH6.js";import"./step-CUCFWzj3.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DJI9G60d.js";import"./Label-D4SfTv0v.js";import"./Text-DAXgjhqJ.js";import"./DOMUtils-Bk8mghFc.js";import"./ZIndexLayer-CKEhnbZx.js";import"./useAnimationId-C1RCoeBd.js";import"./ActivePoints-BCpRhB6w.js";import"./Dot-Czqb6tax.js";import"./RegisterGraphicalItemId-D2rzI2r-.js";import"./ErrorBarContext-DLDAFGHH.js";import"./GraphicalItemClipPath-DQUZZg6C.js";import"./SetGraphicalItem-544HumqF.js";import"./getRadiusAndStrokeWidthFromDot-Bhp0VpHF.js";import"./ActiveShapeUtils-DN8fg87N.js";import"./CartesianAxis-CWGT70cF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-D3uxDO7B.js";import"./uniqBy-DDmV_BGS.js";import"./iteratee-Br5fFLhE.js";import"./Cross-CKnG02mU.js";import"./Rectangle-B5iv9bX_.js";import"./util-Dxo8gN5i.js";import"./Sector-cFQ9Aldc.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
