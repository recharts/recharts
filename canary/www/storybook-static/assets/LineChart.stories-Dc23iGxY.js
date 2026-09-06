import{r as s,R as e}from"./iframe-DVVgwXG1.js";import{L as n}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-BUWNMSWS.js";import{R as C}from"./zIndexSlice-Cy6ToStD.js";import{L as m}from"./Line-Dv1peWnP.js";import{X as p}from"./XAxis-Bz_enE-E.js";import{T as c}from"./Tooltip-Dhv5pcLX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DgxxYcZz.js";import"./resolveDefaultProps-CO-uE6eF.js";import"./get-C2VjdU0L.js";import"./axisSelectors-sfX5WmHa.js";import"./throttle-3PkmjBJ2.js";import"./index-DAITARgG.js";import"./index-Bm6wqvaK.js";import"./isWellBehavedNumber-CW2NuOI6.js";import"./d3-scale-DTJLq2d9.js";import"./index-BzHv6xXV.js";import"./index-By4rtoco.js";import"./renderedTicksSlice-CfmunlkM.js";import"./index-BybtA4IG.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CwTnpeKy.js";import"./chartDataContext-Sl_P3rcZ.js";import"./CategoricalChart-LtJN5gjM.js";import"./Layer-DfoKGH6M.js";import"./Curve-BxDoFciw.js";import"./types-6aOyMGka.js";import"./step-Bxv9TeT5.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DCmrT7i2.js";import"./Label-Bq1dbdZA.js";import"./Text-x0LSajbz.js";import"./DOMUtils-Dl_vO6wQ.js";import"./useId-fZgFwXfQ.js";import"./useBackwardsCompatibleTheme-C6Trngm8.js";import"./ZIndexLayer-Dy5YDtfO.js";import"./useAnimationId-BGsmQL0f.js";import"./ActivePoints-DdjhNQkF.js";import"./Dot-CtGJ8Abr.js";import"./RegisterGraphicalItemId-BsgFzShu.js";import"./ErrorBarContext-xcvO8XZX.js";import"./GraphicalItemClipPath-CPFvU9dM.js";import"./SetGraphicalItem-BChXMtyH.js";import"./getRadiusAndStrokeWidthFromDot-Bf7z58lw.js";import"./ActiveShapeUtils-CF_ghEpm.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-CMSfRSGS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-CF8eY8PS.js";import"./uniqBy-Cnk7JbTd.js";import"./iteratee-v6TgR0jc.js";import"./Cross-eyZEeMOV.js";import"./Rectangle-CWI-Pcd6.js";import"./util-Dxo8gN5i.js";import"./Sector-CHSwlFcl.js";const we={argTypes:n,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(m,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(n),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(m,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(m,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(n),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Ke=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Ke as __namedExportsOrder,we as default};
