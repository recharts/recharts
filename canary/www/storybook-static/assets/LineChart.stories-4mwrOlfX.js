import{r as s,R as e}from"./iframe-Bbgfrsw7.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-4vvckJrH.js";import{R as C}from"./zIndexSlice-CQlXcDAc.js";import{L as n}from"./Line-Brw9uyw8.js";import{X as p}from"./XAxis-B3CRQ6u6.js";import{T as c}from"./Tooltip-CMMEsWRc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CRt4NQQt.js";import"./index-CECpKJ3H.js";import"./index-Dgahjeym.js";import"./index-C0ODKNwO.js";import"./index-v2biSiVS.js";import"./immer-BnwOCZg8.js";import"./get-CGUpvFiU.js";import"./renderedTicksSlice-CbreQ2EV.js";import"./axisSelectors-CDvVNjDS.js";import"./d3-scale-OklfQgrl.js";import"./resolveDefaultProps-o6njxdDq.js";import"./isWellBehavedNumber-BR76DXAJ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-QVFJB6ft.js";import"./chartDataContext-CL0ujozD.js";import"./CategoricalChart-DhdplheV.js";import"./Layer-8m_pE-_A.js";import"./Curve-bpXujO2y.js";import"./types-8gz_-wr5.js";import"./step-DyahUGnz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CtW6zihY.js";import"./Label-BiRqfMN5.js";import"./Text-Bz6YKmeV.js";import"./DOMUtils-Z9sFA7ma.js";import"./ZIndexLayer-6gPnMOeu.js";import"./useAnimationId-DUfU26_x.js";import"./ActivePoints-CH9TfgfX.js";import"./Dot-DOMfzIFj.js";import"./RegisterGraphicalItemId-BgE_IAVb.js";import"./ErrorBarContext-hic6ppru.js";import"./GraphicalItemClipPath-zba15Mlm.js";import"./SetGraphicalItem-Bny1zUhU.js";import"./getRadiusAndStrokeWidthFromDot-AY2jwcKk.js";import"./ActiveShapeUtils-CLp6ysVz.js";import"./CartesianAxis-D1v9Dkeg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-Cn0zPWFa.js";import"./uniqBy-mEUJfJNn.js";import"./iteratee-DuZXcmXc.js";import"./Cross-CWBdDfXv.js";import"./Rectangle-Tqtw105A.js";import"./util-Dxo8gN5i.js";import"./Sector-CtPHk43o.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
