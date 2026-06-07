import{r as s,R as e}from"./iframe-dVDPDAoI.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-oxveeb0i.js";import{R as C}from"./zIndexSlice-Bsc_tgY7.js";import{L as n}from"./Line-B5W3Glun.js";import{X as p}from"./XAxis-Ra2gX97C.js";import{T as c}from"./Tooltip-CVwsfvTx.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BD3vbn3c.js";import"./index-C_VdjUmv.js";import"./index-CnhhL7Zb.js";import"./index-DKbSAh9L.js";import"./index-Dx5dPQRG.js";import"./immer-BdmkJOJr.js";import"./get-VpXFggwN.js";import"./renderedTicksSlice-DnkJLQvR.js";import"./axisSelectors-BILy-Fum.js";import"./d3-scale-Dow8MXGl.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-B9xmOxzf.js";import"./isWellBehavedNumber-CPNu7XeA.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-rEvqbiLD.js";import"./chartDataContext-CZJe0GvZ.js";import"./CategoricalChart-CZjUsR6e.js";import"./Layer-M7jAw79j.js";import"./Curve-Bib8lOHe.js";import"./types-jcNKZDcp.js";import"./step-BD-4s5qs.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BynH3EWp.js";import"./Label-BEOAhV_I.js";import"./Text-Bi26GJyN.js";import"./DOMUtils-lc6v0qq-.js";import"./ZIndexLayer-D86eoQTZ.js";import"./useAnimationId-DHcuBUhz.js";import"./ActivePoints-Dsf5E73K.js";import"./Dot-BoVNLJ4n.js";import"./RegisterGraphicalItemId-BTF8QJ8M.js";import"./ErrorBarContext-DM0DtMrb.js";import"./GraphicalItemClipPath-DL50SU1R.js";import"./SetGraphicalItem-BvRajfM7.js";import"./getRadiusAndStrokeWidthFromDot-Buc-JRMN.js";import"./ActiveShapeUtils-G5tYFgXR.js";import"./CartesianAxis-BOKYqx2U.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-TBdqj4Y3.js";import"./uniqBy-Bo_ObW1a.js";import"./iteratee-DdGg6bBx.js";import"./Cross-DzdClftC.js";import"./Rectangle-Cm-MJcqD.js";import"./Sector-C5lQsPUE.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
