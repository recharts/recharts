import{r as s,R as e}from"./iframe-BdYAncLR.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-CCf2jec9.js";import{R as C}from"./zIndexSlice-5bpfVQyA.js";import{L as n}from"./Line-Bpks10ih.js";import{X as p}from"./XAxis-CbeL6UmM.js";import{T as c}from"./Tooltip-Crtx4tku.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B45z8Y-R.js";import"./index-Du0b8e_w.js";import"./index-B0-wIR84.js";import"./index-CGm2P49p.js";import"./index-B2x5-TIo.js";import"./throttle-BjujQpzW.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-L4Igrea0.js";import"./axisSelectors-zM0j77wa.js";import"./resolveDefaultProps-5h8_lZEQ.js";import"./isWellBehavedNumber-_Cj0WZhc.js";import"./d3-scale-23ottKw2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BhQs_YPC.js";import"./chartDataContext-CgP-nFTi.js";import"./CategoricalChart-Bp8IO2Nw.js";import"./Layer-DIV0oEbW.js";import"./Curve-Bi7tJxo-.js";import"./types-OsxZUaOH.js";import"./step-DGS-jgb3.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dy_aktOc.js";import"./Label-JmhQBV8Y.js";import"./Text-C319EuNs.js";import"./DOMUtils-DBahITf2.js";import"./ZIndexLayer-TIVdTQGS.js";import"./useAnimationId-CVihXN2U.js";import"./ActivePoints-DqzUtciu.js";import"./Dot-axcqS0GT.js";import"./RegisterGraphicalItemId-CwjribNO.js";import"./ErrorBarContext-IO5KIe3b.js";import"./GraphicalItemClipPath-1-xikmiv.js";import"./SetGraphicalItem-QdG8FGgR.js";import"./getRadiusAndStrokeWidthFromDot-B-U7YWSC.js";import"./ActiveShapeUtils-DqTrL5g1.js";import"./RechartsThemeContext-D707JDBS.js";import"./CartesianAxis-BX7MbhnQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./useElementOffset-Bq6EO0f-.js";import"./uniqBy-Fvrf5pq2.js";import"./iteratee-BZcOrPZP.js";import"./Cross-DhPG0BJQ.js";import"./Rectangle-D5kCmVGB.js";import"./util-Dxo8gN5i.js";import"./Sector-DlpC4iuy.js";const Be={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Ie=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Ie as __namedExportsOrder,Be as default};
