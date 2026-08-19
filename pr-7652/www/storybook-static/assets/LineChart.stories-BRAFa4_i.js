import{r as s,R as e}from"./iframe-CgwPoQay.js";import{L as n}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-D2mHRn83.js";import{R as C}from"./zIndexSlice-Cwvky78x.js";import{L as m}from"./Line-CMHOXWP-.js";import{X as p}from"./XAxis-DOtySNzv.js";import{T as c}from"./Tooltip-E-dUB5_J.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DoOmmi72.js";import"./index-BgE4sbhX.js";import"./index-CvpagMBh.js";import"./index-CNkBm-lM.js";import"./index-CM8NzWzV.js";import"./throttle-sMY3RlhH.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D5ccOzPk.js";import"./resolveDefaultProps-CD_cqqva.js";import"./isWellBehavedNumber-CfD7xUgW.js";import"./d3-scale-DtIIfQy7.js";import"./renderedTicksSlice-BmzsuTjh.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CcUm8bov.js";import"./chartDataContext-3T-WNdut.js";import"./CategoricalChart-O1QH-Owv.js";import"./Layer-DjRO5iA4.js";import"./Curve-a8euvDpU.js";import"./types-D2pCS11Q.js";import"./step-DTTmkP9p.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-9ERF5uBB.js";import"./Label-CwBi1oPN.js";import"./Text-DLEzBygV.js";import"./DOMUtils-DewFbXuK.js";import"./useBackwardsCompatibleTheme-CY8sdwmg.js";import"./ZIndexLayer-BiLuwpYl.js";import"./useAnimationId-C35lEnnz.js";import"./ActivePoints-CCBXRjBa.js";import"./Dot-DB8vVey7.js";import"./RegisterGraphicalItemId-AM6jbCCW.js";import"./ErrorBarContext-6qbGOpK0.js";import"./GraphicalItemClipPath-M1v6x7Pp.js";import"./SetGraphicalItem-Cz63GpQf.js";import"./getRadiusAndStrokeWidthFromDot-2t6d-1jI.js";import"./ActiveShapeUtils-CYWv9Vsk.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-DLTPH4hp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-BVRfxINV.js";import"./uniqBy-Du-asTiq.js";import"./iteratee-BR7CkU_G.js";import"./Cross-DkBXGZuy.js";import"./Rectangle-DIlOeeWH.js";import"./util-Dxo8gN5i.js";import"./Sector-CWQKTn9v.js";const Ie={argTypes:n,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(m,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(n),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(m,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(m,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(n),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
