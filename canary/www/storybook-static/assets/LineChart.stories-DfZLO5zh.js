import{r as s,R as e}from"./iframe-D4CuLoZz.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-DjdCeWce.js";import{R as C}from"./zIndexSlice-SXe885_i.js";import{L as n}from"./Line-CEbuZzhx.js";import{X as p}from"./XAxis-eawce65C.js";import{T as c}from"./Tooltip-CYSWzhO2.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BytBl7Lq.js";import"./index-D0U5tyHV.js";import"./index-CRkJbrCH.js";import"./index-DKrwxI3E.js";import"./index-Cama49zD.js";import"./immer-CFokkZQV.js";import"./get-DBuLXD7N.js";import"./renderedTicksSlice-DHw40_9x.js";import"./axisSelectors-BkOYejTH.js";import"./d3-scale-Bg-gbMqf.js";import"./resolveDefaultProps-BIWi1Y-8.js";import"./isWellBehavedNumber-BHyLU3rm.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D5hGWEsl.js";import"./chartDataContext-BdBlfWO1.js";import"./CategoricalChart-CDNCF4CW.js";import"./Layer-xCWemoOx.js";import"./Curve-BhJuHD0L.js";import"./types-DyFRA-Bh.js";import"./step-DSq6gAzd.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-EJSTJ3cq.js";import"./Label-CcUkFPjg.js";import"./Text-xYQOnqwx.js";import"./DOMUtils-CZgli98g.js";import"./ZIndexLayer-CwgCBSKX.js";import"./useAnimationId-DrVwX4j9.js";import"./ActivePoints-BXZGkgHe.js";import"./Dot-Du83lW60.js";import"./RegisterGraphicalItemId-BYXBvuEW.js";import"./ErrorBarContext-uD9druzE.js";import"./GraphicalItemClipPath-Dcao9gEo.js";import"./SetGraphicalItem-D5XyE2WD.js";import"./getRadiusAndStrokeWidthFromDot-CsYgyjN7.js";import"./ActiveShapeUtils-B2FaHUJe.js";import"./CartesianAxis-ntk7Om5m.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-DHHmWbKa.js";import"./uniqBy-YpJRvRQv.js";import"./iteratee-WqXFclZi.js";import"./Cross-DDsze3iQ.js";import"./Rectangle-wZa2ZWZX.js";import"./util-Dxo8gN5i.js";import"./Sector-DQrYYCd9.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
