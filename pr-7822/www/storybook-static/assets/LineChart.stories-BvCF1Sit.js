import{r as i,R as e}from"./iframe-W65oqx8q.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-DIn0h_A3.js";import{R as C}from"./zIndexSlice-9l_Vrwwa.js";import{L as s}from"./Line-BfwQZfLz.js";import{X as p}from"./XAxis-CsMm9ERi.js";import{T as c}from"./Tooltip-Dgk-6D6x.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ClDY-hB5.js";import"./resolveDefaultProps-CwFz2OMw.js";import"./get-C2VjdU0L.js";import"./axisSelectors-cQBo3spf.js";import"./throttle-JXtXSY4E.js";import"./index-6OGByTjb.js";import"./index-Cot536dN.js";import"./isWellBehavedNumber-BObY9Idx.js";import"./d3-scale-BnWVEuzd.js";import"./index-BoHv5hv2.js";import"./index-DKR6QUcv.js";import"./renderedTicksSlice-QXgti3JC.js";import"./index-B3pQb6na.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-ouG1NDpR.js";import"./chartDataContext-f_o9cnw9.js";import"./CategoricalChart-BwdQTjaO.js";import"./Layer-CHct5fsC.js";import"./Curve-DBfMZQpl.js";import"./types-DGC2KXCF.js";import"./step-DIoBi2CN.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-FyFUBU19.js";import"./Label-Be3blqiA.js";import"./Text-C9pLMK0A.js";import"./DOMUtils-CakF13Ql.js";import"./useId-BxDXx6uj.js";import"./useBackwardsCompatibleTheme-uDuKMgEe.js";import"./ZIndexLayer-C3J7XzqC.js";import"./useAnimationId-CZj4ZR7y.js";import"./ActivePoints-GiGlS0gl.js";import"./Dot-aLSP80WO.js";import"./RegisterGraphicalItemId-pvmrnM3x.js";import"./ErrorBarContext-B0GH1zEy.js";import"./GraphicalItemClipPath-CegTcjor.js";import"./SetGraphicalItem-I8O9Dd_O.js";import"./getRadiusAndStrokeWidthFromDot-D_6Md5To.js";import"./ActiveShapeUtils-8OE4Q_dK.js";import"./useGraphicalItemIdentity-CZ9WsBDJ.js";import"./CartesianAxis-CClqdcGJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-CGAEjhf0.js";import"./uniqBy-bQIzI03X.js";import"./iteratee-2Iqaw7xV.js";import"./Cross-BrqZ4Oz9.js";import"./Rectangle-CD8-QDsq.js";import"./util-Dxo8gN5i.js";import"./Sector-BNbNkFNt.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
