import{r as s,R as e}from"./iframe-AVXfkv0w.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-CU1gnp-i.js";import{R as C}from"./zIndexSlice-Cpy73fEL.js";import{L as n}from"./Line-Cq09MVYd.js";import{X as p}from"./XAxis-Ccg3sENg.js";import{T as c}from"./Tooltip-Co7Yg1ig.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bri81Hil.js";import"./index-CFZrGIxH.js";import"./index-Dd93-if2.js";import"./index-DVRYbkUW.js";import"./index-CAfC1Ith.js";import"./throttle-CElZ_OGC.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BWAQroks.js";import"./axisSelectors-D5sH7YSt.js";import"./resolveDefaultProps-Dkqh2Ws0.js";import"./isWellBehavedNumber-C_0WrTwr.js";import"./d3-scale-BOPObWse.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DosAg0hI.js";import"./chartDataContext-bVF6MeRR.js";import"./CategoricalChart-B23xHRz2.js";import"./Layer-ht4prXr-.js";import"./Curve-B8QEUj55.js";import"./types-3aWcalA-.js";import"./step-0iQNMmmi.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-XdBOicHp.js";import"./Label-Bn0N3T-p.js";import"./Text-Cc6gSuDY.js";import"./DOMUtils-BVwM3Jdl.js";import"./ZIndexLayer-B0wR3MRM.js";import"./useAnimationId-DI1PqqVk.js";import"./ActivePoints-Bwfb1T53.js";import"./Dot-B1Np5YQX.js";import"./RegisterGraphicalItemId-Ba7mqd93.js";import"./ErrorBarContext-DhRbE3HA.js";import"./GraphicalItemClipPath-CZYMuLkO.js";import"./SetGraphicalItem-BnjtQKWx.js";import"./getRadiusAndStrokeWidthFromDot-DI-Ci7Ho.js";import"./ActiveShapeUtils-CFy0QQ1U.js";import"./CartesianAxis-CUHI9zvN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./useElementOffset-DyzLG0E2.js";import"./uniqBy-CdBEraEs.js";import"./iteratee-uAse0fea.js";import"./Cross-BKXxMdc4.js";import"./Rectangle-C0v_P9FW.js";import"./util-Dxo8gN5i.js";import"./Sector-BRdSyD44.js";const Te={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Be=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Be as __namedExportsOrder,Te as default};
