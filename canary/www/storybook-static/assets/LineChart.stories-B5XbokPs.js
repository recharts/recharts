import{r as i,R as e}from"./iframe-BH_ynjC4.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-o1j3m6mc.js";import{R as C}from"./zIndexSlice-BI1ysfjy.js";import{L as s}from"./Line-BbFfXssg.js";import{X as p}from"./XAxis-DHYBvz-p.js";import{T as c}from"./Tooltip-BsEVo9XM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BODbUaHb.js";import"./resolveDefaultProps-BlxwprZn.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BuZGyw5u.js";import"./throttle-B92nZ18Y.js";import"./index-RF2vHOS8.js";import"./index-DbazBVJ8.js";import"./isWellBehavedNumber-BHoIJZLy.js";import"./d3-scale-3O5mTbCq.js";import"./index-C7z_bQHY.js";import"./index-B2CUqXvo.js";import"./renderedTicksSlice-AZvUrajM.js";import"./index-483Wu6hp.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-x2wpl3h2.js";import"./chartDataContext-D5KYfl9L.js";import"./CategoricalChart-CQ3zK25U.js";import"./Layer-BZJOgrQn.js";import"./Curve-C9UO5Z1_.js";import"./types-BCqSdCtd.js";import"./step-ClVzp-XC.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BzetGmJU.js";import"./Label-FZu_WDSG.js";import"./Text-DIx256cP.js";import"./DOMUtils-Cq_tvs96.js";import"./useId-POUb9F1l.js";import"./useBackwardsCompatibleTheme-BDKfSYgg.js";import"./ZIndexLayer-DJFUyPkd.js";import"./useAnimationId-dKpzhWqB.js";import"./ActivePoints-BK4U7PBG.js";import"./Dot-T-B_JEuw.js";import"./RegisterGraphicalItemId-BaYVXJgS.js";import"./ErrorBarContext-C6wSEKqb.js";import"./GraphicalItemClipPath-CJUrTS9M.js";import"./SetGraphicalItem-CVCJo--0.js";import"./getRadiusAndStrokeWidthFromDot-La0lgpRv.js";import"./ActiveShapeUtils-vPOXs-PX.js";import"./useGraphicalItemIdentity-CmFW8bhj.js";import"./CartesianAxis-L0O2lUH5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-Bxs2wRxM.js";import"./uniqBy-CpZpE7BS.js";import"./iteratee-De5tWLyW.js";import"./Cross-Brke_oJN.js";import"./Rectangle-BcuPIW-h.js";import"./util-Dxo8gN5i.js";import"./Sector-DAI5K_6q.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
