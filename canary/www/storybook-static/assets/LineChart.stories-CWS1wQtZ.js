import{r as i,R as e}from"./iframe-Ddpx1fWB.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-BsXa7Upw.js";import{R as C}from"./zIndexSlice-Dat8LqkZ.js";import{L as s}from"./Line-Cu73NfCf.js";import{X as p}from"./XAxis-8Q1XE2yS.js";import{T as c}from"./Tooltip-DonwHY4V.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-FUuE5Yxf.js";import"./resolveDefaultProps-BLbyA7M-.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CiMHZLFM.js";import"./throttle-Ergr3tXF.js";import"./index-BHGR1bQY.js";import"./index-C2RGX2bO.js";import"./isWellBehavedNumber-PbzFmx8z.js";import"./d3-scale-NbpcncSt.js";import"./index-zj--lfIw.js";import"./index-wao6mAsQ.js";import"./renderedTicksSlice-DtbmQ7NB.js";import"./index-C_z5dzD1.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DITQYbNx.js";import"./chartDataContext-XIbG-eFQ.js";import"./CategoricalChart-DNv1TYBb.js";import"./Layer-BY9KVYkA.js";import"./Curve-ZF8x5Xsx.js";import"./types-C_VxKCLR.js";import"./step-Dtj6_Cxq.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D2-ekEtz.js";import"./Label-CuNWF2Cl.js";import"./Text-CA0gQCIk.js";import"./DOMUtils-njKIQFOw.js";import"./useId-HK3tGk78.js";import"./useBackwardsCompatibleTheme-DbKpiFxe.js";import"./ZIndexLayer-DWZuS9R-.js";import"./useAnimationId-B2yc1CEt.js";import"./ActivePoints-BO0qnNRs.js";import"./Dot-Wca6oVOE.js";import"./RegisterGraphicalItemId-BPWJzGfs.js";import"./ErrorBarContext-VVT7--30.js";import"./GraphicalItemClipPath-BJA8iJ0Z.js";import"./SetGraphicalItem-wnpZS34C.js";import"./getRadiusAndStrokeWidthFromDot-DUoLQNHB.js";import"./ActiveShapeUtils-CuFPShbj.js";import"./useGraphicalItemIdentity-CUnlnBu6.js";import"./CartesianAxis-3VtOE9qK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-COfGaiv8.js";import"./uniqBy-BOzPUYij.js";import"./iteratee-Ck7XhHqD.js";import"./Cross-BK-An9yL.js";import"./Rectangle-CrDdNKDA.js";import"./util-Dxo8gN5i.js";import"./Sector-BfUQiR-6.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
