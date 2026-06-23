import{r as s,R as e}from"./iframe-bG7_G66g.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-BJFYEaUF.js";import{R as C}from"./zIndexSlice-BYtx9lI3.js";import{L as n}from"./Line-B5aT7L1s.js";import{X as p}from"./XAxis-BJQkDMRF.js";import{T as c}from"./Tooltip-DBFkYhUj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BMMQbU53.js";import"./index-BEtPY2hf.js";import"./index-CrGTyESs.js";import"./index-B_EgrjTd.js";import"./index-7ZZfYU54.js";import"./immer-DhTjJvAV.js";import"./get-CKlYZxfa.js";import"./renderedTicksSlice-0KFrvLOH.js";import"./axisSelectors-SAI4sVeE.js";import"./d3-scale-FKA3mwBv.js";import"./resolveDefaultProps-BJM1u8ue.js";import"./isWellBehavedNumber-CMDCTp3P.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-VkV_7YNc.js";import"./chartDataContext-BcyTHSzL.js";import"./CategoricalChart-BHq-0gkK.js";import"./Layer-ky2aT-iX.js";import"./Curve-D0BbINzH.js";import"./types-DAUYWUcJ.js";import"./step-B_0-Bz-G.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C0ftWhjM.js";import"./Label-B0PcRW41.js";import"./Text-BQWDG8GB.js";import"./DOMUtils-C65D4AnI.js";import"./ZIndexLayer-BRupmzoF.js";import"./useAnimationId-NfEwsoHb.js";import"./ActivePoints-CoLkUcGQ.js";import"./Dot-CaSI3883.js";import"./RegisterGraphicalItemId-Bi5SE-vz.js";import"./ErrorBarContext-BmWpZ9Bv.js";import"./GraphicalItemClipPath-CwKLVu4X.js";import"./SetGraphicalItem-DrtiSYcp.js";import"./getRadiusAndStrokeWidthFromDot-Bb0n7Rxm.js";import"./ActiveShapeUtils-BZT2pA_A.js";import"./CartesianAxis-Dnx9Ro6b.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-Cm17sbSB.js";import"./uniqBy-BKybyHng.js";import"./iteratee-C9qT0ecR.js";import"./Cross-BiRXyJXw.js";import"./Rectangle-xxCREvqc.js";import"./util-Dxo8gN5i.js";import"./Sector-DufLDoCk.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
