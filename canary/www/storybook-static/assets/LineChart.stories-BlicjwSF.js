import{r as s,R as e}from"./iframe-BPne-Hl-.js";import{L as n}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-DLc4rpuH.js";import{R as C}from"./zIndexSlice-Vbxajxxh.js";import{L as m}from"./Line-BF3gtbV4.js";import{X as p}from"./XAxis-rRwDqEnY.js";import{T as c}from"./Tooltip-9yXvT-wW.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D7wPyuzK.js";import"./index-B-eC6RsS.js";import"./index-CxrNEW2y.js";import"./index-uv_fcL6C.js";import"./index-CwJJwB5T.js";import"./throttle-Bi_zW3_L.js";import"./get-C2VjdU0L.js";import"./axisSelectors-LTfENhRo.js";import"./resolveDefaultProps-DDnfF8y9.js";import"./isWellBehavedNumber-Ct771fgh.js";import"./d3-scale-DOpYrlme.js";import"./renderedTicksSlice-DT6TytRZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-QFuu_jnw.js";import"./chartDataContext-BudnyF2r.js";import"./CategoricalChart-DWAFRQOx.js";import"./Layer-SpL-rjyd.js";import"./Curve-DxMSvAJ7.js";import"./types-BUNHJ5Kw.js";import"./step-BuUE8tSH.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BPcfKqDa.js";import"./Label-BrzCwn25.js";import"./Text-C95v_Vb1.js";import"./DOMUtils-J3bqy14P.js";import"./useBackwardsCompatibleTheme-CL2xpGGY.js";import"./ZIndexLayer-DfzxMoSO.js";import"./useAnimationId-Bq5h4Na4.js";import"./ActivePoints-vna83Vpl.js";import"./Dot-_aT20vJp.js";import"./RegisterGraphicalItemId-DLHR3ZEz.js";import"./ErrorBarContext-DTKdWH8V.js";import"./GraphicalItemClipPath-pLYwGWiU.js";import"./SetGraphicalItem-DdmyrxA9.js";import"./getRadiusAndStrokeWidthFromDot-DdxPvC-_.js";import"./ActiveShapeUtils-IyyDIcQz.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-ClYaFBOz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-dphqCukD.js";import"./uniqBy-B3LW5wu3.js";import"./iteratee-DPXVHfHy.js";import"./Cross-D0wtR-3X.js";import"./Rectangle-Cn7G2-_l.js";import"./util-Dxo8gN5i.js";import"./Sector-DtWXAxPH.js";const Ie={argTypes:n,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(m,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(n),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(m,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(m,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(n),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
