import{r as s,R as e}from"./iframe-Csitbru2.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-D2XQ9HQT.js";import{R as C}from"./zIndexSlice-BG9qkId4.js";import{L as n}from"./Line-Dlr3zu4o.js";import{X as p}from"./XAxis-GSkuRjug.js";import{T as c}from"./Tooltip-DUtc5Of5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CJrqmvjr.js";import"./index-BUYeukup.js";import"./index-3rUoeV7Y.js";import"./index-DY2vKHdm.js";import"./index-82VYn5V_.js";import"./immer-DZIxrqNF.js";import"./get-DUq6txa7.js";import"./renderedTicksSlice-DArjmdb9.js";import"./axisSelectors-BKzg4uht.js";import"./d3-scale-ruaAtfZ3.js";import"./resolveDefaultProps-zVEOPP5d.js";import"./isWellBehavedNumber-_7tyBBfO.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CQCv9B95.js";import"./chartDataContext-5AtwXdKv.js";import"./CategoricalChart-CH47Oqt0.js";import"./Layer-CzMJ0aPe.js";import"./Curve-B3wzhPX7.js";import"./types-CUGjGCsQ.js";import"./step-Cvs1IljU.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-nKsPTqFW.js";import"./Label-ipIcHgJV.js";import"./Text-CCtHFY4v.js";import"./DOMUtils-QGCjuYeS.js";import"./ZIndexLayer-BXMbhl4p.js";import"./useAnimationId-co5Blost.js";import"./ActivePoints-CJkfV15x.js";import"./Dot-Wnlr8zt6.js";import"./RegisterGraphicalItemId-4_42U9Tt.js";import"./ErrorBarContext-CNfKV2VL.js";import"./GraphicalItemClipPath-DmSSVMHB.js";import"./SetGraphicalItem-H4qAywSp.js";import"./getRadiusAndStrokeWidthFromDot-BVPCo9J9.js";import"./ActiveShapeUtils-BJwvh2Jx.js";import"./CartesianAxis-625Se9fv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-BFAuBBXU.js";import"./uniqBy-BiKJ-0mt.js";import"./iteratee-DCHecb74.js";import"./Cross-CXKlPB_s.js";import"./Rectangle-Bp3a_jVT.js";import"./util-Dxo8gN5i.js";import"./Sector-r30QQkHv.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
