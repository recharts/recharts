import{r as s,R as e}from"./iframe-C76fCBLt.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-DOYgkWFt.js";import{R as C}from"./zIndexSlice-BsJGnMmn.js";import{L as n}from"./Line-DXBI9fRV.js";import{X as p}from"./XAxis-BrBJ2mML.js";import{T as c}from"./Tooltip-BNwOVkwS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dp2Q4tlU.js";import"./index-CKV5D6qs.js";import"./index-CdgAhURM.js";import"./index-DNHm-Slh.js";import"./index-DdHCa9pO.js";import"./throttle-DuTovYxH.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-ChQt8XEs.js";import"./axisSelectors-44DsbA90.js";import"./resolveDefaultProps-B-pRQb2R.js";import"./isWellBehavedNumber-6CN-Ynbl.js";import"./d3-scale-X-nthEaw.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DpIJVUtf.js";import"./chartDataContext-xuvA9xY5.js";import"./CategoricalChart-BizDpfsn.js";import"./Layer-COsfpmfI.js";import"./Curve-BzIujVSC.js";import"./types-BiK_KtGv.js";import"./step-UDFv_jwZ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-QpEnlZxo.js";import"./Label-Dx0etugK.js";import"./Text-BtH4Ru5e.js";import"./DOMUtils-BPYJD_VQ.js";import"./ZIndexLayer-DTL30j5z.js";import"./useAnimationId-CEbYcbZq.js";import"./ActivePoints-rl4j4hoo.js";import"./Dot-C9pDbdqv.js";import"./RegisterGraphicalItemId-D4GJEFJb.js";import"./ErrorBarContext-BvNNYD9p.js";import"./GraphicalItemClipPath-B6FRGk7o.js";import"./SetGraphicalItem-C9ktGnfi.js";import"./getRadiusAndStrokeWidthFromDot-DKT9RGri.js";import"./ActiveShapeUtils-PxqP6tZ6.js";import"./CartesianAxis-Cfu8bLFh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-BKWrj22b.js";import"./uniqBy-BisTCx5L.js";import"./iteratee-BmQyV-lV.js";import"./Cross-g7FHOHqR.js";import"./Rectangle-CCZ51hnY.js";import"./util-Dxo8gN5i.js";import"./Sector-BqIux5bx.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
