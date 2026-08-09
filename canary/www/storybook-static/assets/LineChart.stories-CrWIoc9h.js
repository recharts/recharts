import{r as s,R as e}from"./iframe-L3U4PXsg.js";import{L as n}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-CgrYKISh.js";import{R as C}from"./zIndexSlice-DEY0PQhJ.js";import{L as m}from"./Line-C9P8vBQm.js";import{X as p}from"./XAxis-Cr6XecvK.js";import{T as c}from"./Tooltip-D-aGw3D6.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dhr4IQZK.js";import"./index-kTWfYntd.js";import"./index-ywjMrX_X.js";import"./index-Bc6oV31c.js";import"./index-DwDM_7Ax.js";import"./throttle-1AGwrNmW.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BUQrPPfP.js";import"./resolveDefaultProps-DZ-vNTge.js";import"./isWellBehavedNumber-BwlzE5Kb.js";import"./d3-scale-BML9T1At.js";import"./renderedTicksSlice-D2JO8twM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-INIUEhvM.js";import"./chartDataContext-EPhxp5b3.js";import"./CategoricalChart-mkEHtD3F.js";import"./Layer-CK7JaaLc.js";import"./Curve-SKtCcge4.js";import"./types-oKR4keO9.js";import"./step-0OJURZ58.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Cx-Jnru-.js";import"./Label-B7Q2YiAq.js";import"./Text-DovToi-v.js";import"./DOMUtils-BtvfpILU.js";import"./ZIndexLayer-Bn3RUVWt.js";import"./useAnimationId-BO1w5K0N.js";import"./ActivePoints-DANj5o8Y.js";import"./Dot-B_tF6fjU.js";import"./RegisterGraphicalItemId-CUZSiPzN.js";import"./ErrorBarContext-BscpV9GC.js";import"./GraphicalItemClipPath-BgQIEIQL.js";import"./SetGraphicalItem-BkVYHSQy.js";import"./getRadiusAndStrokeWidthFromDot-HzlbV5QW.js";import"./ActiveShapeUtils-DLAF0QLB.js";import"./RechartsThemeContext-CsEJ0H_M.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-DJ55n4uj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-AZryebb6.js";import"./uniqBy-BfdCN-YR.js";import"./iteratee-BsSJFXKh.js";import"./Cross-CNpsDkfV.js";import"./Rectangle-C4EXzzh1.js";import"./util-Dxo8gN5i.js";import"./Sector-D9JXQuE4.js";const Ie={argTypes:n,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(m,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(n),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(m,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(m,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(n),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
