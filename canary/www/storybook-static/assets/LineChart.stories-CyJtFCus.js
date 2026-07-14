import{r as s,R as e}from"./iframe-n-wQuCBi.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-DaM4SbQp.js";import{R as C}from"./zIndexSlice-agpgazdg.js";import{L as n}from"./Line-_0667e52.js";import{X as p}from"./XAxis-CqwZgwEA.js";import{T as c}from"./Tooltip-CArPWmfs.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper--hZNEqf5.js";import"./index-Bp8i3QLZ.js";import"./index-ifJ0vXzc.js";import"./index-B670uwrn.js";import"./index-LEpyJ3u4.js";import"./throttle-DNZjDlXp.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-DRvXNutS.js";import"./axisSelectors-DJGA74tj.js";import"./resolveDefaultProps-DQgAjYOa.js";import"./isWellBehavedNumber-C5T5W5WV.js";import"./d3-scale-Dq3pQP3q.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D1BnCtWc.js";import"./chartDataContext-BUwB3ubO.js";import"./CategoricalChart-Bn54rxv3.js";import"./Layer-q34S3x6j.js";import"./Curve-DeDi9IqD.js";import"./types-DiIuPkat.js";import"./step-Cdwz2fUu.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CukHfitT.js";import"./Label-1gu4eHha.js";import"./Text-Cnp2kl38.js";import"./DOMUtils-B9ZjPicg.js";import"./ZIndexLayer-CKoiASff.js";import"./useAnimationId-CnnOw5XR.js";import"./ActivePoints-3GB3c-YC.js";import"./Dot-B6zDcllv.js";import"./RegisterGraphicalItemId-DirXNoHy.js";import"./ErrorBarContext-Dm_7tkVC.js";import"./GraphicalItemClipPath-NXqqiVYJ.js";import"./SetGraphicalItem-jej3rFoE.js";import"./getRadiusAndStrokeWidthFromDot-BrX-hwFD.js";import"./ActiveShapeUtils-D_ggCq42.js";import"./CartesianAxis-BKtFBsNE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-Dbda4rug.js";import"./uniqBy-CtExDG4G.js";import"./iteratee-7MnTZri1.js";import"./Cross-B2HFXlv9.js";import"./Rectangle-CrC21nkp.js";import"./util-Dxo8gN5i.js";import"./Sector-B5UKPU85.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
