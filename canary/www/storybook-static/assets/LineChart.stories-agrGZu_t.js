import{r as s,R as e}from"./iframe-vOLnYXOZ.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-CwBOKDvH.js";import{R as C}from"./zIndexSlice-Mv0cm5Fz.js";import{L as n}from"./Line-Ii7UCjUa.js";import{X as p}from"./XAxis-DZdEV9rv.js";import{T as c}from"./Tooltip-Bb3rvUwP.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-cdIriNtS.js";import"./index-C_GLmlAa.js";import"./index-loUlOQAQ.js";import"./index-Ccx6Fn8x.js";import"./index-Bno8px0F.js";import"./throttle-H6UrPiO3.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-zOvani6W.js";import"./axisSelectors-9pB8uUjg.js";import"./resolveDefaultProps-DMvU9hKF.js";import"./isWellBehavedNumber-TyK-Q9bs.js";import"./d3-scale-CXVWvw2_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-6FCR2qTV.js";import"./chartDataContext-CdBeAXiw.js";import"./CategoricalChart-BHtJtaWL.js";import"./Layer-BzdlA6Ig.js";import"./Curve-DpB1TURa.js";import"./types-DL_lANQl.js";import"./step-DBkijEka.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-M5yh8SZt.js";import"./Label-D2t7QHPj.js";import"./Text-FiyA8tGX.js";import"./DOMUtils-Di4Ni1ZE.js";import"./ZIndexLayer-DaGlu0J6.js";import"./useAnimationId-J9bbR3c6.js";import"./ActivePoints-DMSGIjaa.js";import"./Dot-BOZyGCoc.js";import"./RegisterGraphicalItemId-YQ-tZiZG.js";import"./ErrorBarContext-CYCJv9Vs.js";import"./GraphicalItemClipPath-CSPsls6A.js";import"./SetGraphicalItem-Dz9FndIn.js";import"./getRadiusAndStrokeWidthFromDot-DaL3Xp1Q.js";import"./ActiveShapeUtils-CX_xtPwj.js";import"./CartesianAxis-B04tnKne.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./useElementOffset-BxXr0q4n.js";import"./uniqBy-B-zSRekl.js";import"./iteratee-BhNLOt-G.js";import"./Cross-_eiJhukN.js";import"./Rectangle-DGmUUWeF.js";import"./util-Dxo8gN5i.js";import"./Sector-aoDqeOQX.js";const Te={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
