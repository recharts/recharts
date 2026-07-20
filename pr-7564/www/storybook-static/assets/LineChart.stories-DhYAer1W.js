import{r as s,R as e}from"./iframe-MCQmK-TG.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-CB6f3FNc.js";import{R as C}from"./zIndexSlice-BMHpWHLe.js";import{L as n}from"./Line-D58bgiXU.js";import{X as p}from"./XAxis-xj8vDJ23.js";import{T as c}from"./Tooltip-DoSHN02A.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CSMirUgA.js";import"./index-DCwDEUXM.js";import"./index-4hl_PvHL.js";import"./index-iUk-FcRS.js";import"./index-CGFRGdbT.js";import"./throttle-exFJ19dN.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-5teDD8C_.js";import"./axisSelectors-t6G1HMN1.js";import"./resolveDefaultProps-DF8ch7IU.js";import"./isWellBehavedNumber-DF6QZ0lN.js";import"./d3-scale-1trsZxCl.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CbiEQRIX.js";import"./chartDataContext-oq73vT2r.js";import"./CategoricalChart-DG8zA7C6.js";import"./Layer-BUisE7Gh.js";import"./Curve-DfisrzMh.js";import"./types-Cz27ONEA.js";import"./step-DU3HZd3T.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Z_ZNAYUP.js";import"./Label-DaldQZFv.js";import"./Text-LGFyNulV.js";import"./DOMUtils-DeN2A_86.js";import"./ZIndexLayer-BnKxJfbB.js";import"./useAnimationId-Ptyt1Cmf.js";import"./ActivePoints-DBM0wjQk.js";import"./Dot-CZGz3E6B.js";import"./RegisterGraphicalItemId-CwAmMMrt.js";import"./ErrorBarContext-7PhmiQse.js";import"./GraphicalItemClipPath-BDardp6y.js";import"./SetGraphicalItem-RVuvzcbz.js";import"./getRadiusAndStrokeWidthFromDot-00OVvYcl.js";import"./ActiveShapeUtils-BJxvN-bC.js";import"./CartesianAxis-B42rFi6U.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-IqQ0qYQD.js";import"./uniqBy-9wyvpuL-.js";import"./iteratee-D6dL79SH.js";import"./Cross-BuwOH600.js";import"./Rectangle-Dp_gpqgG.js";import"./util-Dxo8gN5i.js";import"./Sector-CSOrAi9m.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
