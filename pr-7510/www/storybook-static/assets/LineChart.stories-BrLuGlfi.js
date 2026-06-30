import{r as s,R as e}from"./iframe-DCxLvNga.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-DbDt0ZoY.js";import{R as C}from"./zIndexSlice-DgwgOA8W.js";import{L as n}from"./Line-BL__EnOs.js";import{X as p}from"./XAxis-CvAM-btA.js";import{T as c}from"./Tooltip-BDzvXn_9.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DQRomY3U.js";import"./index-WumRa2O_.js";import"./index-HEbudI5N.js";import"./index-8Ky9zJpe.js";import"./index-eUk0KR26.js";import"./throttle-BEPLbkDl.js";import"./get-Cqaz2t92.js";import"./renderedTicksSlice-PHCHKu5h.js";import"./axisSelectors-LD-bHnG0.js";import"./d3-scale-U7zf4vxG.js";import"./resolveDefaultProps-Clp0Py5Q.js";import"./isWellBehavedNumber-C0c3JW0z.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-WbtSIkDa.js";import"./chartDataContext-1-JtWOIC.js";import"./CategoricalChart-BL0VhkFE.js";import"./Layer-wgUOVjl0.js";import"./Curve-BhRVcMAR.js";import"./types-CVkN-t8Z.js";import"./step-x_BcDJPY.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-kb_X2dzq.js";import"./Label-B5b7aLp5.js";import"./Text-CxvVezqe.js";import"./DOMUtils-CJlLdKU3.js";import"./ZIndexLayer-CM9bDnHX.js";import"./useAnimationId-HOEbSJwy.js";import"./ActivePoints-BUWG0sGV.js";import"./Dot-D-XUpmdF.js";import"./RegisterGraphicalItemId-uoD-MQmf.js";import"./ErrorBarContext-BqmhDiAL.js";import"./GraphicalItemClipPath-CWBeJB2a.js";import"./SetGraphicalItem-Cst8NOmH.js";import"./getRadiusAndStrokeWidthFromDot-6CNdFBKE.js";import"./ActiveShapeUtils-j_zEDQtR.js";import"./CartesianAxis-D6yEppZ-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-AXra7XvW.js";import"./uniqBy-C8S0yzEw.js";import"./iteratee-XGgbb57g.js";import"./Cross-C2VI1nHf.js";import"./Rectangle-TQcaGvcZ.js";import"./util-Dxo8gN5i.js";import"./Sector-C4RdNObv.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
