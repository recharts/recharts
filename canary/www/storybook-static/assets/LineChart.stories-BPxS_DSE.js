import{r as s,R as e}from"./iframe-DILeTPtB.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-CKXjK-7L.js";import{R as C}from"./zIndexSlice-JhTumx9T.js";import{L as n}from"./Line-Dvb0PByu.js";import{X as p}from"./XAxis-Bwnro3mN.js";import{T as c}from"./Tooltip-DCCDzLC0.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CzFpnRvL.js";import"./index-Bb_kPu6Y.js";import"./index-CID3BdEk.js";import"./index-NDv3w53H.js";import"./index-CUbE2YyD.js";import"./throttle-CSfx3U2Q.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-Ds2fOQ5P.js";import"./axisSelectors-BJN0i2Z4.js";import"./resolveDefaultProps--lUhC_MY.js";import"./isWellBehavedNumber-OeMbA9Vy.js";import"./d3-scale-C6hgYXhG.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CU1CulZs.js";import"./chartDataContext-BAm5Wg7P.js";import"./CategoricalChart-ChRNm6Kp.js";import"./Layer-DqGeYGqQ.js";import"./Curve-BAtIGC1F.js";import"./types-0cBFLGxq.js";import"./step-DZcEBBZm.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BB2N4cgm.js";import"./Label-RUjb4LlC.js";import"./Text-DNGNK59q.js";import"./DOMUtils-_37cMB0k.js";import"./ZIndexLayer-DKm5_jWO.js";import"./useAnimationId-oe-1YumM.js";import"./ActivePoints-BZxYxGPD.js";import"./Dot-j0bVABcw.js";import"./RegisterGraphicalItemId-CxyqVt25.js";import"./ErrorBarContext-Bk5mas5-.js";import"./GraphicalItemClipPath-ElTOcYVI.js";import"./SetGraphicalItem-DVaXC3-E.js";import"./getRadiusAndStrokeWidthFromDot-Cp2-QPpj.js";import"./ActiveShapeUtils-CEry7zbZ.js";import"./CartesianAxis-sqhBuaGO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-CqP9UHOF.js";import"./uniqBy-AzisH7Oj.js";import"./iteratee-CzwrkfQ7.js";import"./Cross-ne17vnNJ.js";import"./Rectangle-B6-5Ey9v.js";import"./util-Dxo8gN5i.js";import"./Sector-C8V5mkCQ.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
