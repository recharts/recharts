import{r as s,R as e}from"./iframe-C2DTpPl5.js";import{L as n}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-Bhi8PzzL.js";import{R as C}from"./zIndexSlice-BA0v7Oer.js";import{L as m}from"./Line-ByVEcfKk.js";import{X as p}from"./XAxis-BQlNmsKr.js";import{T as c}from"./Tooltip-DYSfubzK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DbTeQzXN.js";import"./index-b8OMPhKV.js";import"./index-PELgc84d.js";import"./index-5V0YvSc1.js";import"./index-Cmgx4ukp.js";import"./throttle-DTXNpE5t.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DI7xvKPh.js";import"./resolveDefaultProps-D8zMOS_0.js";import"./isWellBehavedNumber-C10dxuDW.js";import"./d3-scale-CRpbK976.js";import"./renderedTicksSlice-B1AYXvSw.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DveAlEiH.js";import"./chartDataContext-zaCSk4E3.js";import"./CategoricalChart-9si9MCW4.js";import"./Layer-C1G5_il7.js";import"./Curve-BQfn95_j.js";import"./types-C_I2Qi1-.js";import"./step-BpdWCqp5.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-3hjUFG-5.js";import"./Label-CwiguCux.js";import"./Text-kmupVaPK.js";import"./DOMUtils-8MPdkl0j.js";import"./useId-CX7EaZRb.js";import"./useBackwardsCompatibleTheme-DFA95kD1.js";import"./ZIndexLayer-BzV-OpAF.js";import"./useAnimationId-en1pQLdR.js";import"./ActivePoints-JZ0NgfaJ.js";import"./Dot-0HxiRhRw.js";import"./RegisterGraphicalItemId-7_0Fa0Or.js";import"./ErrorBarContext-DBVQitzE.js";import"./GraphicalItemClipPath-Q21k0d2A.js";import"./SetGraphicalItem-BC-u-qk6.js";import"./getRadiusAndStrokeWidthFromDot-D3vyunVf.js";import"./ActiveShapeUtils-DeKqyUUr.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-vCI6MyTM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-zoX8Bj2Z.js";import"./uniqBy-DPi6r0Q4.js";import"./iteratee-Qg6w15Mi.js";import"./Cross-Cy_CnH1y.js";import"./Rectangle-D3EFseWQ.js";import"./util-Dxo8gN5i.js";import"./Sector-B8OeAdlI.js";const Se={argTypes:n,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(m,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(n),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(m,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(m,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(n),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const we=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,we as __namedExportsOrder,Se as default};
