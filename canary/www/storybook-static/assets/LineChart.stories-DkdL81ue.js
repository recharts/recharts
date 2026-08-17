import{r as s,R as e}from"./iframe-D48Nzg7a.js";import{L as n}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-B0iHQFrv.js";import{R as C}from"./zIndexSlice-Nz3qbcrc.js";import{L as m}from"./Line-wnmXZFNC.js";import{X as p}from"./XAxis-vF58_Zhz.js";import{T as c}from"./Tooltip-DYdz9UJp.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-S_Xc00BH.js";import"./index-BpddMd5l.js";import"./index-Dqx9cZ4q.js";import"./index-1Ac2q3vk.js";import"./index-DZyliIRq.js";import"./throttle-DSE-ZCYP.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CnpCzdAy.js";import"./resolveDefaultProps-X4i4u3XO.js";import"./isWellBehavedNumber-C7xfGJm3.js";import"./d3-scale-BmAkfb5N.js";import"./renderedTicksSlice-DkSC6crE.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DqIlVucu.js";import"./chartDataContext-DiRp1I73.js";import"./CategoricalChart-DWr61JUe.js";import"./Layer-DQQ0bNB2.js";import"./Curve-C6kUZVG1.js";import"./types-DUxuHHgK.js";import"./step-Dw08AzPN.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CvUvPizu.js";import"./Label-Dvc5-O45.js";import"./Text-BmDi8oon.js";import"./DOMUtils-MwbqvkJM.js";import"./useBackwardsCompatibleTheme-D_bQGNKj.js";import"./ZIndexLayer-C5gHLVh2.js";import"./useAnimationId-C-dtJewN.js";import"./ActivePoints-4s2DAq8-.js";import"./Dot-CABes5hO.js";import"./RegisterGraphicalItemId-DFpeIKrt.js";import"./ErrorBarContext-D4VutYOM.js";import"./GraphicalItemClipPath-BHb4Wa01.js";import"./SetGraphicalItem-aeCrMt0o.js";import"./getRadiusAndStrokeWidthFromDot-DW3hhWH9.js";import"./ActiveShapeUtils-C9yMl5UT.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-DNEYl1Os.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-CWdvxxkR.js";import"./uniqBy-DBAMUzKM.js";import"./iteratee-Dm8hLA5j.js";import"./Cross-CBvfo1Yn.js";import"./Rectangle-BLR_lgnH.js";import"./util-Dxo8gN5i.js";import"./Sector-C3TmLlhC.js";const Ie={argTypes:n,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(m,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(n),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(m,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(m,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(n),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Se=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Se as __namedExportsOrder,Ie as default};
