import{r as s,R as e}from"./iframe-B87NFlIP.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-Bwna7pJb.js";import{R as C}from"./zIndexSlice-BXFzXSCA.js";import{L as n}from"./Line-CZqPG8TG.js";import{X as p}from"./XAxis-B3Q4Ss-r.js";import{T as c}from"./Tooltip-DBVmMUI-.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BUNisers.js";import"./index-BOjePhwv.js";import"./index-CacHHN54.js";import"./index-CKu5wzsE.js";import"./index-00O5dIdv.js";import"./immer-QFj5HQLb.js";import"./get-D4uUMniQ.js";import"./renderedTicksSlice-Ca7Y29Mx.js";import"./axisSelectors-D4K8gA-k.js";import"./d3-scale-CHNXjue9.js";import"./resolveDefaultProps-BYA5JPhb.js";import"./isWellBehavedNumber-BoHGXF6T.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C-pJxpsO.js";import"./chartDataContext-CHvUY65z.js";import"./CategoricalChart-C9EAem8i.js";import"./Layer-DtWSIRkx.js";import"./Curve-B4_Cj2x_.js";import"./types-D1UBNpSv.js";import"./step-BTnurF1K.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D7tPVB1r.js";import"./Label-jdUwmN2T.js";import"./Text-ClNCBjV1.js";import"./DOMUtils-CIzchNYO.js";import"./ZIndexLayer-D6XfIW9f.js";import"./useAnimationId-a9uwME5U.js";import"./ActivePoints-6m2eaavh.js";import"./Dot-BdACAh9E.js";import"./RegisterGraphicalItemId-B6YKmbmq.js";import"./ErrorBarContext-DZxTDSzq.js";import"./GraphicalItemClipPath-q-krKk84.js";import"./SetGraphicalItem-CKmZqTho.js";import"./getRadiusAndStrokeWidthFromDot-D19VTirB.js";import"./ActiveShapeUtils-Ba_G1J2p.js";import"./CartesianAxis-fmozs-7p.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-BomvHThz.js";import"./uniqBy-CbnJDgaK.js";import"./iteratee-jyvq17WE.js";import"./Cross-Bwh_3Weq.js";import"./Rectangle-BoHjQjL7.js";import"./util-Dxo8gN5i.js";import"./Sector-C7YhVIcz.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
